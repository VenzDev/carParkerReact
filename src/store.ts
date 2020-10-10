import { combineReducers, Action, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import userReducer from "./features/User/slice";
import reservationReducer from "./features/Reservations/slice";
import timesReducer from "./features/Time/slice";

export const rootReducer = combineReducers({
  user: userReducer,
  reservations: reservationReducer,
  times:timesReducer
});

const middleware = getDefaultMiddleware({serializableCheck:false})

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware
});


export type AppThunk<R> = ThunkAction<R, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
