import React, { useState, useEffect, useRef } from "react";
import styles from "../../../Styles/Aboutpage/InstitutionOverview/GuidedSection.module.css";

export default function GuidedSection() {
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
    <section className={styles.guidedSection}>
      <div
        ref={sectionRef}
        className={`${styles.guidedContainer} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
        style={{ transitionDelay: isVisible ? '0s' : '0s' }}
      >
        <h2 className={styles.guidedTitle}>
          <span className={styles.blueText}>Guided by </span>
          <span className={styles.goldText}>Vision, </span>
          <span className={styles.blueText}>Driven by </span>
          <span className={styles.goldText}>Excellence</span>
        </h2>

        <p className={styles.guidedPara}>
          The managing trustee Mr. R.C. Uthayakumar B.A., young, dynamic and highly motivated to promote
          quality education for the rural student community, is managing all the educational institutions
          run by the trust successfully.
        </p>
      </div>
    </section>
  );
}
