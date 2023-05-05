import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Post from "./pages/Post";


const AppRoutes: React.FC = () => {
  return (
    <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/:id" element={<Post />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
};

export default AppRoutes;
