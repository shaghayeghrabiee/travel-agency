
import { Navigate, Route, Routes } from "react-router-dom";
// import Destination from './components/sections/Destination';
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Landing from "./components/sections/Landing";
import Navbar from "./components/sections/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
