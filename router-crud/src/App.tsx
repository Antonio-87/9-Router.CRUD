import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsList from "./components/PostsList";
import PostView from "./components/PostView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="posts/new" element={<PostCreate />} />
        <Route path="posts/:postId" element={<PostView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
