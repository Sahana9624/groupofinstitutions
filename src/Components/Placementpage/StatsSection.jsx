import React, { useState } from "react";
import styles from "../../Styles/Placementpage/StatsSection.module.css";
import CountUpNumber from "../Common/CountUpNumber";

const statsData = [
  { id: 1, number: "1000+", label: "Students Placed" },
  { id: 2, number: "200+", label: "Placement Offers a Year" },
  { id: 3, number: "150+", label: "Recruiting Partners" },
  { id: 4, number: "90%", label: "Placements per Year" },
];

export default function StatsSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Placement Success by the Numbers</h2>
          <p className={styles.subtext}>
            Explore our placement records, top recruiters, highest salary packages,
            and the career achievements of our graduates.
          </p>
        </div>

        {/* GOLDEN BORDER STATS BOX */}
        <div className={styles.statsContainer}>
          <div
            className={styles.statsGrid}
            onMouseLeave={() => {
              if (window.innerWidth > 1024) {
                setActiveCardIndex(0);
              }
            }}
          >
            {statsData.map((stat, index) => {
              const isActive = activeCardIndex === index;

              return (
                <div
                  key={stat.id}
                  className={`${styles.statCard} ${isActive ? styles.statCardActive : styles.statCardDefault}`}
                  onMouseEnter={() => {
                    if (window.innerWidth > 1024) {
                      setActiveCardIndex(index);
                    }
                  }}
                >
                  <CountUpNumber
                    as="h3"
                    className={styles.statNumber}
                    text={stat.number}
                  />
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
