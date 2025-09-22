import React, { useState } from 'react';
import { Mail, ExternalLink, Heart, Award, Users, Target } from 'lucide-react';
import HolographicBackground from '../components/backgrounds/HolographicBackground';
import InteractiveParticles from '../components/backgrounds/InteractiveParticles';
import GlassButton from '../components/ui/GlassButton';
import ImpactXNavbar from '../components/ImpactXNavbar';
import Navbar from "../components/Navbar";

const currentSponsors = [
  {
    name: "Unstop",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg",
    description: "Platform for opportunities & talent"
  },
  {
    name: "0xday",
    logo: "/0xday.png",  // updated to public folder
    description: "Cybersecurity community & events"
  },
  {
    name: "IEEE CS Bangalore",
    logo: "/cs-black.png", // updated to public folder
    description: "IEEE Computer Society Bangalore Section"
  }
];

const sponsorshipTiers = [
  {
    name: "Title Sponsor",
    price: "₹60,000+",
    color: "from-yellow-400 to-orange-400",
    benefits: [
      "Logo on website and event materials",
      "Opportunity to host a workshop or tech talk",
      "Booth space at events"
    ]
  },
  {
    name: "Co-Sponsor",
    price: "₹40,000+",
    color: "from-gray-400 to-gray-600",
    benefits: [
      "Logo on website",
      "Social media shoutout",
      "Access to networking sessions"
    ]
  },
  {
    name: "Associate Sponsor",
    price: "₹20,000+",
    color: "from-amber-600 to-yellow-600",
    benefits: [
      "Logo on website",
      "Swag bag inclusion"
    ]
  },
  {
    name: "Event Sponsor",
    price: "₹30,000+",
    color: "from-blue-400 to-blue-600",
    benefits: [
      "Event-specific branding",
      "Mention in newsletter"
    ]
  },
  {
    name: "Other Sponsors",
    price: "₹5,000 - 10,000",
    color: "from-green-400 to-teal-400",
    benefits: [
      "Mention on website",
      "Certificate of appreciation"
    ]
  }
];

export default function Sponsors() {
  const [selectedTier, setSelectedTier] = useState(null);

  const buttonClasses =
    "text-xl px-10 py-5 w-full md:w-auto flex items-center justify-center bg-red-500/30 border border-red-500/40 hover:bg-red-500/50";

  return (
    <div className="relative min-h-screen">
      <HolographicBackground />
      <InteractiveParticles />
      <ImpactXNavbar />
      <Navbar />

      <div className="relative z-10 py-20 px-6">
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
                <a href="mailto:ieeecsrnsit@gmail.com" className="w-full md:w-auto">
                  <GlassButton size="lg" className={buttonClasses}>
                    <Mail className="w-5 h-5 mr-2" />
                    Become a Sponsor
                  </GlassButton>
                </a>
                <a href="/IMPACTX-PROPOSAL.pdf" download className="w-full md:w-auto">
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
                <a href="mailto:ieeecsrnsit@gmail.com" className="w-full md:w-auto">
                  <GlassButton size="lg" className={buttonClasses}>
                    <Mail className="w-5 h-5 mr-2" />
                    ieeecsrnsit@gmail.com
                  </GlassButton>
                </a>
                <GlassButton size="lg" className={buttonClasses}>
                  📞 Schedule a Call
                </GlassButton>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
