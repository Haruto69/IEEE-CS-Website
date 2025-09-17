import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/events/")
      .then((res) => setEvents(res.data))
      .catch(() => {
        // fallback demo events if backend not available
        setEvents([
          { id: 1, name: "Hackathon", date: "2025-09-20" },
          { id: 2, name: "Workshop", date: "2025-09-25" },
        ]);
      });
  }, []);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-red-400">Events</h1>
          <Link to="/home" className="text-gray-300 underline">Back to Home</Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((ev) => (
            <div key={ev.id} className="bg-gray-900/60 p-6 rounded-lg shadow hover:scale-102 transform transition">
              <h3 className="text-xl font-semibold text-red-300">{ev.name}</h3>
              <p className="text-gray-300 mt-2">📅 {ev.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
