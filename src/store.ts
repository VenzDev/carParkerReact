import { combineReducers, Action, configureStore } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import userReducer from "./features/User/slice";
import reservationReducer from "./features/Reservations/slice";

export const rootReducer = combineReducers({
  user: userReducer,
  reservations: reservationReducer,
});

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export type AppThunk<R> = ThunkAction<R, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
