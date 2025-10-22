import React, { useState } from 'react';
import { 
  ArrowRight, Calendar, MapPin, Users, Lightbulb, Code, Award, 
  Globe, Leaf, Mail, ExternalLink, Clock, Trophy, CheckCircle, 
  Circle, Presentation, Coffee, Utensils, ClipboardCheck,
  Rocket, Moon, Music, ClipboardList, Gift, CreditCard
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
  { time: "12:00 PM - 1:00 PM", title: "Arrival and Check-in", description: "Wifi credentials distribution", icon: Users, status: "upcoming" },
  { time: "01:00 PM - 01:40 PM", title: "Inaugural & Welcome", description: "Speeches by HOD/Principal/Director. Rules explained", icon: Presentation, status: "upcoming" },
  { time: "02:00 PM", title: "Hackathon Kickoff", description: "Hackathon officially begins, teams begin coding!", icon: Rocket, status: "upcoming" },
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

export default function ImpactXHome() {
  const [selectedDay, setSelectedDay] = useState('day1');
  const currentEvents = selectedDay === 'day1' ? day1Events : day2Events;

  return (
    <div className="relative min-h-screen">
      <HolographicBackground />
      <InteractiveParticles />
      <FloatingShapes />
      <Navbar />

      {/* ...rest of your JSX goes here */}
      {/* Remember to include your About, Timeline, Registration, Sponsors sections */}
    </div>
  );
}
