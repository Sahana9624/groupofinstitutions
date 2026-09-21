import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { newsItems } from "../data/newsData";
import styles from "../Styles/NewsDetail.module.css";
import ctaBg from "../assets/Images/cta-bg.jpg";

export default function NewsDetail() {
  const { slug } = useParams();

  const newsItem = newsItems.find(
    (item) => item.slug === slug || item.id === slug
  );

  if (!newsItem) {
    return <Navigate to="/news" replace />;
  }

  return (
    <main className={styles.detailPage}>
      {/* HERO BANNER (Image 2 Referral: Left-aligned breadcrumb and title) */}
      <section className={styles.heroBanner}>
        <img
          src={ctaBg}
          alt="Mother Terasa College Campus"
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSeparator}>&gt;</span>
            <Link to="/news" className={styles.breadcrumbLink}>
              News and Events
            </Link>
          </nav>
          <h1 className={styles.heroTitle}>News and Events</h1>
        </div>
      </section>

      {/* DETAIL CONTENT SECTION (Image 2: Side-by-side Image & Content) */}
      <div className={styles.container}>
        <section className={styles.detailCard}>
          <div className={styles.imgWrapper}>
            <img
              src={newsItem.img}
              alt={newsItem.title}
              className={styles.detailImg}
            />
            <div className={styles.dateBadge}>
              <span className={styles.badgeDay}>{newsItem.day || "11"}</span>
              <span className={styles.badgeMonth}>{newsItem.month || "Mar"}</span>
            </div>
          </div>

          <div className={styles.textContent}>
            <h2 className={styles.newsTitle}>{newsItem.title}</h2>
            <p className={styles.newsDescription}>{newsItem.description}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
