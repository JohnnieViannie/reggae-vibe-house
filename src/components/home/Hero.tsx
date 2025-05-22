
import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Calendar, ShoppingCart, Radio, Music, ListMusic, Disc } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

// Sample data for mixes
const featuredMixes = [
  {
    id: 1,
    title: 'MIX 1',
    dj: 'DJ Simba',
    genre: 'Roots',
    year: '2024',
    imageUrl: '/reggae-dj.jpg',
  },
  {
    id: 2,
    title: 'MIX 2',
    dj: 'Natasi',
    genre: 'Dub',
    year: 'FEB 2024',
    imageUrl: '/reggae-artwork.jpg',
  },
  {
    id: 3,
    title: 'MIX 3',
    dj: 'Deelay Kiln',
    genre: 'Dancehall',
    year: 'FEB 2024',
    imageUrl: '/reggae-drums.jpg',
  },
];

// Sample data for events
const upcomingEvents = [
  {
    id: 1,
    title: 'REGGAE SUNDOWNER',
    date: 'MAY 12, 2024',
    imageUrl: '/reggae-beach.jpg',
  },
  {
    id: 2,
    title: 'EVENT 2',
    date: 'JUNE 5, 2024',
    imageUrl: '/reggae-concert1.jpg',
  },
];

// Featured artist
const featuredArtist = {
  name: 'RAS KINTU',
  bio: 'Roots reggae artist bringing authentic Ugandan sounds to the world stage.',
  image: '/reggae-team1.jpg',
};

// Mix categories
const categories = ['UGANDAN REGGAE', 'ROOTS', 'DUB', 'LOVERS ROCK'];

const Hero = () => {
  const [mixesApi, setMixesApi] = React.useState<any>(null);
  const [activeCategory, setActiveCategory] = React.useState('ROOTS');
  const [viewType, setViewType] = React.useState<'grid' | 'list'>('grid');
  
  // Filter mixes based on active category
  const filteredMixes = featuredMixes.filter(mix => mix.genre === activeCategory || activeCategory === 'ALL');

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
    <section className="bg-reggae-green min-h-screen flex flex-col pt-16"> {/* Added pt-16 to push content down */}
      {/* Hero Banner */}
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
      
      {/* Action Buttons */}
      <div className="bg-reggae-green py-2">
        <div className="container mx-auto flex flex-wrap justify-center gap-1 px-2">
          <Link 
            to="/mixes" 
            className="bg-reggae-red text-white font-bold text-xs sm:text-sm py-2 px-2 md:px-4 rounded-full flex items-center gap-1 hover:bg-opacity-90 transition"
          >
            <Headphones size={16} />
            <span className="whitespace-nowrap">LATEST MIX</span>
          </Link>
          
          <Link 
            to="/events" 
            className="bg-reggae-green border-2 border-reggae-gold text-reggae-gold font-bold text-xs sm:text-sm py-2 px-2 md:px-4 rounded-full flex items-center gap-1 hover:bg-reggae-gold hover:text-reggae-green transition"
          >
            <Calendar size={16} />
            <span className="whitespace-nowrap">EVENTS</span>
          </Link>
          
          <Link 
            to="/marketplace" 
            className="bg-reggae-gold text-reggae-black font-bold text-xs sm:text-sm py-2 px-2 md:px-4 rounded-full flex items-center gap-1 hover:bg-opacity-90 transition"
          >
            <ShoppingCart size={16} />
            <span className="whitespace-nowrap">SHOP</span>
          </Link>
        </div>
      </div>
      
      {/* Featured Mixes Section */}
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
                      <div className="grid grid-cols-3 gap-2 sm:hidden">
                        {featuredMixes.filter(mix => mix.genre === category || category === 'ALL').map((mix) => (
                          <div key={mix.id} className="bg-reggae-green/20 rounded-lg overflow-hidden">
                            <div className="h-24 relative">
                              <img src={mix.imageUrl} alt={mix.title} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                              <div className="absolute bottom-0 left-0 w-full p-1 text-center">
                                <h3 className="text-sm font-bold text-reggae-gold truncate">{mix.title}</h3>
                                <p className="text-white text-xs truncate">{mix.dj}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Carousel for larger screens */}
                      <div className="hidden sm:block">
                        <Carousel className="w-full" setApi={setMixesApi} opts={{ loop: true, duration: 20 }}>
                          <CarouselContent>
                            <div className="flex">
                              {featuredMixes.filter(mix => mix.genre === category || category === 'ALL').map((mix) => (
                                <CarouselItem key={mix.id} className="basis-1/3 pl-0 sm:pl-4">
                                  <div className="bg-reggae-green/20 rounded-lg overflow-hidden">
                                    <div className="h-40 relative">
                                      <img src={mix.imageUrl} alt={mix.title} className="w-full h-full object-cover" />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                      <div className="absolute bottom-0 left-0 w-full p-2 text-center">
                                        <h3 className="text-xl font-bold text-reggae-gold">{mix.title}</h3>
                                        <p className="text-white text-sm">by {mix.dj} | {mix.genre} | {mix.year}</p>
                                      </div>
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
                      {featuredMixes.filter(mix => mix.genre === category || category === 'ALL').map((mix) => (
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
                                    className="text-xs bg-reggae-red text-white p-1 rounded-full flex items-center gap-1"
                                  >
                                    <Music size={12} /> Play
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
      
      {/* Upcoming Events Section */}
      <div className="bg-reggae-gold py-2">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-reggae-black text-xl md:text-2xl font-bold mb-2 text-center">UPCOMING EVENTS & SHOWS</h2>
          <div className="grid grid-cols-2 gap-2">
            {upcomingEvents.map((event) => (
              <Link to="/events" key={event.id} className="block">
                <div className="relative rounded-lg overflow-hidden h-24 sm:h-32 md:h-48">
                  <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-2 text-center">
                    <h3 className="text-sm sm:text-lg font-bold text-reggae-gold truncate">{event.title}</h3>
                    <p className="text-white text-xs sm:text-sm">{event.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Featured Artist Section */}
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
      
      {/* Online Radio */}
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
    </section>
  );
};

export default Hero;
