import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/Home/PlacementSection.module.css";
import CountUpNumber from "../Common/CountUpNumber";

// Student Placement image
import studentImg from "../../assets/Images/placement/placed.jpg";
import buildingIcon from "../../assets/Icons/building.svg";

// SVG Logos from assets/Images/placement
import accentureLogo from "../../assets/Images/placement/Accenture.svg";
import amazonLogo from "../../assets/Images/placement/Amazon.svg";
import dellLogo from "../../assets/Images/placement/Dell Technologies.svg";
import deloitteLogo from "../../assets/Images/placement/Deloitte.svg";
import hondaLogo from "../../assets/Images/placement/Honda.svg";
import huaweiLogo from "../../assets/Images/placement/Huawei.svg";
import nestleLogo from "../../assets/Images/placement/Nestle.svg";
import oracleLogo from "../../assets/Images/placement/Oracle.svg";
import samsungLogo from "../../assets/Images/placement/Samsung.svg";
import siemensLogo from "../../assets/Images/placement/Siemens.svg";
import toyotaLogo from "../../assets/Images/placement/Toyota.svg";
import verizonLogo from "../../assets/Images/placement/Verizon.svg";
import volkswagenLogo from "../../assets/Images/placement/Volkswagen.svg";

export default function PlacementSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const rect = headerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight * 0.9) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { id: "students-placed", number: "1000+", label: "Students Placed" },
    { id: "placement-offers", number: "200+", label: "Placement Offers a Year" },
    { id: "recruiting-partners", number: "150+", label: "Recruiting Partners" },
    { id: "placements-rate", number: "90%", label: "Placements per Year" }
  ];

  const partnerLogos = [
    { name: "Toyota", src: toyotaLogo },
    { name: "Volkswagen", src: volkswagenLogo },
    { name: "Amazon", src: amazonLogo },
    { name: "Samsung", src: samsungLogo },
    { name: "Deloitte", src: deloitteLogo },
    { name: "Oracle", src: oracleLogo },
    { name: "Accenture", src: accentureLogo },
    { name: "Dell Technologies", src: dellLogo },
    { name: "Honda", src: hondaLogo },
    { name: "Huawei", src: huaweiLogo },
    { name: "Nestle", src: nestleLogo },
    { name: "Siemens", src: siemensLogo },
    { name: "Verizon", src: verizonLogo }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* TOP HEADER */}
        <div
          ref={headerRef}
          className={`${styles.header} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
          style={{ transitionDelay: isVisible ? '0s' : '0s' }}
        >
          <h2 className={styles.heading}><span>Student</span> Placement Records</h2>
          <p className={styles.subtext}>
            From campus to corporate, our placement record showcases the success of students across multiple disciplines.
          </p>
        </div>

        {/* MAIN 2-COLUMN GRID */}
        <div className={styles.contentGrid}>
          {/* LEFT COLUMN */}
          <div className={styles.leftCol}>
            <div
              className={`${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: isVisible ? '0.15s' : '0s' }}
            >
              <h3 className={styles.gridTitle}>Placement Success in Numbers</h3>
              <p className={styles.gridSubtext}>
                From campus to corporate, our placement record showcases the success of students across multiple disciplines.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div
              className={`${styles.buttonsRow} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: isVisible ? '0.30s' : '0s' }}
            >
              <Link to="/apply" className={styles.applyBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.btnArrow}>
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
                <span>Apply Now</span>
              </Link>

              <Link to="/placements" className={styles.exploreBtn}>
                <img src={buildingIcon} alt="" className={styles.btnIcon} />
                <span>Explore Placements</span>
              </Link>
            </div>

            {/* 2X2 STATS GRID */}
            <div
              className={styles.statsGrid}
              onMouseLeave={() => {
                if (window.innerWidth > 1024) {
                  setActiveCardIndex(0);
                }
              }}
            >
              {stats.map((stat, index) => {
                const isActive = activeCardIndex === index;
                const delay = 0.45 + index * 0.25;

                return (
                  <div
                    key={stat.id}
                    className={`${styles.statCard} ${isActive ? styles.statCardActive : styles.statCardDefault} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
                    style={{ transitionDelay: isVisible ? `${delay}s` : '0s' }}
                    onMouseEnter={() => {
                      if (window.innerWidth > 1024) {
                        setActiveCardIndex(index);
                      }
                    }}
                  >
                    <CountUpNumber
                      as="h4"
                      className={styles.statNumber}
                      text={stat.number}
                    />
                    <p className={styles.statLabel}>{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN - IMAGE CARD */}
          <div className={styles.rightCol}>
            <div
              className={`${styles.imageCard} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: isVisible ? '0.60s' : '0s' }}
            >
              <img src={studentImg} alt="Students Placement Records" className={styles.img} />
            </div>
          </div>
        </div>

        {/* BOTTOM RECRUITING PARTNERS MARQUEE SECTION */}
        <div
          className={`${styles.partnersSection} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
          style={{ transitionDelay: isVisible ? '0.80s' : '0s' }}
        >
          <h3 className={styles.partnersHeading}>Our Recruiting Partners</h3>

          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {/* Set 1 */}
              {partnerLogos.map((logo, index) => (
                <div key={`set1-${index}`} className={styles.partnerCard}>
                  <img src={logo.src} alt={logo.name} className={styles.partnerImg} />
                </div>
              ))}
              {/* Set 2 (Duplicated for seamless infinite loop) */}
              {partnerLogos.map((logo, index) => (
                <div key={`set2-${index}`} className={styles.partnerCard}>
                  <img src={logo.src} alt={logo.name} className={styles.partnerImg} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
