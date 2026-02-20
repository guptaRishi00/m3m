"use client";

import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import ProjectHighlights from "@/components/ProjectHighlights";
import ScheduleModal from "@/components/ScheduleModal";
import PricingSection from "@/components/PricingSection";
import FloorPlanAmenities from "@/components/FloorPlanAmenities";
import ResidentialProjects from "@/components/ResidentialProjects";
import CommercialProjects from "@/components/CommercialProjects";
import LocationAdvantages from "@/components/LocationAdvantages";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyScheduleButton from "@/components/StickyScheduleButton";
import FloatingContactMenu from "@/components/FloatingContactMenu";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Header onEnquireClick={() => setIsModalOpen(true)} />
      <div id="home">
        <HeroSection />
      </div>
      <div id="project-highlights">
        <ProjectHighlights onBrochureClick={() => setIsModalOpen(true)} />
      </div>
      <div id="pricing">
        <PricingSection onEnquire={() => setIsModalOpen(true)} />
      </div>
      <div id="floor-plan">
        <FloorPlanAmenities onViewPlan={() => setIsModalOpen(true)} />
      </div>
      <div id="projects">
        <ResidentialProjects onEnquire={() => setIsModalOpen(true)} />
      </div>
      {/* <CommercialProjects onEnquire={() => setIsModalOpen(true)} /> */}
      <div id="location">
        <LocationAdvantages />
      </div>
      <FAQSection />
      <Footer onEnquire={() => setIsModalOpen(true)} />
      <StickyScheduleButton onClick={() => setIsModalOpen(true)} />
      <FloatingContactMenu onEmailClick={() => setIsModalOpen(true)} />
      <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
