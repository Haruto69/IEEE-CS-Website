import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-red-400">IEEE Computer Society</h1>
          <div className="flex items-center gap-4">
            <Link to="/events" className="text-gray-300 underline">Events</Link>
            <button onClick={logout} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
              Logout
            </button>
          </div>
        </header>

        <section className="bg-gray-900/60 p-6 rounded-lg">
          <h2 className="text-2xl text-red-300 font-semibold mb-2">Welcome!</h2>
          <p className="text-gray-300">This is the IEEE RNSIT member dashboard (WIP).</p>
        </section>
      </div>
    </div>
  );
}
