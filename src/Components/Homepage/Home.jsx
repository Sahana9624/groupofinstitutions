import React from "react";
import styles from "../../Styles/Home/Home.module.css";
import HeroSection from "./HeroSection";
import AccreditationsSection from "./AccreditationsSection";
import ProgramsSection from "./ProgramsSection";
import InstitutionsSection from "./InstitutionsSection";
import WhyStudySection from "./WhyStudySection";
import LegacySection from "./LegacySection";
import PlacementSection from "./PlacementSection";
import LifeAtMTSection from "./LifeAtMTSection";
import TestimonialsSection from "./TestimonialsSection";

export default function Home() {
  return (
    <main className={styles.home || ""}>
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. ACCREDITATIONS & AFFILIATIONS */}
      <AccreditationsSection />

      {/* 3. MILESTONES / STATS SECTION */}
      <ProgramsSection />

      {/* 4. EXPLORE INSTITUTIONS SECTION */}
      <InstitutionsSection />

      {/* 5. WHY STUDY @MTGI SECTION */}
      <WhyStudySection />

      {/* 6. A LEGACY BUILT ON EXCELLENCE */}
      <LegacySection />

      {/* 6. PLACEMENT & CAREER GROWTH */}
      <PlacementSection />

      {/* 7. CAMPUS LIFE @ MTGI */}
      <LifeAtMTSection />

      {/* 8. STUDENT TESTIMONIALS */}
      <TestimonialsSection />
    </main>
  );
}