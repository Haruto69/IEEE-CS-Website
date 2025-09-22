// src/pages/Register.jsx
import React from "react";
import { Calendar, MapPin, Users, Trophy, ExternalLink } from "lucide-react";
import GlassButton from "../components/ui/GlassButton";
import Navbar from "../components/Navbar";
import HolographicBackground from "../components/backgrounds/HolographicBackground";
import InteractiveParticles from "../components/backgrounds/InteractiveParticles";
import FloatingShapes from "../components/backgrounds/FloatingShapes";
import ImpactXNavbar from '../components/ImpactXNavbar';

export default function Register() {
  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <HolographicBackground />
      <InteractiveParticles />
      <FloatingShapes />

      {/* Navbar */}
      <Navbar />
      <ImpactXNavbar />

      {/* Registration Section */}
      <section id="register" className="relative z-10 py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-6">
              Join ImpactX 25
            </h1>

            <div className="glass rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-gray-300 mb-4">
                Ready to turn your ideas into reality? Register now for 24 hours of 
                pure innovation at RNSIT and compete for amazing prizes!
              </p>

              {/* Event Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>October 24-25, 2025</span>
                </div>
                <span className="hidden md:block">•</span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>RNSIT Campus</span>
                </div>
                <span className="hidden md:block">•</span>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Team of 4 members</span>
                </div>
              </div>

              <div className="text-2xl font-bold text-red-400 mb-4">
                Registration Fee: ₹799 per team
              </div>
            </div>

            {/* Registration Button */}
            <div className="mb-12">
              <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <GlassButton 
                  variant="primary" 
                  size="lg" 
                  className="text-xl px-10 py-5 w-full md:w-auto flex items-center justify-center
                             bg-red-500/30 border border-red-500/40 hover:bg-red-500/50"
                >
                  Register on Unstop
                  <ExternalLink className="w-6 h-6 ml-3" />
                </GlassButton>
              </a>
              <p className="text-gray-400 mt-4">Registration closes October 20, 2025</p>
            </div>
          </div>

          {/* Prize Pool */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold holographic-text mb-4">
                Prize Pool: ₹50,000
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                Compete for cash prizes and exclusive opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="glass rounded-2xl p-8 text-center border-yellow-400/30 hover:border-yellow-400/50 transition-colors">
                <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">1st Place</h3>
                <p className="text-3xl font-bold text-white mb-2">₹25,000</p>
                <p className="text-gray-300">Winner takes the crown</p>
              </div>
              
              <div className="glass rounded-2xl p-8 text-center border-gray-400/30 hover:border-gray-400/50 transition-colors">
                <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-400 mb-2">2nd Place</h3>
                <p className="text-3xl font-bold text-white mb-2">₹15,000</p>
                <p className="text-gray-300">Runner-up excellence</p>
              </div>
              
              <div className="glass rounded-2xl p-8 text-center border-amber-600/30 hover:border-amber-600/50 transition-colors md:col-span-2 lg:col-span-1">
                <Trophy className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-amber-600 mb-2">Special Categories</h3>
                <p className="text-3xl font-bold text-white mb-2">₹10,000</p>
                <p className="text-gray-300">Total across all categories</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
                <h4 className="text-xl font-bold text-red-400 mb-3">Special Categories Include</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                  <div>• Best Innovation</div>
                  <div>• Best UI/UX Design</div>
                  <div>• Most Sustainable Solution</div>
                  <div>• People's Choice Award</div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Details */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold holographic-text mb-6 text-center">
              Registration Details
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Team Formation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Team size: 4 members (fixed)</li>
                    <li>• Mixed skill sets encouraged</li>
                    <li>• Students from any institution welcome</li>
                    <li>• Registration fee: ₹799 per team</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-white mb-4 mt-8">Event Format</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Offline event at RNSIT campus</li>
                    <li>• 24-hour continuous hackathon</li>
                    <li>• October 24-25, 2025</li>
                    <li>• All facilities provided on campus</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 24-hour workspace access</li>
                    <li>• All meals and refreshments</li>
                    <li>• Mentor guidance throughout</li>
                    <li>• Development resources & APIs</li>
                    <li>• Exclusive ImpactX 25 swag</li>
                    <li>• Certificate of participation</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-white mb-4 mt-8">Contact Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Email: ieeecsrnsit@gmail.com</p>
                    <p>• Venue: RNS Institute of Technology</p>
                    <p>• Registration closes: October 20, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
