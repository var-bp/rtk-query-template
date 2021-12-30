import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

// https://redux-toolkit.js.org/rtk-query/api/createApi

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://reqres.in/api/',
  prepareHeaders: (headers, { getState }) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getListUsers: build.query({
      query: (id: number) => `users?page=${id}`,
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body,
      }),
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetListUsersQuery, useCreateUserMutation } = usersApi
