import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Returnrefundpolicy.module.css";
import nextIcon from "../assets/Icons/next.svg";

const sections = [
  {
    title: "1. Refund Eligibility",
    intro:
      "Fees paid through our platform are generally non-refundable. However, we may consider refunds in the following circumstances:",
    items: [
      {
        bold: "Duplicate payments:",
        text: " If you accidentally make duplicate payments for the same service, you may be eligible for a refund of the duplicate amount.",
      },
      {
        bold: "Processing errors:",
        text: " If there is an error in processing your payment that results in an overcharge or incorrect amount being deducted, you may be eligible for a refund of the excess amount.",
      },
      {
        bold: "Service cancellation:",
        text: " If the service for which you paid fees is cancelled or terminated by us, you will be eligible for a refund of the fees paid for the cancelled service.",
      },
    ],
  },
  {
    title: "2.Fees",
    items: [
      "To request a refund, please contact our customer support team within 10 days of the payment date. You may be required to provide proof of the payment and details of the refund request.",
      "Refunds will be processed within a reasonable timeframe after the request is approved. The refund amount will be credited back to the original payment method used for the transaction.",
    ],
  },
  {
    title: "3. No Refund Policy Exceptions",
    items: [
      "Fees paid for services rendered, including but not limited to administrative fees, processing fees, and convenience fees, are generally non-refundable.",
      "No refunds will be provided for fees paid for services that have already been rendered or completed.",
    ],
  },
];

export default function ReturnRefundPolicy() {
  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.headerOverlay}>
          <h1>Return and Refund Policy</h1>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <img src={nextIcon} alt="" className={styles.breadcrumbArrow} aria-hidden="true" />
            <span>Return and Refund Policy</span>
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