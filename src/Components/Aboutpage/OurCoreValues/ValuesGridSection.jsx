import React, { useState, useEffect, useRef } from "react";
import styles from "../../../Styles/Aboutpage/OurCoreValues/ValuesGridSection.module.css";
import compassionIcon from "../../../assets/Icons/about/compassion.svg";
import bookOpenIcon from "../../../assets/Icons/about/book-open.svg";
import integrityIcon from "../../../assets/Icons/about/integrity.svg";
import socialIcon from "../../../assets/Icons/about/social.svg";
import growthIcon from "../../../assets/Icons/about/growth.svg";
import rocketIcon from "../../../assets/Icons/about/rocket.svg";

const VALUES_DATA = [
  {
    id: "compassion",
    icon: compassionIcon,
    title: "Compassion",
    text: "We believe education begins with empathy. Every student is nurtured with care, respect, and encouragement to become a compassionate leader.",
  },
  {
    id: "inclusive-education",
    icon: bookOpenIcon,
    title: "Inclusive Education",
    text: "We believe quality education should be accessible to all, creating a diverse and inclusive campus where every student can thrive.",
  },
  {
    id: "integrity-ethics",
    icon: integrityIcon,
    title: "Integrity & Ethics",
    text: "We instill integrity, responsibility, and professionalism to develop principled graduates equipped for the challenges of tomorrow.",
  },
  {
    id: "social-responsibility",
    icon: socialIcon,
    title: "Social Responsibility",
    text: "Inspired by the enduring legacy of Mother Terasa, we empower students to serve society with compassion, integrity, and a deep sense of social responsibility.",
  },
  {
    id: "excellence-growth",
    icon: growthIcon,
    title: "Excellence & Growth",
    text: "We foster a culture of innovation, research, and continuous learning, empowering students to thrive in an ever-evolving global landscape.",
  },
  {
    id: "innovation-future-readiness",
    icon: rocketIcon,
    title: "Innovation & Future Readiness",
    text: "Encouraging creativity, research, and adaptability to prepare students for emerging Future opportunities and challenges.",
  },
];

export default function ValuesGridSection() {
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
    <section ref={sectionRef} className={styles.gridSection}>
      <div className={styles.gridContainer}>
        <div className={styles.valuesGrid}>
          {VALUES_DATA.map((item, index) => {
            const delay = index * 0.25;

            return (
              <div
                key={item.id}
                className={`${styles.valueCard} ${isVisible ? styles.cardVisible : ''}`}
                style={{ transitionDelay: isVisible ? `${delay}s` : '0s' }}
              >
                <div className={styles.iconWrapper}>
                  <img src={item.icon} alt={`${item.title} Icon`} className={styles.cardIcon} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
