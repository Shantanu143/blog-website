import { Route, Routes } from "react-router-dom";
import { NavbarDemo } from "./components/custom/NavbarDemo";
import Home from "./Pages/Home";
import { Login } from "./Pages/Login";
import DashboardHome from "./dashboard/Dashboard";

const App = () => {
  return (
    <>
      <NavbarDemo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardHome />} />
      </Routes>
    </>
  );
};

export default App;
