import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/FaqPage.module.css";
import nextIcon from "../assets/Icons/next.svg";

const faqs = [
  {
    id: 1,
    question: "1. Does MTGI provide placement assistance to all students?",
    answer:
      "Yes. MTGI offers comprehensive placement assistance, including career counselling, skill development, placement training, and campus recruitment opportunities for eligible students.",
  },
  {
    id: 2,
    question: "2. When does placement training begin?",
    answer:
      "Placement training typically begins during the pre-final year, allowing students ample time to develop technical, aptitude, communication, and interview skills before campus recruitment.",
  },
  {
    id: 3,
    question: "3. What training is included in the placement program?",
    answer:
      "Our placement training includes aptitude development, soft skills enhancement, technical skill development, resume building, mock interviews, group discussions, and career guidance.",
  },
  {
    id: 4,
    question: "4. Which companies visit MTGI for campus recruitment?",
    answer:
      "MTGI collaborates with reputed national and multinational companies across various industries. The list of recruiters may vary based on the academic program and recruitment cycle.",
  },
  {
    id: 5,
    question: "5. Are internship opportunities available for students?",
    answer:
      "Yes. Students are encouraged to participate in internships, industrial visits, workshops, and industry interaction programs to gain practical experience before graduation.",
  },
  {
    id: 6,
    question: "6. How are students selected for campus placements?",
    answer:
      "Students participate in the recruitment process based on the eligibility criteria specified by the recruiting company, which may include academic performance, skills, and interview performance.",
  },
  {
    id: 7,
    question: "7. Does MTGI provide mock interviews and resume guidance?",
    answer:
      "Yes. Our placement cell conducts resume-building workshops, mock interviews, group discussions, and personality development sessions to help students prepare confidently for recruitment.",
  },
];

export default function FaqPage() {
  return (
    <main className={styles.page}>
      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.headerOverlay}>
          <h1>Frequently Asked Questions</h1>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <img src={nextIcon} alt="" className={styles.breadcrumbArrow} aria-hidden="true" />
            <span>FAQ'S</span>
          </nav>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>
        {faqs.map((faq) => (
          <div className={styles.faqItem} key={faq.id}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
