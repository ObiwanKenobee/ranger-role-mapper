
import React from 'react';
import { RoleDetails } from '../types';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RoleCardProps {
  role: RoleDetails;
}

const RoleCard: React.FC<RoleCardProps> = ({ role }) => {
  return (
    <Card className="card-hover animate-fade-in-slow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl font-bold">{role.title}</CardTitle>
          <Badge variant="outline" className="bg-tesla-blue text-white">
            {role.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-tesla-gray">
            <MapPin size={18} />
            <span>{role.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-tesla-gray">
            <Briefcase size={18} />
            <span>{role.jobType}</span>
            <span className="ml-auto text-sm">Req ID: {role.reqId}</span>
          </div>

          <div className="mt-2">
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-tesla-gray">{role.mission}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoleCard;
