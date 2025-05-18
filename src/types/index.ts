
export interface RoleDetails {
  title: string;
  category: string;
  location: string;
  reqId: string;
  jobType: string;
  mission: string;
  responsibilities: string[];
  skills: string[];
  benefits: string[];
  compensation: {
    levelI: string;
    levelII: string;
    levelIII: string;
  };
  alignmentWithRangers: string[];
}
