
import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Calendar, ShoppingCart, Radio, Music } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const Hero = () => {
  const [mixesApi, setMixesApi] = React.useState<any>(null);

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
    <section className="bg-reggae-green min-h-screen flex flex-col">
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
        <div className="container mx-auto flex flex-wrap justify-center gap-2 md:gap-6 px-4">
          <Link 
            to="/mixes" 
            className="bg-reggae-red text-white font-bold py-2 px-4 md:px-6 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition"
          >
            <Headphones size={18} />
            LISTEN TO OUR LATEST MIX
          </Link>
          
          <Link 
            to="/events" 
            className="bg-reggae-green border-2 border-reggae-gold text-reggae-gold font-bold py-2 px-4 md:px-6 rounded-full flex items-center gap-2 hover:bg-reggae-gold hover:text-reggae-green transition"
          >
            <Calendar size={18} />
            SEE UPCOMING EVENTS
          </Link>
          
          <Link 
            to="/marketplace" 
            className="bg-reggae-gold text-reggae-black font-bold py-2 px-4 md:px-6 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition"
          >
            <ShoppingCart size={18} />
            SHOP MERCH
          </Link>
        </div>
      </div>
      
      {/* Featured Mixes Section */}
      <div className="bg-reggae-green py-3">
        <div className="container mx-auto px-4">
          <div className="bg-reggae-black rounded-lg p-4">
            <h2 className="text-reggae-gold text-2xl md:text-3xl font-bold mb-3 text-center">FEATURED MIXES</h2>
            
            {/* Category Tabs */}
            <div className="flex justify-center mb-4 overflow-x-auto bg-reggae-black/50 rounded-full p-1">
              {['UGANDAN REGGAE', 'ROOTS', 'DUB', 'LOVERS ROCK'].map((category, idx) => (
                <span 
                  key={idx} 
                  className={`px-3 py-1 text-sm font-bold rounded-full whitespace-nowrap mx-1 ${
                    idx === 1 ? 'bg-reggae-gold text-reggae-black' : 'text-reggae-gold hover:bg-reggae-black/30'
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
            
            {/* Mixes Carousel */}
            <Carousel className="w-full" setApi={setMixesApi} opts={{ loop: true, duration: 20 }}>
              <CarouselContent>
                <div className="flex">
                  {featuredMixes.map((mix) => (
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
        </div>
      </div>
      
      {/* Upcoming Events Section */}
      <div className="bg-reggae-gold py-3">
        <div className="container mx-auto px-4">
          <h2 className="text-reggae-black text-2xl md:text-3xl font-bold mb-3 text-center">UPCOMING EVENTS & SHOWS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingEvents.map((event) => (
              <Link to="/events" key={event.id} className="block">
                <div className="relative rounded-lg overflow-hidden h-48">
                  <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-center">
                    <h3 className="text-xl font-bold text-reggae-gold">{event.title}</h3>
                    <p className="text-white">{event.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Featured Artist Section */}
      <div className="bg-reggae-green py-3">
        <div className="container mx-auto px-4">
          <h2 className="text-reggae-gold text-2xl md:text-3xl font-bold mb-3 text-center">FEATURED DJ OF THE WEEK</h2>
          <div className="bg-reggae-black/70 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4">
            <div className="md:w-1/3">
              <div className="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-reggae-gold">
                <img src={featuredArtist.image} alt={featuredArtist.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-3xl font-bold text-reggae-gold mb-2">{featuredArtist.name}</h3>
              <div className="text-white mb-3">
                <div className="font-bold">BIO</div>
                <p>{featuredArtist.bio}</p>
              </div>
              <div className="text-white">
                <div className="font-bold">MIX OR VIDEO</div>
                <p className="text-sm text-reggae-gold/80">Coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Online Radio */}
      <div className="bg-reggae-black py-3">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-reggae-black/90 to-reggae-black/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-reggae-gold/50">
            {/* Top Gradient Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-reggae-red via-reggae-gold to-reggae-green"></div>
            
            {/* Header */}
            <div className="p-4 bg-gradient-to-b from-reggae-black to-transparent flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Radio className="text-reggae-gold" size={24} />
                  <span className="absolute top-0 left-0 w-full h-full animate-ping rounded-full bg-reggae-gold/30"></span>
                </div>
                <div>
                  <h3 className="text-xl font-heading text-white tracking-wider">LIVE REGGAE RADIO</h3>
                  <p className="text-reggae-gold/80 text-xs">Broadcasting 24/7 Positive Vibrations</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 bg-reggae-red rounded-full text-xs font-bold text-white animate-pulse flex items-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-1 animate-pulse"></span>
                  LIVE
                </span>
              </div>
            </div>
            
            {/* Radio Player */}
            <div className="h-[180px] bg-reggae-black/30">
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
