import React from "react";

export default function EventCard({ event }) {
  const img = event.image || "https://via.placeholder.com/600x400";
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl overflow-hidden shadow-2xl">
      <img src={img} alt={event.title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p className="text-gray-300 mt-2 text-sm">{event.subtitle}</p>
        <p className="mt-3 text-gray-400 text-sm line-clamp-3">{event.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-300">{event.date}</span>
          <button className="bg-brandRed px-3 py-1 rounded-full text-white text-sm">Register</button>
        </div>
      </div>
    </div>
  );
}
