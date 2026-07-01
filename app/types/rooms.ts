
export interface RoomFeature {
  label: string;
  icon: string;
}

export interface RoomSuite {
  id: string;
  title: string;
  category: string;
  description: string; 
  image: string;       
  images?: string[];  
  size: string;
  occupancy: string;
  bedType?: string;   
  pricePerNight: number;
  currency: string;
  features: RoomFeature[];
  href: string;
  delay?: number;     
}

