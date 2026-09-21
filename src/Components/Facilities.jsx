import React from "react";
import styles from "../Styles/Facilities.module.css";

// Individual Section Components
import HeroSection from "./Facilities/HeroSection";
import StatsSection from "./Facilities/StatsSection";
import AcademicFacilitiesSection from "./Facilities/AcademicFacilitiesSection";
import SportsSection from "./Facilities/SportsSection";
import CampusFacilitiesSection from "./Facilities/CampusFacilitiesSection";

export default function Facilities() {
  const handleScrollToExplore = () => {
    const el = document.getElementById("explore-facilities");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.facilitiesPage}>
      {/* 1. HERO SECTION */}
      <HeroSection onExploreClick={handleScrollToExplore} />

      {/* 2. STATS SECTION */}
      <StatsSection />

      {/* 3. MAIN FACILITY CONTENT WRAPPER */}
      <div className={styles.pageContent} id="explore-facilities">
        {/* 3 & 4. ACADEMIC FACILITIES: LIBRARY (CARD 1) & LABORATORIES (CARD 2 OVERLAPPING ANIMATION) */}
        <AcademicFacilitiesSection />

        {/* 5. PHYSICAL EDUCATION & ACTIVE SPORTS */}
        <SportsSection />

        {/* 6, 7, 8 & 9. CAMPUS FACILITIES: MINI MART, HOSTELS, TRANSPORT & CAFE (OVERLAPPING CARDS ANIMATION) */}
        <CampusFacilitiesSection />
      </div>
    </main>
  );
}
