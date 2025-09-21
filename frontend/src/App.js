import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Timeline from "./pages/Timeline";
import Sponsors from "./pages/Sponsors";
import About from "./pages/About"; // ensure this file exists
import ImpactXHome from "./pages/ImpactXHome"; // import ImpactXHome

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Events page */}
        <Route path="/events" element={<Events />} />

        {/* ImpactX Hackathon page */}
        <Route path="/impactx" element={<ImpactXHome />} />

        {/* Members page */}
        <Route path="/members" element={<Members />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Timeline page */}
        <Route path="/timeline" element={<Timeline />} />

        {/* Sponsors page */}
        <Route path="/sponsors" element={<Sponsors />} />

        {/* Fallback to Home for unmatched routes */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
