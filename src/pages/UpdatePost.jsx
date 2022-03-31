import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEditPostMutation } from "../features/posts/postsApiSlice";

const UpdatePost = () => {
  const [inputs, setInputs] = useState([]);
  const { postId } = useParams();
  const navigate = useNavigate();

  const [updatePost, { isLoading }] = useEditPostMutation();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value, postId }));
  };

  const savePost = async () => {
    if (inputs) {
      await updatePost(inputs);
      navigate("/");
    }
  };

  return (
    <>
      <div className="p-5 bg-secondary text-center h2 text-white">
        <span>Update Post: {postId}</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <form>
              <input
                className="form-control my-2"
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                aria-label="default input example"
              />
              <input
                className="form-control my-2"
                type="text"
                placeholder="Article"
                name="body"
                onChange={handleChange}
                aria-label="default input example"
              />
              <input
                className="form-control my-2"
                type="text"
                placeholder="Author"
                name="author"
                onChange={handleChange}
                aria-label="default input example"
              />
              <input
                className="form-control my-2"
                type="number"
                placeholder="Category"
                name="category_id"
                onChange={handleChange}
                aria-label="default input example"
              />
              <input
                className="form-control my-2"
                hidden
                type="number"
                name="id"
                defaultValue={postId}
                aria-label="default input example"
              />
              <button
                className="btn btn-primary form-control"
                onClick={savePost}
              >
                Update post
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePost;
