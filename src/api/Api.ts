import axios from "axios";
import { LoginData, RegisterData } from "../features/types";

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
  const data = Api.get("/user");
  return data;
};

export const logout = async () => {
  await Api.get("/csrf-cookie");
  await Api.post("/logout");
};

export default Api;
