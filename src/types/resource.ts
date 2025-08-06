export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  currency: string;
  startDate: string;
  endDate: string;
  startCity: string;
  arrivalCity: string;
  image: string;
  category: string;
  duration: string;
  maxTravelers: number;
  difficulty: 'easy' | 'medium' | 'hard';
  highlights: string[];
  included: string[];
  notIncluded: string[];
  createdAt: string;
  updatedAt: string;
} 