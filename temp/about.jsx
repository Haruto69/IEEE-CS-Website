
import React from 'react';
import { Target, Lightbulb, Code, Award, Users, Globe, ArrowRight, Leaf, Shield, GitMerge } from 'lucide-react';
import HolographicBackground from './components/backgrounds/HolographicBackground';
import InteractiveParticles from './components/backgrounds/InteractiveParticles';

const themes = [
  {
    title: "Sustainability in Green Tech",
    description: "Create eco-friendly solutions for a greener future.",
    icon: Leaf,
    examples: ["Clean energy monitoring", "Waste reduction systems", "Carbon footprint calculators"]
  },
  {
    title: "Women Safety",
    description: "Develop technology to enhance safety and security for women.",
    icon: Shield,
    examples: ["SOS applications", "Safe travel planners", "Community alert systems"]
  },
  {
    title: "India Centric Innovations",
    description: "Build solutions addressing unique challenges and opportunities in India.",
    icon: Lightbulb,
    examples: ["Agritech solutions", "Vernacular language tools", "Digital literacy platforms"]
  },
  {
    title: "Open Innovations",
    description: "Build upon existing open-source projects or create new ones for the community.",
    icon: GitMerge,
    examples: ["Developer tools", "Community platforms", "Decentralized applications"]
  }
];

export default function About() {
  return (
    <div className="relative min-h-screen">
      <HolographicBackground />
      <InteractiveParticles />
      
      <div className="relative z-10 py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-6">
              About ImpactX 25
            </h1>
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                ImpactX 25 is more than just a hackathon – it's a catalyst for innovation, 
                a platform for breakthrough ideas, and a community where brilliant minds 
                converge to create solutions that matter.
              </p>
            </div>
          </div>

          {/* Themes Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold holographic-text mb-4">
                Hackathon Themes
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose your battleground. Pick a theme that resonates with your vision 
                and build solutions that can change the world.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {themes.map((theme, index) => {
                const Icon = theme.icon;
                return (
                  <div
                    key={index}
                    className="glass rounded-2xl p-8 transition-all duration-300 hover:border-red-400/50 hover:glow-red"
                  >
                    <div className="flex items-center mb-4">
                      <Icon className="w-10 h-10 text-red-400 mr-4" />
                      <h3 className="text-2xl font-bold text-white">{theme.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg">{theme.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Organizing Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold holographic-text mb-4">Core Organizing Team</h2>
              <p className="text-lg md:text-xl text-gray-300">Meet the passionate team behind ImpactX 25</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Nithyahree R', role: 'Chair', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150&auto=format&fit=crop&q=80' },
                { name: 'Siri Hegde', role: 'Vice Chair', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80' },
                { name: 'Dev Kukreja', role: 'Secretary', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80' },
                { name: 'Mukund V', role: 'Treasurer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
                { name: 'Anirudh GM', role: 'Joint Treasurer', img: 'https://images.unsplash.com/photo-1583195225152-4731a5b82a26?w=150&auto=format&fit=crop&q=80' },
                { name: 'Rithika Shetty', role: 'Web Master', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
                { name: 'Chethana', role: 'Exe-com', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' }
              ].map(member => (
                <div key={member.name} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                  <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                  <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                  <p className="text-red-400 text-sm">{member.role}</p>
                </div>
              ))}
              <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 border-2 border-red-500/30 flex flex-col justify-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white">25+ Volunteers</h4>
                <p className="text-red-400 text-sm">Support Team</p>
              </div>
            </div>
          </div>
          
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <Target className="w-12 h-12 text-red-400 mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower the next generation of innovators by providing a platform where 
                creativity meets technology, fostering collaboration and pushing the boundaries 
                of what's possible in 24 intensive hours.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <Lightbulb className="w-12 h-12 text-red-400 mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the premier hackathon that bridges the gap between academic excellence 
                and real-world impact, creating solutions that address global challenges and 
                shape the future of technology.
              </p>
            </div>
          </div>

          {/* What Makes Us Special */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold holographic-text mb-8">
              What Makes ImpactX 25 Special
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <Code className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                Access to latest frameworks, APIs, and development tools. From AI/ML to blockchain, 
                we provide everything you need to build the future.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <Users className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Expert Mentorship</h3>
              <p className="text-gray-300">
                Learn from industry veterans, startup founders, and tech leaders who will guide 
                you throughout your 24-hour journey.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <Globe className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Global Impact Focus</h3>
              <p className="text-gray-300">
                Projects that matter. We encourage solutions addressing real-world problems - 
                from climate change to social inequality.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <Award className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Recognition & Prizes</h3>
              <p className="text-gray-300">
                Win exciting prizes, internship opportunities, and most importantly, 
                recognition from leading tech companies and investors.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Startup Incubation</h3>
              <p className="text-gray-300">
                Exceptional projects get fast-tracked into our partner incubators with 
                seed funding opportunities and continued mentorship.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lifetime Community</h3>
              <p className="text-gray-300">
                Join a network of innovators, entrepreneurs, and creators that extends 
                far beyond the 24-hour event. Build lasting connections.
              </p>
            </div>
          </div>

          {/* By the Numbers */}
          <div className="glass rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold holographic-text mb-8">ImpactX by the Numbers</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold text-red-400 mb-2">500+</p>
                <p className="text-gray-300">Participants Expected</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-red-400 mb-2">100+</p>
                <p className="text-gray-300">Innovative Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-red-400 mb-2">50+</p>
                <p className="text-gray-300">Expert Mentors</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-red-400 mb-2">₹1L+</p>
                <p className="text-gray-300">Total Prize Pool</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
