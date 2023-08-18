import React,  {useEffect, useState} from "react"
import CardPosts from '../components/CardPosts';
import axios from "axios";
import { BlogProps } from "../types";

const Blog: React.FC<BlogProps> = () => {
  const [posts,setPosts] = useState([{}])

  useEffect(()=> {
    axios.get("http://localhost:8000/posts")
    .then((res) => setPosts(res.data))
  }, [])

  console.log("posts",posts)

  return (
    <div className="blog">
      {posts.map((post) => (
        <CardPosts id={post.id} title={post.title} imageUrl={post.imageurl} description={post.description} />
        ))}
    </div>
  );
};

export default Blog;
