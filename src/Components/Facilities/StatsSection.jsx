import React from "react";
import styles from "../../Styles/Facilities/StatsSection.module.css";
import CountUpNumber from "../Common/CountUpNumber";

export default function StatsSection() {
  return (
    <section className={styles.statsBar} aria-label="Campus Statistics">
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <CountUpNumber as="span" text="24" className={styles.statNumber} />
          <span className={styles.statLabel}>Years of Excellence</span>
        </div>
        <div className={styles.statItem}>
          <CountUpNumber as="span" text="100+" className={styles.statNumber} />
          <span className={styles.statLabel}>Acres of Green Campus</span>
        </div>
        <div className={styles.statItem}>
          <CountUpNumber as="span" text="10+" className={styles.statNumber} />
          <span className={styles.statLabel}>Campus Facilities</span>
        </div>
      </div>
    </section>
  );
}
