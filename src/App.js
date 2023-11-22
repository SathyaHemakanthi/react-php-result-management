import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home2.js";
import Login from "./pages/login.js";
import Reg from "./pages/regnew.js";
import Student from "./pages/stuDash.js";
import StuProf from "./pages/stuProf.js";
import Teacher from "./pages/teaDash.js";
import Addmark from "./pages/addmark.js"
import "./App.css";

function App() {
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/stuDash" element={<Student />} />
          <Route path="/stuProfile" element={<StuProf />} />
          <Route path="/teaDash" element={<Teacher />} />
          <Route path="/add" element={<Addmark />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
