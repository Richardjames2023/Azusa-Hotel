
export interface DealPackage {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  discountPercentage?: number;
  validUntil: string;
  features: string[];
  ctaHref: string;
  badgeText?: string;
}
