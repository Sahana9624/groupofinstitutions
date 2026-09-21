import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Privacypolicy.module.css";
import nextIcon from "../assets/Icons/next.svg";

const sections = [
  {
    title: "1.Information We Collect",
    items: [
      "Personal Information: When you use our services, we may collect personal information such as your name, email address, phone number, billing address, and payment information.",
      "Usage Data: We may also collect information about how you interact with our website, including your IP address, browser type, pages visited, and other usage data.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    items: [
      { bold: "To Provide Services:", text: " We use your personal information to process payments, provide customer support, and facilitate communication related to your account." },
      { bold: "To Improve Our Services :", text: " We may use usage data to analyse trends, monitor the performance of our website, and make improvements to enhance user experience." },
    ],
  },
  {
    title: "3. Data Security",
    items: [
      { bold: "We implement industry:", text: " standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction." },
      "However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "4. Disclosure of Information",
    items: [
      "We may disclose your personal information to third-party service providers who assist us in operating our website, conducting business, or serving you, as long as they agree to keep this information confidential.",
      "We may also disclose your information when we believe it is necessary to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety",
    ],
  },
  {
    title: "5. Third-Party Links",
    items: [
      "Our website may contain links to third-party websites. These third-party sites have their own privacy policies, and we are not responsible for the privacy practices or content of such websites.",
    ],
  },
  {
    title: "6. Children's Privacy",
    items: [
      "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18 years of age. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately",
    ],
  },
  {
    title: "7. Changes to Privacy Policy",
    items: [
      "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated policy on this page.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.headerOverlay}>
          <h1>Privacy Policy</h1>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <img src={nextIcon} alt="" className={styles.breadcrumbArrow} aria-hidden="true" />
            <span>Privacy Policy</span>
          </nav>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className={styles.content}>
        {sections.map((section) => (
          <div className={styles.section} key={section.title}>
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item, idx) =>
                typeof item === "string" ? (
                  <li key={idx}>{item}</li>
                ) : (
                  <li key={idx}>
                    <strong>{item.bold}</strong>
                    {item.text}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}