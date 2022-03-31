import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApiSlice = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost/php_rest_myblog/api/post",
  }),
  tagTypes: ["Post"],
  endpoints(builder) {
    return {
      fetchPosts: builder.query({
        query: () => "/read.php",
        providesTags: (result = [], error, arg) => [
          "Post",
          ...result.map(({ id }) => ({ type: "Post", id })),
        ],
      }),
      fetchSinglePost: builder.query({
        query: (postId) => `/read_single.php?id=${postId}`,
      }),
      addNewPost: builder.mutation({
        query: (initialPost) => ({
          url: "/create.php",
          method: "POST",
          // We need to include entire post object as the body of the request
          body: initialPost,
        }),
        invalidatesTags: ["Post"],
      }),
      editPost: builder.mutation({
        query: (post) => ({
          url: `/update.php`,
          method: "PUT",
          body: post,
        }),
        invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
      }),
    };
  },
});

export const {
  useFetchPostsQuery,
  useFetchSinglePostQuery,
  useAddNewPostMutation,
  useEditPostMutation,
} = postsApiSlice;
