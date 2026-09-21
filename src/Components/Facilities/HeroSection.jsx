import React from "react";
import styles from "../../Styles/Facilities/HeroSection.module.css";
import ctaBg from "../../assets/Images/facilities/hero.jpg";
import libraryImg from "../../assets/Images/facilities/card-1.jpg";
import martImg from "../../assets/Images/facilities/card-2.jpg";
import cafeImg from "../../assets/Images/facilities/card-3.jpg";
import sportsImg from "../../assets/Images/facilities/card-4.png";
import arrowIcon from "../../assets/Icons/arrow-up-right.svg";

export default function HeroSection({ onExploreClick }) {
  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={styles.heroSection}
      aria-label="Facilities Hero"
    >
      <img src={ctaBg} alt="Campus view background" className={styles.heroBg} />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* <span className={styles.heroBadge}>Campus Infrastructure</span> */}
          <h1 className={styles.heroTitle}>
            World-Class Facilities for Exceptional Learning
          </h1>
          <p className={styles.heroSubtitle}>
            Our state-of-the-art campus provides the resources, technology, and environment needed to help students learn, innovate, and thrive.
          </p>
          <button
            className={styles.heroBtn}
            onClick={onExploreClick}
            aria-label="Explore Facilities"
          >
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
            <span>Explore all Facilities</span>
          </button>
        </div>

        {/* 2-Column Collage matching referral exactly */}
        <div className={styles.heroCollage}>
          {/* Left Column: Tall Library + Short Mart */}
          <div className={styles.collageCol}>
            <div
              className={`${styles.collageCard} ${styles.collageCardTall}`}
              onClick={() => handleScrollTo("facility-library")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleScrollTo("facility-library");
                }
              }}
              aria-label="Explore Library"
            >
              <img
                src={libraryImg}
                alt="Central Library"
                className={styles.collageImg}
              />
              <div className={styles.exploreOverlay}>
                <img src={arrowIcon} alt="" className={styles.exploreArrow} />
                <span className={styles.exploreText}>Explore Library</span>
              </div>
            </div>

            <div
              className={`${styles.collageCard} ${styles.collageCardShort}`}
              onClick={() => handleScrollTo("facility-mart")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleScrollTo("facility-mart");
                }
              }}
              aria-label="Explore Mart"
            >
              <img
                src={martImg}
                alt="MTC Mini Mart"
                className={styles.collageImg}
              />
              <div className={styles.exploreOverlay}>
                <img src={arrowIcon} alt="" className={styles.exploreArrow} />
                <span className={styles.exploreText}>Explore Mart</span>
              </div>
            </div>
          </div>

          {/* Right Column: Short Cafe + Tall Cricket */}
          <div className={styles.collageCol}>
            <div
              className={`${styles.collageCard} ${styles.collageCardShort}`}
              onClick={() => handleScrollTo("facility-cafe")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleScrollTo("facility-cafe");
                }
              }}
              aria-label="Explore Cafe"
            >
              <img
                src={cafeImg}
                alt="MTC Cafe"
                className={styles.collageImg}
              />
              <div className={styles.exploreOverlay}>
                <img src={arrowIcon} alt="" className={styles.exploreArrow} />
                <span className={styles.exploreText}>Explore Cafe</span>
              </div>
            </div>

            <div
              className={`${styles.collageCard} ${styles.collageCardTall}`}
              onClick={() => handleScrollTo("facility-sports")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleScrollTo("facility-sports");
                }
              }}
              aria-label="Explore Sports"
            >
              <img
                src={sportsImg}
                alt="Physical Education & Sports"
                className={styles.collageImg}
              />
              <div className={styles.exploreOverlay}>
                <img src={arrowIcon} alt="" className={styles.exploreArrow} />
                <span className={styles.exploreText}>Explore Sports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
