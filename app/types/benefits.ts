// types/benefits.ts
export interface RateStep {
  number: number;
  title: string;
  description: string;
}

export interface ExclusiveBenefit {
  id: string;
  title: string;
  description: string;
  iconSvg: React.ReactNode;
}
