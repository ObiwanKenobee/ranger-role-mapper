
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface BenefitsSectionProps {
  benefits: string[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Benefits & Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-5">
                <div className="h-full flex items-center">
                  <p className="text-tesla-gray">{benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
