import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../Styles/Header.module.css";
import logoImg from "../assets/images/logo.png";
import heroBgImg from "../assets/images/home-hero.jpg";
import headerArrowDefault from "../assets/icons/header-arrow.svg";
import headerArrowUp from "../assets/icons/header-arrow-up.svg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'about' | 'institutes' | null
  const [hoveredDropdown, setHoveredDropdown] = useState(null); // 'about' | 'institutes' | null
  const location = useLocation();

  const aboutDropdownRef = useRef(null);
  const megaMenuRef = useRef(null);
  const mobileNavRef = useRef(null);

  const hoverTimeoutRef = useRef(null);

  const isDropdownActive = isMobileMenuOpen || activeDropdown !== null || hoveredDropdown !== null;

  const handleMouseEnter = (name) => {
    if (window.innerWidth > 1024) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      setHoveredDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      setHoveredDropdown(null);
    }
  };

  // Auto-refresh: reset sub-dropdown scroll positions to top whenever any dropdown opens
  useEffect(() => {
    if ((activeDropdown === 'institutes' || hoveredDropdown === 'institutes') && megaMenuRef.current) {
      megaMenuRef.current.scrollTop = 0;
    }
    if ((activeDropdown === 'about' || hoveredDropdown === 'about') && aboutDropdownRef.current) {
      aboutDropdownRef.current.scrollTop = 0;
    }
  }, [activeDropdown, hoveredDropdown]);

  // Auto-refresh: reset dropdown accordions & scroll position whenever mobile menu opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      setActiveDropdown(null);
      setHoveredDropdown(null);
      if (mobileNavRef.current) {
        mobileNavRef.current.scrollTop = 0;
      }
    }
  }, [isMobileMenuOpen]);

  // Lock background screen scroll: lock html & body on desktop when dropdown is active/hovered, and on mobile drawer
  useEffect(() => {
    const isDesktop = window.innerWidth > 1024;
    const isDropdownOpen = hoveredDropdown !== null || activeDropdown !== null;

    if ((isDesktop && isDropdownOpen) || (!isDesktop && isMobileMenuOpen)) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      };
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen, activeDropdown, hoveredDropdown]);

  // Close menus cleanly on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setHoveredDropdown(null);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => {
      const nextState = !prev;
      setActiveDropdown(null);
      setHoveredDropdown(null);
      return nextState;
    });
  };

  const toggleDropdown = (name, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveDropdown(prev => prev === name ? null : name);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setHoveredDropdown(null);
  };

  return (
    <header className={styles.header}>
      {/* BLACK SHADOW BACKDROP OVERLAY COVERING SCREEN BELOW HEADER */}
      <div
        className={`${styles.dropdownBackdrop} ${isDropdownActive ? styles.dropdownBackdropActive : ''}`}
        onClick={() => {
          setActiveDropdown(null);
          setHoveredDropdown(null);
          setIsMobileMenuOpen(false);
        }}
        onTouchMove={(e) => e.preventDefault()}
        aria-hidden="true"
      />
      <div className={styles.headerWrapper}>
        {/* TOP BANNER */}
        <div className={styles['top-bar']}>
          <div className={styles['top-bar__inner']}>
            Beautiful Garden of Evergreen Campus
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <nav className={styles.navbar}>
          <div className={styles['navbar__inner']}>
            {/* BRAND LOGO & TITLE */}
            <Link to="/" className={styles.brand} onClick={handleLinkClick}>
              <img src={logoImg} alt="Mother Terasa Logo" className={styles['brand__logo']} />
              <div className={styles['brand__text']}>
                <span className={styles['brand__name']}>Mother Terasa</span>
                <span className={styles['brand__tagline']}>GROUP OF INSTITUTIONS</span>
                <span className={styles['brand__affiliation']}>Run by Mother Terasa Educational and Charitable Trust</span>
              </div>
            </Link>

            {/* DESKTOP & MOBILE NAVIGATION LINKS */}
            <div ref={mobileNavRef} className={`${styles.nav} ${isMobileMenuOpen ? styles['nav--open'] : ''}`}>
              <div className={styles['mobile-nav-links-container']}>
                {/* HOME */}
                <div className={styles.navItem}>
                  <Link
                    to="/"
                    className={`${styles['nav__link']} ${location.pathname === '/' ? styles['nav__link--active'] : ''}`}
                    onClick={handleLinkClick}
                  >
                    <span className={styles.navText}>Home</span>
                  </Link>
                </div>

                {/* ABOUT US DROPDOWN */}
                <div
                  className={`${styles.navItem} ${styles.navItemAbout} ${activeDropdown === 'about' ? styles.accordionActive : ''}`}
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`${styles['nav__link']} ${styles['nav__link--dropdown']} ${activeDropdown === 'about' || location.pathname.startsWith('/about') ? styles['nav__link--active'] : ''}`}
                    onClick={(e) => {
                      if (window.innerWidth <= 1024) {
                        toggleDropdown('about', e);
                      }
                    }}
                  >
                    <span className={styles.navText}>About Us</span>
                    <span className={`${styles.chevron} ${activeDropdown === 'about' ? styles.chevronOpen : ''}`}>
                      <img src={headerArrowDefault} alt="arrow" className={styles.arrowDefault} />
                      <img src={headerArrowUp} alt="arrow" className={styles.arrowHover} />
                    </span>
                  </div>

                  {/* ABOUT US DROPDOWN MENU */}
                  <div
                    ref={aboutDropdownRef}
                    className={`${styles.aboutDropdown} ${activeDropdown === 'about' ? styles.aboutDropdownOpen : ''}`}
                  >
                    <Link
                      to="/about/overview"
                      className={`${styles.aboutDropdownItem} ${(location.pathname === '/about/overview' || location.pathname === '/about') ? styles['aboutDropdownItem--active'] : ''}`}
                      onClick={handleLinkClick}
                    >
                      Institution Overview
                    </Link>
                    <Link
                      to="/about/core-values"
                      className={`${styles.aboutDropdownItem} ${location.pathname === '/about/core-values' ? styles['aboutDropdownItem--active'] : ''}`}
                      onClick={handleLinkClick}
                    >
                      Our Core Values
                    </Link>
                    <Link
                      to="/about/founder-chairman"
                      className={`${styles.aboutDropdownItem} ${location.pathname === '/about/founder-chairman' ? styles['aboutDropdownItem--active'] : ''}`}
                      onClick={handleLinkClick}
                    >
                      Founder and Chairman
                    </Link>
                  </div>
                </div>

                {/* INSTITUTES MEGA MENU */}
                <div
                  className={`${styles.navItem} ${styles.navItemInstitutes} ${activeDropdown === 'institutes' ? styles.accordionActive : ''}`}
                  onMouseEnter={() => handleMouseEnter('institutes')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`${styles['nav__link']} ${styles['nav__link--dropdown']} ${activeDropdown === 'institutes' || location.pathname === '/academics' ? styles['nav__link--active'] : ''}`}
                    onClick={(e) => {
                      if (window.innerWidth <= 1024) {
                        toggleDropdown('institutes', e);
                      }
                    }}
                  >
                    <span className={styles.navText}>Our Institutions</span>
                    <span className={`${styles.chevron} ${activeDropdown === 'institutes' ? styles.chevronOpen : ''}`}>
                      <img src={headerArrowDefault} alt="arrow" className={styles.arrowDefault} />
                      <img src={headerArrowUp} alt="arrow" className={styles.arrowHover} />
                    </span>
                  </div>

                  {/* INSTITUTES MEGA MENU DROPDOWN */}
                  <div
                    ref={megaMenuRef}
                    className={`${styles.institutesMegaMenu} ${activeDropdown === 'institutes' ? styles.institutesMegaMenuOpen : ''}`}
                  >
                    <h3 className={styles.megaMenuTitle}>Explore our Institutions</h3>
                    <div className={styles.megaMenuGrid}>
                      {/* COLUMN 1: MTGI TECHNICAL */}
                      <div className={styles.megaColItem}>
                        <h4 className={styles.megaColTitle}>MTGI TECHNICAL</h4>
                        <ul className={styles.megaColList}>
                          <li><a href="https://www.mtcet.in/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa College of Engineering and Technology</a></li>
                          <li><a href="https://www.mtpc.org.in/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa Polytechnic College</a></li>
                          <li><a href="https://www.mtcas.in/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa College of Arts and Science</a></li>
                          <li><a href="https://www.motherterasakalvi.com/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa Hotel Management and Catering Technology</a></li>
                          <li><a href="https://www.motherterasakalvi.com/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa College of Physical Education</a></li>
                          <li><a href="https://motherteresacoedu.org/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa College of Education</a></li>
                          <li><a href="https://www.motherterasaagricollege.com/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa College of Agriculture</a></li>
                          <li><a href="https://www.motherterasakalvi.com/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa Law College</a></li>
                        </ul>
                      </div>

                      {/* COLUMN 2: MTGI MEDICAL */}
                      <div className={styles.megaColItem}>
                        <h4 className={styles.megaColTitle}>MTGI MEDICAL</h4>
                        <ul className={styles.megaColList}>
                          <li><a href="https://nursing.motherterasakalvi.com/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa College of Nursing</a></li>
                          <li><a href="https://pharmacy.motherterasakalvi.com/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa College of Pharmacy</a></li>
                          <li><a href="https://www.paramedical.motherterasakalvi.com/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa Institute of Paramedical Science</a></li>
                          <li><a href="https://www.motherterasakalvi.com/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa College of Physiotherapy</a></li>
                          <li><a href="https://www.motherterasakalvi.com/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa Naturopathy and Yoga Medical College</a></li>
                          <li><a href="https://www.paramedical.motherterasakalvi.com/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa Institute of Paramedical and Allied Health Science</a></li>
                        </ul>
                      </div>

                      {/* COLUMN 3: MTGI SCHOOL */}
                      <div className={styles.megaColItem}>
                        <h4 className={styles.megaColTitle}>MTGI SCHOOL</h4>
                        <ul className={styles.megaColList}>
                          <li><a href="https://www.motherterasakalvi.com/" target="_blank" rel="noopener noreferrer" className={styles.megaColLink} onClick={handleLinkClick}>Mother Terasa Matriculation and Higher Secondary School</a></li>
                        </ul>
                        <div className={styles.campusCard}>
                          <img src={heroBgImg} alt="Mother Terasa Campus" className={styles.campusImg} loading="lazy" decoding="async" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* OTHER NAV LINKS */}
                <div className={styles.navItem}>
                  <Link to="/campus-life" className={`${styles['nav__link']} ${location.pathname === '/campus-life' || location.pathname === '/faculty' ? styles['nav__link--active'] : ''}`} onClick={handleLinkClick}>
                    <span className={styles.navText}>Campus Life</span>
                  </Link>
                </div>
                <div className={styles.navItem}>
                  <Link to="/placements" className={`${styles['nav__link']} ${location.pathname === '/placements' ? styles['nav__link--active'] : ''}`} onClick={handleLinkClick}>
                    <span className={styles.navText}>Placements</span>
                  </Link>
                </div>
                <div className={`${styles.navItem} ${styles.mobileOnlyNavItem}`}>
                  <Link to="/apply" className={`${styles['nav__link']} ${location.pathname === '/apply' || location.pathname === '/admissions' ? styles['nav__link--active'] : ''}`} onClick={handleLinkClick}>
                    <span className={styles.navText}>Admissions</span>
                  </Link>
                </div>
                <div className={styles.navItem}>
                  <Link to="/facilities" className={`${styles['nav__link']} ${location.pathname === '/facilities' ? styles['nav__link--active'] : ''}`} onClick={handleLinkClick}>
                    <span className={styles.navText}>Facilities</span>
                  </Link>
                </div>
                <div className={styles.navItem}>
                  <Link
                    to="/news"
                    className={`${styles['nav__link']} ${location.pathname.toLowerCase().startsWith('/news') ? styles['nav__link--active'] : ''}`}
                    onClick={handleLinkClick}
                  >
                    <span className={styles.navText}>News and Events</span>
                  </Link>
                </div>
              </div>

              {/* MOBILE DRAWER CONTACT US CTA */}
              <div className={styles.mobileDrawerCtaWrapper}>
                <Link to="/contact" className={styles.mobileDrawerCta} onClick={handleLinkClick}>
                  <span className={styles.phoneIcon} aria-hidden="true" />
                  <span>Contact us</span>
                </Link>
              </div>
            </div>

            {/* CONTACT US BUTTON */}
            <Link to="/contact" className={styles.cta} onClick={handleLinkClick}>
              <span className={styles.phoneIcon} aria-hidden="true" />
              <span>Contact us</span>
            </Link>

            {/* MOBILE MENU TOGGLE */}
            <button
              className={`${styles['menu-toggle']} ${isMobileMenuOpen ? styles['menu-toggle--open'] : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
