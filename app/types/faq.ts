// types/faq.ts
export type FaqCategory = 'General hotel information' | 'Reservations' | 'Azusa Rewards' | 'Voucher Codes (e-certs)' | 'Best Rate Guarantee (BRG)' | 'Gift cards';

export interface FaqItem {
  id: string;
  category: FaqCategory;
  section: 'Hotel policies' | 'Account and support';
  question: string;
  answer: string;
}
