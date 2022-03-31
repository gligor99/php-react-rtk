import React from "react";
import {
  useFetchPostsQuery,
  useFetchSinglePostQuery,
} from "./features/posts/postsApiSlice";

function App() {
  const { data: posts, isFetching } = useFetchPostsQuery();
  const { data: singlePost } = useFetchSinglePostQuery(3);

  console.table(posts);
  console.table(singlePost)
  return <div>App</div>;
}

export default App;
