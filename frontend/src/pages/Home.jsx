import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HolographicBackground from "../components/backgrounds/HolographicBackground";
import InteractiveParticles from "../components/backgrounds/InteractiveParticles";
import GlassButton from "../components/ui/GlassButton";
import FloatingShapes from '../components/backgrounds/FloatingShapes';
import { Clock, Users, Calendar, MapPin } from "lucide-react";
import Logo from "../assets/ieee-logo.png";

const Home = () => {
  const [formStatus, setFormStatus] = useState(""); // for success/error messages

  const infoBoxes = [
    { title: "Upcoming Events", icon: <Clock className="h-10 w-10 text-blue-400 mb-4" />, description: "Stay updated on IEEE activities" },
    { title: "Our Members", icon: <Users className="h-10 w-10 text-green-400 mb-4" />, description: "Meet and connect with peers" },
    { title: "IEEE Calendar", icon: <Calendar className="h-10 w-10 text-purple-400 mb-4" />, description: "Mark important IEEE dates" },
    { title: "Event Locations", icon: <MapPin className="h-10 w-10 text-red-400 mb-4" />, description: "Find where events are happening" },
  ];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mnngapvl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("Message sent successfully! We'll get back to you soon.");
        e.target.reset(); // clear the form
      } else {
        setFormStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Oops! Something went wrong. Please try again.");
    }
  };

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
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="glass rounded-3xl p-6 md:p-12 mb-8 flex flex-col items-center">
            <img src={Logo} alt="IEEE Logo" className="w-1/2 h-auto mb-0" />
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">Welcome!</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">Your IEEE member dashboard</p>
            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Access upcoming events, check notifications, and stay updated with the latest IEEE activities.
            </p>
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {infoBoxes.map((box) => (
              <GlassButton
                key={box.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl
                          bg-red-600/20 border-red-400/40
                          shadow-[0_0_12px_rgba(239,68,68,0.7)]
                          hover:shadow-[0_0_25px_rgba(239,68,68,1)]
                          hover:scale-105 transition-transform duration-300"
              >
                {box.icon}
                <h3 className="text-lg font-semibold text-white mt-2">{box.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{box.description}</p>
              </GlassButton>
            ))}
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 md:p-12 mx-auto max-w-2xl flex flex-col items-center text-white">
            <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-md bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:outline-none"
              />
              <input
                type="email"
                name="_replyto"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-md bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:outline-none"
              />
              <select
                name="category"
                required
                className="w-full p-3 rounded-md bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:outline-none"
              >
                <option value="">Select Category</option>
                <option value="Technical">Technical</option>
                <option value="Recruitment">Recruitment</option>
                <option value="Events">Events</option>
                <option value="Membership">Membership</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="w-full p-3 rounded-md bg-black/30 border border-white/20 placeholder-gray-400 text-white focus:outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
            {formStatus && (
              <p className="mt-4 text-center text-green-400">{formStatus}</p>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
