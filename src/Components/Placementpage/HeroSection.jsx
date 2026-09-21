import React from "react";
import styles from "../../Styles/Placementpage/HeroSection.module.css";
import heroImg from "../../assets/Images/placement/place-hero.jpg";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Background Student Image covering the full hero section */}
      <img
        src={heroImg}
        alt="MTGI Students Building Successful Careers"
        className={styles.heroBg}
      />
      <div className={styles.heroOverlay} />

      <div className={styles.heroWrapper}>
        {/* Hero Content */}
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Building Careers. 
            <span> Creating Success Stories.</span>
          </h1>

          <p className={styles.subtext}>
At MTGI, we prepare students with industry-ready skills, career guidance, and placement opportunities that transform aspirations into
successful careers.          </p>
        </div>
      </div>

      {/* Gold Accent Divider Strip */}
      <div className={styles.goldDivider} />
    </section>
  );
}
