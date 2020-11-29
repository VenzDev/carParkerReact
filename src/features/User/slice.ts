import { User } from "../types";
import { combineReducers, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createStatusSlice } from "../statusSlice";

const initialState: User = {
  name: null,
  user_id: null,
  active_reservations: null,
  isActive: false,
  cars_on_parking: null,
  role: null,
  has_ticket: false,
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
      state.isActive = action.payload.isActive;
      state.role = action.payload.role;
      state.has_ticket = action.payload.has_ticket;
    },
    logout: (state, action) => {
      state.name = null;
    },
  },
});

const reducer = combineReducers({
  data: slice.reducer,
  status: status.reducer,
});

export const { login, logout } = slice.actions;

export const getUserState = (state: RootState) => state.user;
export const selectUser = createSelector(getUserState, (state) => state.data);
export const selectStatus = createSelector(getUserState, (state) => state.status);

export default reducer;
