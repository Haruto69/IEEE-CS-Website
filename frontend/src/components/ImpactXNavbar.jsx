import React from "react";
import { Home as HomeIcon, Info, Clock, Users, DollarSign } from "lucide-react";
import GlassButton from "./ui/GlassButton";

export default function ImpactXNavbar({ hideButtons = [] }) {
  const items = [
    { name: "Home", id: "home", Icon: HomeIcon },
    { name: "About", id: "about", Icon: Info },
    { name: "Timeline", id: "timeline", Icon: Clock },
    { name: "Register", id: "register", Icon: Users },
    { name: "Sponsors", id: "sponsors", Icon: DollarSign },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-4 left-6 z-50 flex flex-col items-start gap-2">
      {/* ImpactX Navbar Title */}
      <span className="text-white font-bold text-sm uppercase tracking-wide mb-1">
        ImpactX Navigation
      </span>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
        {items
          .filter((it) => !hideButtons.includes(it.name))
          .map((it) => (
            <GlassButton
              key={it.name}
              size="md"
              onClick={() => scrollToSection(it.id)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full
                         bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
            >
              <it.Icon className="w-4 h-4" />
              <span>{it.name}</span>
            </GlassButton>
          ))}
      </div>
    </div>
  );
}
