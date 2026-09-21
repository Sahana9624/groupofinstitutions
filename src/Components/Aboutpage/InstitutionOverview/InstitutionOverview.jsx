import React from "react";
import styles from "../../../Styles/Aboutpage/InstitutionOverview/InstitutionOverview.module.css";
import HeroSection from "./HeroSection";
import EmpowerSection from "./EmpowerSection";
import GuidedSection from "./GuidedSection";
import VisionMissionSection from "./VisionMissionSection";

export default function InstitutionOverview() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <EmpowerSection />
      <GuidedSection />
      <VisionMissionSection />
    </div>
  );
}
