
import React from 'react';

// Featured artist
const featuredArtist = {
  name: 'RAS KINTU',
  bio: 'Roots reggae artist bringing authentic Ugandan sounds to the world stage.',
  image: '/reggae-team1.jpg',
};

const FeaturedDjSection = () => {
  return (
    <div className="bg-reggae-green py-2">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-reggae-gold text-xl md:text-2xl font-bold mb-2 text-center">FEATURED DJ OF THE WEEK</h2>
        <div className="bg-reggae-black/70 rounded-lg p-2 sm:p-4 flex flex-row items-center gap-2">
          <div className="w-1/3">
            <div className="w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 mx-auto overflow-hidden rounded-full border-2 border-reggae-gold">
              <img src={featuredArtist.image} alt={featuredArtist.name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-2/3 text-left">
            <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-reggae-gold">{featuredArtist.name}</h3>
            <div className="text-white mb-1">
              <div className="font-bold text-xs sm:text-sm">BIO</div>
              <p className="text-xs sm:text-sm">{featuredArtist.bio}</p>
            </div>
            <div className="text-white">
              <div className="font-bold text-xs sm:text-sm">MIX OR VIDEO</div>
              <p className="text-xs text-reggae-gold/80">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDjSection;
