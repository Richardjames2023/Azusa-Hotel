
export interface HeroCard {
  id: string;
  title: string;
  subtitle?: string; // The '?' means this field is optional
  image: string;
}

export interface HeroSlide {
  id: string;
  titleLight: string;
  titleBold: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  bgImage: string;
  cards: HeroCard[]; // An array of the card objects defined above
}
