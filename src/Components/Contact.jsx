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
import { WEB3FORMS_KEYS, submitToWeb3Forms } from "../utils/web3forms";

const initialForm = {
  name: "",
  mobile: "",
  email: "",
  message: "",
  consent: false,
};

const initialTouched = {
  name: false,
  mobile: false,
  email: false,
  message: false,
  consent: false,
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState(initialTouched);
  const [warnings, setWarnings] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
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
    setTouched(initialTouched);
    setWarnings({});
  };

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

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const isMobileValid = form.mobile.length === 10;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const isValid =
    form.name.trim() !== "" &&
    isMobileValid &&
    isEmailValid &&
    form.consent;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);
    setSubmitError("");
    try {
      await submitToWeb3Forms(WEB3FORMS_KEYS.contact, {
        subject: `New Contact Enquiry - ${form.name}`,
        from_name: "MTGI Website - Contact Form",
        replyto: form.email,
        Name: form.name,
        Email: form.email,
        Mobile: form.mobile,
        Message: form.message || "-",
      });
      // Blur first so the focused field doesn't re-mark itself as touched
      document.activeElement?.blur();
      setSubmitted(true);
      setForm(initialForm);
      setTouched(initialTouched);
      setWarnings({});
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setSubmitError("Something went wrong while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

              {/* Email Address */}
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

              {/* Phone Number */}
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
              {submitError && <p className={styles.errorText}>{submitError}</p>}
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