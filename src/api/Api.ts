import axios from "axios";
import {
  AvailableReservationsData,
  CheckDates,
  CreateTicket,
  LoginData,
  RegisterData,
  ReserveSlot,
} from "../features/types";

let Api = axios.create({
  baseURL: "http://localhost:8000/api",
});

Api.defaults.withCredentials = true;

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error || (error.response && error.response.status === 500) || !error.response) {
      return Promise.reject(Error("Something went wrong. Try again later."));
    }
    return Promise.reject(error);
  }
);

export const login = async (credentials: LoginData) => {
  await Api.get("/csrf-cookie");
  await Api.post("/login", credentials);
};

export const register = async (credentials: RegisterData) => {
  await Api.get("/csrf-cookie");
  await Api.post("/register", credentials);
};

export const auth = async () => {
  await Api.get("/csrf-cookie");
  const data = await Api.get("/user");
  return data;
};

export const logout = async () => {
  await Api.get("/csrf-cookie");
  await Api.post("/logout");
};

export const checkParking = async (dates: CheckDates) => {
  await Api.get("/csrf-cookie");
  const data = Api.post("/checkParking", dates);
  return data;
};

export const reserveSlot = async (credentials: ReserveSlot) => {
  await Api.get("/csrf-cookie");
  await Api.post("/reserveSlot", credentials);
};

export const getActiveReservations = async () => {
  await Api.get("/csrf-cookie");
  const fetchedData = await Api.get("/active_reservations");
  return fetchedData.data;
};

export const carsOnParking = async () => {
  await Api.get("/csrf-cookie");
  const fetchedData = await Api.get("/carsOnParking");
  return fetchedData.data;
};

export const getAvailableReservations = async (data: AvailableReservationsData) => {
  await Api.get("/csrf-cookie");
  const fetchedData = await Api.post("/availableReservations", data);
  return fetchedData.data;
};

export const cancelReservation = async (reservation_id: string) => {
  await Api.get("/csrf-cookie");
  await Api.post("/cancelReservation", { reservation_id });
};

export const percentageStatus = async (dates: CheckDates) => {
  await Api.get("/csrf-cookie");
  const fetchedData = await Api.post("/percentageStatus", dates);
  return fetchedData.data;
};

export const createTicket = async (data: CreateTicket) => {
  await Api.get("/csrf-cookie");
  await Api.post("/createTicket", data);
};

export const getUserTicket = async () => {
  await Api.get("/csrf-cookie");
  const fetchedData = await Api.get("/getUserTicket");
  return fetchedData.data;
};

export const addTicketMessage = async (message: string) => {
  await Api.get("/csrf-cookie");
  const fetchedData = await Api.post("/addTicketMessage", { message });
  return fetchedData.data;
};

export const getTickets = async () => {
  await Api.get("/csrf-cookie");
  const fetchedData = await Api.get("/getTickets");
  return fetchedData.data;
};

export const getTicketById = async (id: number) => {
  await Api.get("/csrf-cookie");
  const fetchedData = await Api.post("/getTicketById", { id });
  return fetchedData.data;
};

export default Api;
