import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useJsonFetch from "../hooks/useJsonFetch";
import Post, { PostProps } from "./Post";
import PostsContext from "../context/PostsContext";

const PostsList = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const { data, loading, error } = useJsonFetch(
    `${import.meta.env.VITE_POSTS_URL}posts`
  );

  useEffect(() => {
    if (typeof data === "string") setPosts(JSON.parse(data));
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
          <PostsContext.Provider value={posts}>
            {posts.map((post: PostProps) => {
              return <Post post={post} />;
            })}
          </PostsContext.Provider>
        </ul>
      </div>
    </>
  );
};

export default PostsList;
