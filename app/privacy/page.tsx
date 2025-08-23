import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy - SaltGIS | Data Protection & Privacy",
  description: "SaltGIS privacy policy covering data protection, GDPR compliance, and how we handle your personal information in our GIS software and services.",
};

const brand = {
  deepBlue: "#1B3B6F",
  earthGreen: "#4CAF50",
  brightOrange: "#FF9800",
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="pt-24 md:pt-28 lg:pt-32">
        <Breadcrumb pageName="Privacy Policy" />
      </div>
      <section className="relative z-10 overflow-hidden pt-20 lg:pt-28">
        <div className="container mx-auto max-w-4xl">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Privacy Policy</h1>
            <p className="mt-2 text-sm text-muted-foreground">Effective: <span className="font-medium">January 1, 2025</span></p>
            <p className="mt-1 text-xs text-muted-foreground">This policy is designed for global use and aligns with GDPR/UK GDPR and CPRA/CCPA. It's a robust template, not legal advice.</p>
          </header>

          <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
            <h2 className="mb-2 text-xl font-semibold">1) Who we are</h2>
            <p><strong>Controller:</strong> SaltSpatial OÜ (trading as <strong>SaltGIS</strong>) (collectively "SaltGIS", "we", "us").</p>
            <p className="mt-1">Registered address: <em>Estonia</em> • Contact: <a className="underline" href="mailto:privacy@saltgis.eu">privacy@saltgis.eu</a></p>
            <p className="mt-1">If we process personal data on behalf of a customer (e.g., operating their GIS environment), we act as a <strong>processor</strong>. In all other cases (e.g., our website, sales), we are a <strong>controller</strong>.</p>
          </div>

          <div className="mt-8 rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
            <h2 className="mb-2 text-xl font-semibold">2) Scope</h2>
            <p>This policy applies to our websites, apps, APIs, and professional services. A separate <strong>Data Processing Addendum (DPA)</strong> governs processor activities for customers. On conflict, the DPA prevails for those activities.</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
              <h2 className="mb-2 text-xl font-semibold">3) Categories of data</h2>
              <ul className="list-disc pl-5">
                <li><strong>Identity/Contact:</strong> name, email, phone, company, role.</li>
                <li><strong>Account & Usage:</strong> auth data, logs, IP, device, pages, app events.</li>
                <li><strong>Transaction:</strong> proposals, contracts, billing metadata.</li>
                <li><strong>Geospatial/customer data:</strong> spatial datasets you provide or connect (as processor).</li>
                <li><strong>Support:</strong> tickets, recordings (with notice), feedback.</li>
              </ul>
              <p className="mt-2">We do <strong>not</strong> knowingly collect special categories of personal data (e.g., health, biometrics) via our website.</p>
            </div>
            <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
              <h2 className="mb-2 text-xl font-semibold">4) Sources</h2>
              <ul className="list-disc pl-5">
                <li>Directly from you (forms, email, meetings).</li>
                <li>Automatically via cookies/SDKs (see Cookie Policy).</li>
                <li>From your systems/services when you connect integrations (processor).</li>
                <li>Public/partners (e.g., company registers) for due diligence.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
            <h2 className="mb-2 text-xl font-semibold">5) Purposes & legal bases (GDPR/UK GDPR)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left">Purpose</th>
                    <th className="py-2 text-left">Examples</th>
                    <th className="py-2 text-left">Legal basis</th>
                    <th className="py-2 text-left">Retention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b align-top">
                    <td className="py-2">Provide services</td>
                    <td className="py-2">Operate apps/APIs, configure GIS, support</td>
                    <td className="py-2">Contract necessity; Legitimate interests</td>
                    <td className="py-2">Contract + 6 years (claims/records)</td>
                  </tr>
                  <tr className="border-b align-top">
                    <td className="py-2">Sales & communications</td>
                    <td className="py-2">Respond to requests, proposals</td>
                    <td className="py-2">Legitimate interests; Consent where required</td>
                    <td className="py-2">Up to 24 months from last interaction</td>
                  </tr>
                  <tr className="border-b align-top">
                    <td className="py-2">Security & fraud</td>
                    <td className="py-2">Logs, access control, monitoring</td>
                    <td className="py-2">Legitimate interests; Legal obligation</td>
                    <td className="py-2">12–24 months (system logs)</td>
                  </tr>
                  <tr className="border-b align-top">
                    <td className="py-2">Compliance</td>
                    <td className="py-2">Tax, accounting, KYC/AML where applicable</td>
                    <td className="py-2">Legal obligation</td>
                    <td className="py-2">As required by law (often 7 years)</td>
                  </tr>
                  <tr className="align-top">
                    <td className="py-2">R&D and product improvement</td>
                    <td className="py-2">Metrics, QA, de‑identified analytics</td>
                    <td className="py-2">Legitimate interests</td>
                    <td className="py-2">Aggregated/anonymized where possible</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2">For processor activities, we act on your documented instructions under a DPA.</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
              <h2 className="mb-2 text-xl font-semibold">6) Cookies & tracking</h2>
              <p>We use strictly necessary cookies and—with your consent—analytics/performance cookies. Manage preferences via our cookie banner or your browser settings.</p>
              <p className="mt-1">See our <a className="underline" href="/cookie-policy">Cookie Policy</a> for details.</p>
            </div>
            <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
              <h2 className="mb-2 text-xl font-semibold">7) Children</h2>
              <p>Our services are not directed to children under 16. We do not knowingly collect such data. If you believe a child provided data, contact us to delete it.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
              <h2 className="mb-2 text-xl font-semibold">8) Sharing & disclosure</h2>
              <ul className="list-disc pl-5">
                <li><strong>Processors/Sub‑processors:</strong> hosting, storage, analytics, communications, payments. We ensure confidentiality, security, and DP terms. We maintain a current list upon request.</li>
                <li><strong>Business transfers:</strong> as part of mergers, acquisitions, or reorgs with appropriate safeguards.</li>
                <li><strong>Legal:</strong> to comply with law, enforce agreements, or protect rights, security, and safety.</li>
              </ul>
              <p className="mt-2">We do <strong>not</strong> sell personal data.</p>
            </div>
            <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
              <h2 className="mb-2 text-xl font-semibold">9) International transfers</h2>
              <p>Data may be processed outside your jurisdiction. Where required, we use recognized transfer mechanisms (e.g., EU Standard Contractual Clauses) and additional safeguards.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
              <h2 className="mb-2 text-xl font-semibold">10) Security</h2>
              <ul className="list-disc pl-5">
                <li>Encryption in transit; encryption at rest where supported.</li>
                <li>Least‑privilege access, MFA, and role‑based controls.</li>
                <li>Backups, monitoring, and vulnerability management.</li>
                <li>Vendor/security reviews for sub‑processors.</li>
              </ul>
              <p className="mt-2">If we become aware of a personal‑data breach affecting you, we will notify you without undue delay consistent with applicable law.</p>
            </div>
            <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
              <h2 className="mb-2 text-xl font-semibold">11) Retention</h2>
              <p>We retain data only as long as necessary for the purposes described or as required by law. On request at project end, we will return or delete processor‑data within a commercially reasonable timeframe unless retention is legally required.</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
            <h2 className="mb-2 text-xl font-semibold">12) Your rights</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold">GDPR/UK GDPR</h3>
                <ul className="list-disc pl-5">
                  <li>Access, rectification, erasure</li>
                  <li>Restriction and objection</li>
                  <li>Portability</li>
                  <li>Withdraw consent (where applicable)</li>
                  <li>Complain to a supervisory authority</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">CPRA/CCPA (California)</h3>
                <ul className="list-disc pl-5">
                  <li>Right to know/access and deletion</li>
                  <li>Right to correct</li>
                  <li>Right to opt‑out of sale/share (we do not sell)</li>
                  <li>Right to limit use of sensitive PI (not used)</li>
                  <li>Non‑discrimination</li>
                </ul>
              </div>
            </div>
            <p className="mt-2">To exercise rights, email <a className="underline" href="mailto:privacy@saltgis.eu">privacy@saltgis.eu</a>. We may verify identity before fulfilling requests.</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
              <h2 className="mb-2 text-xl font-semibold">13) Automated decision‑making</h2>
              <p>We do not make solely automated decisions with legal or similarly significant effects. For analytics or recommendations, we use aggregated or de‑identified data where feasible.</p>
            </div>
            <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
              <h2 className="mb-2 text-xl font-semibold">14) Do Not Track</h2>
              <p>We do not respond to browser "Do Not Track" signals. Use our cookie banner and browser settings to control tracking technologies.</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
            <h2 className="mb-2 text-xl font-semibold">15) Complaints & EU representative</h2>
            <p>You can lodge a complaint with your local data protection authority. If you are in the EEA, you may contact the Estonian supervisory authority. We will cooperate with authorities in resolving complaints.</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
              <h2 className="mb-2 text-xl font-semibold">16) DPA & sub‑processors</h2>
              <p>For customer projects where we act as processor, we will sign a DPA upon request. We maintain and will provide an up‑to‑date list of sub‑processors and notify you before material changes where required.</p>
            </div>
            <div className="rounded-2xl border p-6 text-sm leading-6 shadow-sm dark:border-stroke-dark dark:bg-dark/60">
              <h2 className="mb-2 text-xl font-semibold">17) Changes</h2>
              <p>We may update this policy. We will post changes here and update the "Effective" date. Material changes will be communicated via the website or email when appropriate.</p>
            </div>
          </div>

          <footer className="mt-10 rounded-2xl border p-6 text-sm shadow-sm dark:border-stroke-dark dark:bg-dark/60">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <div className="font-semibold">Contact</div>
                <div>Email: <a className="underline" href="mailto:privacy@saltgis.eu">privacy@saltgis.eu</a></div>
                <div>Address: <em>Estonia</em></div>
              </div>
              <div>
                <div className="font-semibold">Related documents</div>
                <ul className="list-disc pl-5">
                  <li><a className="underline" href="/cookie-policy">Cookie Policy</a></li>
                  <li><a className="underline" href="/dpa">Data Processing Addendum (DPA)</a></li>
                  <li><a className="underline" href="/security">Security Overview</a></li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
} 