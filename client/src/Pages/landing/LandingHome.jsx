import { NavbarDemo } from "@/components/custom/NavbarDemo";
import Home from "@/Pages/landing/Home";
import { Route, Routes } from "react-router-dom";

const LandingHome = () => {
  return (
    <>
      <NavbarDemo />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default LandingHome;
