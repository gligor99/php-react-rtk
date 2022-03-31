import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import ReadSinglePost from "./pages/ReadSinglePost";
import Navbar from "./components/Navbar";
import { useFetchSinglePostQuery } from "./features/posts/postsApiSlice";

function App() {
  const { data } = useFetchSinglePostQuery(4);
  console.table(data);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index exact element={<Posts />} />
        <Route path="post/create" element={<CreatePost />} />
        <Route path="post/:id/edit" element={<UpdatePost />} />
        <Route path="post/:id/read" element={<ReadSinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
