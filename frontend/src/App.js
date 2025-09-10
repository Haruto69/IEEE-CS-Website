import { useEffect, useState } from "react";
import axios from "axios";
import ImpactXLogo from "./assets/impactx-logo.png";  // add your logo here
import IEEERNSITLogo from "./assets/ieee-logo.png";   // add your logo here

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/events/")
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      
      {/* Header with logos */}
      <header className="flex items-center justify-between w-full p-6 max-w-6xl">
        <img src={ImpactXLogo} alt="ImpactX Logo" className="h-16" />
        <img src={IEEERNSITLogo} alt="IEEE Logo" className="h-16" />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-red-600 mb-4">
          IEEE Computer Society
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8">
          Welcome to the official IEEE RNSIT website
        </p>
      </section>

      {/* Events Section */}
      <section className="mt-12 w-full max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map(event => (
            <div key={event.id} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-red-500">{event.name}</h3>
              <p className="text-gray-300 mt-2">{event.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
