// src/pages/Members.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HolographicBackground from '../components/backgrounds/HolographicBackground';
import InteractiveParticles from '../components/backgrounds/InteractiveParticles';
import FloatingShapes from '../components/backgrounds/FloatingShapes';

import kiranImg from '../pics/kiran.jpg';
import swathiImg from '../pics/swathi.jpg';
import nithyashreeImg from '../pics/nithyashree.jpg';
import siriImg from '../pics/siri.jpg';
import devImg from '../pics/dev.jpg';
import mukundImg from '../pics/mukund.jpg';
import anirudhImg from '../pics/anirudh.jpg';

import rithikaImg from '../pics/rithika.jpg';
import chethanaImg from '../pics/chethana.jpg';

const members = [
  { name: 'Dr. Kiran P', role: 'Head Of Department (CSE-CY)', img: kiranImg }, 
  { name: 'Dr.Swathi Darla', role: 'Faculty Advisor', img: swathiImg },
  { name: 'Nithyashree', role: 'Chair', img: nithyashreeImg },
  { name: 'Siri V Hegde', role: 'Vice Chair', img: siriImg },
  { name: 'Dev', role: 'Secretary', img: devImg },
  { name: 'Mukund', role: 'Treasurer', img: mukundImg },
  { name: 'Anirudh', role: 'Joint Treasurer', img: anirudhImg },
 
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-4 text-white">
              IEEE Computer Society RNSIT Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Meet the core members of CS RNSIT
            </p>
          </div>

          {/* Members Circle Layout */}
          <div className="flex flex-wrap justify-center gap-12">
            {members.map(member => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full border-4 border-red-500/50 bg-white/10 
                                backdrop-blur-md shadow-lg overflow-hidden hover:scale-110 
                                hover:border-red-400 transition-all duration-300">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-red-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
