
import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Calendar, ShoppingCart, Radio } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-reggae-black/70 to-reggae-black/90"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <span className="inline-block h-2 w-20 bg-reggae-red"></span>
            <span className="inline-block h-2 w-20 bg-reggae-gold mx-2"></span>
            <span className="inline-block h-2 w-20 bg-reggae-green"></span>
          </div>

          <h1 className="hero-title">
            FEEL THE ROOTS.<br/>
            <span className="text-reggae-gold">MOVE WITH THE MISSION.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto">
            Curating Uganda's Reggae Culture, One Vibe at a Time.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            <HeroButton 
              to="/mixes" 
              icon={<Headphones size={24} />} 
              bgColor="bg-reggae-red" 
              label="Listen to Our Latest Mix"
            />
            
            <HeroButton 
              to="/events" 
              icon={<Calendar size={24} />} 
              bgColor="bg-reggae-green" 
              label="See Upcoming Events"
            />
            
            <HeroButton 
              to="/marketplace" 
              icon={<ShoppingCart size={24} />} 
              bgColor="bg-reggae-gold" 
              label="Shop Merch"
            />
          </div>
        </div>
      </div>
      
      {/* Online Radio Card - Enhanced Design */}
      <div className="w-full max-w-3xl mx-auto mt-8 mb-16 px-4 relative z-10">
        <div className="bg-gradient-to-r from-reggae-black/90 to-reggae-black/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-reggae-gold/50 transform hover:scale-[1.02] transition-all duration-500">
          {/* Top Gradient Bar */}
          <div className="h-2 w-full bg-gradient-to-r from-reggae-red via-reggae-gold to-reggae-green"></div>
          
          {/* Header */}
          <div className="p-5 bg-gradient-to-b from-reggae-black to-transparent flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Radio className="text-reggae-gold" size={28} />
                <span className="absolute top-0 left-0 w-full h-full animate-ping rounded-full bg-reggae-gold/30"></span>
              </div>
              <div>
                <h3 className="text-2xl font-heading text-white tracking-wider">LIVE REGGAE RADIO</h3>
                <p className="text-reggae-gold/80 text-sm">Broadcasting 24/7 Positive Vibrations</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-reggae-red rounded-full text-xs font-bold text-white animate-pulse flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                LIVE NOW
              </span>
            </div>
          </div>
          
          {/* Radio Player */}
          <div className="relative">
            {/* Visual Equalizer Decoration */}
            <div className="absolute left-0 right-0 top-0 h-8 bg-gradient-to-b from-reggae-black/60 to-transparent z-10 flex justify-center items-center gap-1 px-4">
              {[...Array(18)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 bg-reggae-gold/70 rounded-full" 
                  style={{ 
                    height: `${Math.max(4, Math.floor(Math.random() * 20))}px`,
                    animationDuration: `${0.5 + Math.random() * 1}s`,
                  }}
                ></div>
              ))}
            </div>
            
            {/* Radio Player */}
            <div className="h-[320px] bg-reggae-black/30">
              <iframe 
                src="https://zeno.fm/player/reggae-vibes-radio" 
                title="Reggae Online Radio"
                className="w-full h-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            
            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-reggae-black/80 to-transparent"></div>
          </div>
          
          {/* Footer */}
          <div className="p-4 bg-reggae-black/90 text-reggae-gold/80 text-sm font-medium text-center italic">
            "One good thing about music, when it hits you, you feel no pain." - Bob Marley
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-reggae-red via-reggae-gold to-reggae-green opacity-70"></div>
    </section>
  );
};

type HeroButtonProps = {
  to: string;
  icon: React.ReactNode;
  bgColor: string;
  label: string;
};

const HeroButton = ({ to, icon, bgColor, label }: HeroButtonProps) => (
  <Link 
    to={to} 
    className={`${bgColor} hero-cta group`}
  >
    <span className="group-hover:scale-110 transition-transform duration-300">
      {icon}
    </span>
    <span className="font-bold">{label}</span>
  </Link>
);

export default Hero;
