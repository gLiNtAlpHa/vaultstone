import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const from = process.env.EMAIL_FROM || "noreply@cryptoinvest.com";
const appName = process.env.NEXT_PUBLIC_APP_NAME || "CryptoInvest";
const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

async function sendMail(to: string, subject: string, html: string) {
  if (process.env.NODE_ENV === "development") {
    console.log(`[Email] To: ${to} | Subject: ${subject}`);
    console.log(`[Email] Body preview: ${html.slice(0, 200)}...`);
    return;
  }

  await transporter.sendMail({ from, to, subject, html });
}

export async function sendVerificationEmail(email: string, token: string) {
  const verifyUrl = `${appUrl}/api/auth/verify-email?token=${token}`;

  await sendMail(
    email,
    `Verify your email — ${appName}`,
    `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Verify your email address</h2>
      <p>Thanks for signing up for ${appName}. Please verify your email address by clicking the link below.</p>
      <p style="margin: 24px 0;">
        <a href="${verifyUrl}" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          Verify Email
        </a>
      </p>
      <p style="color: #6b7280; font-size: 14px;">This link expires in 24 hours. If you didn't create an account, you can safely ignore this email.</p>
    </div>
    `,
  );
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${appUrl}/reset-password?token=${token}`;

  await sendMail(
    email,
    `Reset your password — ${appName}`,
    `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Reset your password</h2>
      <p>We received a request to reset your password. Click the link below to set a new password.</p>
      <p style="margin: 24px 0;">
        <a href="${resetUrl}" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          Reset Password
        </a>
      </p>
      <p style="color: #6b7280; font-size: 14px;">This link expires in 1 hour. If you didn't request a password reset, you can safely ignore this email.</p>
    </div>
    `,
  );
}

export async function sendWelcomeEmail(email: string) {
  await sendMail(
    email,
    `Welcome to ${appName}!`,
    `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Welcome to ${appName}!</h2>
      <p>Your email has been verified and your account is now active.</p>
      <p>You can now sign in and start exploring investment opportunities.</p>
      <p style="margin: 24px 0;">
        <a href="${appUrl}/login" style="background: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
          Sign In
        </a>
      </p>
    </div>
    `,
  );
}

export async function sendPasswordChangedEmail(email: string) {
  await sendMail(
    email,
    `Password changed — ${appName}`,
    `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Your password was changed</h2>
      <p>This is a confirmation that the password for your ${appName} account was recently changed.</p>
      <p style="color: #6b7280; font-size: 14px;">If you did not make this change, please contact support immediately.</p>
    </div>
    `,
  );
}
