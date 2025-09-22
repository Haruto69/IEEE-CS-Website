
import React, { useState } from 'react';
import { 
  ArrowRight, Calendar, MapPin, Users, Trophy, Clock, Target, Lightbulb, Code, Award, Globe, Leaf, Shield, GitMerge,
  CheckCircle, Circle, Coffee, Presentation, ExternalLink, Mail, Heart
} from 'lucide-react';
import HolographicBackground from '../components/backgrounds/HolographicBackground';
import InteractiveParticles from '../components/backgrounds/InteractiveParticles';
import FloatingShapes from '../components/backgrounds/FloatingShapes';
import GlassButton from '../components/ui/GlassButton';

const themes = [
  {
    title: "Sustainability in Green Tech",
    description: "Create eco-friendly solutions for a greener future.",
    icon: Leaf
  },
  {
    title: "Women Safety",
    description: "Develop technology to enhance safety and security for women.",
    icon: Shield
  },
  {
    title: "India Centric Innovations",
    description: "Build solutions addressing unique challenges and opportunities in India.",
    icon: Lightbulb
  },
  {
    title: "Open Innovations",
    description: "Build upon existing open-source projects or create new ones for the community.",
    icon: GitMerge
  }
];

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

const currentSponsors = [
  {
    name: "Unstop",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg",
    tier: "Gold",
    description: "Platform for opportunities & talent"
  },
  {
    name: "0xday",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/62d6407b4657a_0xday.png?d=240x100",
    tier: "Silver",
    description: "Cybersecurity community & events"
  },
  {
    name: "IEEE CS Bangalore",
    logo: "https://ieeecs-bangalore.org/wp-content/uploads/2022/11/ieee-cs-logo-300x126.png",
    tier: "Bronze",
    description: "IEEE Computer Society Bangalore Section"
  }
];

const sponsorshipTiers = [
  {
    name: "Gold",
    price: "₹3,00,000",
    color: "from-yellow-400 to-orange-400",
    benefits: [
      "Logo on website and materials",
      "Workshop/tech talk opportunity",
      "Booth space available",
      "3 mentor slots",
      "Prize sponsorship recognition",
      "Newsletter mention"
    ]
  },
  {
    name: "Silver",
    price: "₹1,50,000",
    color: "from-gray-400 to-gray-600",
    benefits: [
      "Logo on website",
      "1 mentor slot",
      "Swag bag inclusion",
      "Social media mention",
      "Networking session access"
    ]
  },
  {
    name: "Bronze",
    price: "₹75,000",
    color: "from-amber-600 to-yellow-600",
    benefits: [
      "Logo on website",
      "Swag bag inclusion",
      "Social media shoutout",
      "Certificate of appreciation"
    ]
  }
];

export default function Home() {
  const [selectedDay, setSelectedDay] = useState('day1');
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const currentEvents = selectedDay === 'day1' ? day1Events : day2Events;

  return (
    <div className="relative min-h-screen">
      <HolographicBackground />
      <InteractiveParticles />
      <FloatingShapes />
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-32 md:pt-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="glass rounded-3xl p-6 md:p-12 mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 holographic-text">
              ImpactX 25
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4">
              24-Hour Innovation Challenge
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              Join the most electrifying hackathon of the year at RNSIT. Build, innovate, and create solutions 
              that will shape tomorrow. 24 hours of pure coding excellence.
            </p>

            <div className="mb-8">
              <div className="inline-block glass rounded-2xl p-4 md:p-6 border-2 border-red-500/50 glow-red">
                <p className="text-base md:text-lg lg:text-xl text-red-400 font-semibold mb-2">Total Prize Pool</p>
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">₹50,000</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <a href="#register">
                <GlassButton variant="primary" size="lg" className="text-lg px-8 py-4 w-full md:w-auto">
                  Register Now <ArrowRight className="w-5 h-5 ml-2" />
                </GlassButton>
              </a>
              <a href="#timeline">
                <GlassButton size="lg" className="text-lg px-8 py-4 w-full md:w-auto">
                  View Timeline
                </GlassButton>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              <div className="glass rounded-xl p-4">
                <Clock className="w-6 md:w-8 h-6 md:h-8 text-red-400 mx-auto mb-2" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-white">24</p>
                <p className="text-xs md:text-sm text-gray-400">Hours</p>
              </div>
              <div className="glass rounded-xl p-4">
                <Users className="w-6 md:w-8 h-6 md:h-8 text-red-400 mx-auto mb-2" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-white">500+</p>
                <p className="text-xs md:text-sm text-gray-400">Participants</p>
              </div>
              <div className="glass rounded-xl p-4">
                <Calendar className="w-6 md:w-8 h-6 md:h-8 text-red-400 mx-auto mb-2" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-white">Oct 24-25</p>
                <p className="text-xs md:text-sm text-gray-400">2025</p>
              </div>
              <div className="glass rounded-xl p-4">
                <MapPin className="w-6 md:w-8 h-6 md:h-8 text-red-400 mx-auto mb-2" />
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-white">RNSIT</p>
                <p className="text-xs md:text-sm text-gray-400">Offline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
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
                Access to latest frameworks, APIs, and development tools.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <Users className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Expert Mentorship</h3>
              <p className="text-gray-300">
                Learn from industry veterans and tech leaders who will guide you.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <Globe className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Global Impact Focus</h3>
              <p className="text-gray-300">
                We encourage solutions addressing real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
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

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-500 to-red-600"></div>
            
            <div className="space-y-8">
              {currentEvents.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <div key={index} className="relative flex items-start gap-6">
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

                    <div className="flex-1 min-w-0">
                      <div className={`glass rounded-2xl p-6 transition-all duration-300 ${
                        event.status === 'active' ? 'border-red-400/50 glow-red' : ''
                      }`}>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-xl font-bold text-white mb-2 md:mb-0">{event.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium self-start md:self-auto ${
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
      </section>

      {/* Register Section */}
      <section id="register" className="py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-6">
              Join ImpactX 25
            </h1>
            <div className="glass rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-gray-300 mb-4">
                Ready to turn your ideas into reality? Register now for 24 hours of 
                pure innovation at RNSIT and compete for amazing prizes!
              </p>
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
            
            <div className="mb-12">
              <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <GlassButton variant="primary" size="lg" className="text-xl px-10 py-5 w-full md:w-auto">
                  Register on Unstop
                  <ExternalLink className="w-6 h-6 ml-3" />
                </GlassButton>
              </a>
              <p className="text-gray-400 mt-4">Registration closes October 20, 2025</p>
            </div>
          </div>

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

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-6">
              Our Partners
            </h1>
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-6">
                ImpactX 25 is made possible by our amazing sponsors who believe in 
                fostering innovation and supporting the next generation of tech leaders.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a href="mailto:ieeecsrnsit@gmail.com">
                  <GlassButton variant="primary" size="lg">
                    <Mail className="w-5 h-5 mr-2" />
                    Become a Sponsor
                  </GlassButton>
                </a>
                <GlassButton size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Download Brochure
                </GlassButton>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold holographic-text mb-4">
                Thank You to Our Sponsors
              </h2>
              <p className="text-xl text-gray-300">
                These amazing organizations are making ImpactX 25 possible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentSponsors.map((sponsor, index) => (
                <div key={index} className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                  <div className="mb-6 flex-grow flex items-center justify-center">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="max-h-24 w-auto object-contain"
                      style={{ filter: sponsor.name.includes("Unstop") ? 'invert(1)' : 'none' }} // Changed filter for Unstop logo
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                      sponsor.tier === 'Gold' ? 'bg-yellow-400/20 text-yellow-400' :
                      sponsor.tier === 'Silver' ? 'bg-gray-400/20 text-gray-400' :
                      'bg-amber-600/20 text-amber-600'
                    }`}>
                      {sponsor.tier} Sponsor
                    </span>
                    <p className="text-gray-300 text-sm">{sponsor.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <p className="text-gray-300">
                  Want to see your organization here? Join our growing list of sponsors 
                  and help shape the future of innovation!
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold holographic-text mb-4">
                Sponsorship Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with us to reach 500+ talented developers, designers, and innovators. 
                Choose the package that aligns with your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsorshipTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`glass rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedTier === index ? 'border-red-400/50 glow-red' : ''
                  }`}
                  onClick={() => setSelectedTier(selectedTier === index ? null : index)}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center mx-auto mb-4`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    {tier.price}
                  </p>
                  
                  <ul className="space-y-2">
                    {tier.benefits.slice(0, selectedTier === index ? tier.benefits.length : 3).map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                    {selectedTier !== index && tier.benefits.length > 3 && (
                      <li className="text-sm text-gray-400">
                        + {tier.benefits.length - 3} more benefits
                      </li>
                    )}
                  </ul>
                  
                  <a href="mailto:ieeecsrnsit@gmail.com">
                    <GlassButton 
                      className="w-full mt-6"
                      variant={index === 0 ? "primary" : "default"}
                    >
                      Choose {tier.name}
                    </GlassButton>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold holographic-text mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Let's create something amazing together. Get in touch to discuss 
                custom sponsorship opportunities that align with your goals.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a href="mailto:ieeecsrnsit@gmail.com">
                  <GlassButton variant="primary" size="lg">
                    <Mail className="w-5 h-5 mr-2" />
                    ieeecsrnsit@gmail.com
                  </GlassButton>
                </a>
                <GlassButton size="lg">
                  📞 Schedule a Call
                </GlassButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RNSIT Campus Section */}
      <section className="py-20 px-4 md:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-4">
              Our Venue: RNS Institute of Technology
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Experience innovation in our state-of-the-art campus facilities with cutting-edge 
              infrastructure and technology labs.
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
