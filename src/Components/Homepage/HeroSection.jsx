import React, { useState, useEffect } from "react";
import styles from "../../Styles/Home/HeroSection.module.css";
import heroVideo from "../../assets/images/hero-video.mp4";
import virtualIcon from "../../assets/Icons/virtual.svg";
import { Link } from "react-router-dom";

const words = ["Compassion", "Leadership", "Innovation", "Integrity"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => {
        setPrevIndex(current);
        return (current + 1) % words.length;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroBg}
      />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContainer}>
        <div className={styles.heroContentWrapper}>
          {/* TOP BADGE PILL */}
          <div className={styles.badgePill}>
            <span className={styles.badgeHighlight}>
              24 + <span> Years of </span> Trusted Education
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className={styles.heroHeadline}>
            <span className={styles.headlineBlock}>Empowering Every Dream Through </span>
            <span className={styles.highlightWrapper}>
              {words.map((word, i) => {
                let wordClass = styles.hiddenWord;
                if (i === index) {
                  wordClass = styles.activeWord;
                } else if (i === prevIndex) {
                  wordClass = styles.exitingWord;
                }
                return (
                  <span
                    key={word}
                    className={`${styles.highlightText} ${wordClass}`}
                  >
                    {word}
                  </span>
                );
              })}
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className={styles.heroSubtext}>
            Guided by the values of Mother Terasa, we inspire students to learn, lead, and serve through excellence in education and holistic development.
          </p>

          {/* CTA BUTTONS */}
          <div className={styles.ctaGroup}>
            {/* ADMISSIONS OPEN BUTTON */}
            <Link to="/apply" className={styles.btnExplore}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.btnArrow}
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
              <span>Admissions Open</span>
            </Link>

            {/* VIRTUAL TOUR BUTTON */}
            <a
              href="https://www.motherterasakalvi.com/virtualtour/motherterasa/MTC/index.htm"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnVirtual}
            >
              <img
                src={virtualIcon}
                alt="Virtual Tour"
                className={styles.btnIcon}
              />
              <span>Virtual Tour</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
