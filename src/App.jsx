import React from "react";
import { useFetchPostsQuery } from "./features/posts/postsApiSlice";

function App() {
  const { data, isFetching } = useFetchPostsQuery();
  console.log(data);
  return <div>App</div>;
}

export default App;
