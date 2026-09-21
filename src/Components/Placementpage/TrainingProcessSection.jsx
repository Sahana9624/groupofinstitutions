import React, { useState, useEffect, useRef } from "react";
import styles from "../../Styles/Placementpage/TrainingProcessSection.module.css";
import bannerImg from "../../assets/Images/placement/campus-training.jpg";

// Icons from assets/Icons/placement/
import aptitudeIcon from "../../assets/Icons/placement/aptitude.svg";
import technicalIcon from "../../assets/Icons/placement/technical.svg";
import communicationsIcon from "../../assets/Icons/placement/communications.svg";
import campusIcon from "../../assets/Icons/placement/campus.svg";

export default function TrainingProcessSection() {
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

  const processSteps = [
    {
      title: "Aptitude Development",
      desc: "Develop analytical thinking, logical reasoning, and problem-solving abilities to excel in competitive assessments.",
      icon: aptitudeIcon
    },
    {
      title: "Technical Skill Development",
      desc: "Enhance technical expertise through practical training, domain specialization, and real-world problem-solving experiences.",
      icon: technicalIcon
    },
    {
      title: "Communication & Soft Skills",
      desc: "Build strong interpersonal, communication, and leadership skills that inspire confidence and professional excellence.",
      icon: communicationsIcon
    },
    {
      title: "Company Placement Process",
      desc: "Our placement cell connects eligible students for campus recruitment drives and hiring opportunities.",
      icon: campusIcon
    }
  ];

  return (
    <section ref={sectionRef} className={styles.trainingSection}>
      <div className={styles.outerCard}>
        {/* Header */}
        <div className={styles.header}>
          <h2
            className={`${styles.heading} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0s' : '0s' }}
          >
            Campus <span className={styles.goldText}>Training Process</span>
          </h2>
          <p
            className={`${styles.subtext} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0.35s' : '0s' }}
          >
            We prepare students with simulated based training, personalized mentoring, and assessment-focused guidance to achieve career success.
          </p>
        </div>

        {/* Center Students Banner */}
        <div
          className={`${styles.bannerWrapper} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
          style={{ transitionDelay: isVisible ? '0.7s' : '0s' }}
        >
          <img
            src={bannerImg}
            alt="MTGI Students in Professional Training"
            className={styles.bannerImg}
          />
        </div>

        {/* 2x2 Grid of Process Cards (Fades up one by one after previous completes) */}
        <div className={styles.cardsGrid}>
          {processSteps.map((step, idx) => {
            const delay = (1.2 + idx * 0.5).toFixed(2);

            return (
              <div
                key={idx}
                className={`${styles.processCard} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
                style={{ transitionDelay: isVisible ? `${delay}s` : '0s' }}
              >
                <div className={styles.iconContainer}>
                  <img src={step.icon} alt="" className={styles.cardIcon} />
                </div>
                <div className={styles.titleContainer}>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <span className={styles.titleLine} />
                </div>
                <p className={styles.cardDesc}>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
