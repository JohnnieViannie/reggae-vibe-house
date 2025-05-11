
import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Calendar, ShoppingCart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-reggae-black/70 to-reggae-black/90"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 flex justify-center">
            <span className="inline-block h-1 w-16 bg-reggae-red"></span>
            <span className="inline-block h-1 w-16 bg-reggae-gold mx-2"></span>
            <span className="inline-block h-1 w-16 bg-reggae-green"></span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6 animate-pulse-slow">
            FEEL THE ROOTS.<br/>
            <span className="text-reggae-gold">MOVE WITH THE MISSION.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto">
            Curating Uganda's Reggae Culture, One Vibe at a Time.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <HeroButton to="/mixes" icon={<Headphones size={20} />} bgColor="bg-reggae-red">
              Listen to Our Latest Mix
            </HeroButton>
            
            <HeroButton to="/events" icon={<Calendar size={20} />} bgColor="bg-reggae-green">
              See Upcoming Events
            </HeroButton>
            
            <HeroButton to="/marketplace" icon={<ShoppingCart size={20} />} bgColor="bg-reggae-gold">
              Shop Merch
            </HeroButton>
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
  children: React.ReactNode;
};

const HeroButton = ({ to, icon, bgColor, children }: HeroButtonProps) => (
  <Link 
    to={to} 
    className={`${bgColor} text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-200 flex items-center justify-center`}
  >
    <span className="mr-2">{icon}</span>
    {children}
  </Link>
);

export default Hero;
