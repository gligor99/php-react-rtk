import React, { useState } from "react";
import { useAddNewPostMutation } from "../features/posts/postsApiSlice";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [inputs, setInputs] = useState([]);
  const [status, setStatus] = useState(undefined);
  const [addNewPost, { isLoading }] = useAddNewPostMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const canSave = [inputs].every(Boolean) && !isLoading;

  const savePost = async () => {
    if (canSave) {
      try {
        await addNewPost(inputs).unwrap();
        setStatus({ type: "success" });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        console.log("Failed to save the post", error);
      }
    }
  };

  return (
    <>
      <div className="p-5 bg-secondary text-center h2 text-white">
        <span>Create Post</span>
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
                className="form-control"
                type="number"
                placeholder="Category"
                name="category_id"
                onChange={handleChange}
                aria-label="default input example"
              />
              <button
                className="btn btn-primary form-control my-2"
                onClick={savePost}
                disabled={!canSave}
              >
                Create post
              </button>
            </form>
            {status?.type === "success" && (
              <div className="alert alert-warning" role="alert">
                Post Created
              </div>
            )}
            {status?.type === "error" && (
              <div className="alert alert-danger" role="alert">
                Error. Something went wrong. Post is not created!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
