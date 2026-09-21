import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/Home/InstitutionsSection.module.css";

// Default placeholder image for institution avatars
import Eng from "../../assets/images/Institutions/Engineering.jpg";
import Agri from "../../assets/images/Institutions/Agri.jpg";
import poly from "../../assets/images/Institutions/Polytech.png";
import nursing from "../../assets/images/Institutions/nurse.jpg";
import Arts from "../../assets/images/Institutions/arts.jpg";
import Pharmacy from "../../assets/images/Institutions/pharm.jpg";
import Hotel from "../../assets/images/Institutions/hotel.jpg";
import paramedical from "../../assets/images/Institutions/Engineering.jpg";
import physical from "../../assets/images/Institutions/physical.jpg";
import physiotherapy from "../../assets/images/Institutions/Engineering.jpg";
import education from "../../assets/images/Institutions/education.jpg";
import naturopathy from "../../assets/images/Institutions/yoga.jpg";
import school from "../../assets/images/Institutions/Engineering.jpg";
import law from "../../assets/images/Institutions/law.jpg";
import allied from "../../assets/images/Institutions/Engineering.jpg";

export default function InstitutionsSection() {
  const institutions = [
    {
      id: "engineering",
      prefix: "Mother Terasa",
      name: "Engineering College",
      nameColor: "#A94A4A",
      image: Eng,
      link: "https://www.mtcet.in/"
    },
    {
      id: "agriculture",
      prefix: "Mother Terasa",
      name: "College of Agriculture",
      nameColor: "#2E7D32",
      image: Agri,
      link: "https://www.motherterasaagricollege.com/"
    },
    {
      id: "polytechnic",
      prefix: "Mother Terasa",
      name: "Polytechnic College",
      nameColor: "#0C81F3",
      image: poly,
      link: "https://www.mtpc.org.in/"
    },
    {
      id: "nursing",
      prefix: "Mother Terasa",
      name: "College of Nursing",
      nameColor: "#C30065",
      image: nursing,
      link: "https://nursing.motherterasakalvi.com/"
    },
    {
      id: "arts-science",
      prefix: "Mother Terasa",
      name: "College of Arts and Science",
      nameColor: "#90091D",
      image: Arts,
      link: "https://www.mtcas.in/"
    },
    {
      id: "pharmacy",
      prefix: "Mother Terasa",
      name: "College of Pharmacy",
      nameColor: "#0721A0",
      image: Pharmacy,
      link: "https://pharmacy.motherterasakalvi.com/"
    },
    {
      id: "hotel-management",
      prefix: "Mother Terasa",
      name: "Hotel Management and Catering Technology",
      nameColor: "#D4A017",
      image: Hotel,
      link: "https://www.motherterasakalvi.com/"
    },
    {
      id: "paramedical-science",
      prefix: "Mother Terasa",
      name: "Institute of Paramedical Science",
      nameColor: "#4CB8A5",
      image: paramedical,
      link: "https://www.paramedical.motherterasakalvi.com/"
    },
    {
      id: "physical-education",
      prefix: "Mother Terasa",
      name: "College of Physical Education",
      nameColor: "#D10300",
      image: physical,
      link: "https://www.motherterasakalvi.com/"
    },
    {
      id: "physiotherapy",
      prefix: "Mother Terasa",
      name: "College of Physiotherapy",
      nameColor: "#122056",
      image: physiotherapy,
      link: "https://www.motherterasakalvi.com/"
    },
    {
      id: "education",
      prefix: "Mother Terasa",
      name: "College of Education",
      nameColor: "#BE0426",
      image: education,
      link: "https://motherteresacoedu.org/"
    },
    {
      id: "naturopathy-yoga",
      prefix: "Mother Terasa",
      name: "Naturopathy and Yoga Medical College",
      nameColor: "#017524",
      image: naturopathy,
      link: "https://www.motherterasakalvi.com/"
    },
    {
      id: "school",
      prefix: "Mother Terasa",
      name: "Matriculation and Higher Secondary School",
      nameColor: "#F97316",
      image: school,
      link: "https://www.motherterasakalvi.com/"
    },
    {
      id: "law",
      prefix: "Mother Terasa",
      name: "Law College",
      nameColor: "#900D1F",
      image: law,
      link: "https://www.motherterasakalvi.com/"
    },
    {
      id: "allied-health",
      prefix: "Mother Terasa",
      name: "Institute of Paramedical and Allied Health Science",
      nameColor: "#0721A0",
      image: allied,
      link: "https://www.paramedical.motherterasakalvi.com/",
      isCentered: true
    }
  ];

  // Separate regular 14 items from 15th centered item
  const regularItems = institutions.filter(item => !item.isCentered);
  const centeredItem = institutions.find(item => item.isCentered);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* SECTION HEADER */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Explore Mother Terasa Group of Institutions</h2>
          <p className={styles.subtext}>
            Explore our diverse institutions, each committed to delivering exceptional education, fostering innovation, and preparing students for meaningful careers.
          </p>
        </div>

        {/* INSTITUTIONS GRID */}
        <div className={styles.grid}>
          {regularItems.map((item) => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <div className={styles.cardTop}>
                <img src={item.image} alt={item.name} className={styles.avatar} />
                <div className={styles.cardBody}>
                  <span className={styles.prefix}>{item.prefix}</span>
                  <h3 className={styles.name} style={{ color: item.nameColor }}>
                    {item.name}
                  </h3>
                </div>
              </div>
              <div className={styles.exploreLink}>
                <span className={styles.arrowIcon} />
                <span className={styles.exploreText}>Explore Website</span>
              </div>
            </a>
          ))}

          {/* 15TH CENTERED ITEM AT BOTTOM */}
          {centeredItem && (
            <div className={styles.lastCardSpan}>
              <a href={centeredItem.link} target="_blank" rel="noopener noreferrer" className={`${styles.card} ${styles.lastCard}`}>
                <div className={styles.cardTop}>
                  <img src={centeredItem.image} alt={centeredItem.name} className={styles.avatar} />
                  <div className={styles.cardBody}>
                    <span className={styles.prefix}>{centeredItem.prefix}</span>
                    <h3 className={styles.name} style={{ color: centeredItem.nameColor }}>
                      {centeredItem.name}
                    </h3>
                  </div>
                </div>
                <div className={styles.exploreLink}>
                  <span className={styles.arrowIcon} />
                  <span className={styles.exploreText}>Explore Website</span>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
