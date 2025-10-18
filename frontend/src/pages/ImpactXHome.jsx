import React from "react";
import { Calendar, Clock, MapPin, Users, Award, Code, Briefcase, Lightbulb } from "lucide-react";

export default function ImpactXHome() {

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
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-10 border-t border-gray-800 bg-black">
        <p className="text-gray-400">
          Made with ❤️ by the Department of Cybersecurity, RNSIT | ImpactX 2025
        </p>
      </footer>
    </div>
  );
}
