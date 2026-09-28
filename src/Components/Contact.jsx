import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../Styles/Contact.module.css";
// import successCircleIcon from "../assets/Icons/success-circle.svg";
import successTickIcon from "../assets/Icons/success-tick.svg";
import heroImg from "../assets/Images/contact-hero.jpg";
import locationIcon from "../assets/Icons/contact-location.svg";
import mailIcon from "../assets/Icons/contact-mail.svg";
import phoneIcon from "../assets/Icons/contact-phn.svg";
import sentIcon from "../assets/Icons/sent.svg";

import {
  CITIES_API_URL,
  colleges,
  collegeData,
  fallbackCitiesByState
} from "../data/applyFormData";

const initialForm = {
  name: "",
  college: "",
  mobile: "",
  email: "",
  degree: "",
  program: "",
  state: "",
  city: "",
  message: "",
  consent: false,
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
  message: false,
  consent: false,
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState(initialTouched);
  const [warnings, setWarnings] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [citiesByState, setCitiesByState] = useState(fallbackCitiesByState);

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
        console.warn("Using fallback location data in Contact component:", err);
      }
    };

    fetchLocations();
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

  const availableDegrees = form.college && collegeData[form.college]
    ? Object.keys(collegeData[form.college])
    : [];

  const availablePrograms = (form.college && form.degree && collegeData[form.college]?.[form.degree])
    ? collegeData[form.college][form.degree]
    : [];

  const availableCities = form.state && citiesByState[form.state]
    ? citiesByState[form.state]
    : [];

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;

    if (type === "tel" || name === "mobile") {
      value = value.replace(/[^0-9]/g, '');
      if (value.length > 10) {
        setWarnings(prev => ({ ...prev, mobile: true }));
        value = value.slice(0, 10);
      } else {
        setWarnings(prev => ({ ...prev, mobile: false }));
      }
    }

    e.target.classList.remove(styles.error);

    if (name === "college") {
      setForm((prev) => ({
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
      setForm((prev) => ({
        ...prev,
        degree: value,
        program: "",
      }));
      setTouched((prev) => ({
        ...prev,
        program: false,
      }));
    } else if (name === "state") {
      setForm((prev) => ({
        ...prev,
        state: value,
        city: "",
      }));
      setTouched((prev) => ({
        ...prev,
        city: false,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const isMobileValid = form.mobile.length === 10;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const isValid =
    form.name.trim() !== "" &&
    form.college !== "" &&
    isMobileValid &&
    isEmailValid &&
    form.degree !== "" &&
    form.program !== "" &&
    form.state !== "" &&
    form.city !== "" &&
    form.consent;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setForm(initialForm);
      setTouched(initialTouched);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <main className={styles.contact}>
      {/* MAIN CONTACT SECTION WITH CAMPUS HERO BACKGROUND */}
      <section className={styles.heroSection}>
        <img
          src={heroImg}
          alt="Mother Terasa Group of Institutions Campus"
          className={styles.heroBg}
        />

        <div className={styles.container}>
          {/* LEFT COLUMN: TITLE & FROSTED GLASS CONTACT INFO */}
          <div className={styles.infoCol}>
            <div className={styles.headerBlock}>
              <div className={styles.badge}>Get in Touch with us</div>
              <h1 className={styles.heading}>Mother Terasa Group of Institutions</h1>
              <p className={styles.subheading}>
                Please feel free to contact us with any questions or enquiries you may have.
              </p>
            </div>

            <div className={styles.glassCard}>
              <div className={styles.detailItem}>
                <div className={styles.iconBox}>
                  <img src={locationIcon} alt="Address" />
                </div>
                <div className={styles.detailContent}>
                  <h3>Our Address</h3>
                  <p>
                    Mother Terasa Group of Institutions, Mettusalai,<br />
                    Illuppur, Pudukkottai - 622 102
                  </p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconBox}>
                  <img src={phoneIcon} alt="Contact Number" />
                </div>
                <div className={styles.detailContent}>
                  <h3>Contact Number</h3>
                  <p>
                    <a href="tel:+919942988608">+91 - 99429 88608</a><br />
                    <a href="tel:+919443372151">+91 - 94433 72151</a>
                  </p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.iconBox}>
                  <img src={mailIcon} alt="Mail Us" />
                </div>
                <div className={styles.detailContent}>
                  <h3>Mail Us</h3>
                  <p>
                    <a href="mailto:mtcp18@gmail.com">mtcp18@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: WHITE ENQUIRY FORM CARD */}
          <div className={styles.enquiryCard}>
            <h2 className={styles.formTitle}>Send us your Enquiry</h2>
            <p className={styles.formSubtitle}>Please share the following Details</p>

            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="contact-name">
                  Full Name <span className={styles.requiredAsterisk}>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`${styles.input} ${touched.name && form.name.trim() === "" ? styles.error : ""}`}
                />
                {touched.name && form.name.trim() === "" && (
                  <p className={styles.errorText}>Please enter your name</p>
                )}
              </div>

              {/* Select College */}
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="contact-college">
                  Select College <span className={styles.requiredAsterisk}>*</span>
                </label>
                <div className={styles.selectWrapper}>
                  <select
                    id="contact-college"
                    name="college"
                    value={form.college}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`${styles.select} ${touched.college && !form.college ? styles.error : ""}`}
                  >
                    <option value="" disabled>Select College</option>
                    {colleges.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                  <span className={styles.selectArrow}>▾</span>
                </div>
                {touched.college && !form.college && (
                  <p className={styles.errorText}>Please select a college</p>
                )}
              </div>

              {/* Email & Phone Number */}
              <div className={styles.twoColRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="contact-email">
                    Email Address <span className={styles.requiredAsterisk}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`${styles.input} ${touched.email && (!form.email.trim() || !isEmailValid) ? styles.error : ""}`}
                  />
                  {touched.email && form.email.trim() === "" && (
                    <p className={styles.errorText}>Please enter your email</p>
                  )}
                  {touched.email && form.email.trim() !== "" && !isEmailValid && (
                    <p className={styles.errorText}>Please enter a valid email address</p>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="contact-mobile">
                    Phone Number <span className={styles.requiredAsterisk}>*</span>
                  </label>
                  <input
                    id="contact-mobile"
                    type="tel"
                    name="mobile"
                    placeholder="Enter your Mobile Number"
                    value={form.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`${styles.input} ${touched.mobile && (!form.mobile.trim() || !isMobileValid) ? styles.error : ""}`}
                  />
                  {warnings.mobile && <p className={styles.errorText}>Maximum 10 digits allowed</p>}
                  {!warnings.mobile && touched.mobile && form.mobile.trim() === "" && (
                    <p className={styles.errorText}>Please enter your mobile number</p>
                  )}
                  {!warnings.mobile && touched.mobile && form.mobile.trim() !== "" && !isMobileValid && (
                    <p className={styles.errorText}>Mobile number must be exactly 10 digits</p>
                  )}
                </div>
              </div>

              {/* Degree & Program */}
              <div className={styles.twoColRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="contact-degree">
                    Degree <span className={styles.requiredAsterisk}>*</span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="contact-degree"
                      name="degree"
                      value={form.degree}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={!form.college}
                      required
                      className={`${styles.select} ${touched.degree && !form.degree ? styles.error : ""}`}
                    >
                      <option value="" disabled>
                        {form.college ? "Select Degree" : "Select College First"}
                      </option>
                      {availableDegrees.map((d, i) => (
                        <option key={i} value={d}>{d}</option>
                      ))}
                    </select>
                    <span className={styles.selectArrow}>▾</span>
                  </div>
                  {touched.degree && !form.degree && (
                    <p className={styles.errorText}>
                      {!form.college ? "Please select college first" : "Please select degree"}
                    </p>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="contact-program">
                    Program <span className={styles.requiredAsterisk}>*</span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="contact-program"
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={!form.degree}
                      required
                      className={`${styles.select} ${touched.program && !form.program ? styles.error : ""}`}
                    >
                      <option value="" disabled>
                        {!form.college
                          ? "Select College First"
                          : !form.degree
                          ? "Select Degree First"
                          : "Select Program"}
                      </option>
                      {availablePrograms.map((p, i) => (
                        <option key={i} value={p}>{p}</option>
                      ))}
                    </select>
                    <span className={styles.selectArrow}>▾</span>
                  </div>
                  {touched.program && !form.program && (
                    <p className={styles.errorText}>
                      {!form.college
                        ? "Please select college first"
                        : !form.degree
                        ? "Please select degree first"
                        : "Please select program"}
                    </p>
                  )}
                </div>
              </div>

              {/* State & City */}
              <div className={styles.twoColRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="contact-state">
                    State <span className={styles.requiredAsterisk}>*</span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="contact-state"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`${styles.select} ${touched.state && !form.state ? styles.error : ""}`}
                    >
                      <option value="" disabled>Select State</option>
                      {states.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                    <span className={styles.selectArrow}>▾</span>
                  </div>
                  {touched.state && !form.state && (
                    <p className={styles.errorText}>Please select state</p>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="contact-city">
                    City <span className={styles.requiredAsterisk}>*</span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="contact-city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={!form.state}
                      required
                      className={`${styles.select} ${touched.city && !form.city ? styles.error : ""}`}
                    >
                      <option value="" disabled>
                        {form.state ? "Select City" : "Select State First"}
                      </option>
                      {availableCities.map((ct, i) => (
                        <option key={i} value={ct}>{ct}</option>
                      ))}
                    </select>
                    <span className={styles.selectArrow}>▾</span>
                  </div>
                  {touched.city && !form.city && (
                    <p className={styles.errorText}>
                      {!form.state ? "Please select state first" : "Please select city"}
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Message */}
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="contact-message">
                  Additional Message ( Optional )
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Queries or Message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={3}
                  className={styles.textarea}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.consentLabel}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={(e) => {
                      handleChange(e);
                      setTouched((prev) => ({ ...prev, consent: true }));
                    }}
                    onBlur={() => setTouched((prev) => ({ ...prev, consent: true }))}
                    required
                    className={styles.checkbox}
                  />
                  <span>
                    By submitting this form, you consent to receive calls, emails, and other communications from Mother Terasa Group of Institutions.
                  </span>
                </label>
                {touched.consent && !form.consent && (
                  <p className={styles.errorText}>Please agree to the terms to proceed</p>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={!isValid || isSubmitting}
              >
                <span className={styles.submitBtnIcon} aria-hidden="true" />
                <span>{isSubmitting ? "Please wait..." : "Submit Enquiry"}</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className={styles["map-section"]}>
        <div className={styles["map-card"]}>
          <div className={styles["map-card__header"]}>
            <h2>Mother Terasa Group of Institutions</h2>
            <p>Mettusalai, Illuppur, Pudukkottai(Dt), Tamilnadu-622102.</p>
          </div>
          <iframe
            title="Mother Terasa Group of Institutions location"
            className={styles["map-card__iframe"]}
            src="https://maps.google.com/maps?q=Mother%20Terasa%20Group%20of%20Institutions%2C%20Illuppur%2C%20Pudukkottai%2C%20Tamil%20Nadu%20622102&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {submitted && ReactDOM.createPortal(
        <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }} onTouchMove={(e) => { if (e.target === e.currentTarget) e.preventDefault(); }}>
          <div className={styles.successModal}>
            <div className={styles.successContent}>
              <div className={styles.successIcon}>
                <div style={{ position: 'relative', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={successTickIcon} alt="Success" style={{ width: '35px', height: '35px' }} />
                </div>
              </div>
              <h2>Contact Form Submitted</h2>
              <p>We have received your Contact form, and our Management team will get in touch with you shortly to assist you.</p>
              <button className={styles.submitBtn} onClick={handleClose}>Done</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </main>
  );
}