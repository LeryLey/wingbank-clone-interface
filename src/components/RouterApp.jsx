import Header from "./Header";
import Navbar from "./Navbar";
import Hero from "../pages/Hero";
import { Route, Routes } from "react-router-dom";
const RouterApp = () => {
  return (
    <>
      <div className="fixed w-full">
        <Header />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </>
  );
};

export default RouterApp;
