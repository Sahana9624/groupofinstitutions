import React, { useState, useEffect, useRef } from "react";
import styles from "../../../Styles/Aboutpage/FounderAndChairman/LeadershipSection.module.css";
import founderImg from "../../../assets/Images/about/founder.jpg";
import chairmanImg from "../../../assets/Images/about/chairman.jpg";

export default function LeadershipSection() {
  const [founderVisible, setFounderVisible] = useState(false);
  const [chairmanVisible, setChairmanVisible] = useState(false);

  const founderRef = useRef(null);
  const chairmanRef = useRef(null);

  // Founder Card Observer
  useEffect(() => {
    if (!founderRef.current) return;

    const rect = founderRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight * 0.9) {
      setFounderVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFounderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(founderRef.current);
    return () => observer.disconnect();
  }, []);

  // Chairman Card Observer
  useEffect(() => {
    if (!chairmanRef.current) return;

    const rect = chairmanRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight * 0.9) {
      setChairmanVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChairmanVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(chairmanRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.leadershipSection}>
      <div className={styles.leadershipContainer}>
        {/* FOUNDER CARD */}
        <div
          ref={founderRef}
          className={`${styles.leaderCard} ${styles.animItem} ${founderVisible ? styles.animVisible : ''}`}
          style={{ transitionDelay: founderVisible ? '0s' : '0s' }}
        >
          <div className={styles.cardTop}>
            <div
              className={`${styles.imgCol} ${styles.animItem} ${founderVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: founderVisible ? '0.15s' : '0s' }}
            >
              <div className={styles.photoWrapper}>
                <img
                  src={founderImg}
                  alt="Mr. R. Chinnathambi - Founder"
                  className={styles.portraitImg}
                />
              </div>
            </div>

            <div
              className={`${styles.headerInfo} ${styles.animItem} ${founderVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: founderVisible ? '0.30s' : '0s' }}
            >
              <h2 className={styles.roleTitle}>
                <span className={styles.rolePrefix}>Founder of </span>
                <span className={styles.highlight}>Mother Terasa Group of Institutions</span>
              </h2>
              <p className={styles.tagline}>Three Decades of Educational Excellence</p>
              <h3 className={styles.personName}>Mr. R. Chinnathambi</h3>
            </div>
          </div>

          <div className={styles.cardBottom}>
            <div
              className={`${styles.quoteMark} ${styles.animItem} ${founderVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: founderVisible ? '0.45s' : '0s' }}
            >
              “
            </div>
            <h4
              className={`${styles.visionHeading} ${styles.animItem} ${founderVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: founderVisible ? '0.55s' : '0s' }}
            >
              A Leader with a Vision
            </h4>

            <p
              className={`${styles.bioPara} ${styles.animItem} ${founderVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: founderVisible ? '0.70s' : '0s' }}
            >
              <strong>Mr. R. Chinnathambi.,</strong> the Founder of Mother Terasa Educational &amp;
              Charitable Trust is well known for his contributions in the field of education. He is
              the father of our beloved Chairman. He was also the Chairman of Annavasal Union in 1986.
              He extends his guidance in each and every way in establishing the infrastructure,
              construction of building and guiding the staff of all the Institutions.
            </p>
            <p
              className={`${styles.bioPara} ${styles.animItem} ${founderVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: founderVisible ? '0.85s' : '0s' }}
            >
              And also he is a personality of social worker by associating himself as a Vision to
              promote quality education in this rural area. He is a Philanthropist and also a great
              Humanitarian.
            </p>
          </div>
        </div>

        {/* CHAIRMAN CARD */}
        <div
          ref={chairmanRef}
          className={`${styles.leaderCard} ${styles.animItem} ${chairmanVisible ? styles.animVisible : ''}`}
          style={{ transitionDelay: chairmanVisible ? '0s' : '0s' }}
        >
          <div className={styles.cardTopAlt}>
            <div
              className={`${styles.headerInfo} ${styles.animItem} ${chairmanVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: chairmanVisible ? '0.15s' : '0s' }}
            >
              <h2 className={styles.roleTitle}>
                <span className={styles.rolePrefix}>Chairman of </span>
                <span className={styles.highlight}>Mother Terasa Group of Institutions</span>
              </h2>
              <p className={styles.tagline}>Empowering the Underserved Through Education</p>
              <h3 className={styles.personName}>Mr. R. Uthayakumar B.A.</h3>
            </div>

            <div
              className={`${styles.imgCol} ${styles.animItem} ${chairmanVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: chairmanVisible ? '0.30s' : '0s' }}
            >
              <div className={styles.photoWrapper}>
                <img
                  src={chairmanImg}
                  alt="Mr. R. Uthayakumar B.A. - Chairman"
                  className={styles.portraitImg}
                />
              </div>
            </div>
          </div>

          <div className={styles.cardBottom}>
            <div
              className={`${styles.quoteMark} ${styles.animItem} ${chairmanVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: chairmanVisible ? '0.45s' : '0s' }}
            >
              “
            </div>
            <h4
              className={`${styles.visionHeading} ${styles.animItem} ${chairmanVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: chairmanVisible ? '0.55s' : '0s' }}
            >
              A Leader with a Vision
            </h4>

            <p
              className={`${styles.bioPara} ${styles.animItem} ${chairmanVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: chairmanVisible ? '0.70s' : '0s' }}
            >
              Rome was not built in a day. So are the accomplishments of every achievement.
            </p>
            <p
              className={`${styles.bioPara} ${styles.animItem} ${chairmanVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: chairmanVisible ? '0.85s' : '0s' }}
            >
              Rome was not built in a day, and every great achievement is the result of vision,
              dedication, and perseverance. <strong>Mr. R. C. Uthayakumar B.A.,</strong> a renowned
              philanthropist and entrepreneur, has always been committed to providing value-based
              education to rural and underprivileged communities. With this noble mission, he established
              the Mother Terasa Group of Institutions, which has grown into a group of reputed
              institutions offering quality education in various discipline lines.
            </p>
            <p
              className={`${styles.bioPara} ${styles.animItem} ${chairmanVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: chairmanVisible ? '1.00s' : '0s' }}
            >
              His vision is to create an environment where knowledge, skills, and values are nurtured
              through a blend of academic excellence and practical learning. Through continuous efforts,
              the institutions have empowered thousands of students to achieve professional success and
              contribute meaningfully to society. Young, dynamic, and service-oriented, he remains
              dedicated to promoting quality education and social development while inspiring future
              generations to achieve their dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
