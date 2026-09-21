import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../Styles/CtaSection.module.css";
import ctaBg from "../assets/Images/cta-bg.jpg";
import yellowArrow from "../assets/Icons/campus/arrow-up-right-yellow.svg";

export default function CtaSection({
  setAdmissionsModalOpen,
  badgeText,
  heading,
  subtext
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isPlacement = location.pathname === "/placements";
  const isContact = location.pathname === "/contact";
  const isNews = location.pathname.toLowerCase().startsWith("/news");
  const isApply = location.pathname === "/apply" || location.pathname === "/admissions";

  useEffect(() => {
    if (isNews || isApply) return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
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

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isNews, isApply]);

  if (isNews || isApply) return null;

  const handleApplyClick = () => {
    if (location.pathname === "/apply" || location.pathname === "/admissions") {
      const formCard = document.getElementById("apply-form-card");
      if (formCard) {
        formCard.scrollIntoView({ behavior: "smooth" });
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate("/apply");
  };

  const resolvedBadge =
    badgeText ||
    (isPlacement
      ? "16+ INSTITUTIONS, ONE DESTINATION"
      : "16+ INSTITUTIONS, ONE DESTINATION");

  const resolvedHeading =
    heading ||
    (isPlacement
      ? "Ready to Experience the MTGI Life"
      : "One Group. Endless Opportunities.");

  const resolvedSubtext =
    subtext ||
    "Discover the institution that matches your aspirations, and take the first step toward a successful career with Mother Terasa Group of Institutions.";

  return (
    <section className={`${styles.section} ${isContact ? styles.contactSection : ""}`}>
      {/* Campus Background Image */}
      {!isContact && (
        <>
          <img src={ctaBg} alt="Mother Terasa Group of Institutions Campus" className={styles.bgImg} />
          <div className={styles.overlay} />
        </>
      )}

      {/* Glass Card Container */}
      <div className={`${styles.cardContainer} ${isContact ? styles.contactCardContainer : ""}`}>
        <div
          ref={cardRef}
          className={`${styles.glassCard} ${isContact ? styles.noShadowCard : ""} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
          style={{ transitionDelay: isVisible ? '0s' : '0s' }}
        >
          <div
            className={`${styles.badgeWrapper} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0.15s' : '0s' }}
          >
            <span className={styles.badgeText}>{resolvedBadge}</span>
          </div>

          <h2
            className={`${styles.heading} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0.30s' : '0s' }}
          >
            {resolvedHeading}
          </h2>

          <p
            className={`${styles.subtext} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0.45s' : '0s' }}
          >
            {resolvedSubtext}
          </p>

          <div
            className={`${styles.btnWrapper} ${styles.animItem} ${isVisible ? styles.animVisible : ''}`}
            style={{ transitionDelay: isVisible ? '0.60s' : '0s' }}
          >
            <button
              className={styles.ctaBtn}
              onClick={handleApplyClick}
              aria-label="Apply for Admission"
            >
              <img src={yellowArrow} alt="" className={styles.btnIcon} aria-hidden="true" />
              <span>Apply for Admission</span>
            </button>
          </div>
        </div>
      </div>

      {/* Standalone Gold Accent Line */}
      <div className={styles.goldStrip} />
    </section>
  );
}
