import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  quotes: [],
  quote: null,
};

const slice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },
    // Q U E R Y S
    getAllQuotes(state, action) {
      state.quotes = action.payload;
    },
    // M U T A T I O N S
  },
});

export const { getAllQuotes } = slice.actions;
export default slice.reducer;
