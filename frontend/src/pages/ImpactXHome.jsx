// ImpactXHome.jsx
import { ArrowRight, Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import HolographicBackground from '../components/backgrounds/HolographicBackground';
import InteractiveParticles from '../components/backgrounds/InteractiveParticles';
import FloatingShapes from '../components/backgrounds/FloatingShapes';
import GlassButton from '../components/ui/GlassButton';
import ImpactXNavbar from '../components/ImpactXNavbar'; // ✅ new ImpactX-specific navbar

export default function ImpactXHome() {
  return (
    <div className="relative min-h-screen">
      <HolographicBackground />
      <InteractiveParticles />
      <FloatingShapes />

      {/* ✅ ImpactX-only Navbar */}
      <ImpactXNavbar />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="glass rounded-3xl p-6 md:p-12 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic-text">ImpactX 25</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">24-Hour Innovation Challenge</p>
            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Join the most electrifying hackathon of the year at RNSIT. Build, innovate, and
              create solutions that will shape tomorrow. 24 hours of pure coding excellence.
            </p>

            <div className="mb-8">
              <div className="inline-block glass rounded-2xl p-4 md:p-6 border-2 border-red-500/50 glow-red">
                <p className="text-lg md:text-xl text-red-400 font-semibold mb-2">Total Prize Pool</p>
                <p className="text-5xl md:text-6xl font-bold text-white">₹50,000</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <Link to="/register">
                <GlassButton
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4 w-full md:w-auto"
                >
                  Register Now <ArrowRight className="w-5 h-5 ml-2" />
                </GlassButton>
              </Link>
              <Link to="/timeline">
                <GlassButton size="lg" className="text-lg px-8 py-4 w-full md:w-auto">
                  View Timeline
                </GlassButton>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              <div className="glass rounded-xl p-4">
                <Clock className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="text-xl md:text-2xl font-bold text-white">24</p>
                <p className="text-sm text-gray-400">Hours</p>
              </div>
              <div className="glass rounded-xl p-4">
                <Users className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="text-xl md:text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-gray-400">Participants</p>
              </div>
              <div className="glass rounded-xl p-4">
                <Calendar className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="text-xl md:text-2xl font-bold text-white">Oct 24-25</p>
                <p className="text-sm text-gray-400">2025</p>
              </div>
              <div className="glass rounded-xl p-4">
                <MapPin className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="text-xl md:text-2xl font-bold text-white">RNSIT</p>
                <p className="text-sm text-gray-400">Offline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="relative z-10 py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-4">
              RNS Institute of Technology
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Experience innovation in our state-of-the-art campus facilities with cutting-edge
              infrastructure and technology labs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=500"
                alt="RNSIT Campus Building"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">RNSIT Campus</h3>
              <p className="text-gray-400">Modern campus with world-class facilities</p>
            </div>

            <div className="glass rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500"
                alt="Computer Labs"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Tech Labs</h3>
              <p className="text-gray-400">Advanced computing labs with latest hardware</p>
            </div>

            <div className="glass rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=500"
                alt="Campus Library"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation Spaces</h3>
              <p className="text-gray-400">Collaborative spaces for creative thinking</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
