import React from "react";
import styles from "../../Styles/Home/TestimonialsSection.module.css";

// Background and student images from assets/Images/alumni
import bgImage from "../../assets/Images/alumni/alumni-bg.jpg";
import alumniStudent from "../../assets/Images/alumni/alumni-std.jpg";

export default function TestimonialsSection() {
  const alumniData = {
    id: 1,
    quoteTitle: "\"A Campus That Inspires Growth\"",
    quoteBody:
      "\"Life at MTGI has been filled with opportunities to learn, participate, and develop leadership skills. The vibrant campus culture and student activities have made my college journey truly memorable.\"",
    name: "Rahul M., B.E. Computer Science",
    year: "2023 Passed out",
    avatar: alumniStudent
  };

  return (
    <section className={styles.section}>
      <img src={bgImage} alt="Alumni Background" className={styles.bgImage} />
      <div className={styles.bgOverlay} />

      <div className={styles.container}>
        {/* WHITE ALUMNI CARD */}
        <div className={styles.alumniCard}>
          {/* CARD TOP HEADER ROW */}
          <div className={styles.cardHeaderRow}>
            <div className={styles.headerLeft}>
              <h2 className={styles.heading}>Hear from our Alumni</h2>
              <p className={styles.subtext}>
                Our alumni reflect on how MTGI empowered them with<br /> knowledge, confidence, and the skills to build successful careers.
              </p>
            </div>

            <div className={styles.headerRight}>
              <div className={styles.taglineText}>
                <span className={styles.goldText}>Success Stories</span>{" "}
                <span className={styles.blueText}>That Inspire</span>
              </div>
            </div>
          </div>

          {/* QUOTE BLOCK */}
          <div className={styles.quoteBlock}>
            <h3 className={styles.quoteTitle}>{alumniData.quoteTitle}</h3>
            <p className={styles.quoteBody}>{alumniData.quoteBody}</p>
          </div>

          {/* AUTHOR ROW */}
          <div className={styles.authorRow}>
            <img
              src={alumniData.avatar}
              alt={alumniData.name}
              className={styles.avatar}
            />
            <div className={styles.authorDetails}>
              <h4 className={styles.authorName}>{alumniData.name}</h4>
              <p className={styles.authorYear}>{alumniData.year}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

