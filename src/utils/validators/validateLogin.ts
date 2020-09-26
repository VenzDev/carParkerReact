import { LoginData } from "../../features/types";

const validate = (input: string, text: string) => {
  if (input.length === 0) return `${text} cannot be empty`;
  return null;
};

export const validateEmail = (email: string) => validate(email, "Email");
export const validatePassword = (password: string) => validate(password, "Password");

export const validInputs = (data: LoginData) => {
  if (!validateEmail(data.email) && !validatePassword(data.password)) return true;
  return false;
};
