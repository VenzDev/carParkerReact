import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ReservationsState {
  reservations: Array<string> | null;
  loading: boolean;
}

const initialState: ReservationsState = {
  reservations: null,
  loading: true,
};

const name = "reservations";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    prepare(state, action) {
      state.loading = true;
    },
    setReservations(state, action) {
      state.reservations = action.payload;
      state.loading = false;
    },
  },
});

export const { prepare, setReservations } = slice.actions;

export const selectReservations = (state: RootState) => state.reservations;

export default slice.reducer;
