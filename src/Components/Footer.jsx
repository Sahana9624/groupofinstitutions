import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Footer.module.css";
import logoImg from "../assets/Images/logo-footer.png";
import facebookIcon from "../assets/Icons/footer/facebook.svg";
import twitterIcon from "../assets/Icons/footer/twitter.svg";
import instagramIcon from "../assets/Icons/footer/instagram.svg";
import linkedinIcon from "../assets/Icons/footer/linkedin-01.svg";
import phoneIcon from "../assets/Icons/phone.svg";
import mailIcon from "../assets/Icons/mail.svg";
import locationIcon from "../assets/Icons/contact-location.svg";

export default function Footer({ setAdmissionsModalOpen }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* TOP BRANDING ROW */}
        <div className={styles.topHeader}>
          <div className={styles.brandHeader}>
            <div className={styles.logoAndText}>
              <img src={logoImg} alt="Mother Terasa Group of Institutions Logo" className={styles.logo} />
              <div className={styles.logoTextGroup}>
                <h2 className={styles.logoMainTitle}>MOTHER TERASA</h2>
                <h3 className={styles.logoSubTitle}>GROUP OF INSTITUTIONS</h3>
                <p className={styles.logoTrustText}>Run by Mother Terasa Educational and Charitable Trust</p>
              </div>
            </div>

            <div className={styles.socialRow}>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" className={styles.socialIconImg} />
              </a>
              {/* X / Twitter */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
                <img src={twitterIcon} alt="X (Twitter)" className={styles.socialIconImg} />
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" className={`${styles.socialIconImg} ${styles.socialIconCompact}`} />
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" className={`${styles.socialIconImg} ${styles.socialIconCompact}`} />
              </a>
            </div>
          </div>

          <div className={styles.taglineBlock}>
            <h3 className={styles.tagline}>
              Where Compassion Inspires <span className={styles.goldText}>Excellence.</span>
            </h3>
            <p className={styles.taglineSub}>
              Join Mother Terasa Group of Institutions and explore a world of infinite academic opportunities.
            </p>
          </div>
        </div>

        {/* DIVIDER LINE 1 */}
        <div className={styles.divider} />

        {/* MIDDLE MAIN GRID (3 COLUMNS) */}
        <div className={styles.mainGrid}>
          {/* COLUMN 1: QUICK LINKS */}
          <div className={styles.gridCol}>
            <h4 className={styles.colHeading}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link to="/apply" className={styles.footerLink}>
                  Admissions
                </Link>
              </li>
              <li><Link to="/academics" className={styles.footerLink}>Our Institutes</Link></li>
              <li><Link to="/campus-life" className={styles.footerLink}>Campus Life</Link></li>
              <li><Link to="/about" className={styles.footerLink}>About MTGI</Link></li>
              <li><Link to="/facilities" className={styles.footerLink}>Facilities</Link></li>
              <li><Link to="/placements" className={styles.footerLink}>Placements</Link></li>
            </ul>
          </div>

          {/* COLUMN 2: USEFUL LINKS */}
          <div className={styles.gridCol}>
            <h4 className={styles.colHeading}>Useful Links</h4>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="https://www.motherterasakalvi.com/virtualtour/motherterasa/MTC/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Virtual Tour
                </a>
              </li>
              <li><Link to="/about/core-values" className={styles.footerLink}>Our Core Values</Link></li>
              <li><Link to="/News" className={styles.footerLink}>News</Link></li>
              <li><Link to="/faq" className={styles.footerLink}>FAQ'S</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT US */}
          <div className={`${styles.gridCol} ${styles.contactCol}`}>
            <h4 className={styles.colHeading}>Contact Us</h4>
            <div className={styles.contactList}>
              {/* Location */}
              <div className={styles.contactItem}>
                <img src={locationIcon} alt="Location" className={`${styles.contactIcon} ${styles.whiteIcon}`} />
                <span>
                  Mother Terasa Group of Institutions, MTGI Campus, Mettusalai, Illuppur, Pudukkottai – 622 102
                </span>
              </div>

              {/* Phone Numbers */}
              <div className={styles.contactItem}>
                <img src={phoneIcon} alt="Phone" className={styles.contactIcon} />
                <div className={styles.phoneGroup}>
                  <span>+91 - 99429 88608</span>
                  <span>+91 - 99429 88610</span>
                  <span>+91 - 94434 72151</span>
                </div>
              </div>

              {/* Email */}
              <div className={styles.contactItem}>
                <img src={mailIcon} alt="Mail" className={styles.contactIcon} />
                <span>mtce2005@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL TO TOP BUTTON */}
        <div className={styles.scrollTopWrapper}>
          <button className={styles.scrollTopBtn} onClick={scrollToTop} aria-label="Scroll to top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </button>
        </div>

        {/* DIVIDER LINE 2 */}
        <div className={styles.divider} />

        {/* BOTTOM COPYRIGHT & LEGAL ROW */}
        <div className={styles.bottomRow}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} Mother Terasa Group of Institutions. All Rights Reserved.
          </p>

          <div className={styles.legalLinks}>
            <Link to="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            <Link to="/terms-and-conditions" className={styles.legalLink}>Terms and Conditions</Link>
            <Link to="/return-refund-policy" className={styles.legalLink}>Return and Refund Policy</Link>
            <Link to="/cancellation-policy" className={styles.legalLink}>Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
