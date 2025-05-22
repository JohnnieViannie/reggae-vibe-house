
import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative h-[30vh] bg-[url('/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-reggae-black/50 to-reggae-black/80"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="hero-title mb-2 text-4xl md:text-5xl lg:text-6xl">
          FEEL THE ROOTS.<br/>
          <span className="text-reggae-gold">MOVE WITH THE MISSION.</span>
        </h1>
        <p className="text-white text-base md:text-xl max-w-3xl mx-auto">
          Curating Uganda's Reggae Culture, One Vibe at a Time.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
