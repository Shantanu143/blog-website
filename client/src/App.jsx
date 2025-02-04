import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { SidebarDemo } from "./components/custom/SidebarDemo";
import LandingHome from "./Pages/landing/LandingHome";

const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/*" element={<LandingHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<SidebarDemo />} />
      </Routes>
    </>
  );
};

export default App;
