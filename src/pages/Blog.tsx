import React, { useEffect, useState } from "react";
import axios from "axios";

interface BlogPost {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

interface BlogProps {
  posts: BlogPost[];
}

const Blog: React.FC<BlogProps> = () => {
  const [posts, setPosts] = useState([{}]);

  useEffect(() => {
    axios.get("http://localhost:8000/posts").then((res) => setPosts(res.data));
  }, []);

  console.log(posts);

  return (
    <div className="blog">
       <h3>blog</h3>
    </div>
  );
};

export default Blog;
