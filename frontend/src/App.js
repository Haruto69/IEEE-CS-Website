import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Members from "./pages/Members";
import About from "./pages/About"; // make sure this exists
import ImpactXHome from "./pages/ImpactXHome";
import Register from "./pages/Register"; // new register page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/impactx" element={<ImpactXHome />} />
        <Route path="/impactx-register" element={<Register />} /> {/* new route */}
        <Route path="/members" element={<Members />} />
        <Route path="/about" element={<About />} />
        
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
