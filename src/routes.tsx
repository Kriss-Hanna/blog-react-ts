import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
/* import Login from "./pages/Admin";
import Register from "./pages/Register"; */
import Admin from "./pages/Admin";
import PostArticle from "./pages/PostArticle";
import Message from "./pages/Message";



const AppRoutes: React.FC = () => {
  return (
    <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<Post />} />
      <Route path="/contact" element={<Contact />} />
{/*       <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/post-article" element={<PostArticle />} />
      <Route path="/message" element={<Message />} />

    </Routes>
  );
};

export default AppRoutes;
