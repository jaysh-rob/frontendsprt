import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Sports from "./pages/Sports";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar"; // Import Footer component
import Dietapi from "./pages/Dietapi";
import Country from "./pages/Country";
import Cricket from "./pages/Cricket";
import HistBettingOdds from "./pages/HistBettingOdds";


function App() {
  return (
    <Router>
      <CustomNavbar /> {/* Include Navbar component outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/dietapi" element={<Dietapi />} />
        <Route path="/country" element={<Country />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/betting" element={<HistBettingOdds />} />
        
      </Routes>
    </Router>
  );
}

export default App;
