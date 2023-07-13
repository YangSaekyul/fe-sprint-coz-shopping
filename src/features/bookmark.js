import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {},
  reducers: {
    toggleBookmark: (state, action) => {
      const id = action.payload;
      state[id] = !state[id];
    },
    removeBookmark: (state, action) => {
      const id = action.payload;
      state[id] = false;
    },
  },
});

export const { toggleBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
