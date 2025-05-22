
import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Calendar, ShoppingCart } from 'lucide-react';

const ActionButtons = () => {
  return (
    <div className="bg-reggae-green py-2">
      <div className="container mx-auto flex flex-wrap justify-center gap-1 px-2">
        <Link 
          to="/mixes" 
          className="bg-reggae-red text-white font-bold text-xs sm:text-sm py-2 px-2 md:px-4 rounded-full flex items-center gap-1 hover:bg-opacity-90 transition"
        >
          <Headphones size={16} />
          <span className="whitespace-nowrap">LATEST MIX</span>
        </Link>
        
        <Link 
          to="/events" 
          className="bg-reggae-green border-2 border-reggae-gold text-reggae-gold font-bold text-xs sm:text-sm py-2 px-2 md:px-4 rounded-full flex items-center gap-1 hover:bg-reggae-gold hover:text-reggae-green transition"
        >
          <Calendar size={16} />
          <span className="whitespace-nowrap">EVENTS</span>
        </Link>
        
        <Link 
          to="/marketplace" 
          className="bg-reggae-gold text-reggae-black font-bold text-xs sm:text-sm py-2 px-2 md:px-4 rounded-full flex items-center gap-1 hover:bg-opacity-90 transition"
        >
          <ShoppingCart size={16} />
          <span className="whitespace-nowrap">SHOP</span>
        </Link>
      </div>
    </div>
  );
};

export default ActionButtons;
