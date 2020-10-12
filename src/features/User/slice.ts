import { User } from "../types";
import { combineReducers, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createStatusSlice } from "../statusSlice";

const initialState: User = {
  name: null,
  user_id: null,
  active_reservations: null,
  active_account: false,
  cars_on_parking: null,
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
