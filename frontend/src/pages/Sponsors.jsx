import React, { useState } from 'react';
import { Mail, ExternalLink, Heart, Award, Users, Target } from 'lucide-react';
import HolographicBackground from '../components/backgrounds/HolographicBackground';
import InteractiveParticles from '../components/backgrounds/InteractiveParticles';
import GlassButton from '../components/ui/GlassButton';

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
      "Logo on website and event materials",
      "Opportunity to host a workshop or tech talk",
      "Booth space at events",
      "3 mentor slots for students",
      "Prize sponsorship recognition",
      "Mention in newsletter & social media"
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
      "Social media shoutout",
      "Access to networking sessions"
    ]
  },
  {
    name: "Bronze",
    price: "₹75,000",
    color: "from-amber-600 to-yellow-600",
    benefits: [
      "Logo on website",
      "Swag bag inclusion",
      "Social media mention",
      "Certificate of appreciation"
    ]
  }
];

export default function Sponsors() {
  const [selectedTier, setSelectedTier] = useState(null);

  return (
    <div className="relative min-h-screen">
      <HolographicBackground />
      <InteractiveParticles />
      
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold holographic-text mb-6">
              Our Partners
            </h1>
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-6">
                Our IEEE-CS Chapter events are made possible by these amazing sponsors 
                who support innovation and student growth.
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

          {/* Current Sponsors */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold holographic-text mb-4">
                Thank You to Our Sponsors
              </h2>
              <p className="text-xl text-gray-300">
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
                  and support the IEEE-CS community!
                </p>
              </div>
            </div>
          </div>

          {/* Sponsorship Packages */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold holographic-text mb-4">
                Sponsorship Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with us to reach engineering students and innovators. 
                Select a package that fits your objectives.
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

          {/* Why Sponsor Us */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold holographic-text mb-4">
                Why Sponsor IEEE-CS Events?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass rounded-2xl p-6 text-center">
                <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Talent Pipeline</h3>
                <p className="text-gray-300 text-sm">
                  Connect with engineering students actively seeking growth and opportunities
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 text-center">
                <Target className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Brand Exposure</h3>
                <p className="text-gray-300 text-sm">
                  Gain visibility among tech enthusiasts through our events and online campaigns
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation Access</h3>
                <p className="text-gray-300 text-sm">
                  First look at projects and ideas developed by talented students
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community Impact</h3>
                <p className="text-gray-300 text-sm">
                  Support student innovation while building strong academic-industry partnerships
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold holographic-text mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Let's create something amazing together. Reach out to discuss 
                custom sponsorship opportunities.
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
      </div>
    </div>
  );
}
