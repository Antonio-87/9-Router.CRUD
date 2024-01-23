import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsList from "./components/PostsList";
import PostView from "./components/PostView";
import PostCreate from "./components/PostCreate";
import { useState } from "react";
import { PostProps } from "./components/Post";
import PostEdit from "./components/PostEdit";

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const hendlePosts = (props: PostProps[]) => {
    setPosts(props);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList hendleProps={hendlePosts} />} />
        <Route path="posts/new" element={<PostCreate />} />
        <Route path="posts/:postId" element={<PostView posts={posts} />} />
        <Route path="posts/:postId/edit" element={<PostEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
