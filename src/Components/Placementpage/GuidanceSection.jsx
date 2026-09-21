import React, { useState, useEffect, useRef } from "react";
import styles from "../../Styles/Placementpage/GuidanceSection.module.css";
import guidanceImg from "../../assets/Images/about/empower-std.jpg";

export default function GuidanceSection() {
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
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.guidanceSection}>
      <div className={styles.container}>
        {/* Left: Students Image */}
        <div
          className={`${styles.imageWrapper} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
          style={{ transitionDelay: isVisible ? '0s' : '0s' }}
        >
          <img
            src={guidanceImg}
            alt="MTGI Students Career Guidance and Readiness"
            className={styles.image}
          />
        </div>

        {/* Right: Career Guidance Content */}
        <div className={styles.contentWrapper}>
          <p
            className={`${styles.tagline} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0.35s' : '0s' }}
          >
            <span className={styles.goldText}>Career Guidance </span>
            <span className={styles.blueText}>That Makes a Difference</span>
          </p>

          <h2
            className={`${styles.heading} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0.7s' : '0s' }}
          >
            Early Career Readiness
          </h2>

          <p
            className={`${styles.paragraph} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
            style={{ transitionDelay: isVisible ? '1.05s' : '0s' }}
          >
            At MTGI, our placement journey begins on the very first day. Through personalized counselling, resume-building workshops, aptitude development, communication enhancement, interview skill-building, and mock interviews, we equip students with the confidence and competence needed to secure campus placements and launch company professional careers.
          </p>
        </div>
      </div>
    </section>
  );
}
