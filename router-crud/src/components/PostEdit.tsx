import { useEffect, useRef, useState } from "react";
import iconClose from "../assets/close.svg";
import userIcon from "../assets/user-icon.svg";
import { useNavigate, useParams } from "react-router-dom";
import { PostProps } from "./Post";
import useJsonFetch from "../hooks/useJsonFetch";

const PostEdit = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useJsonFetch(
    `${import.meta.env.VITE_POSTS_URL}posts/${postId}`
  );
  const post = useRef<PostProps>();
  const [value, setValue] = useState<string | undefined>("");

  useEffect(() => {
    if (typeof data === "string") {
      post.current = JSON.parse(data).post;
      setValue(post.current?.content);
    }
  }, [data]);

  const savePost = () => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_POSTS_URL}posts/${postId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: value }),
          }
        );
        if (response.status === 204)
          navigate(`/posts/${postId}`, { replace: true });
      } catch (e) {
        new Error(`No edit post`);
      }
    };
    fetchData();
  };

  return (
    <>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="loading">Error...</div>}
      <div className="container-edit">
        <div className="window-edit">
          <header className="box-close-edit">
            <img className="icon-user" src={userIcon} alt="photo" />
            <span className="description">Редактировать публикацию</span>
            <img
              className="close"
              src={iconClose}
              alt="close"
              onClick={() => navigate(`/posts/${postId}`, { replace: true })}
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
          <footer className="box-publish-edit">
            <button
              className="publish"
              onClick={() => {
                savePost();
              }}
            >
              Сохранить
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PostEdit;
