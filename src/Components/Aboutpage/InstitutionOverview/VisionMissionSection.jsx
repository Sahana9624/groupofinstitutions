import React, { useState, useEffect, useRef } from "react";
import styles from "../../../Styles/Aboutpage/InstitutionOverview/VisionMissionSection.module.css";
import vmBgImg from "../../../assets/Images/cta-bg.jpg";

export default function VisionMissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight * 0.9) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="values" className={styles.visionMissionSection}>
      <img src={vmBgImg} alt="MTGI Vision and Mission Background" className={styles.vmBg} />
      <div className={styles.vmOverlay} />

      <div className={styles.vmContainer}>
        <div
          ref={sectionRef}
          className={`${styles.vmHeader} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
          style={{ transitionDelay: isVisible ? '0s' : '0s' }}
        >
          <h2 className={styles.vmTitle}>
            <span>Vision and Mission of </span>
            <span className={styles.goldText}>MTGI</span>
          </h2>
          <p className={styles.vmSubtitle}>
            Driven by purpose, guided by values, and committed to shaping a better future through quality
            education, innovation, research, and social impact.
          </p>
        </div>

        <div
          className={`${styles.vmCard} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
          style={{ transitionDelay: isVisible ? '0.25s' : '0s' }}
        >
          {/* OUR VISION */}
          <div>
            <h3 className={styles.blockTitle}>Our Vision</h3>
            <p className={styles.blockPara}>
              Our vision is to build a world-class institution that sets new benchmarks in higher
              education, research, and innovation. By fostering academic excellence, ethical leadership,
              scientific inquiry, and social responsibility, MTGI aims to develop future-ready
              professionals who contribute meaningfully to the progress of society and the nation.
            </p>
          </div>

          <div className={styles.vmDivider} />

          {/* OUR MISSION */}
          <div>
            <h3 className={styles.blockTitle}>Our Mission</h3>
            <p className={styles.blockPara}>
              Our vision is to build a world-class institution that sets new benchmarks in higher
              education, research, and innovation. By fostering academic excellence, ethical leadership,
              scientific inquiry, and social responsibility, MTGI aims to develop future-ready
              professionals who contribute meaningfully to the progress of society and the nation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
