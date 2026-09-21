import React, { useState } from "react";
import styles from "../../Styles/Placementpage/FaqSection.module.css";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the campus placement process work at MTGI?",
      answer:
        "The placement process at MTGI begins with comprehensive pre-placement training, followed by recruitment drives where leading multinational and national companies visit the campus for written tests, group discussions, and technical and HR interviews."
    },
    {
      question: "What is the eligibility criteria for participating in campus placements?",
      answer:
        "Students with consistent academic performance (typically 60% and above or equivalent CGPA without active backlogs) and regular attendance in campus placement training programs are eligible to participate in on-campus drives."
    },
    {
      question: "Which companies recruit from Mother Terasa Group of Institutions?",
      answer:
        "Top recruiters include global leaders and premier industry names such as Amazon, Samsung, Toyota, Volkswagen, Deloitte, Oracle, Accenture, Dell Technologies, Siemens, Honda, Huawei, and Verizon across various engineering, management, and health science disciplines."
    },
    {
      question: "Does MTGI provide aptitude and soft skills training before interviews?",
      answer:
        "Yes, MTGI conducts intensive preparatory training starting from early semesters, including quantitative aptitude, logical reasoning, programming bootcamps, resume workshops, communication etiquette, and mock interview sessions with corporate leaders."
    },
    {
      question: "When do campus placement drives begin for final year students?",
      answer:
        "Campus placement drives typically commence at the start of the final academic year (from the 7th semester for engineering and final years for other courses). Pre-placement talks and internship selections often start even earlier."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        {/* Top Badge */}
        <div className={styles.badgeWrapper}>
          <span className={styles.badgeText}>Frequently Asked Questions</span>
        </div>

        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Got Questions? We've Got Answers</h2>
          <p className={styles.subtext}>
            Everything you need to know about our placement process and training.
          </p>
        </div>

        {/* Accordion List */}
        <div className={styles.accordionList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ""
                  }`}
              >
                <button
                  className={styles.questionButton}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <svg
                    className={`${styles.chevronIcon} ${isOpen ? styles.chevronOpen : ""
                      }`}
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  className={`${styles.answerWrapper} ${isOpen ? styles.answerWrapperOpen : ""
                    }`}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
