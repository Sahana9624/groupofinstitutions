import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Homepage/Home";
import Header from "./Components/Header";
import InstitutionOverview from "./Components/Aboutpage/InstitutionOverview/InstitutionOverview";
import OurCoreValues from "./Components/Aboutpage/OurCoreValues/OurCoreValues";
import FounderAndChairman from "./Components/Aboutpage/FounderAndChairman/FounderAndChairman";
// import Academics from "./Components/Academics";
import Facilities from "./Components/Facilities";
import CampusLife from "./Components/Campuspage/CampusLife";
// import Committee from "./Components/Committee";
import Contact from "./Components/Contact";
import News from "./Components/News";
// import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./Components/Privacypolicy";
import TermsAndConditions from "./Components/Termsandconditions";
import ReturnRefundPolicy from "./Components/Returnrefundpolicy";
import CancellationPolicy from "./Components/Cancellationpolicy";
import FaqPage from "./Components/FaqPage";
// import CourseDescription from "./Components/Coursedescription";
import ApplyPage from "./Components/ApplyPage/ApplyPage";
import NewsDetail from "./Components/NewsDetail";
// import GalleryDetail from "./Components/GalleryDetail";
import CtaSection from "./Components/CtaSection";
import Placements from "./Components/Placementpage/Placements";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <ScrollToTop />
        <Header />
        <Link
          to="/apply"
          className="global-admissions-tab"
          aria-label="Admissions Open 2026-2027 - Apply Now"
        >
          <span className="global-admissions-tab-text">Admissions open</span>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/admissions" element={<ApplyPage />} />
          <Route path="/about" element={<InstitutionOverview />} />
          <Route path="/about/overview" element={<InstitutionOverview />} />
          <Route path="/about/core-values" element={<OurCoreValues />} />
          <Route path="/about/founder-chairman" element={<FounderAndChairman />} />
          {/* <Route path="/academics" element={<Academics />} /> */}
          <Route path="/facilities" element={<Facilities />} />
          {/* <Route path="/faculty" element={<CampusLife />} /> */}
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/placements" element={<Placements />} />
          {/* <Route path="/committee" element={<Committee />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/News" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/News/:slug" element={<NewsDetail />} />
          {/* <Route path="/Gallery" element={<Gallery />} /> */}
          {/* <Route path="/gallery/:slug" element={<GalleryDetail />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          {/* <Route path="/course-description" element={<CourseDescription />} /> */}
          {/* <Route path="/course-description/:courseSlug" element={<CourseDescription />} /> */}
        </Routes>
        <CtaSection />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;