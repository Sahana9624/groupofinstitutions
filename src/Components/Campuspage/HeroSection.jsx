import React from "react";
import styles from "../../Styles/Campuspage/HeroSection.module.css";
import heroImg from "../../assets/Images/campus/campus-1.png";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <img src={heroImg} alt="Campus Life at MTGI" className={styles.heroBg} />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Campus Life <span>@MTGI</span></h1>
      </div>
    </section>
  );
}
