import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/News.module.css";
import {
  featuredNews,
  generalNews,
  academicsNews,
  placementsNews,
} from "../data/newsData";
import ctaBg from "../assets/Images/cta-bg.jpg";
import arrowUpRight from "../assets/Icons/arrow-up-right.svg";

export default function News() {
  return (
    <main className={styles.newsPage}>
      {/* HERO BANNER (Image 1: Centered title & breadcrumbs) */}
      <section className={styles.heroBanner}>
        <img
          src={ctaBg}
          alt="Mother Terasa College Campus"
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>News and Events</h1>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSeparator}>&gt;</span>
            <span className={styles.breadcrumbCurrent}>News and Events</span>
          </nav>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className={styles.container}>
        {/* FEATURED NEWS CARD */}
        {featuredNews && (
          <section className={styles.featuredSection}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredImgWrapper}>
                <img
                  src={featuredNews.img}
                  alt={featuredNews.title}
                  className={styles.featuredImg}
                />
                <div className={styles.dateBadge}>
                  <span className={styles.badgeDay}>{featuredNews.day}</span>
                  <span className={styles.badgeMonth}>{featuredNews.month}</span>
                </div>
              </div>
              <div className={styles.featuredBody}>
                <h2 className={styles.featuredTitle}>{featuredNews.title}</h2>
                <p className={styles.featuredDesc}>{featuredNews.description}</p>
                <Link
                  to={`/news/${featuredNews.slug}`}
                  className={styles.knowMoreBtn}
                >
                  <span className={styles.arrowIcon} aria-hidden="true" />
                  <span className={styles.knowMoreText}>Know more</span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* TOP ROW: GENERAL NEWS GRID */}
        <section className={styles.gridSection}>
          <div className={styles.newsGrid}>
            {generalNews.map((item) => (
              <Link
                to={`/news/${item.slug}`}
                key={item.id}
                className={styles.newsCard}
              >
                <div className={styles.cardImgWrapper}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className={styles.cardImg}
                  />
                  <div className={styles.dateBadge}>
                    <span className={styles.badgeDay}>{item.day}</span>
                    <span className={styles.badgeMonth}>{item.month}</span>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ACADEMICS SECTION */}
        <section className={styles.categorySection}>
          <h2 className={styles.sectionHeading}>Academics</h2>
          <div className={styles.newsGrid}>
            {academicsNews.map((item) => (
              <Link
                to={`/news/${item.slug}`}
                key={item.id}
                className={styles.newsCard}
              >
                <div className={styles.cardImgWrapper}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className={styles.cardImg}
                  />
                  <div className={styles.dateBadge}>
                    <span className={styles.badgeDay}>{item.day}</span>
                    <span className={styles.badgeMonth}>{item.month}</span>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* PLACEMENTS SECTION */}
        <section className={styles.categorySection}>
          <h2 className={styles.sectionHeading}>Placements</h2>
          <div className={styles.newsGrid}>
            {placementsNews.map((item) => (
              <Link
                to={`/news/${item.slug}`}
                key={item.id}
                className={styles.newsCard}
              >
                <div className={styles.cardImgWrapper}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className={styles.cardImg}
                  />
                  <div className={styles.dateBadge}>
                    <span className={styles.badgeDay}>{item.day}</span>
                    <span className={styles.badgeMonth}>{item.month}</span>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}