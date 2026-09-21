import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Termsandconditions.module.css";
import nextIcon from "../assets/Icons/next.svg";

const sections = [
  {
    title: "Important Note",
    highlight: true,
    items: [
      "Welcome to Mother Terasa Agriculture College! These terms and conditions outline the rules and regulations for the use of our website and the services offered.",
      "By accessing this website and using our services, we assume you accept these terms and conditions. Do not continue to use https://www.mtcas.in if you do not agree to all the terms and conditions stated on this page.",
    ],
  },
  {
    title: "1.Services",
    items: [
      "Our website provides a platform for users to conveniently pay fees online.",
      "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.",
    ],
  },
  {
    title: "2.Fees",
    items: [
      "Fees for services rendered are clearly outlined on our website.",
      "Payment processing fees may apply and will be disclosed prior to payment.",
      "All fees are non-refundable unless otherwise stated",
    ],
  },
  {
    title: "3. User Accounts",
    items: [
      "To access certain features of our services, you may be required to create an account.",
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You agree to provide accurate, current, and complete information during the registration process.",
    ],
  },
  {
    title: "4.Payments",
    items: [
      "By using our payment services, you agree to provide accurate and complete payment information.",
      "Payments made through our platform are processed securely.",
      "We are not responsible for any errors or delays in processing payments that result from incorrect payment information provided by the user.",
    ],
  },
  {
    title: "5. Intellectual Property",
    items: [
      "The content on this website, including but not limited to text, graphics, logos, images, and software, is the property of [Your Company Name] and is protected by copyright laws.",
      "You may not reproduce, distribute, modify, transmit, or use the content of this website for any commercial purpose without prior written consent from us.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    items: [
      "We are not liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.",
      "We do not guarantee the accuracy, completeness, or reliability of any content posted on our website",
    ],
  },
  {
    title: "7. Governing Law",
    items: [
      "These terms and conditions shall be governed by and construed in accordance with the laws of Indian Justice , without regard to its conflict of law provisions.",
    ],
  },
  {
    title: "8. Changes to Terms",
    items: [
      "We reserve the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the website after any such changes constitutes your acceptance of the new terms and conditions.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.headerOverlay}>
          <h1>Terms &amp; Conditions</h1>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <img src={nextIcon} alt="" className={styles.breadcrumbArrow} aria-hidden="true" />
            <span>Terms and Conditions</span>
          </nav>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>
        {sections.map((section) => (
          <div
            className={`${styles.section} ${
              section.highlight ? styles["section--highlight"] : ""
            }`}
            key={section.title}
          >
            <h2
              className={
                section.highlight ? styles["section__title--highlight"] : ""
              }
            >
              {section.title}
            </h2>
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