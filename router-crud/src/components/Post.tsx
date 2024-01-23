import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user-icon.svg";
import { useEffect, useRef, useState } from "react";
import formatDate from "../function/formatDate";

export type PostProps = {
  content: string;
  id: number;
  created: number;
};

const Post = ({ post }: { post: PostProps }) => {
  const timestamp = useRef<number>(post.created);
  const [created, setCreated] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    setCreated(formatDate(timestamp.current));
    const interavalTimestamp = setInterval(
      () => setCreated(formatDate(timestamp.current)),
      5000
    );

    return () => clearInterval(interavalTimestamp);
  }, []);

  return (
    <li>
      <article className="post" onClick={() => navigate(`/posts/${post.id}`)}>
        <div className="user-info">
          <img className="icon-user" src={userIcon} alt="photo" />
          <p className="user-name">User</p>
          <span className="created">{created}</span>
        </div>
        <p className="content">{post.content}</p>
      </article>
    </li>
  );
};

export default Post;
