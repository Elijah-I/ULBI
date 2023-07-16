import { createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  name: string;
}

const fetchUserApi = async <T>(id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return (await response.json()) as T;
};

export const fetchUser = createAsyncThunk<User, number>(
  "user/get",
  async (id, thunkApi) => {
    const response = await fetchUserApi<User>(id);
    return response;
  }
);
