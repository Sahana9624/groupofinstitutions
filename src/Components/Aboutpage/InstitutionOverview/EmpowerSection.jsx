import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../../../Styles/Aboutpage/InstitutionOverview/EmpowerSection.module.css";
import studentImg from "../../../assets/Images/about/empower-std.jpg";
import empowerBg from "../../../assets/Images/about/empower-hero.jpg";
import scrollTextSvg from "../../../assets/Images/about/scroll-text.svg";
import starWhite from "../../../assets/Icons/campus/stars.svg";
import starYellow from "../../../assets/Icons/campus/stars-hover.svg";
import CountUpNumber from "../../Common/CountUpNumber";

export default function EmpowerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
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

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="founder" className={styles.empowerSection}>
      <img src={empowerBg} alt="Empower Background" className={styles.empowerBg} />
      <div className={styles.empowerOverlay} />

      <div className={styles.empowerContainer}>
        {/* LEFT SIDE */}
        <div
          ref={sectionRef}
          className={`${styles.empowerLeft} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
          style={{ transitionDelay: isVisible ? '0s' : '0s' }}
        >
          <h2 className={styles.empowerTitle}>
            <span className={styles.blueText}>Empowering Rural Dreams </span>
            <br />
            <span className={styles.goldText}>Through Education</span>
          </h2>

          <p className={styles.empowerSubtext}>
            We believe quality education should know no boundaries. MTGI creates opportunities
            for students from rural and diverse backgrounds, to build brighter futures.
          </p>

          <div className={styles.imgCardWrapper}>
            <img
              src={studentImg}
              alt="MTGI Students Empowering Futures"
              className={styles.studentImg}
            />
            <div className={styles.badgeStamp}>
              <img
                src={scrollTextSvg}
                alt="Years of Excellence in Compassionate Education"
                className={styles.scrollText}
              />
              <div className={styles.innerCircle}>
                <CountUpNumber as="span" text="24+" className={styles.stampText} />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT TRUST CARD */}
        <div
          className={`${styles.trustCard} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
          style={{ transitionDelay: isVisible ? '0.30s' : '0s' }}
        >
          <h3 className={styles.trustTitle}>Your Future Starts with MTGI</h3>

          <p className={styles.trustPara}>
            Mother Terasa Educational and Charitable Trust was established in <strong>1999 by Thiru R. Chinnathambi</strong>, Chairman of Annavasal union in 1986, renowned philanthropist and humanitarian, with the noble mission to promote quality education in this rural area.
          </p>
          <p className={styles.paragraph}>
            This trust, named after the great humanitarian Mother Terasa, stands for upholding her values.
            Quality education was a dream for the students in the vicinity. The trust promotes quality
            education and technical education to the poor students in this district.
          </p>

          <Link to="/facilities" className={styles.btnPrimary} style={{ marginTop: "1rem" }}>
            <div className={styles.starIconWrapper}>
              <img src={starWhite} alt="" className={styles.starIconWhite} aria-hidden="true" />
              <img src={starYellow} alt="" className={styles.starIconYellow} aria-hidden="true" />
            </div>
            <span>Explore Campus Life</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
