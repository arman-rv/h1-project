import { createSlice } from "@reduxjs/toolkit";

const reservCourse = createSlice({
  name: "reservCourse",
  initialState: {
    totalCount: [],
  },
  reducers: {
    onChange: (state, action) => {
      state.totalCount = action.payload;
    },
  },
});

export const { onChange } = reservCourse.actions;

export default reservCourse.reducer;
