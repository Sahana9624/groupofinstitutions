import React, { useState } from "react";
import styles from "../../Styles/Home/ProgramsSection.module.css";
import CountUpNumber from "../Common/CountUpNumber";

export default function ProgramsSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const stats = [
    {
      id: "students-placed",
      number: "1000+",
      label: "Students Placed"
    },
    {
      id: "placement-offers",
      number: "200+",
      label: "Placement Offers a Year"
    },
    {
      id: "recruiting-partners",
      number: "150+",
      label: "Recruiting Partners"
    },
    {
      id: "placements-rate",
      number: "90%",
      label: "Placements per Year"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2 className={styles.heading}>A Legacy of Excellence, Built Over Time</h2>
          <p className={styles.subtext}>
            From years of educational excellence to a growing community of learners, explore the milestones that define us.
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
            {stats.map((stat, index) => {
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
