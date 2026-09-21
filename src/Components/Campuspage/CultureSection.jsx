import React, { useState, useEffect, useRef } from "react";
import styles from "../../Styles/Campuspage/CultureSection.module.css";
import starIcon from "../../assets/Icons/campus/mask.svg";
import hostsImg from "../../assets/Images/campus/campus-4.png";
import stageImg from "../../assets/Images/campus/campus-1.png";
import runwayImg from "../../assets/Images/campus/campus-2.png";
import danceImg from "../../assets/Images/campus/campus-3.png";
import singerImg from "../../assets/Images/campus/culture-singer.png";

const BOTTOM_PHOTOS = [
  { img: stageImg, alt: "Concert Stage Lights", className: styles.bottomImg1 },
  { img: runwayImg, alt: "Runway Stage", className: styles.bottomImg2 },
  { img: hostsImg, alt: "Event Hosts", className: styles.bottomImg3 },
  { img: stageImg, alt: "Concert Stage Lights", className: styles.bottomImg1 },
  { img: runwayImg, alt: "Runway Stage", className: styles.bottomImg2 },
  { img: hostsImg, alt: "Event Hosts", className: styles.bottomImg3 },
];

export default function CultureSection() {
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
    <section ref={sectionRef} className={styles.cultureSection} id="culture">
      <div className={styles.container}>
        {/* SECTION HEADER */}
        <div
          className={`${styles.header} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
          style={{ transitionDelay: isVisible ? '0s' : '0s' }}
        >
          <div className={styles.pillBadge}>
            <img src={starIcon} alt="Sparkle" className={styles.pillIcon} />
            <span>Cultural Fests</span>
          </div>
          <h2 className={styles.title}>Culture Comes Alive at MTGI</h2>
          <p className={styles.subtext}>
            Join a vibrant learning community that empowers you with knowledge,
            skills, and opportunities for lifelong success.
          </p>
        </div>

        {/* PHOTO GRID & HIGHLIGHT */}
        <div className={styles.contentBlock}>
          {/* TOP ROW */}
          <div className={styles.topRow}>
            <div
              className={`${styles.tallFeatureImgWrapper} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
              style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}
            >
              <img src={hostsImg} alt="Aranga Hosts" className={`${styles.featureImg} ${styles.mirroredImg}`} />
            </div>

            <div className={styles.topRightContent}>
              <div
                className={`${styles.arangaTextGroup} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
                style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}
              >
                <h3 className={styles.arangaTitle}>Aranga 2026</h3>
                <p className={styles.arangaDesc}>
                  Mother Terasa Group of Institutions Celebrated Aranga '26, a grand cultural fest filled with colorful performances, creative talents, exciting competitions, and joyful moments. The event showcased the spirit of unity, teamwork, and excellence, creating lasting memories for everyone on campus.
                </p>
              </div>

              <div className={styles.twoImgRow}>
                <div
                  className={`${styles.sideImgWrapper} ${styles.topImg1} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
                  style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}
                >
                  <img src={danceImg} alt="Cultural Dance" className={styles.featureImg} />
                </div>
                <div
                  className={`${styles.sideImgWrapper} ${styles.topImg2} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
                  style={{ transitionDelay: isVisible ? '0.8s' : '0s' }}
                >
                  <img src={singerImg} alt="Stage Performance" className={styles.featureImg} />
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW (INFINITE SCROLLING PHOTOS) */}
          <div
            className={`${styles.bottomRowMarquee} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
            style={{ transitionDelay: isVisible ? '1s' : '0s' }}
          >
            <div className={styles.marqueeTrack}>
              <div className={styles.marqueeGroup}>
                {BOTTOM_PHOTOS.map((photo, index) => (
                  <div key={`b1-${index}`} className={`${styles.bottomImgWrapper} ${photo.className}`}>
                    <img src={photo.img} alt={photo.alt} className={styles.featureImg} />
                  </div>
                ))}
              </div>
              <div className={styles.marqueeGroup} aria-hidden="true">
                {BOTTOM_PHOTOS.map((photo, index) => (
                  <div key={`b2-${index}`} className={`${styles.bottomImgWrapper} ${photo.className}`}>
                    <img src={photo.img} alt={photo.alt} className={styles.featureImg} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
