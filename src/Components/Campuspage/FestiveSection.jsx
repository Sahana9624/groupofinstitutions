import React, { useState, useEffect, useRef } from "react";
import styles from "../../Styles/Campuspage/FestiveSection.module.css";
import starIcon from "../../assets/Icons/campus/falling-star.svg";
import hostsImg from "../../assets/Images/campus/campus-4.png";
import stageImg from "../../assets/Images/campus/campus-1.png";
import runwayImg from "../../assets/Images/campus/campus-2.png";

const BOTTOM_PHOTOS = [
  { img: stageImg, alt: "Concert Stage Lights", className: styles.bottomImg1 },
  { img: runwayImg, alt: "Runway Stage", className: styles.bottomImg2 },
  { img: hostsImg, alt: "Event Hosts", className: styles.bottomImg3 },
  { img: stageImg, alt: "Concert Stage Lights", className: styles.bottomImg1 },
  { img: runwayImg, alt: "Runway Stage", className: styles.bottomImg2 },
  { img: hostsImg, alt: "Event Hosts", className: styles.bottomImg3 },
];

export default function FestiveSection() {
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
    <section ref={sectionRef} className={styles.festiveSection} id="festive">
      <div className={styles.container}>
        {/* TOP ROW: LEFT TEXT (HEADER + ARANGA) | RIGHT TALL FEATURE IMAGE */}
        <div className={styles.topRow}>
          <div className={styles.leftCol}>
            <div
              className={`${styles.headerGroup} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: isVisible ? '0s' : '0s' }}
            >
              <div className={styles.pillBadge}>
                <img src={starIcon} alt="Sparkle" className={styles.pillIcon} />
                <span>Campus Celebrations</span>
              </div>
              <h2 className={styles.sectionTitle}>Vibrant Festive Celebrations</h2>
              <p className={styles.sectionSubtext}>
                Join a vibrant learning community that empowers you with knowledge, skills, and opportunities for lifelong success.
              </p>
            </div>

            <div
              className={`${styles.arangaGroup} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}
            >
              <h3 className={styles.arangaTitle}>Aranga 2026</h3>
              <p className={styles.arangaDesc}>
                Mother Terasa Group of Institutions Celebrated <span>Aranga '26</span>, a grand cultural fest filled with colorful performances, creative talents, exciting competitions, and joyful moments. The event showcased the spirit of unity, teamwork, and excellence, creating lasting memories for everyone on campus.
              </p>
            </div>
          </div>

          <div
            className={`${styles.tallFeatureImgWrapper} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}
          >
            <img src={hostsImg} alt="Aranga Hosts" className={`${styles.featureImg} ${styles.mirroredImg}`} />
          </div>
        </div>

        {/* BOTTOM ROW (INFINITE SCROLLING PHOTOS) */}
        <div
          className={`${styles.bottomRowMarquee} ${styles.animCard} ${isVisible ? styles.animCardVisible : ''}`}
          style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}
        >
          <div className={styles.marqueeTrack}>
            <div className={styles.marqueeGroup}>
              {BOTTOM_PHOTOS.map((photo, index) => (
                <div key={`fb1-${index}`} className={`${styles.bottomImgWrapper} ${photo.className}`}>
                  <img src={photo.img} alt={photo.alt} className={styles.featureImg} />
                </div>
              ))}
            </div>
            <div className={styles.marqueeGroup} aria-hidden="true">
              {BOTTOM_PHOTOS.map((photo, index) => (
                <div key={`fb2-${index}`} className={`${styles.bottomImgWrapper} ${photo.className}`}>
                  <img src={photo.img} alt={photo.alt} className={styles.featureImg} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
