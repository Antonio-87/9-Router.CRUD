import { useContext } from "react";
import PostsContext from "../context/PostsContext";
import { useParams } from "react-router-dom";
import { PostProps } from "./Post";
import userIcon from "../assets/user-icon.svg";

const PostView = () => {
  const posts = useContext(PostsContext);
  const { postId } = useParams();
  const post = posts.find(
    (element: PostProps) => element.id === Number(postId)
  );

  return (
    <>
      <article className="post">
        <div className="user-info">
          <img src={userIcon} alt="photo" />
          <p className="user-name">User</p>
          <span className="created">{post?.created}</span>
        </div>
        <p className="content">{post?.content}</p>
        <div className="navigation">
          <button className="chenge">Изменить</button>
          <button className="delete">Удалить</button>
        </div>
      </article>
    </>
  );
};

export default PostView;
