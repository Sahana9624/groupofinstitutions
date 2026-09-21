import React, { useState, useEffect, useRef } from "react";
import styles from "../../../Styles/Aboutpage/OurCoreValues/DefineSection.module.css";
import campusImg from "../../../assets/Images/about/define.jpg";

export default function DefineSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40% 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.defineSection}>
      <div className={styles.defineContainer}>
        <div className={styles.defineCard}>
          <div
            className={`${styles.defineLeft} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0s' : '0s' }}
          >
            <h2 className={styles.defineTitle}>The Values That Define MTGI</h2>
            <h3 className={styles.defineSubtitle}>More Than Education, A Way of Life</h3>
            <p className={styles.defineText}>
              At MTGI, education extends beyond classrooms. Our values shape the way we teach,
              learn, lead, and serve society. They inspire every student to become a compassionate
              professional, responsible citizen, and lifelong learner.
            </p>
          </div>

          <div
            className={`${styles.defineRight} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0.25s' : '0s' }}
          >
            <img src={campusImg} alt="MTGI Campus Architecture" className={styles.defineImg} />
          </div>
        </div>
      </div>
    </section>
  );
}
