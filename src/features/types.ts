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
  active_reservations: Array<Reservation> | null;
  active_account: boolean;
}

export interface Reservation {
  id: string;
  user_id: number;
  reservation_from: string;
  reservation_to: string;
  parking_slot_id: string;
  status: string;
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
  status: string;
}
