import React, { useState, useEffect, useRef } from "react";
import styles from "../../Styles/Campuspage/SportsSection.module.css";
import starIcon from "../../assets/Icons/campus/mask.svg";
import sportsVolleyball from "../../assets/Images/campus/sports-1.png";
import sportsCricket from "../../assets/Images/campus/sports-2.png";
import sportsGround from "../../assets/Images/campus/sports-3.jpg";

export default function SportsSection() {
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
    <section ref={sectionRef} className={styles.sportsSection} id="sports">
      <div className={styles.container}>
        {/* LEFT: SPORTS COLLAGE OF PICTURE CARDS */}
        <div className={styles.leftCol}>
          <div
            className={`${styles.topImgWrapper} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0.18s' : '0s' }}
          >
            <img src={sportsVolleyball} alt="Volleyball Match" className={styles.sportsImg} />
          </div>

          <div className={styles.bottomImgRow}>
            <div
              className={`${styles.bottomImgWrapper} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
              style={{ transitionDelay: isVisible ? '0.36s' : '0s' }}
            >
              <img src={sportsCricket} alt="Cricket Match" className={styles.sportsImg} />
            </div>
            <div
              className={`${styles.bottomImgWrapper} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
              style={{ transitionDelay: isVisible ? '0.54s' : '0s' }}
            >
              <img src={sportsGround} alt="Athletes Training" className={styles.sportsImg} />
            </div>
          </div>
        </div>

        {/* RIGHT: TEXT & CALLOUT */}
        <div className={styles.rightCol}>
          <div
            className={`${styles.headerGroup} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0s' : '0s' }}
          >
            <div className={styles.pillBadge}>
              <img src={starIcon} alt="Sparkle" className={styles.pillIcon} />
              <span>Sports</span>
            </div>

            <h2 className={styles.title}>A Campus That Plays to Win</h2>

            <p className={styles.subtext}>
              Discover a vibrant sporting culture that inspires students to compete, collaborate, build confidence, and strive for excellence beyond the classroom.
            </p>
          </div>

          <div
            className={`${styles.quoteCard} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0.72s' : '0s' }}
          >
            <p className={styles.quoteText}>
              <span>“At MTGI, sports go beyond competition—</span>they inspire discipline, strengthen character, nurture leadership, and unite us through the spirit of teamwork.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
