import React, { useState } from 'react';
import { Clock, CheckCircle, Circle, Users, Code, Trophy, Coffee, Presentation, Award } from 'lucide-react';
import HolographicBackground from './components/backgrounds/HolographicBackground';
import InteractiveParticles from './components/backgrounds/InteractiveParticles';

const day1Events = [
  {
    time: "09:00 AM - 10:00 AM",
    title: "Inauguration & Orientation",
    description: "Welcome ceremony, opening keynote, and event overview",
    icon: Trophy,
    status: "upcoming"
  },
  {
    time: "10:15 AM - 11:00 AM", 
    title: "Problem Statements Released & Team Briefing",
    description: "Challenge themes unveiled, team formation, and rules briefing",
    icon: Users,
    status: "upcoming"
  },
  {
    time: "11:00 AM - 06:00 PM",
    title: "Hackathon Coding Phase - Part 1", 
    description: "Primary development phase with mentor support available",
    icon: Code,
    status: "upcoming"
  },
  {
    time: "02:00 PM - 04:00 PM",
    title: "Mentorship & Checkpoints",
    description: "One-on-one guidance sessions and progress evaluation",
    icon: CheckCircle,
    status: "upcoming"
  },
  {
    time: "06:00 PM - 06:30 PM",
    title: "End-of-day Progress Submission",
    description: "Daily progress reports and overnight planning",
    icon: Clock,
    status: "upcoming"
  }
];

const day2Events = [
  {
    time: "09:00 AM - 01:00 PM",
    title: "Hackathon Coding Phase - Part 2",
    description: "Final development sprint and project completion",
    icon: Code,
    status: "upcoming"
  },
  {
    time: "11:00 AM - 12:00 PM",
    title: "Mentorship & Debugging Support", 
    description: "Technical support and last-minute guidance",
    icon: Users,
    status: "upcoming"
  },
  {
    time: "01:00 PM - 02:00 PM",
    title: "Lunch Break",
    description: "Networking lunch and final preparations",
    icon: Coffee,
    status: "upcoming"
  },
  {
    time: "02:00 PM - 04:00 PM",
    title: "Final Project Submission",
    description: "Project finalization and submission deadline",
    icon: Trophy,
    status: "upcoming"
  },
  {
    time: "04:00 PM - 05:30 PM",
    title: "Evaluation & Team Presentations",
    description: "Project demos and judging rounds",
    icon: Presentation,
    status: "upcoming"
  },
  {
    time: "05:30 PM - 06:30 PM", 
    title: "Closing Ceremony & Prize Distribution",
    description: "Winners announcement and awards ceremony",
    icon: Award,
    status: "upcoming"
  }
];

export default function Timeline() {
  const [selectedDay, setSelectedDay] = useState('day1');

  const currentEvents = selectedDay === 'day1' ? day1Events : day2Events;

  return (
    <div className="relative min-h-screen">
      <HolographicBackground />
      <InteractiveParticles />
      
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-6">
              Event Timeline
            </h1>
            <div className="glass rounded-2xl p-6">
              <p className="text-xl text-gray-300 mb-4">
                Complete schedule for ImpactX 25 - October 24-25, 2025
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="w-4 h-4 text-red-400 fill-red-400" />
                  <span>Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="w-4 h-4 text-gray-400" />
                  <span>Upcoming</span>
                </div>
              </div>
            </div>
          </div>

          {/* Day Selector */}
          <div className="flex justify-center mb-12">
            <div className="glass rounded-xl p-2 flex">
              <button
                onClick={() => setSelectedDay('day1')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedDay === 'day1' 
                    ? 'bg-red-600/30 text-white border border-red-500/50' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Day 1 - October 24th
              </button>
              <button
                onClick={() => setSelectedDay('day2')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedDay === 'day2' 
                    ? 'bg-red-600/30 text-white border border-red-500/50' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Day 2 - October 25th
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-500 to-red-600"></div>
            
            {/* Timeline Events */}
            <div className="space-y-8">
              {currentEvents.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Timeline Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full glass flex items-center justify-center transition-all duration-300 ${
                        event.status === 'completed' ? 'bg-green-600/30 border-green-400/50' :
                        event.status === 'active' ? 'bg-red-600/30 border-red-400/50 glow-red' :
                        'bg-gray-600/30 border-gray-400/50'
                      }`}>
                        <IconComponent className={`w-8 h-8 ${
                          event.status === 'completed' ? 'text-green-400' :
                          event.status === 'active' ? 'text-red-400' :
                          'text-gray-400'
                        }`} />
                      </div>
                    </div>

                    {/* Event Content */}
                    <div className="flex-1 min-w-0">
                      <div className={`glass rounded-2xl p-6 transition-all duration-300 ${
                        event.status === 'active' ? 'border-red-400/50 glow-red' : ''
                      }`}>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            event.status === 'completed' ? 'bg-green-600/20 text-green-400' :
                            event.status === 'active' ? 'bg-red-600/20 text-red-400' :
                            'bg-gray-600/20 text-gray-400'
                          }`}>
                            {event.time}
                          </span>
                        </div>
                        <p className="text-gray-300">{event.description}</p>
                        
                        {event.status === 'active' && (
                          <div className="mt-4 p-3 bg-red-600/10 border border-red-500/20 rounded-xl">
                            <p className="text-red-400 text-sm font-medium">
                              Currently in progress - Join us now!
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-16 glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold holographic-text mb-6">Important Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Venue & Date</h3>
                <p className="text-gray-300 mb-4">RNS Institute of Technology, October 24-25, 2025</p>
                
                <h3 className="text-lg font-semibold text-white mb-3">Event Format</h3>
                <p className="text-gray-300 mb-4">Offline hackathon with on-campus facilities</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Registration Fee</h3>
                <p className="text-gray-300 mb-4">₹799 per team of 4 members</p>
                
                <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                <p className="text-gray-300">ieeecsrnsit@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}