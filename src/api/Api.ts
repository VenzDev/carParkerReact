import axios from "axios";
import { CheckDates, LoginData, RegisterData, ReserveSlot } from "../features/types";

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
  console.log(data);
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
  await Api.get("/csrt-cookie");
  const fetchedData = await Api.get("/carsOnParking");
  return fetchedData.data;
};

export default Api;
