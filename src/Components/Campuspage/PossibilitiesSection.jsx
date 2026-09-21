import React, { useState, useEffect, useRef } from "react";
import styles from "../../Styles/Campuspage/PossibilitiesSection.module.css";
import cardImg1 from "../../assets/Images/campus/poss-1.png";
import cardImg2 from "../../assets/Images/campus/poss-2.png";
import cardImg3 from "../../assets/Images/campus/poss-3.jpg";

const CARDS_DATA = [
  {
    id: "cultural-fests",
    badge: "Cultural Fests",
    image: cardImg1,
    caption: "Unforgettable Celebrity Performances",
    description: "Experience the magic of live music as celebrated playback singerrs.",
    link: "#culture",
  },
  {
    id: "sports",
    badge: "Sports",
    image: cardImg2,
    caption: "Play with Purpose",
    description:
      "Experience the magic of live music as celebrated playback singerrs.",
    link: "#sports",
  },
  {
    id: "campus-facilities",
    badge: "Campus Facilities",
    image: cardImg3,
    caption: "Everything You Need to Succeed",
    description:
      "Modern facilities with designed spaces that support learning, collaboration, and student well-being.",
    link: "#facilities",
  },
];

export default function PossibilitiesSection() {
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

  const handleExploreClick = (e, link) => {
    e.currentTarget.blur();
    if (document.activeElement) {
      document.activeElement.blur();
    }

    if (link.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className={styles.possibilitiesSection}>
      <div className={styles.container}>
        <div ref={headerRef} className={styles.header}>
          <h2 className={styles.title}>A Campus Full of Possibilities</h2>
          <p className={styles.subtext}>
            Explore an environment that inspires students to connect, create, compete, celebrate, and grow together.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {CARDS_DATA.map((card, index) => {
            // Smooth sequential delay
            const delay = index * 0.2;

            return (
              <div
                key={card.id}
                className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
                style={{ transitionDelay: isVisible ? `${delay}s` : '0s' }}
              >
                <span className={styles.badge}>{card.badge}</span>
                <div className={styles.imgWrapper}>
                  <img src={card.image} alt={card.caption} className={styles.cardImg} />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardCaption}>{card.caption}</h3>
                  <div className={styles.cardExpandable}>
                    <div className={styles.cardExpandableInner}>
                      <p className={styles.cardDescription}>{card.description}</p>
                      <a
                        href={card.link}
                        className={styles.exploreLink}
                        onClick={(e) => handleExploreClick(e, card.link)}
                      >
                        <span className={styles.exploreCircle}>
                          <svg
                            className={styles.arrowIcon}
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </span>
                        <span className={styles.exploreText}>Explore</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
