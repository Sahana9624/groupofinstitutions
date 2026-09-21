import React from "react";
import styles from "../../Styles/Placementpage/PlacedStudentsSection.module.css";
import bgImage from "../../assets/Images/alumni/alumni-bg.jpg";
import studentAvatar from "../../assets/Images/alumni/alumni-std.jpg";

export default function PlacedStudentsSection() {
  return (
    <section className={styles.placedSection}>
      {/* Background with deep blue gradient */}
      <img src={bgImage} alt="Campus Background" className={styles.bgImage} />
      <div className={styles.bgOverlay} />

      <div className={styles.container}>


        {/* Testimonial Card */}

        <div className={styles.testimonialCard}>
          {/* Section Header */}
          <div className={styles.header}>
            <h2 className={styles.heading}>Hear from Our Placed Students</h2>
            <p className={styles.subtext}>
              Our alumni reflect on how MTGI empowered them with knowledge, confidence, and the skills to build successful careers.
            </p>
          </div>
          <h3 className={styles.quoteTitle}>"A Campus That Inspires Growth"</h3>
          <p className={styles.quoteBody}>
            "Life at MTGI has been a life-transformative journey. Dedicated teachers, practical labs, and the vibrant campus culture have made my college journey truly memorable."
          </p>

          <div className={styles.authorRow}>
            <img
              src={studentAvatar}
              alt="Rahul M."
              className={styles.avatar}
            />
            <div className={styles.authorInfo}>
              <h4 className={styles.authorName}>Rahul M., B.E. Computer Science</h4>
              <p className={styles.authorYear}>2023 Passed out</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
