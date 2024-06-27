import Header from "./Header";
import Navbar from "./Navbar";
import Hero from "../pages/Hero";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
const RouterApp = () => {
  return (
    <>
      <div className="sticky top-0 w-full z-10">
        <Header />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
      <Footer />
    </>
  );
};

export default RouterApp;
