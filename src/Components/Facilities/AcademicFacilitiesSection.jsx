import React from "react";
import styles from "../../Styles/Facilities/AcademicFacilitiesSection.module.css";

// Assets for Library (Card 1)
import libraryImg from "../../assets/Images/facilities/lib.jpg";
import wifiIcon from "../../assets/Icons/facility/wifi-01.svg";
import airVentIcon from "../../assets/Icons/facility/air-vent.svg";
import libraryIcon from "../../assets/Icons/facility/library.svg";

// Assets for Laboratories (Card 2)
import lab1Img from "../../assets/Images/facilities/lab-1.jpg";
import lab2Img from "../../assets/Images/facilities/lab-2.jpg";
import testTubeIcon from "../../assets/Icons/facility/test-tube.svg";

export default function AcademicFacilitiesSection() {
  return (
    <div className={styles.academicSectionContainer}>
      {/* Intro Header */}
      <header className={styles.sectionHeaderCenter}>
        <h2 className={styles.mainSectionTitle}>
          Modern Infrastructure. Limitless Opportunities.
        </h2>
        <p className={styles.sectionDesc}>
          Inspired by our commitment to quality education, MTGI provides modern infrastructure that nurtures learning, innovation, well-being, and lifelong success.
        </p>
      </header>

      {/* Cards Stack Wrapper for Overlapping Animation */}
      <div className={styles.cardsStackWrapper}>
        {/* CARD 1: CENTRAL LIBRARY */}
        <div id="facility-library" className={styles.cardOne}>
          <div className={styles.libraryGrid}>
            <div className={styles.libraryMediaWrapper}>
              <img
                src={libraryImg}
                alt="Students reading in Central Library"
                className={styles.libraryImg}
                loading="eager"
                decoding="async"
              />
              <div className={styles.libraryBannerTag}>
                A Room <span>without Books</span> is like a body <span>without a Soul</span>
              </div>
            </div>

            <div className={styles.libraryInfo}>
              <span className={`${styles.sectionBadge} ${styles.sectionBadgeGold}`}>
                <img src={libraryIcon} alt="Library" className={styles.badgeIcon} />
                Libraries
              </span>
              <h3 className={styles.cardTitle}>State of Art Libraries</h3>
              <p className={styles.cardParagraph}>
                The library at Mother Terasa Group of Institutions provides a modern, technology-enabled learning environment with spacious reading halls, air-conditioned interiors, and high-speed Wi-Fi. Our Digital Library offers access to e-books, journals, research databases, and online resources, supporting students in learning, research, and academic excellence.
              </p>

              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <div className={styles.highlightIconBox}>
                    <img src={wifiIcon} alt="Wi-Fi" className={styles.highlightIcon} />
                  </div>
                  <div className={styles.highlightText}>
                    <h4>Wi-fi Enabled</h4>
                    <p>Fully Wi-Fi Enabled Digital Library</p>
                  </div>
                </div>

                <div className={styles.highlightItem}>
                  <div className={styles.highlightIconBox}>
                    <img src={airVentIcon} alt="Air Conditioned" className={styles.highlightIcon} />
                  </div>
                  <div className={styles.highlightText}>
                    <h4>Air Conditioned</h4>
                    <p>Air-Conditioned Smart Library</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: LABORATORIES (SLIDES OVER CARD 1 WHILE SCROLLING) */}
        <div className={styles.cardTwo}>
          <div className={styles.labHeaderCenter}>
            <span className={styles.sectionBadge}>
              <img src={testTubeIcon} alt="Laboratories" className={styles.badgeIcon} />
              Laboratories
            </span>
            <h3 className={styles.cardTitle}>State of Art Laboratories</h3>
            <p className={styles.labSectionDesc}>
              Our specialized laboratories feature state-of-the-art instruments, research apparatus, and modern simulation equipment designed to provide hands-on practical exposure across Engineering, Pharmacy, Nursing, Allied Health, and Sciences.
            </p>
          </div>

          <div className={styles.labsImagesGrid}>
            <div className={styles.labPhotoCard}>
              <img
                src={lab1Img}
                alt="Pharmaceutical and Chemistry Research Laboratory"
                className={styles.labImg}
                loading="eager"
                decoding="async"
              />
            </div>
            <div className={styles.labPhotoCard}>
              <img
                src={lab2Img}
                alt="Advanced Health and Scientific Diagnostic Equipment"
                className={styles.labImg}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
