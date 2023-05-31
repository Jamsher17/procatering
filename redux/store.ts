"use client";

import { configureStore } from "@reduxjs/toolkit";
import billCounterReducer from "./billCounterSlice";

export const store = configureStore({
  reducer: {
    billCounter: billCounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
