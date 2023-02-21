import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  works: [],
  work: null,
};

const slice = createSlice({
  name: "works",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },
    // Q U E R Y S
    getAllWorksSuccess(state, action) {
      state.works = action.payload;
    },
    getOneWorkSuccess(state, action) {
      state.work = action.payload;
    },
    // M U T A T I O N S
    updateOneWorkSuccess(state, action) {
      state.work = action.payload;
    },
  },
});

export const { getAllWorksSuccess, getOneWorkSuccess, updateOneWorkSuccess } =
  slice.actions;
export default slice.reducer;
