import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "../../Styles/ApplyPage/ApplyPage.module.css";
import CountUpNumber from "../Common/CountUpNumber";
import heroBg from "../../assets/Images/apply-hero.jpg";
import campusStudentsImg from "../../assets/Images/reason.jpg";
import successTickIcon from "../../assets/icons/success-tick.svg";
import sentIcon from "../../assets/icons/sent.svg";
import handIcon from "../../assets/Icons/apply/hand.svg";
import bookIcon from "../../assets/Icons/apply/book.svg";
import heartIcon from "../../assets/Icons/apply/heart.svg";
import peopleIcon from "../../assets/Icons/apply/people.svg";

import {
  CITIES_API_URL,
  colleges,
  collegeData,
  fallbackCitiesByState
} from "../../data/applyFormData";

const initialForm = {
  name: "",
  college: "",
  mobile: "",
  email: "",
  degree: "",
  program: "",
  state: "",
  city: "",
  agreed: false,
};

const initialTouched = {
  name: false,
  college: false,
  mobile: false,
  email: false,
  degree: false,
  program: false,
  state: false,
  city: false,
  agreed: false,
};

export default function ApplyPage() {
  const [formData, setFormData] = useState(initialForm);
  const [touched, setTouched] = useState(initialTouched);
  const [warnings, setWarnings] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [citiesByState, setCitiesByState] = useState(fallbackCitiesByState);

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const reasonsRef = useRef(null);
  const cardsGridRef = useRef(null);

  // Fetch cities dataset dynamically from raw GitHub API JSON link
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(CITIES_API_URL);
        if (response.ok) {
          const data = await response.json();
          const map = { ...fallbackCitiesByState };
          if (Array.isArray(data)) {
            data.forEach((item) => {
              if (item.state && item.name) {
                const st = item.state.trim();
                const ct = item.name.trim();
                if (!map[st]) map[st] = [];
                if (!map[st].includes(ct)) {
                  map[st].push(ct);
                }
              }
            });
          }
          setCitiesByState(map);
        }
      } catch (err) {
        console.warn("Using fallback location data:", err);
      }
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    const headerEl = reasonsRef.current;
    const cardsEl = cardsGridRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerEl) {
              setIsHeaderVisible(true);
            } else if (entry.target === cardsEl) {
              setIsCardsVisible(true);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40% 0px" }
    );

    if (headerEl) observer.observe(headerEl);
    if (cardsEl) observer.observe(cardsEl);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (submitted) {
      const handlePreventScroll = (e) => {
        const modalEl = e.target.closest(`.${styles.successModal}`);
        if (modalEl) {
          const { scrollTop, scrollHeight, clientHeight } = modalEl;
          if (scrollHeight > clientHeight) {
            const isScrollingUp = e.deltaY < 0;
            const isScrollingDown = e.deltaY > 0;
            const atTop = scrollTop <= 0;
            const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
            if ((isScrollingUp && !atTop) || (isScrollingDown && !atBottom)) {
              return;
            }
          }
        }
        e.preventDefault();
      };

      const handlePreventKeys = (e) => {
        const scrollKeys = ["Space", " ", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"];
        if (scrollKeys.includes(e.key)) {
          const active = document.activeElement;
          if (active && ["INPUT", "TEXTAREA", "SELECT"].includes(active.tagName)) {
            return;
          }
          e.preventDefault();
        }
      };

      window.addEventListener("wheel", handlePreventScroll, { passive: false });
      window.addEventListener("touchmove", handlePreventScroll, { passive: false });
      window.addEventListener("keydown", handlePreventKeys, { passive: false });

      return () => {
        window.removeEventListener("wheel", handlePreventScroll);
        window.removeEventListener("touchmove", handlePreventScroll);
        window.removeEventListener("keydown", handlePreventKeys);
      };
    }
  }, [submitted]);

  const handleClose = () => {
    setSubmitted(false);
  };

  const states = Object.keys(citiesByState);

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;

    if (type === "tel" || name === "mobile") {
      value = value.replace(/[^0-9]/g, "");
      if (value.length > 10) {
        setWarnings((prev) => ({ ...prev, mobile: true }));
        value = value.slice(0, 10);
      } else {
        setWarnings((prev) => ({ ...prev, mobile: false }));
      }
    }

    e.target.classList.remove(styles.error);

    if (name === "college") {
      setFormData((prev) => ({
        ...prev,
        college: value,
        degree: "",
        program: "",
      }));
      setTouched((prev) => ({
        ...prev,
        degree: false,
        program: false,
      }));
    } else if (name === "degree") {
      setFormData((prev) => ({
        ...prev,
        degree: value,
        program: "",
      }));
      setTouched((prev) => ({
        ...prev,
        program: false,
      }));
    } else if (name === "state") {
      setFormData((prev) => ({
        ...prev,
        state: value,
        city: "",
      }));
      setTouched((prev) => ({
        ...prev,
        city: false,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const availableDegrees = formData.college && collegeData[formData.college]
    ? Object.keys(collegeData[formData.college])
    : [];

  const availablePrograms = (formData.college && formData.degree && collegeData[formData.college]?.[formData.degree])
    ? collegeData[formData.college][formData.degree]
    : [];

  const availableCities = formData.state && citiesByState[formData.state]
    ? citiesByState[formData.state]
    : [];

  const isMobileValid = formData.mobile.length === 10;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const isValid =
    formData.name.trim() !== "" &&
    formData.college !== "" &&
    isMobileValid &&
    isEmailValid &&
    formData.degree !== "" &&
    formData.program !== "" &&
    formData.state !== "" &&
    formData.city !== "" &&
    formData.agreed;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setFormData(initialForm);
      setTouched(initialTouched);
      setWarnings({});
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className={styles.applyPageContainer}>
      {/* SECTION 1: HERO WITH BACKGROUND AND FORM */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgWrapper}>
          <img src={heroBg} alt="Mother Terasa Campus Life" className={styles.heroBgImage} />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroInner}>
          {/* Hero Left Content */}
          <div className={styles.heroLeft}>
            <div className={styles.badgePill}>Apply Now</div>
            <h1 className={styles.heroHeading}>
              Begin Your Journey <span className={styles.blueText}>with MTGI</span>
            </h1>
            <p className={styles.heroSubheading}>
              Join a vibrant learning community that empowers you with knowledge, skills, and opportunities for lifelong success.
            </p>

            {/* Stats Row */}
            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <CountUpNumber as="div" text="15+" className={styles.statNumber} />
                <div className={styles.statLabel}>Educational Institutions</div>
              </div>
              <div className={styles.statCard}>
                <CountUpNumber as="div" text="500+" className={styles.statNumber} />
                <div className={styles.statLabel}>Experienced Faculties</div>
              </div>
            </div>
          </div>

          {/* Hero Right: Form Card */}
          <div className={styles.heroRight} id="apply-form-card">
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Admissions Open 2026-2027</h2>
                <p className={styles.formSubtitle}>Please share the following Details</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className={styles.admissionForm}>
                {/* Full Name */}
                <div className={styles.fieldGroup}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your Name"
                    required
                    className={`${styles.formInput} ${touched.name && formData.name.trim() === "" ? styles.error : ""}`}
                  />
                  {touched.name && formData.name.trim() === "" && (
                    <p className={styles.errorText}>Please enter your name</p>
                  )}
                </div>

                {/* Select College */}
                <div className={styles.fieldGroup}>
                  <div className={styles.selectWrapper}>
                    <select
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`${styles.formSelect} ${touched.college && !formData.college ? styles.error : ""}`}
                    >
                      <option value="" disabled>Select College</option>
                      {colleges.map((c, i) => (
                        <option key={i} value={c}>{c}</option>
                      ))}
                    </select>
                    <span className={styles.selectArrow}>▾</span>
                  </div>
                  {touched.college && !formData.college && (
                    <p className={styles.errorText}>Please select a college</p>
                  )}
                </div>

                {/* Mobile & Email */}
                <div className={styles.twoColRow}>
                  <div className={styles.fieldGroup}>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your Mobile Number"
                      required
                      className={`${styles.formInput} ${touched.mobile && (!formData.mobile.trim() || !isMobileValid) ? styles.error : ""}`}
                    />
                    {warnings.mobile && <p className={styles.errorText}>Maximum 10 digits allowed</p>}
                    {!warnings.mobile && touched.mobile && formData.mobile.trim() === "" && (
                      <p className={styles.errorText}>Please enter your mobile number</p>
                    )}
                    {!warnings.mobile && touched.mobile && formData.mobile.trim() !== "" && !isMobileValid && (
                      <p className={styles.errorText}>Mobile number must be exactly 10 digits</p>
                    )}
                  </div>
                  <div className={styles.fieldGroup}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your email"
                      required
                      className={`${styles.formInput} ${touched.email && (!formData.email.trim() || !isEmailValid) ? styles.error : ""}`}
                    />
                    {touched.email && formData.email.trim() === "" && (
                      <p className={styles.errorText}>Please enter your email</p>
                    )}
                    {touched.email && formData.email.trim() !== "" && !isEmailValid && (
                      <p className={styles.errorText}>Please enter a valid email address</p>
                    )}
                  </div>
                </div>

                {/* Degree & Program */}
                <div className={styles.twoColRow}>
                  <div className={styles.fieldGroup}>
                    <div className={styles.selectWrapper}>
                      <select
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={!formData.college}
                        required
                        className={`${styles.formSelect} ${touched.degree && !formData.degree ? styles.error : ""}`}
                      >
                        <option value="" disabled>
                          {formData.college ? "Select Degree" : "Select College First"}
                        </option>
                        {availableDegrees.map((d, i) => (
                          <option key={i} value={d}>{d}</option>
                        ))}
                      </select>
                      <span className={styles.selectArrow}>▾</span>
                    </div>
                    {touched.degree && !formData.degree && (
                      <p className={styles.errorText}>
                        {!formData.college ? "Please select college first" : "Please select degree"}
                      </p>
                    )}
                  </div>

                  <div className={styles.fieldGroup}>
                    <div className={styles.selectWrapper}>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={!formData.degree}
                        required
                        className={`${styles.formSelect} ${touched.program && !formData.program ? styles.error : ""}`}
                      >
                        <option value="" disabled>
                          {!formData.college
                            ? "Select College First"
                            : !formData.degree
                            ? "Select Degree First"
                            : "Select Program"}
                        </option>
                        {availablePrograms.map((p, i) => (
                          <option key={i} value={p}>{p}</option>
                        ))}
                      </select>
                      <span className={styles.selectArrow}>▾</span>
                    </div>
                    {touched.program && !formData.program && (
                      <p className={styles.errorText}>
                        {!formData.college
                          ? "Please select college first"
                          : !formData.degree
                          ? "Please select degree first"
                          : "Please select program"}
                      </p>
                    )}
                  </div>
                </div>

                {/* State & City */}
                <div className={styles.twoColRow}>
                  <div className={styles.fieldGroup}>
                    <div className={styles.selectWrapper}>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`${styles.formSelect} ${touched.state && !formData.state ? styles.error : ""}`}
                      >
                        <option value="" disabled>Select State</option>
                        {states.map((s, i) => (
                          <option key={i} value={s}>{s}</option>
                        ))}
                      </select>
                      <span className={styles.selectArrow}>▾</span>
                    </div>
                    {touched.state && !formData.state && (
                      <p className={styles.errorText}>Please select state</p>
                    )}
                  </div>

                  <div className={styles.fieldGroup}>
                    <div className={styles.selectWrapper}>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={!formData.state}
                        required
                        className={`${styles.formSelect} ${touched.city && !formData.city ? styles.error : ""}`}
                      >
                        <option value="" disabled>
                          {formData.state ? "Select City" : "Select State First"}
                        </option>
                        {availableCities.map((ct, i) => (
                          <option key={i} value={ct}>{ct}</option>
                        ))}
                      </select>
                      <span className={styles.selectArrow}>▾</span>
                    </div>
                    {touched.city && !formData.city && (
                      <p className={styles.errorText}>
                        {!formData.state ? "Please select state first" : "Please select city"}
                      </p>
                    )}
                  </div>
                </div>

                {/* Consent checkbox */}
                <div className={styles.fieldGroup}>
                  <label className={styles.consentLabel}>
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={(e) => {
                        handleChange(e);
                        setTouched((prev) => ({ ...prev, agreed: true }));
                      }}
                      onBlur={() => setTouched((prev) => ({ ...prev, agreed: true }))}
                      required
                      className={styles.consentCheckbox}
                    />
                    <span className={styles.consentText}>
                      By submitting this form, you agree to receive admission-related emails and calls from our team.
                    </span>
                  </label>
                  {touched.agreed && !formData.agreed && (
                    <p className={styles.errorText}>Please agree to the terms to proceed</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={!isValid || isSubmitting}
                >
                  <span className={styles.sendIcon} aria-hidden="true" />
                  <span>{isSubmitting ? "Please wait..." : "Submit Enquiry"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: REASONS TO STUDY @MTGI */}
      <section ref={reasonsRef} className={styles.reasonsContainer}>
        <div className={styles.reasonsCard}>
          <div className={styles.reasonsHeader}>
            <h2
              className={`${styles.reasonsTitle} ${styles.animItem} ${isHeaderVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: isHeaderVisible ? '0s' : '0s' }}
            >
              Reasons to Study <span className={styles.blueTitleText}>@MTGI</span>
            </h2>
            <p
              className={`${styles.reasonsSubtitle} ${styles.animItem} ${isHeaderVisible ? styles.animVisible : ''}`}
              style={{ transitionDelay: isHeaderVisible ? '0.15s' : '0s' }}
            >
              Join a vibrant learning community that empowers you with knowledge, skills, and opportunities for lifelong success.
            </p>
          </div>

          <div ref={cardsGridRef} className={styles.reasonsGrid}>
            {/* Left Column Image */}
            <div
              className={`${styles.reasonsImageWrapper} ${styles.animCard} ${isCardsVisible ? styles.animCardVisible : ''}`}
              style={{ transitionDelay: isCardsVisible ? '0s' : '0s' }}
            >
              <img
                src={campusStudentsImg}
                alt="MTGI Students"
                className={styles.reasonsImage}
              />
            </div>

            {/* Right Column: 2x2 Cards Grid */}
            <div className={styles.cardsGrid}>
              {/* Feature 1 */}
              <div
                className={`${styles.featureCard} ${styles.animCard} ${isCardsVisible ? styles.animCardVisible : ''}`}
                style={{ transitionDelay: isCardsVisible ? '0.25s' : '0s' }}
              >
                <div className={styles.featureIcon}>
                  <img src={handIcon} alt="Equality in Education" />
                </div>
                <h3 className={styles.featureTitle}>Equality in Education</h3>
                <p className={styles.featureDesc}>
                  Nurturing every learner with accessible, inclusive, and value-based education.
                </p>
              </div>

              {/* Feature 2 */}
              <div
                className={`${styles.featureCard} ${styles.animCard} ${isCardsVisible ? styles.animCardVisible : ''}`}
                style={{ transitionDelay: isCardsVisible ? '0.5s' : '0s' }}
              >
                <div className={styles.featureIcon}>
                  <img src={bookIcon} alt="Value-Based Learning" />
                </div>
                <h3 className={styles.featureTitle}>Value-Based Learning</h3>
                <p className={styles.featureDesc}>
                  Blending academic excellence with strong values to nurture ethical and responsible professionals.
                </p>
              </div>

              {/* Feature 3 */}
              <div
                className={`${styles.featureCard} ${styles.animCard} ${isCardsVisible ? styles.animCardVisible : ''}`}
                style={{ transitionDelay: isCardsVisible ? '0.75s' : '0s' }}
              >
                <div className={styles.featureIcon}>
                  <img src={heartIcon} alt="Compassionate Education" />
                </div>
                <h3 className={styles.featureTitle}>Compassionate Education</h3>
                <p className={styles.featureDesc}>
                  An education rooted in empathy, ethics, and service, inspired by the timeless values of Mother Terasa.
                </p>
              </div>

              {/* Feature 4 */}
              <div
                className={`${styles.featureCard} ${styles.animCard} ${isCardsVisible ? styles.animCardVisible : ''}`}
                style={{ transitionDelay: isCardsVisible ? '1s' : '0s' }}
              >
                <div className={styles.featureIcon}>
                  <img src={peopleIcon} alt="Inclusive Learning Community" />
                </div>
                <h3 className={styles.featureTitle}>Inclusive Learning Community</h3>
                <p className={styles.featureDesc}>
                  An environment where every student feels respected, supported, and empowered to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {submitted && ReactDOM.createPortal(
        <div
          className={styles.overlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
          onTouchMove={(e) => {
            if (e.target === e.currentTarget) e.preventDefault();
          }}
        >
          <div className={styles.successModal}>
            <div className={styles.successContent}>
              <div className={styles.successIcon}>
                <div
                  style={{
                    position: "relative",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={successTickIcon}
                    alt="Success"
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>
              </div>
              <h2>Application Submitted</h2>
              <p>
                We have received your Application form, and our Management team will get in touch with you shortly to assist you.
              </p>
              <button className={styles.modalDoneBtn} onClick={handleClose}>
                Done
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

