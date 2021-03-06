import { User } from "../types";
import { combineReducers, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createStatusSlice } from "../statusSlice";

const initialState: User = {
  name: null,
  user_id: null,
  active_reservations: null,
  is_active: false,
  cars_on_parking: null,
  role: null,
  has_ticket: false,
  email: null,
};

const status = createStatusSlice("userData");

export const slice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.user_id = action.payload.user_id;
      state.active_reservations = action.payload.active_reservations;
      state.cars_on_parking = action.payload.cars_on_parking;
      state.is_active = action.payload.isActive;
      state.role = action.payload.role;
      state.has_ticket = action.payload.has_ticket;
      state.email = action.payload.email;
    },
    logout: (state, action) => {
      state.name = null;
    },
    setTicket: (state, action) => {
      state.has_ticket = action.payload.has_ticket;
    },
    setActiveAccount: (state, action) => {
      state.is_active = action.payload;
    },
  },
});

const reducer = combineReducers({
  data: slice.reducer,
  status: status.reducer,
});

export const { login, logout, setTicket, setActiveAccount } = slice.actions;

export const getUserState = (state: RootState) => state.user;
export const selectUser = createSelector(getUserState, (state) => state.data);
export const selectStatus = createSelector(
  getUserState,
  (state) => state.status
);

export default reducer;
