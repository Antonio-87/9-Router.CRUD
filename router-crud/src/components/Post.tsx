import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user-icon.svg";
import { useEffect, useRef, useState } from "react";

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
    const formatDate = () => {
      const differenceTime = (Date.now() - timestamp.current) / 1000;
      const formatTime =
        differenceTime >= 86400
          ? `${Math.floor(differenceTime / 86400)} дней назад`
          : differenceTime >= 3600
            ? `${Math.floor(differenceTime / 3600)} часов назад`
            : differenceTime >= 60
              ? `${Math.floor(differenceTime / 60)} минут назад`
              : "меньше минуты назад";
      setCreated(formatTime);
    };
    formatDate();
    const interavalTimestamp = setInterval(() => formatDate(), 5000);

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
