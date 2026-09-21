import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Cancellationpolicy.module.css";
import nextIcon from "../assets/Icons/next.svg";

const sections = [
  {
    title: "1. Cancellation Eligibility",
    intro:
      "Cancellation of fees paid through our platform is subject to the following conditions:",
    items: [
      "Cancellation must be requested within 3 days of the payment date.",
      "Cancellation requests must be submitted through our website or by contacting our customer support team.",
    ],
  },
  {
    title: "2. Cancellation Procedure",
    items: [
      "To request a cancellation, please log in to your account on our website and navigate to the relevant payment or service. Follow the cancellation instructions provided or contact our customer support team for assistance",
      "Cancellations requested within the eligible timeframe will be processed as soon as possible. Any applicable refunds will be issued in accordance with our Refund Policy.",
    ],
  },
  {
    title: "3. No Cancellation Policy Exceptions",
    items: [
      "Some fees paid through our platform may be non-cancellable or subject to specific cancellation terms and conditions as outlined in the service agreement or terms of use.",
      "We reserve the right to refuse cancellation requests that do not meet the eligibility criteria or are in violation of our terms and conditions.",
    ],
  },
];

export default function CancellationPolicy() {
  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.headerOverlay}>
          <h1>Cancellation Policy</h1>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <img src={nextIcon} alt="" className={styles.breadcrumbArrow} aria-hidden="true" />
            <span>Cancellation Policy</span>
          </nav>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>
        {sections.map((section) => (
          <div className={styles.section} key={section.title}>
            <h2>{section.title}</h2>
            {section.intro && (
              <p className={styles["section__intro"]}>{section.intro}</p>
            )}
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}