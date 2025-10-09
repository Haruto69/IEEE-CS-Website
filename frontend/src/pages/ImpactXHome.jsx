import React, { useState } from 'react';
import { 
  ArrowRight, Calendar, MapPin, Users, Lightbulb, Code, Award, 
  Globe, Leaf, Mail, ExternalLink,Clock, Trophy, CheckCircle, 
  Circle, Presentation, Coffee, 
  Utensils,
  ClipboardCheck,
  Rocket,
  Moon,
  Music,
  ClipboardList,
  Gift,
  CreditCard
} from 'lucide-react';

import HolographicBackground from '../components/backgrounds/HolographicBackground';
import InteractiveParticles from '../components/backgrounds/InteractiveParticles';
import FloatingShapes from '../components/backgrounds/FloatingShapes';
import GlassButton from '../components/ui/GlassButton';

import Navbar from "../components/Navbar";
import Logo from "../assets/impactx-logo.png";

// Themes for About section
const themes = [
  { 
    title: "Sustainability in Green Tech", 
    description: "Create eco-friendly solutions for a greener future.", 
    icon: Leaf, 
    examples: [
      "Clean & Green Energy: Apps for renewable energy and consumption tracking.",
      "Smart Waste Management: Platforms for recycling awareness and reporting.",
      "Sustainable Mobility & Transport: Tools for eco-friendly commutes and traffic reduction."
    ] 
  },
  { 
    title: "FinTech & Digital Finance", 
    description: "Build smart, secure, and inclusive financial solutions.", 
    icon: CreditCard, 
    examples: [
      "Digital Payments & Financial Inclusion",
      "Personal Finance & Wealth Management",
      "Fraud Detection & Regulatory Tech (RegTech)"
    ]
  },
  { 
    title: "India Centric Innovations", 
    description: "Build solutions addressing unique challenges and opportunities in India.", 
    icon: Lightbulb, 
    examples: ["Agritech solutions", "Vernacular language tools", "Digital literacy platforms"] 
  },
];
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
  {themes.map((theme, index) => {
    const Icon = theme.icon;
    return (
      <GlassButton
        key={index}
        className={`rounded-2xl p-8 w-full text-left 
                   bg-red-600/20 border-red-400/40
                   shadow-[0_0_12px_rgba(239,68,68,0.7)] 
                   hover:shadow-[0_0_25px_rgba(239,68,68,1)] 
                   hover:scale-105 transition-transform duration-300
                   ${index === 2 ? "md:col-span-2 md:w-1/2 justify-self-center" : ""}`}
      >
        <div className="flex items-center mb-4">
          <Icon className="w-10 h-10 text-red-400 mr-4" />
          <h3 className="text-2xl font-bold text-white">{theme.title}</h3>
        </div>
        <p className="text-gray-300 text-lg">{theme.description}</p>
        {theme.examples && (
          <ul className="mt-3 text-sm text-gray-400 list-disc list-inside">
            {theme.examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        )}
      </GlassButton>
    );
  })}
</div>



// Timeline events
const day1Events = [
  { time: "12:00 PM - 1:00 PM", title: "Arrival and Check- in", description: "Wifi- credentials distribution", icon: Users, status: "upcoming" },
  { time: "01:00 PM - 01:40 PM", title: "Inaugural & Welcome", description: "Speeches by HOD/Principal/Director. Rules explained", icon: Presentation, status: "upcoming" },
  { time: "02:00 PM", title: "Hackathon Kickoff", description: "Hackathon officially begins , teams begin coding !", icon: Rocket, status: "upcoming" },
  { time: "04:30 PM", title: "Tea Break", icon: Coffee, status: "upcoming" },
  { time: "05:30 PM - 06:30 PM", title: "Jury Checkpoint 1", description: "Judges/Mentors go around for the first checkpoint", icon: ClipboardCheck, status: "upcoming" },
  { time: "08:00 PM - 09:30 PM", title: "Dinner",  icon: Utensils, status: "upcoming" },
  { time: "09:30 PM - 10:00 PM", title: "Jury Checkpoint 2", description: "Early prototype evaluation", icon: ClipboardCheck, status: "upcoming" },
  { time: "11:30 PM Onwards", title: "Night Sprint", icon: Moon, status: "upcoming" },
];

const day2Events = [
  { time: "02:00 AM", title: "Refreshments", description: "Snacks + Coffee/Tea", icon: Coffee, status: "upcoming" },
  { time: "03:00 AM - 03:30 AM", title: "Midnight Energizer", description: "Fun cultural/music/quiz activity", icon: Music, status: "upcoming" },
  { time: "05:00 AM", title: "Tea Break", description: "Second round of tea served", icon: Coffee, status: "upcoming" },
  { time: "07:00 AM - 08:00 AM", title: "Breakfast", description: "Breakfast served for all teams", icon: Utensils, status: "upcoming" },
  { time: "10:00 AM - 11:00 AM", title: "Jury Checkpoint 3", description: "Major review by jury", icon: ClipboardCheck, status: "upcoming" },
  { time: "11:30 AM - 12:30 PM", title: "Final Sprint", description: "Last round of polishing & testing", icon: Code, status: "upcoming" },
  { time: "12:30 PM - 12:45 PM", title: "Code Freeze", description: "Final submission deadline", icon: Presentation, status: "upcoming" },
  { time: "12:45 PM - 02:00 PM", title: "Final Jury Evaluation", description: "5–7 min presentations and project demos", icon: Presentation, status: "upcoming" },
  { time: "02:00 PM - 02:30 PM", title: "Mini Auditorium Session", description: "Goodies distribution (notepads, badges, t-shirts if applicable)", icon: Gift, status: "upcoming" },
  { time: "02:30 PM - 02:40 PM", title: "Faculty & Jury Words", description: "Closing notes from senior faculty and jury", icon: Users, status: "upcoming" },
  { time: "02:40 PM - 03:00 PM", title: "Winners Announced", description: "Prize distribution, group photo & feedback", icon: Award, status: "upcoming" },
  { time: "03:00 PM - 03:30 PM", title: "Mentor Meet & Feedback", description: "Feedback forms and participation certificates", icon: ClipboardList, status: "upcoming" }
];

const currentSponsors = [
  { name: "", logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg",  },
  { name: "", logo: "/0xDay.png", description: "" },
  { name: "", logo: "/cs-black.png", description: "" },
  { name: "", logo: "/gca.png", description: "" }
];

const sponsorshipTiers = [
  { name: "Title Sponsor", price: "₹60,000+", color: "from-yellow-400 to-orange-400", benefits: ["Logo on website and event materials", "Opportunity to host a workshop or tech talk", "Booth space at events"] },
  { name: "Co-Sponsor", price: "₹40,000+", color: "from-gray-400 to-gray-600", benefits: ["Logo on website", "Social media shoutout", "Access to networking sessions"] },
  { name: "Associate Sponsor", price: "₹20,000+", color: "from-amber-600 to-yellow-600", benefits: ["Logo on website", "Swag bag inclusion"] },
  { name: "Event Sponsor", price: "₹30,000+", color: "from-blue-400 to-blue-600", benefits: ["Event-specific branding", "Mention in newsletter"] },
  { name: "Other Sponsors", price: "₹5,000 - 10,000", color: "from-green-400 to-teal-400", benefits: ["Mention on website", "Certificate of appreciation"] }
];

export default function ImpactXHome() {
  const [selectedDay, setSelectedDay] = useState('day1');
  const [selectedTier, setSelectedTier] = useState(null);
  const buttonClasses =
  "text-xl px-10 py-5 w-full md:w-auto flex items-center justify-center bg-red-500/30 border border-red-500/40 hover:bg-red-500/50";

  const currentEvents = selectedDay === 'day1' ? day1Events : day2Events;

  return (
    <div className="relative min-h-screen">
      <HolographicBackground />
      <InteractiveParticles />
      <FloatingShapes />
      <Navbar />

      {/* Home Section */}
        <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-6 pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto text-center">

            {/* Main Box */}
            <div className="rounded-3xl pt-2 pb-6 px-12 md:px-40 backdrop-blur-2xl border border-white/20 shadow-2xl hover:shadow-red-500/20 transition-all">
            <img src={Logo} alt="ImpactX Logo" className="w-80 md:w-96 h-auto mx-auto -mb-2 -mt-2 drop-shadow-lg" />
      <p className="text-xl md:text-2xl text-white mb-0">24-Hour Innovation Challenge</p>
      <p className="text-base md:text-lg text-white/80 mb-3 max-w-3xl mx-auto -mt-1">
        Join the most electrifying hackathon of the year at RNSIT. Build, innovate, and
        create solutions that will shape tomorrow. 24 hours of pure coding excellence.
      </p>

            {/* Total Prize Pool Box */}
            <div className="mb-4">
                <div className="inline-block rounded-2xl p-6 border-2 border-red-500/60
                                backdrop-blur-lg shadow-xl hover:scale-105 transition-transform">
                <p className="text-lg md:text-xl text-red-400 font-semibold mb-2">Total Prize Pool</p>
                <p className="text-5xl md:text-6xl font-bold text-white drop-shadow-md">₹50,000</p>
                </div>
            </div>

            {/* Team & Fee Info (hero) */}
            <div className="flex justify-center mb-4">
              <div className="glass rounded-full px-5 py-2 text-white/90 text-lg md:text-xl">
                Team of 2- 4 • Registration Fee: ₹799 per team
              </div>
            </div>

            {/* Register & Timeline Buttons with smooth scroll */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <GlassButton
                onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                className="rounded-3xl w-full md:w-1/2 py-4 flex items-center justify-center
                            backdrop-blur-lg border border-red-400/40
                            shadow-[0_0_12px_rgba(239,68,68,0.7)] 
                            hover:shadow-[0_0_25px_rgba(239,68,68,1)]
                            hover:scale-105 transition-transform duration-300 text-lg"
                >
                Register  <ArrowRight className="w-5 h-5 ml-2" />
                </GlassButton>

                <GlassButton
                onClick={() => document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' })}
                className="rounded-3xl w-full md:w-1/2 py-4 flex items-center justify-center
                            backdrop-blur-lg border border-red-400/40
                            shadow-[0_0_12px_rgba(239,68,68,0.7)] 
                            hover:shadow-[0_0_25px_rgba(239,68,68,1)]
                            hover:scale-105 transition-transform duration-300 text-lg"
                >
                View Timeline
                </GlassButton>
            </div>
            {/* Quick Theme Names */}
<div className="mt-4 flex flex-wrap justify-center gap-4">
  {themes.map((theme, index) => (
    <div
      key={index}
      className="px-4 py-2 rounded-full border border-red-400/40 
                 backdrop-blur-md text-white/90 text-sm md:text-base 
                 shadow-md hover:scale-105 transition"
    >
      {theme.title}
    </div>
  ))}
</div>


            {/* Quick Stats */}
            <div className="rounded-3xl p-6 border border-white/20 backdrop-blur-xl shadow-lg mt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <div className="rounded-xl p-4 backdrop-blur-md border border-red-500/30 shadow-md hover:scale-105 transition">
                    <Clock className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <p className="text-xl md:text-2xl font-bold text-white">24</p>
                    <p className="text-sm text-white/70">Hours</p>
                    </div>

                    <div className="rounded-xl p-4 backdrop-blur-md border border-red-500/30 shadow-md hover:scale-105 transition">
                    <Users className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <p className="text-xl md:text-2xl font-bold text-white">500+</p>
                    <p className="text-sm text-white/70">Participants</p>
                    </div>

                    <div className="rounded-xl p-4 backdrop-blur-md border border-red-500/30 shadow-md hover:scale-105 transition">
                    <Calendar className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <p className="text-xl md:text-2xl font-bold text-white">Oct 24-25</p>
                    <p className="text-sm text-white/70">2025</p>
                    </div>

                    <div className="rounded-xl p-4 backdrop-blur-md border border-red-500/30 shadow-md hover:scale-105 transition">
                    <MapPin className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <p className="text-xl md:text-2xl font-bold text-white">RNSIT</p>
                    <p className="text-sm text-white/70">Offline</p>
                    </div>
                </div>
            </div>


            </div>
        </div>
        </section>


      {/* About Section */}
      <section id="about">
        <div className="relative z-10 py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-6 text-white">
                About ImpactX 25
              </h1>
              <GlassButton
                className="rounded-2xl p-8 max-w-4xl mx-auto mb-8 w-full
                           bg-red-600/20 border-red-400/40 
                           shadow-[0_0_12px_rgba(239,68,68,0.7)] 
                           hover:shadow-[0_0_25px_rgba(239,68,68,1)]"
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  ImpactX 25 is more than just a hackathon – it's a catalyst for innovation, 
                  a platform for breakthrough ideas, and a community where brilliant minds 
                  converge to create solutions that matter.
                </p>
              </GlassButton>
            </div>

            {/* Themes Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold holographic-text mb-4 text-white">
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
      <GlassButton
        key={index}
        className={`rounded-2xl p-8 w-full text-left 
                   bg-red-600/20 border-red-400/40
                   shadow-[0_0_12px_rgba(239,68,68,0.7)] 
                   hover:shadow-[0_0_25px_rgba(239,68,68,1)] 
                   hover:scale-105 transition-transform duration-300
                   ${index === 2 ? "md:col-span-2 md:w-1/2 justify-self-center" : ""}`}
      >
        <div className="flex items-center mb-4">
          <Icon className="w-10 h-10 text-red-400 mr-4" />
          <h3 className="text-2xl font-bold text-white">{theme.title}</h3>
        </div>
        <p className="text-gray-300 text-lg">{theme.description}</p>
        {theme.examples && (
          <ul className="mt-3 text-sm text-gray-400 list-disc list-inside">
            {theme.examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        )}
      </GlassButton>
    );
  })}
</div>

            </div>

            {/* Mission & Vision removed per request */}

            {/* What Makes Us Special */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold holographic-text mb-8 text-white">
                What Makes ImpactX 25 Special
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {[ 
                { icon: Code, title: "Cutting-Edge Technology", description: "Access to latest frameworks, APIs, and development tools. From AI/ML to blockchain, we provide everything you need to build the future." },
                { icon: Users, title: "Expert Mentorship", description: "Learn from industry veterans, startup founders, and tech leaders who will guide you throughout your 24-hour journey." },
                { icon: Globe, title: "Global Impact Focus", description: "Projects that matter. We encourage solutions addressing real-world problems - from climate change to social inequality." },
                { icon: Award, title: "Recognition & Prizes", description: "Win exciting prizes, internship opportunities, and most importantly, recognition from leading tech companies and investors." },
                { icon: null, title: "Startup Incubation", description: "Exceptional projects get fast-tracked into our partner incubators with seed funding opportunities and continued mentorship.", emoji: "🚀" },
                { icon: null, title: "Lifetime Community", description: "Join a network of innovators, entrepreneurs, and creators that extends far beyond the 24-hour event. Build lasting connections.", emoji: "🌟" }
              ].map((item, idx) => (
                <GlassButton
                  key={idx}
                  className="rounded-2xl p-6 w-full text-center 
                             bg-red-600/20 border-red-400/40
                             shadow-[0_0_12px_rgba(239,68,68,0.7)] 
                             hover:shadow-[0_0_25px_rgba(239,68,68,1)] 
                             hover:scale-105 transition-transform duration-300"
                >
                  {item.icon ? (
                    <item.icon className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{item.emoji}</span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </GlassButton>
              ))}
            </div>

            {/* By the Numbers */}
            <div className="glass rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold holographic-text mb-8 text-white">
                ImpactX by the Numbers
              </h2>
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
                  <p className="text-4xl font-bold text-red-400 mb-2">₹50k</p>
                  <p className="text-gray-300">Total Prize Pool</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline">
        <div className="relative min-h-screen">
          <div className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-6 text-white">
                ImpactX'25 Timeline
              </h1>
              <div className="glass rounded-2xl p-6">
                <p className="text-xl text-white mb-4">
                  Schedule of the overall hackathon
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-white">
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
              <div className="glass rounded-xl p-2 flex z-10 relative">
                <button
                  onClick={() => setSelectedDay('day1')}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${selectedDay === 'day1' ? 'bg-red-600/30 text-white border border-red-500/50' : 'text-white hover:text-white/80'}`}
                >
                  Day 1
                </button>
                <button
                  onClick={() => setSelectedDay('day2')}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${selectedDay === 'day2' ? 'bg-red-600/30 text-white border border-red-500/50' : 'text-white hover:text-white/80'}`}
                >
                  Day 2
                </button>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-600 z-0"></div>

              <div className="space-y-12">
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
                            'text-white'
                          }`} />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className={`glass rounded-2xl p-6 transition-all duration-300 ${
                          event.status === 'active' ? 'border-red-400/50 glow-red' : ''
                        }`}>
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-white">{event.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              event.status === 'completed' ? 'bg-green-600/20 text-green-400' :
                              event.status === 'active' ? 'bg-red-600/20 text-red-400' :
                              'bg-gray-600/20 text-white'
                            }`}>
                              {event.time}
                            </span>
                          </div>
                          <p className="text-white">{event.description}</p>

                          {event.status === 'active' && (
                            <div className="mt-4 p-3 bg-red-600/10 border border-red-500/20 rounded-xl">
                              <p className="text-red-400 text-sm font-medium">
                                Currently in progress
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

            
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="relative z-10 py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold holographic-text text-white mb-6">
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
                  <span>Team of 2-4 members</span>
                </div>
              </div>

              <div className="text-2xl font-bold text-red-400 mb-4">
                Registration Fee: ₹799 per team
              </div>
            </div>

            {/* Registration Button */}
            <div className="mb-12">
              <a 
                href="https://unstop.com/p/impactx25-hackathon-ieee-cs-rnsit-rns-institute-of-technology-rnsit-bengaluru-1566936"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <GlassButton 
                  variant="primary" 
                  size="lg" 
                  className="text-xl px-10 py-5 w-full md:w-auto flex items-center justify-center
                             bg-red-500/30 border border-red-500/40 hover:bg-red-500/50"
                >
                  Register 
                  <ExternalLink className="w-6 h-6 ml-3" />
                </GlassButton>
              </a>
              <p className="text-gray-400 mt-4">Registration closes October 20, 2025</p>
            </div>
          </div>

          {/* Prize Pool */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold holographic-text text-white mb-4">
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
                 
                  <div>• Most Sustainable Solution</div>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Registration Details */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold holographic-text mb-6 text-center text-white">
              Registration Details
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Team Formation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Team size: 2 - 4 members </li>
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
      <section id="sponsors" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-6 text-white">
              Our Partners
            </h1>
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
                <p className="text-xl text-white/80 mb-6">
                    Our IEEE-CS Chapter events are made possible by these amazing sponsors who support innovation and student growth.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <GlassButton
                    size="lg"
                    className={buttonClasses}
                    onClick={() => {
                    window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=ieeecsrnsit@gmail.com",
                        "_blank",
                        "noopener,noreferrer"
                    );
                    }}
                >
                    <Mail className="w-5 h-5 mr-2" />
                    Become a Sponsor
                </GlassButton>

                <a href="/Brochure.pdf" download className="w-full md:w-auto">
                    <GlassButton size="lg" className={buttonClasses}>
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Download Brochure
                    </GlassButton>
                </a>
                </div>
            </div>
          </div>

          {/* Current Sponsors */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold holographic-text mb-4 text-white">
                Thank You to Our Sponsors
              </h2>
              <p className="text-xl text-white/80">
                These organizations help us make IEEE-CS events possible
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
                      style={{ filter: sponsor.name.includes("Unstop") ? 'invert(1) grayscale(1) brightness(2)' : 'none' }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                    <p className="text-white/80 text-sm">{sponsor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Packages */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold holographic-text mb-4 text-white">
                Sponsorship Packages
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Partner with us to reach engineering students and innovators. Select a package that fits your objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsorshipTiers.map((tier, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105"
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
                      <li key={i} className="flex items-start text-sm text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 mr-3 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                    {selectedTier !== index && tier.benefits.length > 3 && (
                      <li className="text-sm text-white/60">
                        + {tier.benefits.length - 3} more benefits
                      </li>
                    )}
                  </ul>
                  
                  <a href="mailto:ieeecsrnsit@gmail.com">
                    <GlassButton size="lg" className={buttonClasses}>
                      Choose {tier.name}
                    </GlassButton>
                  </a>
                </div>
              ))}
            </div>
          </div>

            {/* Contact CTA */}
            <div className="text-center">
                <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold holographic-text mb-4 text-white">
                    Ready to Partner With Us?
                    </h2>
                    <p className="text-xl text-white/80 mb-6">
                    Let's create something amazing together. Reach out to discuss custom sponsorship opportunities.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <GlassButton
                        size="lg"
                        className={buttonClasses}
                        onClick={() => {
                        window.open(
                            "https://mail.google.com/mail/?view=cm&fs=1&to=ieeecsrnsit@gmail.com",
                            "_blank",
                            "noopener,noreferrer"
                        );
                        }}
                    >
                        <Mail className="w-5 h-5 mr-2" />
                        ieeecsrnsit@gmail.com
                    </GlassButton>

                    <GlassButton
                        size="lg"
                        className={buttonClasses}
                        onClick={() => {
                        window.open("tel:+919916088317");
                        }}
                    >
                        📞 Schedule a Call
                    </GlassButton>
                    </div>
                </div>
                </div>

        </div>
      </section>
    </div>
  );
}
