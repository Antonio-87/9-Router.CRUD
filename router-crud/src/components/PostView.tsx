import { useNavigate, useParams } from "react-router-dom";
import { PostProps } from "./Post";
import userIcon from "../assets/user-icon.svg";
import iconClose from "../assets/close.svg";
import { useEffect, useRef, useState } from "react";
import formatDate from "../function/formatDate";

const PostView = ({ posts }: { posts: PostProps[] }) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts.find(
    (element: PostProps) => element.id === Number(postId)
  );
  const timestamp = useRef<number | undefined>(post?.created);
  const [created, setCreated] = useState<string>("");

  useEffect(() => {
    if (timestamp.current !== undefined) {
      setCreated(formatDate(timestamp.current));
    }
    const interavalTimestamp = setInterval(() => {
      if (timestamp.current !== undefined)
        setCreated(formatDate(timestamp.current));
    }, 5000);
    return () => clearInterval(interavalTimestamp);
  }, []);

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
        if (response.status === 204) navigate(-1);
      } catch (e) {
        new Error(`No create post`);
      }
    };
    fetchData();
  };

  return (
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
              onClick={() => navigate(-1)}
            />
          </div>
          <p className="content-view">{post?.content}</p>
          <div className="navigation">
            <button className="chenge">Изменить</button>
            <button className="delete" onClick={() => deletePost()}>
              Удалить
            </button>
          </div>
        </article>
      </div>
    </main>
  );
};

export default PostView;
