import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/Home/LifeAtMTSection.module.css";
import CountUpNumber from "../Common/CountUpNumber";

// Campus Life Images uploaded in src/assets/Images/campus
import campus1 from "../../assets/Images/campus/campus-1.png";
import campus2 from "../../assets/Images/campus/campus-2.png";
import campus3 from "../../assets/Images/campus/campus-3.png";
import campus4 from "../../assets/Images/campus/campus-4.png";
import heroBg from "../../assets/Images/campus/campus-1.png";

// Campus Life SVG Icons from src/assets/Icons/campus
import starIconDefault from "../../assets/Icons/campus/holistic.svg";
import starIconHover from "../../assets/Icons/campus/stars-hover.svg";

export default function LifeAtMTSection() {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  const bannerRef = useRef(null);
  const gridRef = useRef(null);

  // Top Banner Observer
  useEffect(() => {
    if (!bannerRef.current) return;

    const rect = bannerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight * 0.9) {
      setBannerVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBannerVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(bannerRef.current);
    return () => observer.disconnect();
  }, []);

  // Photo Cards Grid Observer (Triggers when user reaches the cards grid)
  useEffect(() => {
    if (!gridRef.current) return;

    const rect = gridRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight * 0.9) {
      setCardsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const tallCardData = {
    image: campus2,
    title: "Music That Unites Every Heart."
  };

  const gridCardsData = [
    {
      id: "card-1",
      image: campus3,
      title: "Unforgettable Celebrity Performances",
      desc: "Experience the magic of live music as celebrated playback singers and musicians light up the MTGI stage during our grand cultural celebrations."
    },
    {
      id: "card-2",
      image: campus4,
      title: "Unforgettable Celebrity Performances",
      desc: "Experience the magic of live music as celebrated playback singerrs."
    },
    {
      id: "stat-card-tech",
      isStatCard: true,
      number: "10+",
      title: "Tech Fests",
      desc: "Experience the magic of live music as celebrated playback singerrs.",
      linkText: "Explore All",
      link: "/campus-life"
    },
    {
      id: "card-4",
      image: campus1,
      title: "Unforgettable Celebrity Performances",
      desc: "Experience the magic of live music as celebrated playback singerrs."
    }
  ];

  return (
    <section className={styles.section}>
      {/* TOP HEADER BANNER */}
      <div className={styles.banner}>
        <img src={heroBg} alt="Campus Life Background" className={styles.bannerBg} />
        <div className={styles.bannerOverlay} />

        <div className={styles.bannerContainer}>
          {/* Header Title & Subtitle */}
          <div
            ref={bannerRef}
            className={`${styles.bannerHeader} ${styles.animItem} ${bannerVisible ? styles.animVisible : ''}`}
            style={{ transitionDelay: bannerVisible ? '0s' : '0s' }}
          >
            <h2 className={styles.bannerTitle}>Campus Life @MTGI</h2>
            <p className={styles.bannerSubtext}>
              Explore our diverse institutions, each committed to delivering exceptional education, fostering innovation, and preparing students for meaningful careers.
            </p>
          </div>

          {/* Banner Inner Row */}
          <div className={styles.bannerRow}>
            <div
              className={`${styles.bannerLeft} ${styles.animItem} ${bannerVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: bannerVisible ? '0.15s' : '0s' }}
            >
              <span className={styles.experienceTag}>The MTGI Experience</span>
              <p className={styles.experienceText}>
                Not Just a Campus, But a Celebration of Learning and Culture.
              </p>
            </div>

            <div
              className={`${styles.bannerRight} ${styles.animItem} ${bannerVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: bannerVisible ? '0.30s' : '0s' }}
            >
              <Link to="/campus-life" className={styles.exploreBannerBtn}>
                <div className={styles.btnIconWrapper}>
                  <img src={starIconDefault} alt="" className={styles.btnIconDefault} />
                  <img src={starIconHover} alt="" className={styles.btnIconHover} />
                </div>
                <span>Explore Campus Life</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* PHOTO GRID LAYOUT */}
      <div ref={gridRef} className={styles.gridContainer}>
        {/* LEFT COLUMN - TALL CARD (PICTURE CARD 1) */}
        <div className={styles.leftCol}>
          <div
            className={`${styles.tallCard} ${styles.animItem} ${cardsVisible ? styles.animVisible : ''}`}
            style={{ transitionDelay: cardsVisible ? '0s' : '0s' }}
          >
            <img src={tallCardData.image} alt={tallCardData.title} className={styles.cardImg} />
            <div className={styles.cardOverlayBody}>
              <h3 className={styles.cardCaption}>{tallCardData.title}</h3>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - 2x2 GRID (PICTURE CARDS 2..5) */}
        <div className={styles.rightCol}>
          {gridCardsData.map((card, index) => {
            // One by one sequential delay: 0.25s, 0.50s, 0.75s, 1.00s
            const delay = (index + 1) * 0.25;

            return card.isStatCard ? (
              <Link
                key={card.id}
                to={card.link}
                className={`${styles.statCard} ${styles.animItem} ${cardsVisible ? styles.animVisible : ''}`}
                style={{ transitionDelay: cardsVisible ? `${delay}s` : '0s' }}
              >
                <div className={styles.statContent}>
                  <CountUpNumber
                    as="div"
                    className={styles.statNumber}
                    text={card.number}
                  />
                  <h3 className={styles.statTitle}>{card.title}</h3>
                  <p className={styles.statDesc}>{card.desc}</p>
                </div>
                <div className={styles.statAction}>
                  <span className={styles.statArrowCircle}>
                    <svg
                      className={styles.statArrowIcon}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D88E0F"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" vectorEffect="non-scaling-stroke" />
                      <polyline points="7 7 17 7 17 17" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                  <span className={styles.statActionText}>{card.linkText}</span>
                </div>
              </Link>
            ) : (
              <div
                key={card.id}
                className={`${styles.gridCard} ${styles.animItem} ${cardsVisible ? styles.animVisible : ''}`}
                style={{ transitionDelay: cardsVisible ? `${delay}s` : '0s' }}
              >
                <img src={card.image} alt={card.title} className={styles.cardImg} />
                <div className={styles.cardOverlayBody}>
                  <h3 className={styles.cardCaption}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
