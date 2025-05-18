
import React from 'react';
import HeroSection from '../components/HeroSection';
import RoleCard from '../components/RoleCard';
import ResponsibilitiesSection from '../components/ResponsibilitiesSection';
import SkillsSection from '../components/SkillsSection';
import BenefitsSection from '../components/BenefitsSection';
import CompensationSection from '../components/CompensationSection';
import AlignmentSection from '../components/AlignmentSection';
import { innovationTechnicianRole } from '../data/innovationTechnicianRole';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12" id="role">
        <h2 className="section-heading">Featured Role</h2>
        <RoleCard role={innovationTechnicianRole} />
      </div>
      
      <ResponsibilitiesSection responsibilities={innovationTechnicianRole.responsibilities} />
      
      <SkillsSection skills={innovationTechnicianRole.skills} />
      
      <CompensationSection compensation={innovationTechnicianRole.compensation} />
      
      <BenefitsSection benefits={innovationTechnicianRole.benefits} />
      
      <AlignmentSection alignmentPoints={innovationTechnicianRole.alignmentWithRangers} />
      
      <footer className="py-8 bg-tesla-black text-white text-center">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Tesla Tech Rangers | All Rights Reserved</p>
          <p className="text-sm mt-2 text-gray-400">Building the sustainable future, one role at a time</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
