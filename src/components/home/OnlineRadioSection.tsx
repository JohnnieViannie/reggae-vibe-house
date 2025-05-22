
import React from 'react';
import { Radio } from 'lucide-react';

const OnlineRadioSection = () => {
  return (
    <div className="bg-reggae-black py-2">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="bg-gradient-to-r from-reggae-black/90 to-reggae-black/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-reggae-gold/50">
          {/* Top Gradient Bar */}
          <div className="h-1 sm:h-2 w-full bg-gradient-to-r from-reggae-red via-reggae-gold to-reggae-green"></div>
          
          {/* Header */}
          <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-b from-reggae-black to-transparent flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Radio className="text-reggae-gold" size={18} />
                <span className="absolute top-0 left-0 w-full h-full animate-ping rounded-full bg-reggae-gold/30"></span>
              </div>
              <div>
                <h3 className="text-sm sm:text-lg md:text-xl font-heading text-white tracking-wider">LIVE REGGAE RADIO</h3>
                <p className="text-reggae-gold/80 text-xs">Broadcasting 24/7</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="px-1 sm:px-2 py-0.5 sm:py-1 bg-reggae-red rounded-full text-xs font-bold text-white animate-pulse flex items-center">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-1 animate-pulse"></span>
                LIVE
              </span>
            </div>
          </div>
          
          {/* Radio Player */}
          <div className="h-[120px] sm:h-[150px] md:h-[180px] bg-reggae-black/30">
            <iframe 
              src="https://zeno.fm/player/reggae-vibes-radio" 
              title="Reggae Online Radio"
              className="w-full h-full border-0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineRadioSection;
