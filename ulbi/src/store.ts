import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "api";
import { userSlice } from "./pages/MainPage/slice/main.page.slice";

export const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
