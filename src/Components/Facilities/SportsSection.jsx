import React, { useState, useEffect, useRef } from "react";
import styles from "../../Styles/Facilities/SportsSection.module.css";
import athleteImg from "../../assets/Images/facilities/game-1.jpg";
import physicalEdImg from "../../assets/Images/facilities/game-2.png";
import sportsImg from "../../assets/Images/facilities/game-3.jpg";
import lab1Img from "../../assets/Images/facilities/game-4.jpg";
import lab2Img from "../../assets/Images/facilities/game-5.png";
import closeIcon from "../../assets/Icons/facility/close-btn.svg";

export default function SportsSection() {
  const [selectedSport, setSelectedSport] = useState(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isNavyVisible, setIsNavyVisible] = useState(false);
  const sectionRef = useRef(null);
  const navyRef = useRef(null);

  useEffect(() => {
    const bannerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBannerVisible(true);
          bannerObserver.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -15% 0px" }
    );

    if (sectionRef.current) {
      bannerObserver.observe(sectionRef.current);
    }

    return () => bannerObserver.disconnect();
  }, []);

  useEffect(() => {
    const navyObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNavyVisible(true);
          navyObserver.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" }
    );

    if (navyRef.current) {
      navyObserver.observe(navyRef.current);
    }

    return () => navyObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedSport) return;

    const handleScrollLock = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    };

    handleScrollLock();

    window.addEventListener("resize", handleScrollLock);

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleScrollLock);
    };
  }, [selectedSport]);

  const sportsData = [
    {
      id: "cricket",
      badgeText: "Cricket Team",
      badgeGradient: "linear-gradient(90deg, #D88E0F 0%, #DCA90E 100%)",
      title: "Bat with passion, bowl with precision",
      desc: "Every practice builds skill, every match builds character, and every challenge brings our team closer to excellence.",
      fullDesc: "At MTGI, cricket brings together skill, strategy, and teamwork on the field. Students get opportunities to develop their batting, bowling, and fielding abilities. Regular practice and friendly matches encourage discipline and competitive spirit. The sport helps students build confidence, leadership, and sportsmanship. Every game inspires them to play with passion and strive for excellence.",
      image: athleteImg,
    },
    {
      id: "volleyball",
      badgeText: "Volleyball Team",
      badgeGradient: "linear-gradient(90deg, #D88E0F 0%, #C30065 100%)",
      title: "Serve with confidence, spike with power",
      desc: "Our volleyball team builds teamwork, agility, and confidence through focused training, competitive matches, and a strong spirit of collaboration.",
      fullDesc: "Volleyball at MTGI encourages students to build teamwork, agility, and coordination.Students actively participate in training sessions and competitive matches.The game develops quick decision-making and strong communication on the court.It creates a healthy environment for fitness, friendship, and team spirit.Every rally brings energy, determination, and the desire to perform better.",
      image: physicalEdImg,
    },
    {
      id: "football",
      badgeText: "Football Team",
      badgeGradient: "linear-gradient(90deg, #C30065 0%, #8A051A 100%)",
      title: "Play with passion, score with purpose",
      desc: "Every practice builds skill, every match builds character, and every challenge brings our team closer to excellence.",
      fullDesc: "Football at MTGI provides students with an energetic platform to showcase their talent.The sport develops endurance, coordination, tactical thinking, and teamwork.Students train together to strengthen their skills and competitive confidence.Every match teaches them discipline, resilience, and the importance of working as one team.On the field, students learn to compete with passion and play with purpose.",
      image: sportsImg,
    },
    {
      id: "kabaddi",
      badgeText: "Shuttle Team",
      badgeGradient: "linear-gradient(90deg, #D88E0F 0%, #DCA90E 100%)",
      title: "Move with speed, smash with precision",
      desc: "Our shuttle team develops speed, precision, agility, and focus, helping students sharpen their skills while embracing healthy competition.",
      fullDesc: "The MTGI Shuttle Team develops speed, agility, precision, focus, and sporting discipline.Students improve their footwork, serving, strokes, and attacking techniques through regular practice.The fast-paced game strengthens reflexes, coordination, concentration, and physical fitness.Competitive matches encourage students to stay focused and perform under pressure.Every rally becomes an opportunity to challenge themselves, improve their skills, and excel.",
      image: lab1Img,
    },
    {
      id: "athletics",
      badgeText: "Athelete Team",
      badgeGradient: "linear-gradient(90deg, #D88E0F 0%, #C30065 100%)",
      title: "Move with speed, smash with precision",
      desc: "Our athletics team inspires students to push their limits through dedicated training, building strength, endurance, and a determined competitive mindset.",
      fullDesc: "The MTGI Athletics Team encourages students to discover and develop their individual sporting potential.Training focuses on building speed, strength, endurance, technique, and overall fitness.Students participate in track and field events while developing discipline and determination.Every training session challenges them to improve their personal performance.Through dedication and perseverance, athletes learn to push boundaries and pursue excellence.",
      image: lab2Img,
    },
    {
      id: "indoor",
      badgeText: "BasketBall Team",
      badgeGradient: "linear-gradient(90deg, #C30065 0%, #8A051A 100%)",
      title: "Play with passion, score with purpose",
      desc: "Multi-purpose indoor court complex for table tennis, badminton, chess, carrom, and multi-gym fitness.",
      fullDesc: "The MTGI Basketball Team combines speed, skill, coordination, and strategic thinking.Students develop their dribbling, passing, shooting, and defensive techniques through dedicated practice.The fast-paced sport strengthens teamwork, agility, concentration, and decision-making.Competitive games help students build confidence, resilience, and leadership skills.Every possession is an opportunity to challenge limits and perform at their best.",
      image: sportsImg,
    }
  ];

  return (
    <section id="facility-sports" ref={sectionRef} className={styles.sportsSectionWrapper} aria-labelledby="sports-heading">
      {/* Section Header */}
      <div className={`${styles.sectionHeaderCenter} ${isBannerVisible ? styles.cardVisible : ''}`}>
        <h3 id="sports-heading" className={styles.mainSectionTitle}>
          Beyond Classrooms, Into the Game
        </h3>
        <p className={styles.sectionDesc}>
          Creating opportunities for every student to discover their potential, challenge limits, and celebrate teamwork.
        </p>
      </div>

      {/* Athlete Wide Banner */}
      <div
        className={`${styles.sportsAthleteBanner} ${isBannerVisible ? styles.cardVisible : ''}`}
        style={{ transitionDelay: isBannerVisible ? '0.2s' : '0s' }}
      >
        <div className={styles.sportsAthleteInner}>
          <img
            src={athleteImg}
            alt="Athlete student on sports ground"
            className={styles.sportsAthleteImg}
          />
          <div className={styles.sportsAthleteOverlay}>
            <div className={styles.sportsAthleteText}>
              <h4 className={styles.sportsAthleteTitle}>
                Unleash Your Sporting Spirit
              </h4>
              <p className={styles.sportsAthleteSubtitle}>
                With diverse sporting opportunities and an energetic campus culture, MTGI inspires students to play, compete, and thrive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navy Blue Container with 6 Sports Cards */}
      <div ref={navyRef} className={styles.sportsNavyContainer}>
        <div
          className={`${styles.sportsNavyHeader} ${isNavyVisible ? styles.cardVisible : ''}`}
          style={{ transitionDelay: isNavyVisible ? '0.1s' : '0s' }}
        >
          <h4 className={styles.sportsNavyTitle}>Where Passion Meets Performance</h4>
          <p className={styles.sportsNavySubtitle}>
            Explore the sports that inspire our students to compete, collaborate, and strive for excellence.
          </p>
        </div>

        <div className={styles.sportsGrid}>
          {sportsData.map((sport, index) => {
            // One by one sequential delay starting after navy header: 0.25s + index * 0.2s
            const delay = 0.25 + index * 0.2;

            return (
              <div
                key={sport.id}
                className={`${styles.sportCardWrapper} ${isNavyVisible ? styles.cardVisible : ''}`}
                style={{ transitionDelay: isNavyVisible ? `${delay}s` : '0s' }}
              >
                <div
                  className={styles.sportBadge}
                  style={{ background: sport.badgeGradient }}
                >
                  {sport.badgeText}
                </div>
                <article
                  className={styles.sportCard}
                  onClick={() => setSelectedSport(sport)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedSport(sport);
                    }
                  }}
                >
                  <div className={styles.sportImgWrapper}>
                    <img src={sport.image} alt={sport.title} className={styles.sportImg} />
                  </div>
                  <div className={styles.sportBody}>
                    <h5 className={styles.sportTitle}>{sport.title}</h5>
                    <p className={styles.sportDesc}>{sport.desc}</p>
                    <div className={styles.sportBtn}>
                      <span className={styles.sportBtnCircle}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </span>
                      <span className={styles.sportBtnText}>Know More</span>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Sport Details (Slide from Top to Down) */}
      {selectedSport && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedSport(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedSport.title}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={styles.modalHeaderBar}
              style={{ background: selectedSport.badgeGradient }}
            >
              <span>{selectedSport.badgeText}</span>
            </div>
            <div className={styles.modalBody}>
              <button
                className={styles.modalCloseBtn}
                onClick={() => setSelectedSport(null)}
                aria-label="Close modal"
              >
                <img src={closeIcon} alt="Close" className={styles.modalCloseIcon} />
              </button>
              <h4 className={styles.modalTitle}>{selectedSport.title}</h4>
              <p className={styles.modalFullDesc}>{selectedSport.fullDesc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
