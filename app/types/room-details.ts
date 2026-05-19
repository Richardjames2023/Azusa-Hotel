// types/room-details.ts
import { IconType } from "react-icons";

export interface PropertyFeature {
  id: string;
  label: string;
  icon: IconType;
  value: string | number;
}

export interface RecommendedActivity {
  id: string;
  title: string;
  category: string;
  image: string;
  isPopular?: boolean;
}

export interface GuestTestimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  quote: string;
  avatarImage: string;
}
