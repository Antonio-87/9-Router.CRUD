// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useJsonFetch from "../hooks/useJsonFetch";
import Post, { PostProps } from "./Post";

const PostsList = () => {
  // const [posts, setPosts] = useState<Post[]>([]);
  const { data, loading, error } = useJsonFetch(
    `${import.meta.env.VITE_POSTS_URL}posts`
  );

  // useEffect(() => {
  //   if (typeof data === "string") setPosts(JSON.parse(data));
  // }, [data]);

  return (
    <>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="loading">Error...</div>}
      <NavLink className="create" to="/posts/new">
        Создать пост
      </NavLink>
      <ul className="posts">
        {data &&
          JSON.parse(data).map((post: PostProps) => {
            return <Post post={post} />;
          })}
      </ul>
    </>
  );
};

export default PostsList;
