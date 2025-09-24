import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import HolographicBackground from "../components/backgrounds/HolographicBackground";
import InteractiveParticles from "../components/backgrounds/InteractiveParticles";
import GlassButton from "../components/ui/GlassButton";
import Navbar from "../components/Navbar";
import FloatingShapes from '../components/backgrounds/FloatingShapes';

const impactXEvent = {
  id: "impactx-2025",
  name: "ImpactX Hackathon",
  date: "Oct 24-25, 2025",
  description:
    "24-hour innovation challenge at RNS Institute of Technology. Build, prototype and present solutions to real-world problems.",
  location: "RNSIT",
  type: "Hackathon",
};

export default function Events() {
  const [events] = useState([impactXEvent]); 

  return (
    <div className="relative min-h-screen">
      <HolographicBackground />
      <InteractiveParticles />
      <FloatingShapes />

      <Navbar hideButtons={['About', 'Timeline', 'Sponsors']} />

      <section className="relative z-10 py-20 px-4 md:px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 holographic-text">
          Upcoming Events
        </h1>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
          {events.map((ev) => (
            <Link key={ev.id} to="/impactx">
              <GlassButton
  size="lg"
  className="w-96 md:w-[28rem] px-8 py-10 hover:scale-105 transition-transform 
             backdrop-blur-md bg-white/10 border border-white/20 shadow-lg 
             rounded-2xl flex flex-col items-center text-center"
>
  
  {/* Event Name */}
  <h3 className="text-2xl font-bold text-white mb-1">{ev.name}</h3>

  {/* Date */}
  <p className="text-gray-300 flex items-center gap-2 mb-1 justify-center">
    <Calendar className="w-5 h-5 text-red-400" /> {ev.date}
  </p>

  {/* Location */}
  {ev.location && (
    <p className="text-gray-400 text-sm mb-1">📍 {ev.location}</p>
  )}

  {/* Type Badge */}
  {ev.type && (
    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium 
                     bg-red-600/20 text-red-300 mb-2">
      {ev.type}
    </span>
  )}

  {/* Description */}
  {ev.description && (
    <p className="text-gray-300 text-sm mt-0 leading-relaxed max-w-md">
      {ev.description}
    </p>
  )}
</GlassButton>




            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
