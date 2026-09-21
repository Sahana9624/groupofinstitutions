import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/Home/WhyStudySection.module.css";

// Background image from assets/Images/why
import bgImage from "../../assets/Images/why/why-bg.svg";

// Card background images from assets/Images/why
import imgGreen from "../../assets/Images/why/why-card-1.jpg";
import imgValue from "../../assets/Images/why/value.jpg";
import imgHolistic from "../../assets/Images/why/holistic.jpg";
import imgVibrant from "../../assets/Images/why/vibrant.png";

// Icon SVGs from assets/Icons/why
import iconGreen from "../../assets/Icons/why/green.svg";
import iconValue from "../../assets/Icons/why/value.svg";
import iconHolistic from "../../assets/Icons/why/holistic.svg";
import iconVibrant from "../../assets/Icons/why/vibrant.svg";

export default function WhyStudySection() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40% 0px" }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: "green-campus",
      title: "Green Campus Experience",
      desc: "A peaceful, eco-friendly campus designed to inspire learning, collaboration, and personal well-being.",
      image: imgGreen,
      icon: iconGreen,
      theme: "amber",
      hasBadge: true
    },
    {
      id: "value-based",
      title: "Value-Based Learning",
      desc: "Combining academic excellence with ethics, integrity, and lifelong values to shape responsible professionals.",
      image: imgValue,
      icon: iconValue,
      theme: "blue"
    },
    {
      id: "vibrant-life",
      title: "Vibrant Campus Life",
      desc: "Experience a lively campus through cultural festivals, clubs, sports, and student-led activities.",
      image: imgVibrant,
      icon: iconVibrant,
      theme: "blue"
    },
    {
      id: "holistic",
      title: "Holistic Student Development",
      desc: "Develop leadership, communication, creativity, and confidence alongside academic achievements.",
      image: imgHolistic,
      icon: iconHolistic,
      theme: "blue"
    }
  ];

  return (
    <section className={styles.section}>
      <img src={bgImage} alt="Background" className={styles.bgImage} />
      <div className={styles.bgOverlay} />

      <div className={styles.container}>
        {/* HEADER */}
        <div ref={headerRef} className={styles.header}>
          <h2 className={styles.heading}>
            Why Study <span className={styles.highlightText}>@MTGI</span>
          </h2>
          <p className={styles.subtext}>
            Every number represents our unwavering commitment to academic quality, innovation, and student growth.
          </p>
        </div>

        {/* 4 FEATURE CARDS GRID */}
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`${styles.featureCard} ${card.theme === 'amber' ? styles.amberTheme : styles.blueTheme} ${isVisible ? styles.cardVisible : ''}`}
              style={{ transitionDelay: isVisible ? `${index * 0.25}s` : '0s' }}
            >
              <img src={card.image} alt={card.title} className={styles.cardBg} />
              <div className={styles.cardOverlay} />

              {/* BOTTOM CONTENT */}
              <div className={styles.cardContent}>
                <div className={styles.iconPill}>
                  <img src={card.icon} alt="" className={styles.iconImg} />
                </div>
                <div className={styles.titleWrapper}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <span className={styles.titleUnderline} />
                </div>
                <div className={styles.descWrapper}>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BANNER */}
        <div className={styles.bottomBanner}>
          <h3 className={styles.bannerHeading}>
            Growing<span className={styles.greyText}> Together</span> , Achieving More
          </h3>
          <p className={styles.bannerSubtext}>
            <strong>Founded in 2005,</strong> Mother Terasa Group of Institutions has been dedicated to providing quality education with compassion, empowering students from all backgrounds to achieve academic excellence and build successful futures.
          </p>
          <Link to="/about" className={styles.exploreBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={styles.btnArrow}>
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
            <span>Explore More</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
