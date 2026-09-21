import React from "react";
import HeroSection from "./HeroSection";
import PossibilitiesSection from "./PossibilitiesSection";
import CultureSection from "./CultureSection";
import FestiveSection from "./FestiveSection";
import SportsSection from "./SportsSection";
import ResourcesSection from "./ResourcesSection";

export default function CampusLife() {
  return (
    <main>
      {/* 1. HERO SECTION: Campus Life @MTGI */}
      <HeroSection />

      {/* 2. OVERVIEW: A Campus Full of Possibilities */}
      <PossibilitiesSection />

      {/* 3. CULTURE: Culture Comes Alive at MTGI */}
      <CultureSection />

      {/* 4. FESTIVE: Vibrant Festive Celebrations */}
      <FestiveSection />

      {/* 5. SPORTS: A Campus That Plays to Win */}
      <SportsSection />

      {/* 6. RESOURCES: Campus Resources */}
      <ResourcesSection />
    </main>
  );
}
