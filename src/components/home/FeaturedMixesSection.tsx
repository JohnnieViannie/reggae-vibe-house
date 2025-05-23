
import React from 'react';
import { Disc, ListMusic, Music, Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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

// Mix categories
const categories = ['UGANDAN REGGAE', 'ROOTS', 'DUB', 'LOVERS ROCK', 'DANCEHALL'];

const FeaturedMixesSection = () => {
  const [mixesApi, setMixesApi] = React.useState<any>(null);
  const [activeCategory, setActiveCategory] = React.useState('ROOTS');
  const [viewType, setViewType] = React.useState<'grid' | 'list'>('grid');
  
  // Filter mixes based on active category
  const filteredMixes = featuredMixes.filter(mix => mix.genre === activeCategory);

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
    <div className="bg-reggae-green py-2">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="bg-reggae-black rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-reggae-gold text-xl md:text-2xl font-bold text-center">FEATURED MIXES</h2>
            <div className="flex gap-2">
              <button 
                className={`p-1 rounded-md ${viewType === 'grid' ? 'bg-reggae-gold text-reggae-black' : 'text-reggae-gold'}`} 
                onClick={() => setViewType('grid')}
              >
                <Disc size={18} />
              </button>
              <button 
                className={`p-1 rounded-md ${viewType === 'list' ? 'bg-reggae-gold text-reggae-black' : 'text-reggae-gold'}`} 
                onClick={() => setViewType('list')}
              >
                <ListMusic size={18} />
              </button>
            </div>
          </div>
          
          {/* Category Tabs */}
          <Tabs defaultValue="ROOTS" className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="flex justify-center mb-3 overflow-x-auto bg-reggae-black/50 rounded-full p-1 no-scrollbar">
              {categories.map((category, idx) => (
                <TabsTrigger key={idx} value={category} className="px-2 py-1 text-xs font-bold rounded-full whitespace-nowrap mx-1 data-[state=active]:bg-reggae-gold data-[state=active]:text-reggae-black data-[state=inactive]:text-reggae-gold">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {/* Content for each tab */}
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                {viewType === 'grid' ? (
                  <>
                    {/* Grid layout for small devices */}
                    <div className="grid grid-cols-2 gap-2 sm:hidden">
                      {featuredMixes.filter(mix => mix.genre === category).map((mix) => (
                        <div key={mix.id} className="bg-reggae-green/20 rounded-lg overflow-hidden">
                          <div className="h-24 relative">
                            <img src={mix.imageUrl} alt={mix.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                            <div className="absolute bottom-0 left-0 w-full p-1 text-center">
                              <h3 className="text-sm font-bold text-reggae-gold truncate">{mix.title}</h3>
                              <p className="text-white text-xs truncate">{mix.dj}</p>
                            </div>
                            <button className="absolute top-1 right-1 bg-reggae-red rounded-full p-1 text-white">
                              <Play size={12} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Carousel for larger screens */}
                    <div className="hidden sm:block">
                      <Carousel className="w-full" setApi={setMixesApi} opts={{ loop: true, duration: 20 }}>
                        <CarouselContent>
                          <div className="flex">
                            {featuredMixes.filter(mix => mix.genre === category).map((mix) => (
                              <CarouselItem key={mix.id} className="basis-1/3 pl-0 sm:pl-4 md:basis-1/4 lg:basis-1/5">
                                <div className="bg-reggae-green/20 rounded-lg overflow-hidden">
                                  <div className="h-40 relative">
                                    <img src={mix.imageUrl} alt={mix.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-2 text-center">
                                      <h3 className="text-xl font-bold text-reggae-gold">{mix.title}</h3>
                                      <p className="text-white text-sm">by {mix.dj} | {mix.year}</p>
                                    </div>
                                    <button className="absolute top-2 right-2 bg-reggae-red rounded-full p-2 text-white hover:bg-reggae-red/80 transition-colors">
                                      <Play size={16} />
                                    </button>
                                  </div>
                                </div>
                              </CarouselItem>
                            ))}
                          </div>
                        </CarouselContent>
                      </Carousel>
                    </div>
                  </>
                ) : (
                  /* List view for both mobile and desktop */
                  <div className="space-y-2">
                    {featuredMixes.filter(mix => mix.genre === category).map((mix) => (
                      <Card key={mix.id} className="bg-reggae-green/20 border-none">
                        <CardContent className="p-2">
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                              <img src={mix.imageUrl} alt={mix.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="text-reggae-gold font-bold truncate">{mix.title}</h3>
                              <p className="text-white text-xs">{mix.dj}</p>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-xs text-reggae-gold/80">{mix.genre} • {mix.year}</span>
                                <button 
                                  className="text-xs bg-reggae-red text-white p-1 rounded-full flex items-center gap-1 hover:bg-reggae-red/80 transition-colors"
                                >
                                  <Play size={12} /> Play
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
