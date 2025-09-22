// ImpactXHome.jsx
import { ArrowRight, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import HolographicBackground from '../components/backgrounds/HolographicBackground';
import InteractiveParticles from '../components/backgrounds/InteractiveParticles';
import FloatingShapes from '../components/backgrounds/FloatingShapes';
import GlassButton from '../components/ui/GlassButton';
import ImpactXNavbar from '../components/ImpactXNavbar';
import Navbar from "../components/Navbar";
import Logo from "../assets/impactx-logo.png";

export default function ImpactXHome() {
  return (
    <div className="relative min-h-screen">
      <HolographicBackground />
      <InteractiveParticles />
      <FloatingShapes />
      <ImpactXNavbar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 pt-32 md:pt-40">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Glass Box */}
          <div className="rounded-3xl p-8 md:p-12 mb-8 mt-16 backdrop-blur-2xl 
                          bg-white/10 border border-white/20 shadow-2xl hover:shadow-red-500/20 transition-all">
            <img
              src={Logo}
              alt="ImpactX Logo"
              className="w-96 h-auto mx-auto mb-6 drop-shadow-lg"
            />
            <p className="text-xl md:text-2xl text-white mb-4">
              24-Hour Innovation Challenge
            </p>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Join the most electrifying hackathon of the year at RNSIT. Build, innovate, and
              create solutions that will shape tomorrow. 24 hours of pure coding excellence.
            </p>

            {/* Total Prize Pool Box */}
            <div className="mb-8">
              <div className="inline-block rounded-2xl p-6 border-2 border-red-500/60 
                              bg-red-600/10 backdrop-blur-lg shadow-xl hover:scale-105 transition-transform">
                <p className="text-lg md:text-xl text-red-400 font-semibold mb-2">Total Prize Pool</p>
                <p className="text-5xl md:text-6xl font-bold text-white drop-shadow-md">₹50,000</p>
              </div>
            </div>

            {/* Register & Timeline Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <Link to="/impactx-register" className="w-full md:w-1/2">
                <GlassButton
                  variant="primary"
                  size="lg"
                  className="w-full text-lg py-4 rounded-3xl flex items-center justify-center shadow-xl"
                >
                  Register Now <ArrowRight className="w-5 h-5 ml-2" />
                </GlassButton>
              </Link>

              <Link to="/timeline" className="w-full md:w-1/2">
                <GlassButton
                  variant="primary"
                  size="lg"
                  className="w-full text-lg py-4 rounded-3xl flex items-center justify-center shadow-xl"
                >
                  View Timeline
                </GlassButton>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="rounded-3xl p-6 border border-white/20 bg-white/5 backdrop-blur-xl shadow-lg mt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="rounded-xl p-4 bg-white/10 backdrop-blur-md border border-red-500/30 shadow-md hover:scale-105 transition">
                  <Clock className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <p className="text-xl md:text-2xl font-bold text-white">24</p>
                  <p className="text-sm text-white/70">Hours</p>
                </div>
                <div className="rounded-xl p-4 bg-white/10 backdrop-blur-md border border-red-500/30 shadow-md hover:scale-105 transition">
                  <Users className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <p className="text-xl md:text-2xl font-bold text-white">500+</p>
                  <p className="text-sm text-white/70">Participants</p>
                </div>
                <div className="rounded-xl p-4 bg-white/10 backdrop-blur-md border border-red-500/30 shadow-md hover:scale-105 transition">
                  <Calendar className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <p className="text-xl md:text-2xl font-bold text-white">Oct 24-25</p>
                  <p className="text-sm text-white/70">2025</p>
                </div>
                <div className="rounded-xl p-4 bg-white/10 backdrop-blur-md border border-red-500/30 shadow-md hover:scale-105 transition">
                  <MapPin className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <p className="text-xl md:text-2xl font-bold text-white">RNSIT</p>
                  <p className="text-sm text-white/70">Offline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="relative z-10 py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              RNS Institute of Technology
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Experience innovation in our state-of-the-art campus facilities with cutting-edge
              infrastructure and technology labs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl p-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-md hover:scale-105 transition">
              <img
                src="/RNSIT.png"
                alt="RNSIT Campus Building"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">RNSIT Campus</h3>
              <p className="text-white/70">Modern campus with world-class facilities</p>
            </div>

            <div className="rounded-2xl p-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-md hover:scale-105 transition">
              <img
                src="/labs.png"
                alt="Computer Labs"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Tech Labs</h3>
              <p className="text-white/70">Advanced computing labs with latest hardware</p>
            </div>

            <div className="rounded-2xl p-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-md hover:scale-105 transition">
              <img
                src="/innovation_labs.png"
                alt="Innovation Spaces"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation Spaces</h3>
              <p className="text-white/70">Collaborative spaces for creative thinking</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
