
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign } from 'lucide-react';

interface CompensationSectionProps {
  compensation: {
    levelI: string;
    levelII: string;
    levelIII: string;
  };
}

const CompensationSection: React.FC<CompensationSectionProps> = ({ compensation }) => {
  const levels = [
    { title: "Level I", value: compensation.levelI, color: "bg-tesla-lightgray" },
    { title: "Level II", value: compensation.levelII, color: "bg-tesla-blue text-white" },
    { title: "Level III", value: compensation.levelIII, color: "bg-tesla-darkblue text-white" },
  ];

  return (
    <section className="py-12 tesla-gradient text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Compensation Range</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((level, index) => (
            <Card 
              key={index} 
              className={`card-hover ${level.color} animate-fade-in border-0`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{level.title}</span>
                  <Badge variant="outline" className="bg-white/20 text-white border-none">
                    Hourly Rate
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-6">
                  <DollarSign size={24} className="mr-1" />
                  <span className="text-2xl font-bold">{level.value.replace('$', '')}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompensationSection;
