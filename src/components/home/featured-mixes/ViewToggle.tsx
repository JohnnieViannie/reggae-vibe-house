
import React from 'react';
import { Disc, ListMusic } from 'lucide-react';

interface ViewToggleProps {
  viewType: 'grid' | 'list';
  onViewChange: (type: 'grid' | 'list') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewType, onViewChange }) => {
  return (
    <div className="flex gap-2">
      <button 
        className={`p-2 rounded-md ${viewType === 'grid' ? 'bg-reggae-gold text-reggae-black' : 'text-reggae-gold'}`} 
        onClick={() => onViewChange('grid')}
        aria-label="Grid view"
      >
        <Disc size={20} />
      </button>
      <button 
        className={`p-2 rounded-md ${viewType === 'list' ? 'bg-reggae-gold text-reggae-black' : 'text-reggae-gold'}`} 
        onClick={() => onViewChange('list')}
        aria-label="List view"
      >
        <ListMusic size={20} />
      </button>
    </div>
  );
};

export default ViewToggle;
