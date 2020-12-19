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
  is_active: boolean;
  cars_on_parking: number | null;
  role: string | null;
  has_ticket: boolean;
}

export interface Reservation {
  id: string;
  user_id: number;
  reservation_from: string;
  system_reservation_from: string;
  system_reservation_to: string;
  reservation_to: string;
  parking_slot_id: number;
  status: string;
  to_open: number;
  to_close: number;
  to_system_close: number;
  can_cancel: boolean;
}

export interface CheckDates {
  from: string;
  to: string;
}

export interface ReserveSlot {
  user_id: number;
  from: string;
  to: string;
  parking_slot_id: number;
}

export interface AvailableReservationsData {
  from: string | null;
  to: string | null;
  parking_slot_id: string | null;
}

export interface CreateTicket {
  title: string;
  content: string;
}

export interface Message {
  content: string;
  user: {
    id: number;
    name: string;
    role: string;
  };
}

export interface Ticket {
  id: number;
  title: string;
  messages: Array<Message>;
}

export interface AddTicketProps {
  ticket_id: number;
  content: string;
}

interface AdminReservation extends Reservation {
  user: {
    id: number;
    name: string;
  };
}

export interface AdminReservations {
  current_page: number;
  per_page: number;
  from: number;
  to: number;
  data: Array<AdminReservation>;
}

export interface AdminUser extends User {
  id: number;
  email: string;
  rfid_card_id: string;
}
