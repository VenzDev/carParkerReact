import styled from "styled-components";

export const DASHBOARD = "DASHBOARD";
export const LOGIN = "LOGIN";

export interface IToast {
  isToast: boolean;
  message: string | null;
}

export const isToast = (status: string): IToast => {
  const message = localStorage.getItem(status);
  console.log(message);
  if (message) {
    console.log(message);
    localStorage.removeItem(status);
    return { isToast: true, message };
  }
  return { isToast: false, message: null };
};

export const setToast = (status: string, message: string) => {
  localStorage.setItem(status, message);
};

export const Toast = styled.div`
  color: white;
  background-color: blue;
  padding: 0.5rem 1rem;
  border-radius: 6px;
`;
