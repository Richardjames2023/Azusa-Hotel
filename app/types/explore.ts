// types/explore.ts
export type AttractionCategory = 'Culture' | 'Family' | 'Landmark' | 'Nature' | 'Shopping' | 'Other';

export interface AttractionItem {
  id: string;
  title: string;
  description: string;
  category: AttractionCategory;
  image: string;
  iconType: 'drink' | 'shop' | 'food' | 'landmark';
}
