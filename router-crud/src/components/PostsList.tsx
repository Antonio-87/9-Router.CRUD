import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useJsonFetch from "../hooks/useJsonFetch";
import Post, { PostProps } from "./Post";

const PostsList = ({
  hendleProps,
}: {
  hendleProps: (props: PostProps[]) => void;
}) => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { data, loading, error } = useJsonFetch(
    `${import.meta.env.VITE_POSTS_URL}posts`
  );

  useEffect(() => {
    if (typeof data === "string") {
      const newData = JSON.parse(data);
      setPosts(newData);
      hendleProps(newData);
    }
  }, [data]);

  return (
    <>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="loading">Error...</div>}
      <div className="box-posts">
        <header className="box-create">
          <NavLink className="create" to="/posts/new">
            Создать пост
          </NavLink>
        </header>
        <ul className="posts">
          {posts.map((post: PostProps) => {
            return <Post key={post.id} post={post} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default PostsList;
