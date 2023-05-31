"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface BillCounterState {
  bill: number;
}

const initialState: BillCounterState = {
  bill: 0.0,
};

export const billCounterSlice = createSlice({
  name: "billCounter",
  initialState,
  reducers: {
    add: (state, action) => {
      state.bill += action.payload;
    },
    subtract: (state, action) => {
      state.bill -= action.payload;
    },
  },
});

export const { add, subtract } = billCounterSlice.actions;
export default billCounterSlice.reducer;
