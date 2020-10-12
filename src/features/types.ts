export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface User {
  user_id: number | null;
  name: string | null;
  active_reservations: number | null;
  active_account: boolean;
  cars_on_parking: number | null;
}

export interface Reservation {
  id: string;
  user_id: number;
  reservation_from: string;
  system_reservation_from: string;
  system_reservation_to: string;
  reservation_to: string;
  parking_slot_id: string;
  status: string;
  to_open: string | null;
  to_close: string | null;
  to_system_close: string | null;
}

export interface CheckDates {
  from: string;
  to: string;
}

export interface ReserveSlot {
  user_id: number;
  from: string;
  to: string;
  parking_slot_id: string;
}
