import { configureStore } from "@reduxjs/toolkit";
import { postsApiSlice } from "../features/posts/postsApiSlice";

export const store = configureStore({
  reducer: {
    [postsApiSlice.reducerPath]: postsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postsApiSlice.middleware);
  },
});
