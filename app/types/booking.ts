// types/booking.ts
export interface BookingFormInput {
  fullName: string;
  email: string;
  phone: string;
  specialRequests: string;
  guestCount: number;
  idType: 'passport' | 'national_id' | 'driver_license';
  idNumber: string;
  airportTransfer: boolean;
}
