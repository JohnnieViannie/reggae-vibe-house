
import React from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import ViewToggle from './featured-mixes/ViewToggle';
import CategoryTabs from './featured-mixes/CategoryTabs';
import MixGridView from './featured-mixes/MixGridView';
import MixListView from './featured-mixes/MixListView';
import { categories, featuredMixes } from './featured-mixes/types';

const FeaturedMixesSection = () => {
  const [mixesApi, setMixesApi] = React.useState<any>(null);
  const [activeCategory, setActiveCategory] = React.useState('ALL');
  const [viewType, setViewType] = React.useState<'grid' | 'list'>('grid');
  
  // Filter mixes based on active category - show all mixes if ALL is selected
  const filteredMixes = activeCategory === 'ALL' 
    ? featuredMixes 
    : featuredMixes.filter(mix => mix.genre === activeCategory);

  // Auto-scroll the carousel every 3 seconds
  React.useEffect(() => {
    if (mixesApi) {
      const mixesInterval = setInterval(() => {
        mixesApi.scrollNext();
      }, 3000);
      return () => clearInterval(mixesInterval);
    }
  }, [mixesApi]);

  return (
    <div className="bg-reggae-green py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="bg-reggae-black rounded-lg p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-reggae-gold text-2xl md:text-3xl font-bold">FEATURED MIXES</h2>
            <ViewToggle viewType={viewType} onViewChange={setViewType} />
          </div>
          
          {/* Category Tabs */}
          <Tabs defaultValue="ALL" className="w-full" onValueChange={setActiveCategory}>
            <CategoryTabs activeCategory={activeCategory} />
            
            {/* Content for each tab */}
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                {viewType === 'grid' ? (
                  <MixGridView 
                    mixes={category === 'ALL' 
                      ? featuredMixes 
                      : featuredMixes.filter(mix => mix.genre === category)} 
                  />
                ) : (
                  <MixListView 
                    mixes={category === 'ALL' 
                      ? featuredMixes 
                      : featuredMixes.filter(mix => mix.genre === category)} 
                  />
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMixesSection;
