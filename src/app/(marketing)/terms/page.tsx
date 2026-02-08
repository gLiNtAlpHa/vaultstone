import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "VaultStone terms of service and user agreement.",
};

export default function TermsPage() {
  return (
    <article className="prose prose-gray mx-auto max-w-3xl px-6 py-16">
      <h1>Terms of Service</h1>
      <p className="lead">Last updated: February 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the VaultStone platform (&quot;Service&quot;), you agree to be bound by
        these Terms of Service. If you do not agree to these terms, do not use the Service.
      </p>

      <h2>2. Eligibility</h2>
      <p>You must be at least 18 years old and legally permitted to engage in cryptocurrency transactions in your jurisdiction. By using the Service, you represent that you meet these requirements and have completed our Know Your Customer (KYC) verification process.</p>

      <h2>3. Account Registration</h2>
      <p>To access investment features, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
      <ul>
        <li>You must provide a valid email address</li>
        <li>Passwords must meet our minimum security requirements</li>
        <li>You must complete KYC verification before investing</li>
        <li>You may not create multiple accounts</li>
      </ul>

      <h2>4. Investment Risks</h2>
      <p>
        Real estate and cryptocurrency investments involve significant risk. Past performance does not
        guarantee future results. You should only invest funds you can afford to lose. VaultStone does
        not provide financial, tax, or legal advice.
      </p>

      <h2>5. Platform Fees</h2>
      <p>VaultStone charges fees for its services as disclosed on the platform. Fees may include transaction fees, management fees, and withdrawal fees. All applicable fees will be clearly displayed before you confirm any transaction.</p>

      <h2>6. Intellectual Property</h2>
      <p>All content, branding, and technology on the Service are owned by VaultStone Holdings Ltd. or its licensors. You may not copy, modify, distribute, or reverse-engineer any part of the Service without written permission.</p>

      <h2>7. Prohibited Activities</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for money laundering or terrorist financing</li>
        <li>Attempt to manipulate or disrupt the platform</li>
        <li>Provide false or misleading information</li>
        <li>Violate any applicable laws or regulations</li>
        <li>Interfere with other users&apos; access to the Service</li>
      </ul>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, VaultStone shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from your use of the Service,
        including but not limited to loss of investment value due to market conditions.
      </p>

      <h2>9. Termination</h2>
      <p>We may suspend or terminate your account if you violate these terms or engage in fraudulent activity. Upon termination, your right to use the Service ceases immediately, but provisions regarding liability and disputes survive.</p>

      <h2>10. Governing Law</h2>
      <p>These terms are governed by the laws of the Dubai International Financial Centre (DIFC). Any disputes shall be resolved through arbitration in Dubai under DIFC-LCIA rules.</p>

      <h2>11. Changes to Terms</h2>
      <p>We may update these terms periodically. Continued use of the Service after changes constitutes acceptance. Material changes will be communicated via email or platform notification.</p>

      <h2>12. Contact</h2>
      <p>For questions about these terms, contact us at <strong>legal@vaultstone.com</strong>.</p>
    </article>
  );
}
