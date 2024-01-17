import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsList from "./components/PostsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="posts/new" element={<PostView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
