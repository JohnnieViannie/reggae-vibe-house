
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from './types';

interface CategoryTabsProps {
  activeCategory: string;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory }) => {
  return (
    <TabsList className="flex justify-start mb-4 overflow-x-auto bg-reggae-black/50 rounded-full p-1 no-scrollbar w-full">
      {categories.map((category, idx) => (
        <TabsTrigger 
          key={idx} 
          value={category} 
          className="px-3 py-2 text-xs md:text-sm font-bold rounded-full whitespace-nowrap mx-1 data-[state=active]:bg-reggae-gold data-[state=active]:text-reggae-black data-[state=inactive]:text-reggae-gold"
        >
          {category}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default CategoryTabs;
