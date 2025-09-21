// src/pages/Members.jsx
import React from 'react';
import { Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import HolographicBackground from '../components/backgrounds/HolographicBackground';
import InteractiveParticles from '../components/backgrounds/InteractiveParticles';
import FloatingShapes from '../components/backgrounds/FloatingShapes';
import GlassButton from '../components/ui/GlassButton';

import nithyashreeImg from '../pics/nithyashree.jpg';
import siriImg from '../pics/siri.jpg';
import mukundImg from '../pics/mukund.jpg';
import anirudhImg from '../pics/anirudh.jpg';
import devImg from '../pics/dev.jpg';
import rithikaImg from '../pics/rithika.jpg';
import chethanaImg from '../pics/chethana.jpg';

const members = [
  { name: 'Nithyashree', role: 'Chair', img: nithyashreeImg },
  { name: 'Siri V Hegde', role: 'Vice Chair', img: siriImg },
  { name: 'Mukund', role: 'Treasurer', img: mukundImg },
  { name: 'Anirudh', role: 'Joint Treasurer', img: anirudhImg },
  { name: 'Dev', role: 'Secretary', img: devImg },
  { name: 'Rithika', role: 'Web Master', img: rithikaImg },
  { name: 'Chethana', role: 'Ex-com', img: chethanaImg },
];

export default function Members() {
  return (
    <div className="relative min-h-screen pt-24">
      <Navbar />
      <HolographicBackground />
      <InteractiveParticles />
      <FloatingShapes />

      <div className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-4 text-white">
              Core Organizing Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Meet the passionate team behind ImpactX 25
            </p>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map(member => (
              <GlassButton
                key={member.name}
                className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 
                           shadow-lg border border-red-500/30 bg-white/10 backdrop-blur-md rounded-2xl p-6"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-red-500/50"
                />
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-red-400 text-sm">{member.role}</p>
              </GlassButton>
            ))}

            {/* Volunteers Card */}
            <GlassButton
              className="flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 
                         shadow-lg border border-red-500/30 bg-white/10 backdrop-blur-md rounded-2xl p-6"
            >
              <div className="w-24 h-24 rounded-full mb-4 bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">25+ Volunteers</h4>
              <p className="text-red-400 text-sm">Support Team</p>
            </GlassButton>
          </div>
        </div>
      </div>
    </div>
  );
}
