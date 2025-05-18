
import React from 'react';
import { Award } from 'lucide-react';

interface SkillsSectionProps {
  skills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="py-12 bg-tesla-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Required Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white p-5 rounded-lg flex items-center gap-3 shadow-sm card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Award size={24} className="text-tesla-blue flex-shrink-0" />
              <p className="text-tesla-gray">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
