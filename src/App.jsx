import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import ReadSinglePost from "./pages/ReadSinglePost";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index exact element={<Posts />} />
        <Route path="post/create" element={<CreatePost />} />
        <Route path="post/:postId/edit" element={<UpdatePost />} />
        <Route path="post/:id/read" element={<ReadSinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
