import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../Styles/Aboutpage/InstitutionOverview/HeroSection.module.css";
import heroBg from "../../../assets/Images/about/about-hero.jpg";
import yellowArrow from "../../../assets/Icons/campus/arrow-up-right-yellow.svg";
import CountUpNumber from "../../Common/CountUpNumber";

export default function HeroSection() {
  return (
    <section id="overview" className={styles.heroSection}>
      <img src={heroBg} alt="MTGI Campus Background" className={styles.heroBg} />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Mother Terasa Group of Institutions</h1>
          <p className={styles.heroSubtext}>
            Guided by the values of Mother Terasa, we inspire students to learn, lead, and serve
            through excellence in education and holistic development.
          </p>
{/* 
          <Link to="/academics" className={styles.btnPrimary}>
            <img src={yellowArrow} alt="" className={styles.btnIcon} aria-hidden="true" />
            <span>Explore Institutes</span>
          </Link> */}
        </div>

        {/* STATS ROW */}
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <CountUpNumber as="span" text="24" className={styles.statNum} />
            <span className={styles.statLabel}>Years of Excellence</span>
          </div>
          <div className={styles.statCard}>
            <CountUpNumber as="span" text="15+" className={styles.statNum} />
            <span className={styles.statLabel}>Educational Institutions</span>
          </div>
          <div className={styles.statCard}>
            <CountUpNumber as="span" text="500+" className={styles.statNum} />
            <span className={styles.statLabel}>Experienced Faculties</span>
          </div>
        </div>
      </div>
    </section>
  );
}
