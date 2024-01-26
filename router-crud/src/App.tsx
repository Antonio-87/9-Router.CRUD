import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsList from "./components/PostsList";
import PostView from "./components/PostView";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="posts/new" element={<PostCreate />} />
        <Route path="posts/:postId" element={<PostView />} />
        <Route path="posts/:postId/edit" element={<PostEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
