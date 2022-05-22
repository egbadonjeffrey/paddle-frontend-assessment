import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ComingSoon from "./pages/landing__page/ComingSoon";
import AboutUs from "./pages/aboutUs/AboutUs";
import Blog from "./pages/blog/BlogPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ComingSoon />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/blog" exact element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
