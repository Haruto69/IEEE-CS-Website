import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home as HomeIcon, Calendar as CalendarIcon, Users as UsersIcon } from 'lucide-react';
import GlassButton from "./ui/GlassButton";

export default function Navbar({ hideButtons = [] }) {
  const location = useLocation();

  const items = [
    { name: 'Home', path: '/', Icon: HomeIcon },
    { name: 'Events', path: '/events', Icon: CalendarIcon },
    { name: 'Team', path: '/members', Icon: UsersIcon },
  ];

  return (
    <div className="fixed top-4 right-6 z-50">
      <div className="flex items-center gap-3">
        {items
          .filter(it => !hideButtons.includes(it.name))
          .map((it) => {
            const active = location.pathname === it.path;

            return (
              <Link key={it.name} to={it.path}>
                <GlassButton
                  size="md"
                  className={`flex items-center gap-2 px-5 py-2 text-sm font-medium 
                              transition-all duration-200 hover:scale-105 
                              border border-white/20 bg-white/10 backdrop-blur-md
                              rounded-full
                              ${active 
                                ? "text-white shadow-[0_0_20px_#ff4d4d] hover:shadow-[0_0_25px_#ff4d4d]" 
                                : "text-white/80 hover:bg-white/20"}`}
                >
                  <it.Icon className="w-4 h-4" />
                  <span>{it.name}</span>
                </GlassButton>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
