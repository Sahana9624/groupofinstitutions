import React, { useState, useEffect, useRef } from "react";
import styles from "../../Styles/Home/AccreditationsSection.module.css";
import naacImg from "../../assets/icons/naac.png";
import naacRecImg from "../../assets/icons/naac-rec.png";
import nbaImg from "../../assets/icons/nba.png";
import ugcImg from "../../assets/icons/ugc.png";

export default function AccreditationsSection() {
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

  const accreditations = [
    {
      id: "naac-accredited",
      icon: naacImg,
      title: "NAAC Accredited",
      desc: "NAAC accreditation reflects our commitment to academic excellence, quality education, continuous improvement, and holistic student development."
    },
    {
      id: "naac-recognized",
      icon: naacRecImg,
      title: "NAAC Recognized",
      desc: "Our participation and recognition in the NIRF framework reflect our focus on academic quality, research, graduate outcomes, and institutional excellence."
    },
    {
      id: "nba",
      icon: nbaImg,
      title: "NBA Accredited",
      desc: "NBA accreditation recognizes our outcome-based education, ensuring programs meet industry standards and prepare students for successful professional careers."
    },
    {
      id: "ugc",
      icon: ugcImg,
      title: "UGC Approved",
      desc: "Recognized by the University Grants Commission (UGC), affirming our commitment to delivering quality higher education in accordance with national standards."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div ref={headerRef} className={styles.header}>
          <h2 className={styles.heading}>Accreditations & Affiliations</h2>
          <p className={styles.subtext}>
            Every number represents our unwavering commitment to academic quality, innovation, and student growth.
          </p>
        </div>
        <div className={styles.grid}>
          {accreditations.map((item, index) => {
            // One-by-one sequential row-wise delay
            const delay = index * 0.25;

            return (
              <div
                key={item.id}
                className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
                style={{ transitionDelay: isVisible ? `${delay}s` : '0s' }}
              >
                <div className={styles.logoWrapper}>
                  <img src={item.icon} alt={item.title} className={styles.cardLogo} />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
