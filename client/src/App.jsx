import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Author from "./pages/Author";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/author" element={<Author />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
