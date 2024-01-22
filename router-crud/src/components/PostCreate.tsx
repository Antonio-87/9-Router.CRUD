import { useState } from "react";
import useJsonFetch from "../hooks/useJsonFetch";
import { useNavigate } from "react-router-dom";
import iconClose from "../assets/close.svg";

const PostCreate = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  const addPost = () => {
    const { error } = useJsonFetch(`${import.meta.env.VITE_POSTS_URL}posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 0, content: value }),
    });
    if (error === null) navigate(-1);
  };

  return (
    <div className="container-create">
      <div className="window-create">
        <header className="box-close">
          <img
            className="close"
            src={iconClose}
            alt="close"
            onClick={() => navigate(-1)}
          />
        </header>
        <main>
          <textarea
            className="input-content"
            maxLength={196}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
          ></textarea>
        </main>
        <footer className="box-publish">
          <button
            className="publish"
            onClick={() => {
              addPost();
            }}
          >
            Опубликовать
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PostCreate;
