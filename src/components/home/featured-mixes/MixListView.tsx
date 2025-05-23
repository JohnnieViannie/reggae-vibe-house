
import React from 'react';
import { Play } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Mix } from './types';

interface MixListViewProps {
  mixes: Mix[];
}

const MixListView: React.FC<MixListViewProps> = ({ mixes }) => {
  return (
    <div className="space-y-3">
      {mixes.map((mix) => (
        <Card key={mix.id} className="bg-reggae-green/20 border-none hover:bg-reggae-green/30 transition-colors">
          <CardContent className="p-3">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden flex-shrink-0">
                <img src={mix.imageUrl} alt={mix.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow overflow-hidden">
                <h3 className="text-reggae-gold font-bold text-sm sm:text-base truncate">{mix.title}</h3>
                <p className="text-white text-xs sm:text-sm">{mix.dj}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-reggae-gold/80">{mix.genre} • {mix.year}</span>
                  <button 
                    className="text-xs bg-reggae-red text-white p-1.5 rounded-full flex items-center gap-1 hover:bg-reggae-red/80 transition-colors"
                    aria-label="Play mix"
                  >
                    <Play size={14} /> <span className="hidden sm:inline">Play</span>
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MixListView;
