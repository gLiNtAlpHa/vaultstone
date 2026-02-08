import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "VaultStone privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <article className="prose prose-gray mx-auto max-w-3xl px-6 py-16">
      <h1>Privacy Policy</h1>
      <p className="lead">Last updated: February 2026</p>

      <h2>1. Introduction</h2>
      <p>
        VaultStone Holdings Ltd. (&quot;VaultStone&quot;, &quot;we&quot;, &quot;us&quot;) is committed
        to protecting your privacy. This policy explains how we collect, use, store, and share your
        personal data when you use our platform.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>Account Information</h3>
      <ul>
        <li>Name, email address, and phone number</li>
        <li>Government-issued ID (for KYC verification)</li>
        <li>Selfie or photo for identity verification</li>
        <li>Cryptocurrency wallet addresses</li>
      </ul>
      <h3>Usage Data</h3>
      <ul>
        <li>IP address, browser type, and device information</li>
        <li>Pages visited, features used, and time spent</li>
        <li>Transaction history and investment activity</li>
      </ul>
      <h3>Cookies</h3>
      <p>We use essential cookies for authentication and session management. Analytics cookies are used only with your consent.</p>

      <h2>3. How We Use Your Data</h2>
      <ul>
        <li>To provide and maintain the Service</li>
        <li>To verify your identity (KYC/AML compliance)</li>
        <li>To process transactions and manage investments</li>
        <li>To communicate important updates and notifications</li>
        <li>To detect and prevent fraud and unauthorized access</li>
        <li>To comply with legal and regulatory obligations</li>
        <li>To improve our platform and user experience</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>We do not sell your personal data. We may share data with:</p>
      <ul>
        <li><strong>KYC/AML providers</strong> — for identity verification</li>
        <li><strong>Payment processors</strong> — to facilitate transactions</li>
        <li><strong>Cloud hosting providers</strong> — to store data securely</li>
        <li><strong>Regulatory authorities</strong> — when required by law</li>
        <li><strong>Professional advisors</strong> — legal, accounting, and audit firms</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>We implement industry-standard security measures including:</p>
      <ul>
        <li>AES-256 encryption for data at rest</li>
        <li>TLS 1.3 encryption for data in transit</li>
        <li>Multi-factor authentication</li>
        <li>Regular penetration testing and security audits</li>
        <li>Access controls and role-based permissions</li>
      </ul>

      <h2>6. Data Retention</h2>
      <p>We retain your personal data for as long as your account is active and for a minimum of 5 years after account closure, as required by financial regulations. KYC documents are retained for 7 years.</p>

      <h2>7. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access and receive a copy of your personal data</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data (subject to regulatory requirements)</li>
        <li>Withdraw consent for optional data processing</li>
        <li>Data portability in a machine-readable format</li>
        <li>Object to processing based on legitimate interests</li>
      </ul>

      <h2>8. International Transfers</h2>
      <p>Your data may be processed in the UAE, Singapore, the United Kingdom, and the European Union. We ensure adequate safeguards through standard contractual clauses and regulatory frameworks.</p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>The Service is not intended for individuals under 18. We do not knowingly collect personal data from minors.</p>

      <h2>10. Changes to This Policy</h2>
      <p>We may update this policy periodically. Material changes will be communicated via email and posted on this page with an updated date.</p>

      <h2>11. Contact Us</h2>
      <p>For privacy-related inquiries, contact our Data Protection Officer at <strong>privacy@vaultstone.com</strong>.</p>
    </article>
  );
}
