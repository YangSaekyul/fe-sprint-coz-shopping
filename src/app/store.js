import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "../features/bookmark";

export default configureStore({
  reducer: {
    bookmark: bookmarkReducer,
  },
});
