
import React from 'react';
import { Disc, ListMusic, Music, Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

// Sample data for mixes
const featuredMixes = [
  {
    id: 1,
    title: 'Roots Vibration Vol 3',
    dj: 'DJ Simba',
    genre: 'ROOTS',
    year: '2024',
    imageUrl: '/reggae-dj.jpg',
  },
  {
    id: 2,
    title: 'Dub Masters Mix',
    dj: 'Natasi',
    genre: 'DUB',
    year: 'FEB 2024',
    imageUrl: '/reggae-artwork.jpg',
  },
  {
    id: 3,
    title: 'Dancehall Fever',
    dj: 'Deelay Kiln',
    genre: 'DANCEHALL',
    year: 'FEB 2024',
    imageUrl: '/reggae-drums.jpg',
  },
  {
    id: 4,
    title: 'Uganda Rising Stars',
    dj: 'MC Yallah',
    genre: 'UGANDAN REGGAE',
    year: 'MAR 2024',
    imageUrl: '/reggae-concert1.jpg',
  },
  {
    id: 5,
    title: 'Love & Harmony',
    dj: 'Sister Rose',
    genre: 'LOVERS ROCK',
    year: 'APR 2024',
    imageUrl: '/reggae-beach.jpg',
  },
  {
    id: 6,
    title: 'Roots Revival Sessions',
    dj: 'DJ Simba',
    genre: 'ROOTS',
    year: 'JAN 2024',
    imageUrl: '/reggae-crowd.jpg',
  },
];

// Mix categories with ALL option added at the beginning
const categories = ['ALL', 'UGANDAN REGGAE', 'ROOTS', 'DUB', 'LOVERS ROCK', 'DANCEHALL'];

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
            <div className="flex gap-2">
              <button 
                className={`p-2 rounded-md ${viewType === 'grid' ? 'bg-reggae-gold text-reggae-black' : 'text-reggae-gold'}`} 
                onClick={() => setViewType('grid')}
                aria-label="Grid view"
              >
                <Disc size={20} />
              </button>
              <button 
                className={`p-2 rounded-md ${viewType === 'list' ? 'bg-reggae-gold text-reggae-black' : 'text-reggae-gold'}`} 
                onClick={() => setViewType('list')}
                aria-label="List view"
              >
                <ListMusic size={20} />
              </button>
            </div>
          </div>
          
          {/* Category Tabs */}
          <Tabs defaultValue="ALL" className="w-full" onValueChange={setActiveCategory}>
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
            
            {/* Content for each tab */}
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                {viewType === 'grid' ? (
                  <>
                    {/* Mobile Grid (2 columns) */}
                    <div className="grid grid-cols-2 gap-3 md:hidden">
                      {(category === 'ALL' 
                        ? featuredMixes 
                        : featuredMixes.filter(mix => mix.genre === category)
                      ).map((mix) => (
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
                      {(category === 'ALL' 
                        ? featuredMixes 
                        : featuredMixes.filter(mix => mix.genre === category)
                      ).map((mix) => (
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
                ) : (
                  /* List view for both mobile and desktop */
                  <div className="space-y-3">
                    {(category === 'ALL' 
                      ? featuredMixes 
                      : featuredMixes.filter(mix => mix.genre === category)
                    ).map((mix) => (
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
