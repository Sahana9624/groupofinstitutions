import React from "react";
import styles from "../../../Styles/Aboutpage/FounderAndChairman/HeroSection.module.css";
import heroBg from "../../../assets/Images/about/founder-hero.jpg";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <img src={heroBg} alt="MTGI Campus Background" className={styles.heroBg} />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Leadership Message</h1>
        <p className={styles.heroSubtext}>
          Guided by the values of Mother Terasa, we inspire students to learn, lead, and
          serve through excellence in education and holistic development.
        </p>
      </div>
    </section>
  );
}
