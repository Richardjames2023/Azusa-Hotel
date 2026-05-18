// types/rewards.ts
export interface LoyaltyTier {
  name: 'Club' | 'Premium' | 'VIP';
  pointsAccrued: number;
  pointsToNextTier: number;
  multiplier: string;
}

export interface RedemptionPerk {
  id: string;
  title: string;
  pointsRequired: number;
  category: 'Stay' | 'Dining' | 'Upgrade';
  icon: string;
  isAvailable: boolean;
}
