import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type Post = {
  content: string;
  id: number;
  created: number;
};

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {}, []);

  return (
    <>
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
