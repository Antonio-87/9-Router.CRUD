import { useNavigate, useParams } from "react-router-dom";
import { PostProps } from "./Post";
import userIcon from "../assets/user-icon.svg";
import iconClose from "../assets/close.svg";
import { useEffect, useRef, useState } from "react";
import formatDate from "../function/formatDate";
import useJsonFetch from "../hooks/useJsonFetch";

const PostView = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useJsonFetch(
    `${import.meta.env.VITE_POSTS_URL}posts/${postId}`
  );
  const post = useRef<PostProps>();
  const [created, setCreated] = useState<string>("");

  useEffect(() => {
    if (typeof data === "string") {
      post.current = JSON.parse(data).post;
      if (post.current) setCreated(formatDate(post.current.created));
    }

    const interavalCreated = setInterval(() => {
      if (post.current) setCreated(formatDate(post.current.created));
    }, 5000);
    return () => clearInterval(interavalCreated);
  }, [data]);

  const deletePost = () => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_POSTS_URL}posts/${postId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 204) navigate(`/`, { replace: true });
      } catch (e) {
        new Error(`No create post`);
      }
    };
    fetchData();
  };

  return (
    <>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="loading">Error...</div>}
      <main className="container-view">
        <div className="window-view">
          <article className="post-view">
            <div className="user-info-view">
              <img className="icon-user" src={userIcon} alt="photo" />
              <p className="user-name">User</p>
              <span className="created">{created}</span>
              <img
                className="close"
                src={iconClose}
                alt="close"
                onClick={() => navigate(`/`, { replace: true })}
              />
            </div>
            <p className="content-view">{post.current?.content}</p>
            <div className="navigation">
              <button
                className="chenge"
                onClick={() => navigate(`/posts/${postId}/edit`)}
              >
                Изменить
              </button>
              <button className="delete" onClick={() => deletePost()}>
                Удалить
              </button>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default PostView;
