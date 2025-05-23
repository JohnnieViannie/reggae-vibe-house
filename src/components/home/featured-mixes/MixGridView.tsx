
import React from 'react';
import { Play } from 'lucide-react';
import { Mix } from './types';

interface MixGridViewProps {
  mixes: Mix[];
}

const MixGridView: React.FC<MixGridViewProps> = ({ mixes }) => {
  return (
    <>
      {/* Mobile Grid (2 columns) */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {mixes.map((mix) => (
          <div key={mix.id} className="bg-reggae-green/20 rounded-lg overflow-hidden">
            <div className="h-40 relative">
              <img src={mix.imageUrl} alt={mix.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-2">
                <h3 className="text-sm font-bold text-reggae-gold line-clamp-1">{mix.title}</h3>
                <p className="text-white text-xs line-clamp-1">{mix.dj}</p>
              </div>
              <button className="absolute top-2 right-2 bg-reggae-red rounded-full p-1.5 text-white hover:bg-reggae-red/80 transition-colors">
                <Play size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Tablet and Desktop View - Full Row Display */}
      <div className="hidden md:flex flex-wrap md:flex-nowrap gap-4 overflow-x-auto pb-4">
        {mixes.map((mix) => (
          <div key={mix.id} className="bg-reggae-green/20 rounded-lg overflow-hidden flex-shrink-0" style={{ width: "250px" }}>
            <div className="h-56 relative">
              <img src={mix.imageUrl} alt={mix.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-3">
                <h3 className="text-lg font-bold text-reggae-gold">{mix.title}</h3>
                <p className="text-white text-sm">by {mix.dj}</p>
                <p className="text-reggae-gold/80 text-xs mt-1">{mix.year}</p>
              </div>
              <button className="absolute top-3 right-3 bg-reggae-red hover:bg-reggae-red/80 rounded-full p-2 text-white transition-colors">
                <Play size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MixGridView;
