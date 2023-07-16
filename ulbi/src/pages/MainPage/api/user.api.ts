import { api } from "api";

interface User {
  name: string;
}

const userApi = api
  .enhanceEndpoints({ addTagTypes: ["User"] })
  .injectEndpoints({
    endpoints: (build) => ({
      fetchUser: build.query<User, number>({
        query: (id) => `users/${id}`,
        providesTags: ["User"]
      }),
      reFetchUser: build.mutation({
        query: (id) => `users/${id}`,
        invalidatesTags: ["User"]
      })
    }),
    overrideExisting: false
  });

export const {
  useFetchUserQuery,
  useLazyFetchUserQuery,
  useReFetchUserMutation
} = userApi;
