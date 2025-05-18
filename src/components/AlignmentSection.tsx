
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

interface AlignmentSectionProps {
  alignmentPoints: string[];
}

const AlignmentSection: React.FC<AlignmentSectionProps> = ({ alignmentPoints }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <div className="flex items-center gap-2">
            <span>Tech Rangers Alignment</span>
            <Users className="text-tesla-blue" />
          </div>
        </h2>
        <p className="text-lg mb-8 text-tesla-gray max-w-3xl">
          See how this role aligns with the Tesla Tech Rangers mission to build a sustainable future.
        </p>
        <div className="space-y-4">
          {alignmentPoints.map((point, index) => (
            <Card 
              key={index} 
              className="card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <div className="bg-tesla-blue rounded-full text-white w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-tesla-gray">{point}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="bg-tesla-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlignmentSection;
