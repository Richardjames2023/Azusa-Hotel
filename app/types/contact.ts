export interface CorporateContactInput {
  companyName: string;
  contactName: string;
  businessEmail: string;
  phoneLine: string;
  enquiryType: 'corporate_booking' | 'event_space' | 'partnership' | 'general';
  estimatedGuests: number;
  messageDetails: string;
}
