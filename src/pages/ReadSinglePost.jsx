import React from "react";
import { useParams } from "react-router-dom";
import { useFetchSinglePostQuery } from "../features/posts/postsApiSlice";

const ReadSinglePost = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useFetchSinglePostQuery(id);

  if (isLoading) {
    return (
      <div className="container p-3">
        <div className="row">
          <div className="col-6 offset-3">
            <h1 className="text-center">Loading ...</h1>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container p-3">
        <div className="row">
          <div className="col-6 offset-3">
            <h1 className="text-center">
              {error.status}, {error.error}
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="p-5 bg-secondary text-center h2 text-white">
        {data.title}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 d-flex justify-content-between text-muted border-bottom">
            <span>Category: {data.category_name}</span>
            <span>Author: {data.author}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-6 offset-3 py-4">
            <article className="border p-3">{data.body}</article>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadSinglePost;
