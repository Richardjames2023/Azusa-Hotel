// app/types/rooms.ts

export interface RoomFeature {
  label: string;
  icon: string;
}

export interface RoomSuite {
  id: string;
  title: string;
  category: string;
  image: string; // Used if your previous single-image types are cached
  images?: string[]; // Made optional to prevent strict compilation snags
  size: string;
  occupancy: string;
  pricePerNight: number;
  currency: string;
  features: RoomFeature[];
  href: string;
  delay?: number; // Made optional so old data rows don't crash
}
