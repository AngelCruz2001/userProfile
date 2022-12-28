import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { usersSlice } from "./users/usersSlice";
import { businessSlice } from "./business/businessSlice";

export const store = configureStore({
  reducer: {
    usersReducer: usersSlice.reducer,
    businessReducer: businessSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
