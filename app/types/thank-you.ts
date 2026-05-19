// app/types/thank-you.ts
export interface ConfirmedBookingDetails {
  bookingReference: string;
  guestName: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  totalPaid: string;
  currency: string;
}
