import React from "react";
import styles from "../../../Styles/Aboutpage/FounderAndChairman/FounderAndChairman.module.css";
import HeroSection from "./HeroSection";
import LeadershipSection from "./LeadershipSection";

export default function FounderAndChairman() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <LeadershipSection />
    </div>
  );
}
