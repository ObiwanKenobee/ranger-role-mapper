
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface ResponsibilitiesSectionProps {
  responsibilities: string[];
}

const ResponsibilitiesSection: React.FC<ResponsibilitiesSectionProps> = ({ responsibilities }) => {
  return (
    <section className="py-12 bg-white" id="responsibilities">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Key Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {responsibilities.map((responsibility, index) => (
            <Card 
              key={index} 
              className="card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 flex items-start gap-3">
                <Check className="min-w-[20px] h-5 text-tesla-blue mt-1" />
                <p className="text-tesla-gray">{responsibility}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsibilitiesSection;
