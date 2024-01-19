import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useJsonFetch from "../hooks/useJsonFetch";

type Post = {
  content: string;
  id: number;
  created: number;
};

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
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
      <NavLink className="create" to="/posts/new">
        Создать пост
      </NavLink>
      <ul className="posts">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <NavLink className="post" to={`/posts/${post.id}`}>
                {post.content}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PostsList;
