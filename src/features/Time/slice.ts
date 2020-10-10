import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface TimeState {
  startTime:string | null,
  endTime:string | null,
}

const initialState: TimeState = {
    startTime:null,
    endTime:null
};

const name = "times";

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setTimes(state, action) {
      state.startTime = action.payload.startTime;
      state.endTime  = action.payload.endTime;
    },
  },
});

export const { setTimes } = slice.actions;

export const selectTimes = (state: RootState) => state.times;

export default slice.reducer;
