import { useParams } from "react-router-dom";
import { PostProps } from "./Post";
import userIcon from "../assets/user-icon.svg";

const PostView = ({ posts }: { posts: PostProps[] }) => {
  const { postId } = useParams();
  const post = posts.find(
    (element: PostProps) => element.id === Number(postId)
  );

  return (
    <main className="container-view">
      <div className="window-view">
        <article className="post-view">
          <div className="user-info-view">
            <img className="icon-user" src={userIcon} alt="photo" />
            <p className="user-name">User</p>
            <span className="created">{post?.created}</span>
          </div>
          <p className="content-view">{post?.content}</p>
          <div className="navigation">
            <button className="chenge">Изменить</button>
            <button className="delete">Удалить</button>
          </div>
        </article>
      </div>
    </main>
  );
};

export default PostView;
