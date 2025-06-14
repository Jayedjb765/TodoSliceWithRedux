import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const basApi = createApi({
  reducerPath: "basApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
    }),
  }),
});
