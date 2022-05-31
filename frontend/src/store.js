import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import textReducer from "./features/textSlice";

export const store = configureStore({
  reducer: { text: textReducer },
  middleware: [...getDefaultMiddleware()],
});
