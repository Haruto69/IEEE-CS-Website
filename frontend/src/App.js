import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Events from "./pages/Events";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isAuthenticated = !!(localStorage.getItem("token") || localStorage.getItem("auth") === "true");

  return (
    <div className="min-h-screen bg-black text-red-500">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/events"
            element={
              <ProtectedRoute>
                <Events />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
