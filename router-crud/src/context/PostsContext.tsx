import { createContext } from "react";
import { PostProps } from "../components/Post";

const PostsContext = createContext<PostProps[]>([]);

export default PostsContext;
