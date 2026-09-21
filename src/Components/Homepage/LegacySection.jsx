import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/Home/LegacySection.module.css";
import bgImage from "../../assets/Images/legacy/legacy-bg.jpg";
import imgStudents from "../../assets/Images/legacy/legacy-std.jpg";

export default function LegacySection() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const rect = headerRef.current.getBoundingClientRect();
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

    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <img src={bgImage} alt="Campus Background" className={styles.bgImage} />
      <div className={styles.bgOverlay} />

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* LEFT COLUMN */}
          <div className={styles.leftCol}>
            <div
              ref={headerRef}
              className={`${styles.legacyBlock} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: isVisible ? '0s' : '0s' }}
            >
              <h2 className={styles.heading}>A Legacy Built on Excellence</h2>
              <p className={styles.subtext}>
                Every number represents our unwavering commitment to academic quality, innovation, and student growth.
              </p>
            </div>

            <div
              className={`${styles.growingBlock} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}
            >
              <h3 className={styles.subHeading}>Growing <span>Together </span>, Achieving More</h3>
              <p className={styles.paragraph}>
                Founded in 2005, Mother Terasa Group of Institutions has been dedicated to providing quality education with compassion, empowering students from all backgrounds to achieve academic excellence and build successful futures.
              </p>
            </div>

            <Link
              to="/about"
              className={`${styles.exploreBtn} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.btnArrow}>
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
              <span>Explore More</span>
            </Link>
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.rightCol}>
            <div
              className={`${styles.imageCard} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}
            >
              <img src={imgStudents} alt="MTGI Students" className={styles.img} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
