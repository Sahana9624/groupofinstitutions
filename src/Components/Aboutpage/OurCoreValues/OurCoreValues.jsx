import React from "react";
import styles from "../../../Styles/Aboutpage/OurCoreValues/OurCoreValues.module.css";
import HeroSection from "./HeroSection";
import DefineSection from "./DefineSection";
import ValuesGridSection from "./ValuesGridSection";

export default function OurCoreValues() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <DefineSection />
      <ValuesGridSection />
    </div>
  );
}
