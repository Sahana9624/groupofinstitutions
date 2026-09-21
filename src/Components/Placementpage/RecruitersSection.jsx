import React from "react";
import styles from "../../Styles/Placementpage/RecruitersSection.module.css";

// SVG Logos
import toyotaLogo from "../../assets/Images/placement/Toyota.svg";
import volkswagenLogo from "../../assets/Images/placement/Volkswagen.svg";
import amazonLogo from "../../assets/Images/placement/Amazon.svg";
import samsungLogo from "../../assets/Images/placement/Samsung.svg";
import dellLogo from "../../assets/Images/placement/Dell Technologies.svg";
import deloitteLogo from "../../assets/Images/placement/Deloitte.svg";
import oracleLogo from "../../assets/Images/placement/Oracle.svg";

import hondaLogo from "../../assets/Images/placement/Honda.svg";
import siemensLogo from "../../assets/Images/placement/Siemens.svg";
import huaweiLogo from "../../assets/Images/placement/Huawei.svg";
import verizonLogo from "../../assets/Images/placement/Verizon.svg";
import nestleLogo from "../../assets/Images/placement/Nestle.svg";
import accentureLogo from "../../assets/Images/placement/Accenture.svg";

export default function RecruitersSection() {
  const row1 = [
    { name: "Toyota", src: toyotaLogo },
    { name: "Volkswagen", src: volkswagenLogo },
    { name: "Amazon", src: amazonLogo },
    { name: "Samsung", src: samsungLogo },
    { name: "Dell", src: dellLogo },
    { name: "Deloitte", src: deloitteLogo },
    { name: "Oracle", src: oracleLogo }
  ];

  const row2 = [
    { name: "Honda", src: hondaLogo },
    { name: "Siemens", src: siemensLogo },
    { name: "Huawei", src: huaweiLogo },
    { name: "Verizon", src: verizonLogo },
    { name: "Nestle", src: nestleLogo },
    { name: "Accenture", src: accentureLogo }
  ];

  return (
    <section className={styles.recruitersSection}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Our Recruiting Partners</h3>

        <div className={styles.logosGrid}>
          {/* Row 1: Infinite Scroll (Left to Right) */}
          <div className={styles.marqueeContainer}>
            <div className={`${styles.marqueeTrack} ${styles.trackLeftToRight}`}>
              {/* Set 1 */}
              {row1.map((logo, idx) => (
                <div key={`r1-s1-${idx}`} className={styles.logoItem}>
                  <img src={logo.src} alt={logo.name} className={styles.logoImg} />
                </div>
              ))}
              {/* Set 2 (for seamless loop) */}
              {row1.map((logo, idx) => (
                <div key={`r1-s2-${idx}`} className={styles.logoItem}>
                  <img src={logo.src} alt={logo.name} className={styles.logoImg} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Infinite Scroll Inverse (Right to Left) */}
          <div className={styles.marqueeContainer}>
            <div className={`${styles.marqueeTrack} ${styles.trackRightToLeft}`}>
              {/* Set 1 */}
              {row2.map((logo, idx) => (
                <div key={`r2-s1-${idx}`} className={styles.logoItem}>
                  <img src={logo.src} alt={logo.name} className={styles.logoImg} />
                </div>
              ))}
              {/* Set 2 (for seamless loop) */}
              {row2.map((logo, idx) => (
                <div key={`r2-s2-${idx}`} className={styles.logoItem}>
                  <img src={logo.src} alt={logo.name} className={styles.logoImg} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
