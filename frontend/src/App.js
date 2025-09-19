import React, { useEffect, useState } from "react";
import api from "./services/api";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventCard from "./components/EventCard";
import Footer from "./components/Footer";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("events/")
      .then(res => setEvents(res.data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto px-6 -mt-20 relative z-10">
        <section className="bg-transparent py-12">
          <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
          {events.length === 0 ? (
            <p className="text-gray-400">No events available right now.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map(ev => <EventCard key={ev.id} event={ev} />)}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
