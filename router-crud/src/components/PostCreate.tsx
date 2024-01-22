import { useState } from "react";
import useJsonFetch from "../hooks/useJsonFetch";
import { useNavigate } from "react-router-dom";
import iconClose from "../assets/close.svg";

const PostCreate = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  const addPost = () => {
    const { error } = useJsonFetch(`${import.meta.env.VITE_POSTS_URL}posts`, {
      body: JSON.stringify({ id: 0, content: value }),
    });
    if (error === null) navigate(-1);
  };

  return (
    <div className="window-create">
      <header>
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
          cols={30}
          rows={10}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClick={() => {
            addPost();
          }}
        ></textarea>
      </main>
      <footer>
        <button className="create">Опубликовать</button>
      </footer>
    </div>
  );
};

export default PostCreate;
