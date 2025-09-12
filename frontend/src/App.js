import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/events/") // Your Django endpoint
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Upcoming Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.length === 0 ? (
          <p className="text-center text-gray-600">No events found</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="bg-white shadow-lg rounded-2xl p-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-sm text-gray-500 mt-2">{event.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
