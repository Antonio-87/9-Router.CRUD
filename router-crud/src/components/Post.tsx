import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user-icon.svg";

export type PostProps = {
  content: string;
  id: number;
  created: number;
};

const Post = ({ post }: { post: PostProps }) => {
  const navigate = useNavigate();
  return (
    <li key={post.id} onClick={() => navigate(`/${post.id}`)}>
      <article className="post">
        <div className="user-info">
          <img src={userIcon} alt="photo" />
          <p className="user-name">User</p>
          <span className="created">{post.created}</span>
        </div>
        <p className="content">{post.content}</p>
      </article>
    </li>
  );
};

export default Post;
