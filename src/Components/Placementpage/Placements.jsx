import React from "react";
import styles from "../../Styles/Placementpage/Placements.module.css";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import RecruitersSection from "./RecruitersSection";
import GuidanceSection from "./GuidanceSection";
import TrainingProcessSection from "./TrainingProcessSection";
import PlacedStudentsSection from "./PlacedStudentsSection";
import FaqSection from "./FaqSection";

export default function Placements() {
  return (
    <main className={styles.placementPage}>
      {/* 1. Hero Section: Building Careers. Creating Success Stories */}
      <HeroSection />

      {/* 2. Stats Section: Placement Success by the Numbers */}
      <StatsSection />

      {/* 3. Recruiters Section: Our Recruiting Partners */}
      <RecruitersSection />

      {/* 4. Guidance Section: Career Guidance That Makes a Difference */}
      <GuidanceSection />

      {/* 5. Campus Training Process Section */}
      <TrainingProcessSection />

      {/* 6. Placed Students Testimonial Section */}
      <PlacedStudentsSection />

      {/* 7. FAQ Section: Got Questions? We've Got Answers */}
      <FaqSection />
    </main>
  );
}
