export interface Appointment {
  _id: string;
  selectedDate: string;
  selectedTime: string;
  fullName: string;
  email: string;
  address?: string;
  phone: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  clientId?: string;
  createdAt: string;
  updatedAt: string;
}
