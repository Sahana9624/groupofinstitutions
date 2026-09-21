import React from "react";
import styles from "../../Styles/Facilities/CampusFacilitiesSection.module.css";

// Assets for Mini Mart, Hostel, Transport, Cafe
import martImg from "../../assets/Images/facilities/mart.jpg";
import hostelImg from "../../assets/Images/facilities/hostel.jpg";
import busesImg from "../../assets/Images/facilities/bus.jpg";
import cafeImg from "../../assets/Images/facilities/cafe.jpg";

import libraryIcon from "../../assets/Icons/facility/library.svg";
import hostelIcon from "../../assets/Icons/facility/hostel.svg";
import travelIcon from "../../assets/Icons/facility/travel.svg";
import cafeIcon from "../../assets/Icons/facility/cafeteria.svg";
import wifiIcon from "../../assets/Icons/facility/wifi-01.svg";
import airVentIcon from "../../assets/Icons/facility/air-vent.svg";
import waterIcon from "../../assets/Icons/facility/water.svg";

export default function CampusFacilitiesSection() {
  return (
    <div className={styles.campusSectionContainer}>
      <div className={styles.cardsStackWrapper}>
        {/* CARD 1: MINI MART */}
        <section
          id="facility-mart"
          className={`${styles.facilityCard} ${styles.cardMart}`}
          aria-labelledby="mart-heading"
        >
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.sectionBadgeGold}>
              <img src={libraryIcon} alt="Campus Amenities" className={styles.badgeIcon} />
              Stationary
            </span>
            <h3 id="mart-heading" className={styles.cardTitle}>Mini Mart</h3>
            <p className={styles.sectionDesc}>
              The institution provides separate cafeteria facilities for boys and girls, ensuring a 
              comfortable, safe, and welcoming dining environment for all students. Designed with a 
              strong emphasis on cleanliness, hygiene, and student well-being, the cafeterias maintain high standards 
              in food preparation, storage, and service to promote healthy eating habits and overall wellness.
            </p>
          </div>
          <div className={styles.martPhotoWrapper}>
            <img
              src={martImg}
              alt="MTC Mart Convenience Store building"
              className={styles.martImg}
            />
          </div>
        </section>

        {/* CARD 2: RESIDENTIAL HOSTELS */}
        <section
          className={`${styles.facilityCard} ${styles.cardHostel}`}
          aria-labelledby="hostel-heading"
        >
          <div className={styles.sectionHeaderCenterLeft}>
            <span className={styles.sectionBadge}>
              <img src={hostelIcon} alt="Accommodation" className={styles.badgeIcon} />
              Hostel
            </span>
            <h3 id="hostel-heading" className={styles.cardTitle}>
              Home away from home 
            </h3>
            <p className={styles.sectionDesc}>
              MTGI provides a safe, comfortable, and student-friendly residential environment with separate hostels for boys and girls within the campus. The hostels offer fully furnished rooms with modern amenities, hygienic and nutritious dining facilities, uninterrupted power supply, and dedicated staff supervision to ensure student welfare and discipline.
            </p>
            <p className={styles.sectionDesc}>
              Scholarships are provided to support meritorious and economically disadvantaged students, while excellent sports and recreational facilities encourage a healthy and active lifestyle, making the hostel truly a home away from home.
            </p>
          </div>

          <div className={styles.hostelGrid}>
            <div className={styles.hostelPhotoWrapper}>
              <img
                src={hostelImg}
                alt="Mother Terasa Campus Residential Hostel building"
                className={styles.hostelImg}
              />
            </div>

            <div className={styles.hostelFeaturesList}>
              <div className={styles.hostelFeatureCard}>
                <div className={styles.hostelFeatureIconBox}>
                  <img src={wifiIcon} alt="Wi-fi Enabled" className={styles.hostelFeatureIcon} />
                </div>
                <div className={styles.hostelFeatureText}>
                  <h4>Wi-fi Enabled</h4>
                  <p>Fully Wi-Fi Enabled Hostel</p>
                </div>
              </div>

              <div className={styles.hostelFeatureCard}>
                <div className={styles.hostelFeatureIconBox}>
                  <img src={airVentIcon} alt="Air Conditioned" className={styles.hostelFeatureIcon} />
                </div>
                <div className={styles.hostelFeatureText}>
                  <h4>Air Conditioned</h4>
                  <p>Air-Conditioned Rooms</p>
                </div>
              </div>

              <div className={styles.hostelFeatureCard}>
                <div className={styles.hostelFeatureIconBox}>
                  <img src={waterIcon} alt="24 × 7 Water Supply" className={styles.hostelFeatureIcon} />
                </div>
                <div className={styles.hostelFeatureText}>
                  <h4>24 × 7 Water Supply</h4>
                  <p>24/7 Purified Water &amp; Power Backup</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CARD 3: TRANSPORT */}
        <section
          className={`${styles.facilityCard} ${styles.cardTransport}`}
          aria-labelledby="transport-heading"
        >
          <div className={styles.transportGrid}>
            <div className={styles.transportInfo}>
              <span className={styles.sectionBadgeGold}>
                <img src={travelIcon} alt="Connectivity" className={styles.badgeIcon} />
                Travel
              </span>
              <h3 id="transport-heading" className={styles.cardTitle}>
                Transport
              </h3>
              <p className={styles.cardParagraph}>
                MTGI provides a safe, comfortable, and student-friendly residential environment with separate hostels for boys and girls within the campus.
              </p>
              <p className={styles.cardParagraph}>
                The hostels offer fully furnished rooms with modern amenities, hygienic and nutritious dining facilities, uninterrupted power supply, and dedicated staff supervision to ensure student welfare and discipline.
              </p>
              <p className={styles.cardParagraph}>
                Scholarships are provided to support meritorious and economically disadvantaged students, while excellent sports and recreational facilities encourage a healthy and active lifestyle, making the hostel truly a home away from home.
              </p>
            </div>

            <div className={styles.transportPhotoWrapper}>
              <img
                src={busesImg}
                alt="Fleet of modern yellow campus college buses"
                className={styles.transportImg}
              />
            </div>
          </div>
        </section>

        {/* CARD 4: STUDENT CAFE */}
        <section id="facility-cafe" className={`${styles.facilityCard} ${styles.cardCafe}`} aria-labelledby="cafe-heading">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.sectionBadge}>
              <img src={cafeIcon} alt="Dining & Hangout" className={styles.badgeIcon} />
              Cafeteria
            </span>
            <h3 id="cafe-heading" className={styles.cardTitle}>Student Cafe</h3>
            <p className={styles.sectionDesc}>
              The institution provides separate cafeteria facilities for boys and girls, ensuring a comfortable, safe, and welcoming dining environment for all students. Designed with a strong emphasis on cleanliness, hygiene, and student well-being, the cafeterias maintain high standards in food preparation, storage, and service to promote healthy eating habits and overall wellness.
            </p>
          </div>
          <div className={styles.cafePhotoWrapper}>
            <img
              src={cafeImg}
              alt="MTC Cafe outdoor shipping container hangout spot"
              className={styles.cafeImg}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
