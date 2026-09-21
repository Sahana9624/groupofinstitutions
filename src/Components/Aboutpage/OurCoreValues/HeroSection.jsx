import React, { useState, useEffect } from "react";
import styles from "../../../Styles/Aboutpage/OurCoreValues/HeroSection.module.css";
import heroBg from "../../../assets/Images/why/green.jpg";
import compassionIcon from "../../../assets/Icons/about/compassion.svg";
import bookOpenIcon from "../../../assets/Icons/about/book-open.svg";
import integrityIcon from "../../../assets/Icons/about/integrity.svg";
import socialIcon from "../../../assets/Icons/about/social.svg";
import growthIcon from "../../../assets/Icons/about/growth.svg";
import rocketIcon from "../../../assets/Icons/about/rocket.svg";

const coreValues = [
  { title: "Compassion", icon: compassionIcon },
  { title: "Social Responsibility", icon: socialIcon },
  { title: "Excellence & Growth", icon: growthIcon },
  { title: "Integrity & Ethics", icon: integrityIcon },
  { title: "Inclusive Education", icon: bookOpenIcon },
  { title: "Innovation & Discovery", icon: rocketIcon },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => {
        setPrevIndex(current);
        return (current + 1) % coreValues.length;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      <img src={heroBg} alt="MTGI Campus Background" className={styles.heroBg} />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Our Core Values</h1>
        <p className={styles.heroSubtext}>
          Rooted in the legacy of Mother Terasa, our core values inspire compassion, excellence,
          and lifelong learning in every student.
        </p>

        <div className={styles.pillBadge}>
          <div className={styles.pillContentWrapper}>
            {coreValues.map((item, i) => {
              let itemClass = styles.hiddenItem;
              if (i === index) {
                itemClass = styles.activeItem;
              } else if (i === prevIndex) {
                itemClass = styles.exitingItem;
              }

              return (
                <div
                  key={item.title}
                  className={`${styles.pillItem} ${itemClass}`}
                >
                  <img src={item.icon} alt={item.title} className={styles.pillIcon} />
                  <span className={styles.pillText}>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
