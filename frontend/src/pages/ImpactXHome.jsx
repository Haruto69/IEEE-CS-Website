<<<<<<< HEAD
import React, { useState } from 'react';
import { 
  ArrowRight, Calendar, MapPin, Users, Lightbulb, Code, Award, 
  Globe, Leaf, Mail, ExternalLink, Clock, Trophy, CheckCircle, 
  Circle, Presentation, Coffee, Utensils, ClipboardCheck, Rocket, 
  Moon, Music, ClipboardList, Gift, CreditCard
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

// Timeline events
const day1Events = [
  { time: "12:00 PM - 1:00 PM", title: "Arrival and Check-in", description: "Wifi- credentials distribution", icon: Users, status: "upcoming" },
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
  { name: "", logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg" },
  { name: "", logo: "/0xDay.png", description: "" },
  { name: "", logo: "/cs-black.png", description: "" },
  { name: "", logo: "/gca.png", description: "" },
  { name: "", logo: "/lumbarpanels.png", description: "" }
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
=======
import React from "react";
import { Calendar, Clock, MapPin, Users, Award, Code, Briefcase, Lightbulb } from "lucide-react";

export default function ImpactXHome() {
>>>>>>> c8dce2dc989d7f006e5bb0f78b2d671577cf852c

  const themes = [
    {
      title: "🌱 Sustainability in Green Tech",
      description: "Innovate for a greener planet with technology that promotes environmental sustainability."
    },
    {
      title: "🛡️ Cybersecurity for All",
      description: "Develop solutions that make digital security accessible, reliable, and simple for everyone."
    },
    {
      title: "🏥 Healthcare Tech",
      description: "Design technology-driven solutions to improve healthcare systems and patient care."
    },
    {
      title: "📚 Education and Accessibility",
      description: "Bridge learning gaps with inclusive and innovative educational technology."
    },
    {
      title: "🌍 Social Impact and Governance",
      description: "Build tech that promotes equality, governance, and better social systems."
    },
    {
      title: "🚀 Open Innovation",
      description: "Push boundaries — create any impactful tech solution you believe in!"
    }
  ];

  const day1Events = [
    { time: "9:00 AM", event: "Inauguration Ceremony" },
    { time: "10:00 AM", event: "Hackathon Kickoff!" },
    { time: "1:00 PM", event: "Lunch Break" },
    { time: "2:00 PM", event: "Coding Continues" },
    { time: "6:00 PM", event: "Mentor Review Sessions" }
  ];

  const day2Events = [
    { time: "9:00 AM", event: "Submission Deadline" },
    { time: "10:00 AM", event: "Judging Round 1" },
    { time: "1:00 PM", event: "Lunch Break" },
    { time: "2:00 PM", event: "Final Presentations" },
    { time: "4:00 PM", event: "Valedictory & Awards" }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">IMPACTX 2025 💡</h1>
        <p className="text-lg text-gray-100 mb-6">Where Innovation Meets Impact</p>
        <p className="max-w-2xl mx-auto text-gray-200">
          A state-level hackathon organized by the Department of Cybersecurity, RNSIT.  
          Join us in solving real-world problems through technology that drives positive change!
        </p>
      </section>

<<<<<<< HEAD
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

            {/* Prize Pool Box */}
            <div className="mb-4">
              <div className="inline-block rounded-2xl p-6 border-2 border-red-500/60
                              backdrop-blur-lg shadow-xl hover:scale-105 transition-transform">
                <p className="text-lg md:text-xl text-red-400 font-semibold mb-2">Total Prize Pool</p>
                <p className="text-5xl md:text-6xl font-bold text-white drop-shadow-md">₹50,000</p>
              </div>
            </div>

            {/* Team & Fee Info */}
            <div className="flex justify-center mb-4">
              <div className="glass rounded-full px-5 py-2 text-white/90 text-lg md:text-xl">
                Team of 2- 4 • Registration Fee: ₹799 per team
              </div>
            </div>

            {/* Register & Timeline Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <GlassButton
                onClick={() => {}}
                className="rounded-3xl w-full md:w-1/2 py-4 flex items-center justify-center
                          backdrop-blur-lg border border-red-400/40
                          shadow-[0_0_12px_rgba(239,68,68,0.7)] 
                          opacity-50 pointer-events-none
                          text-lg"
              >
                Registrations Closed
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

=======
      {/* Themes Section */}
      <section className="py-20 px-6 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400">
          Hackathon Themes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-3">{theme.title}</h3>
              <p className="text-gray-300">{theme.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-black/80 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Event Timeline
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-pink-400">
              <Calendar /> Day 1 — Coding Begins
            </h3>
            <ul className="space-y-3 text-gray-300">
              {day1Events.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Clock className="text-pink-500" size={18} /> 
                  <span className="font-medium">{item.time}</span> — {item.event}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-purple-400">
              <Calendar /> Day 2 — Finale & Awards
            </h3>
            <ul className="space-y-3 text-gray-300">
              {day2Events.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Clock className="text-purple-500" size={18} /> 
                  <span className="font-medium">{item.time}</span> — {item.event}
                </li>
              ))}
            </ul>
>>>>>>> c8dce2dc989d7f006e5bb0f78b2d671577cf852c
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* About, Timeline, Registration, Sponsors Sections remain unchanged */}
      {/* ... (rest of your JSX as in your original code, already correctly formatted inside the component) */}

=======
      {/* Footer Section */}
      <footer className="text-center py-10 border-t border-gray-800 bg-black">
        <p className="text-gray-400">
          Made with ❤️ by the Department of Cybersecurity, RNSIT | ImpactX 2025
        </p>
      </footer>
>>>>>>> c8dce2dc989d7f006e5bb0f78b2d671577cf852c
    </div>
  );
}
