    
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Home, Info, Clock, Trophy, Users, X, Menu } from 'lucide-react';

const navigationItems = [
  { title: 'Home', url: createPageUrl('Home'), icon: Home },
  { title: 'About', url: createPageUrl('About'), icon: Info },
  { title: 'Timeline', url: createPageUrl('Timeline'), icon: Clock },
  { title: 'Register', url: createPageUrl('Register'), icon: Trophy },
  { title: 'Sponsors', url: createPageUrl('Sponsors'), icon: Users },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        :root {
          --glass-bg: rgba(255, 255, 255, 0.02);
          --glass-border: rgba(255, 255, 255, 0.08);
          --red-glow: rgba(220, 38, 38, 0.3);
          --red-primary: #DC2626;
          --red-dark: #B91C1C;
          --red-darker: #7F1D1D;
        }
        
        .glass {
          background: var(--glass-bg);
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }
        
        .glass-button {
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.08), rgba(185, 28, 28, 0.08));
          backdrop-filter: blur(15px);
          border: 1px solid rgba(220, 38, 38, 0.25);
          transition: all 0.3s ease;
        }
        
        .glass-button:hover {
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(185, 28, 28, 0.15));
          border-color: rgba(220, 38, 38, 0.5);
          box-shadow: 0 0 30px var(--red-glow);
          transform: translateY(-2px);
        }
        
        .holographic-text {
          background: linear-gradient(45deg, #DC2626, #F87171, #DC2626, #B91C1C);
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: holographic 3s ease infinite;
        }
        
        @keyframes holographic {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .glow-red {
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.4), 0 0 40px rgba(220, 38, 38, 0.2);
        }
      `}</style>

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 hidden md:block">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-2xl p-3">
            <div className="flex items-center justify-between">
              <Link to={createPageUrl('Home')} className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center glow-red">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold holographic-text">ImpactX 25</h1>
                  <p className="text-xs text-gray-400">24hr Hackathon</p>
                </div>
              </Link>
              
              <div className="flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`glass-button px-4 py-2 rounded-xl flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.url ? 'bg-red-600/20 border-red-500/50' : ''
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:hidden">
        <div className="glass rounded-2xl p-3">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl('Home')} className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center glow-red">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold holographic-text">ImpactX 25</h1>
              </div>
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="glass-button p-2 rounded-lg">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed top-24 left-4 right-4 glass rounded-2xl p-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  onClick={() => setIsMenuOpen(false)}
                  className={`glass-button px-4 py-3 rounded-xl flex items-center space-x-3 text-base font-medium transition-all duration-300 ${
                    location.pathname === item.url ? 'bg-red-600/30 border-red-500/60' : ''
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 pt-28 md:pt-32">
        {children}
      </main>
    </div>
  );
}
