import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApiSlice = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost/php_rest_myblog/api/post",
  }),
  endpoints(builder) {
    return {
      fetchPosts: builder.query({
        query() {
          return `read.php`;
        },
      }),
    };
  },
});

export const {useFetchPostsQuery} = postsApiSlice;
