import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home as HomeIcon, Info, Clock, Users, DollarSign } from "lucide-react";
import GlassButton from "./ui/GlassButton";

export default function ImpactXNavbar({ hideButtons = [] }) {
  const location = useLocation();

  const items = [
    { name: "Home", path: "/impactx", Icon: HomeIcon },
    { name: "About", path: "/about", Icon: Info },
    { name: "Timeline", path: "/timeline", Icon: Clock },
    { name: "Register", path: "/impactx-register", Icon: Users },
    { name: "Sponsors", path: "/sponsors", Icon: DollarSign },
  ];

  return (
    <div className="fixed top-4 left-6 z-50 flex flex-col items-start gap-2">
      {/* ImpactX Navbar Title */}
      <span className="text-white font-bold text-sm uppercase tracking-wide mb-1">
        ImpactX Navigation
      </span>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
        {items
          .filter((it) => !hideButtons.includes(it.name))
          .map((it) => {
            const active = location.pathname === it.path;

            return (
              <Link key={it.name} to={it.path}>
                <GlassButton
                  size="md"
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full
                             bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20
                             ${active ? "shadow-[0_0_20px_#ff4d4d] hover:shadow-[0_0_25px_#ff4d4d]" : ""}`}
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
