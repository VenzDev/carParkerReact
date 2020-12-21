import axios from "axios";
import {
  AddTicketProps,
  AdminUser,
  AvailableReservationsData,
  CheckDates,
  CreateTicket,
  LoginData,
  RegisterData,
  ReserveSlot,
} from "../features/types";

let baseURL = "https://api.carparker.tk/api";
if (process.env.NODE_ENV !== "production")
  baseURL = "http://localhost:8000/api";

let Api = axios.create({
  baseURL,
});

Api.defaults.withCredentials = true;

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      !error ||
      (error.response && error.response.status === 500) ||
      !error.response
    ) {
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
  return await Api.get("/user");
};

export const logout = async () => {
  await Api.get("/csrf-cookie");
  await Api.post("/logout");
};

export const checkParking = async (dates: CheckDates) => {
  await Api.get("/csrf-cookie");
  return await Api.post("/checkParking", dates);
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

export const getAvailableReservations = async (
  data: AvailableReservationsData
) => {
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

export const addTicketMessage = async (data: AddTicketProps) => {
  await Api.get("/csrf-cookie");
  const fetchedData = await Api.post("/addTicketMessage", data);
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

export const deleteTicket = async (ticket_id: number) => {
  await Api.get("/csrf-cookie");
  await Api.post("/deleteTicket", { ticket_id });
};

export const setTicketAsFinished = async (ticket_id: number) => {
  await Api.get("/csrf-cookie");
  await Api.post("/setTicketAsFinished", { ticket_id });
};

export const adminCarsOnParking = async () => {
  await Api.get("/csrf-cookie");
  const fetchedData = await Api.get("/adminCarsOnParking");
  return fetchedData.data;
};

export const getAllReservations = async () => {
  await Api.get("/csrf-cookie");
  const fetchedData = await Api.get("/allActiveReservations");
  return fetchedData.data;
};

export const deleleReservation = async (reservation_id: number) => {
  await Api.get("/csrf-cookie");
  await Api.post("/deleteReservation", { reservation_id });
};

export const getAllUsers = async () => {
  await Api.get("/csrf-cookie");
  const fetchedData = await Api.get("/allUsers");
  return fetchedData.data;
};

export const deleteUser = async (user_id: number) => {
  await Api.get("/csrf-cookie");
  await Api.post("/deleteUser", { user_id });
};

export const editUser = async (user: AdminUser) => {
  await Api.get("/csrf-cookie");
  await Api.post("/editUser", user);
};

export const verifyAccount = async (code: string) => {
  await Api.get("/csrf-cookie");
  await Api.post("/verifyAccount", { code });
};

export default Api;
