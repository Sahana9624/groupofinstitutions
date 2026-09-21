import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/Campuspage/ResourcesSection.module.css";
import arrowIcon from "../../assets/Icons/arrow-up-right.svg";
import libraryImg from "../../assets/Images/campus/res-1.jpg";
import cafeImg from "../../assets/Images/campus/res-2.jpg";
import diningImg from "../../assets/Images/campus/res-3.jpg";

const resourcesData = [
  {
    id: 1,
    badgeText: "Library",
    alt: "Central Library",
    image: libraryImg,
    badgeGradient: "linear-gradient(360deg, #D88E0F 0%, #DCA90E 100%)",
  },
  {
    id: 2,
    badgeText: "Cafeteria",
    alt: "MTGI Cafeteria & Food Court",
    image: cafeImg,
    badgeGradient: "linear-gradient(360deg, #C30065 0%, #DCA90E 100%)",
  },
  {
    id: 3,
    badgeText: "Canteen",
    alt: "Auditorium and Dining Hall",
    image: diningImg,
    badgeGradient: "linear-gradient(360deg, #0721A0 0%, #D86907 100%)",
  },
];

export default function ResourcesSection() {
  return (
    <section className={styles.resourcesSection} id="facilities">
      <div className={styles.container}>
        {/* HEADER ROW WITH BUTTON */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>Campus Resources</h2>
            <p className={styles.subtext}>
              Our state-of-the-art campus provides the resources, technology, and environments needed to help students learn, innovate, and thrive.
            </p>
          </div>

          <Link to="/facilities" className={styles.exploreBtn}>
            <img src={arrowIcon} alt="Arrow" className={styles.btnArrow} />
            <span>Explore all Facilities</span>
          </Link>
        </div>

        {/* 3 FACILITY CARDS */}
        <div className={styles.resourcesGrid}>
          {resourcesData.map((item) => (
            <div key={item.id} className={styles.resourceCard}>
              <div
                className={styles.badge}
                style={{ background: item.badgeGradient }}
              >
                <span className={styles.badgeText}>{item.badgeText}</span>
              </div>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.alt} className={styles.resourceImg} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
