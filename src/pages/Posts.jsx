import React from "react";
import { Link } from "react-router-dom";
import { useFetchPostsQuery } from "../features/posts/postsApiSlice";

const Posts = () => {
  const { data, isLoading, isError, error } = useFetchPostsQuery();

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
      {data?.map((item) => {
        return (
          <div className="container p-3" key={item.id}>
            <div className="row">
              <div className="col-6 offset-3">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <span>{item.title}</span>
                    <span className="text-muted">Author: {item.author}</span>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{`${item.body.substring(
                      0,
                      150
                    )}...`}</p>
                    <Link
                      className="btn btn-warning me-3"
                      to={`post/${item.id}/read`}
                    >
                      Read Post
                    </Link>
                    <button type="submit" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                  <div className="card-footer text-muted d-flex justify-content-between">
                    <span>Category: {item.category_name}</span>
                    <Link to={`post/${item.id}/edit`}>Edit</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
