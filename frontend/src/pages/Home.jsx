import React from "react";
import Navbar from "../components/Navbar";
import HolographicBackground from "../components/backgrounds/HolographicBackground";
import InteractiveParticles from "../components/backgrounds/InteractiveParticles";
import GlassButton from "../components/ui/GlassButton";
import FloatingShapes from '../components/backgrounds/FloatingShapes';
import { Clock, Users, Calendar, MapPin } from "lucide-react";

const Home = () => {
  const infoBoxes = [
    {
      title: "Upcoming Events",
      icon: <Clock className="h-10 w-10 text-blue-400 mb-4" />,
      description: "Stay updated on IEEE activities",
    },
    {
      title: "Our Members",
      icon: <Users className="h-10 w-10 text-green-400 mb-4" />,
      description: "Meet and connect with peers",
    },
    {
      title: "IEEE Calendar",
      icon: <Calendar className="h-10 w-10 text-purple-400 mb-4" />,
      description: "Mark important IEEE dates",
    },
    {
      title: "Event Locations",
      icon: <MapPin className="h-10 w-10 text-red-400 mb-4" />,
      description: "Find where events are happening",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <HolographicBackground />
        <InteractiveParticles />
        <FloatingShapes />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="glass rounded-3xl p-6 md:p-12 mb-8">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Welcome!
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Your IEEE member dashboard
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Access upcoming events, check notifications, and stay updated with
              the latest IEEE activities.
            </p>
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoBoxes.map((box) => (
              <GlassButton
                key={box.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl 
                           bg-white/10 backdrop-blur-md border border-white/20 
                           hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                {box.icon}
                <h3 className="text-lg font-semibold">{box.title}</h3>
                <p className="text-gray-400 text-sm">{box.description}</p>
              </GlassButton>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
