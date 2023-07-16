import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../services/fetch.user";

interface User {
  name: string;
}

interface InitialState {
  user?: User;
  error?: Error;
  is_loading: boolean;
}

const initialState: InitialState = {
  user: null,
  is_loading: true
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUser.pending, (state) => {
        state.user = undefined;
        state.error = undefined;
        state.is_loading = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.user = undefined;
        state.error = action.payload as Error;
        state.is_loading = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = undefined;
        state.is_loading = false;
      })
});
