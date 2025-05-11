
import React, { useState, useEffect } from 'react';
import { Headphones, Music, Play, Volume, Clock, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const mixes = [
  {
    id: 1,
    title: 'Rootsman Edition 4',
    dj: 'DJ Zion',
    genre: 'Ugandan Reggae',
    date: 'May 2, 2025',
    duration: '1:28:45',
    likes: 342,
    popular: true,
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1219621886&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/reggae-dj.jpg',
    description: 'Deep roots reggae selections featuring classic Ugandan artists and international legends.',
  },
  {
    id: 2,
    title: "Skank'n Reggae 8",
    dj: 'Selecta Morris',
    genre: 'Dub',
    date: 'April 15, 2025',
    duration: '1:45:20',
    likes: 289,
    popular: true,
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1334568403&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/reggae-drums.jpg',
    description: 'Heavy dub plates and bass-driven selections to move your soul and sound system.',
  },
  {
    id: 3,
    title: 'Empress Vibes Vol. 1',
    dj: 'Sister Blaze',
    genre: 'Roots',
    date: 'March 28, 2025',
    duration: '1:18:12',
    likes: 245,
    popular: false,
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1508795148&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/reggae-artwork.jpg',
    description: 'Celebrating female reggae artists from across Africa and the Caribbean. Powerful lyrics and conscious vibes.',
  },
  {
    id: 4,
    title: 'Lovers Rock Special',
    dj: 'DJ Conscious',
    genre: 'Lovers Rock',
    date: 'February 14, 2025',
    duration: '1:35:50',
    likes: 412,
    popular: true,
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1410256938&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/reggae-beach.jpg',
    description: 'Smooth and soulful reggae love songs for a perfect romantic evening.',
  },
  {
    id: 5,
    title: 'Dancehall Sessions 12',
    dj: 'DJ Ruga',
    genre: 'Dancehall',
    date: 'January 20, 2025',
    duration: '1:22:45',
    likes: 367,
    popular: false,
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1219621886&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/reggae-dancers.jpg',
    description: 'High energy dancehall beats to get the party jumping. Latest hits and classic riddims.',
  },
  {
    id: 6,
    title: 'Conscious Chronicles',
    dj: 'Lion Heart',
    genre: 'Roots',
    date: 'December 12, 2024',
    duration: '1:48:32',
    likes: 298,
    popular: false,
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1334568403&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/reggae-crowd.jpg',
    description: 'Deep and spiritual selections focused on conscious messages and liberation themes.',
  },
];

const categories = ['All', 'Ugandan Reggae', 'Roots', 'Dub', 'Lovers Rock', 'Dancehall'];

const Mixes = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredMixes = activeCategory === 'All' 
    ? mixes 
    : mixes.filter(mix => mix.genre === activeCategory);
    
  const popularMixes = mixes.filter(mix => mix.popular);

  // Simulate a player effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (activeIndex !== null && isPlaying) {
      timeout = setTimeout(() => {
        setIsPlaying(false);
      }, 30000); // Auto-stop after 30 seconds
    }
    return () => clearTimeout(timeout);
  }, [activeIndex, isPlaying]);

  const handlePlay = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(true);
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[url('/wood-texture.jpg')] bg-fixed bg-cover">
        <div className="bg-reggae-black bg-opacity-95 min-h-screen pb-16">
          {/* Hero Banner */}
          <div className="bg-[url('/reggae-concert1.jpg')] bg-cover bg-center py-20 pt-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-reggae-black/80 to-reggae-black/95"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="inline-block mb-4 p-3 rounded-full bg-reggae-green bg-opacity-20">
                <Headphones size={40} className="text-white" />
              </div>
              <h1 className="font-music text-5xl md:text-6xl mb-6 text-white">REGGAE MIXES</h1>
              <p className="text-xl max-w-3xl mx-auto text-white opacity-80">
                Dive into our collection of exclusive reggae mixes from Uganda's finest selectors and international guest DJs.
              </p>
            </div>
          </div>
          
          {/* Featured Mix - Spotify Style */}
          {popularMixes.length > 0 && (
            <section className="py-8 bg-gradient-to-b from-reggae-black to-transparent">
              <div className="container mx-auto px-4">
                <h2 className="font-heading text-3xl text-white mb-6">Featured Mix</h2>
                <div className="flex flex-col md:flex-row bg-gradient-to-r from-reggae-black to-reggae-black/70 rounded-xl overflow-hidden">
                  <div className="md:w-1/3 h-80 relative group cursor-pointer" onClick={() => handlePlay(0)}>
                    <img src={popularMixes[0].imageUrl} alt={popularMixes[0].title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-reggae-gold flex items-center justify-center">
                        <Play size={32} className="text-reggae-black ml-1" />
                      </div>
                    </div>
                    {activeIndex === 0 && isPlaying && (
                      <div className="absolute bottom-4 right-4 animate-pulse">
                        <Volume size={24} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-reggae-red text-white text-sm rounded mb-3">
                      FEATURED
                    </div>
                    <h3 className="font-heading text-4xl text-white mb-3">{popularMixes[0].title}</h3>
                    <p className="text-white/80 text-lg mb-3">By {popularMixes[0].dj} • {popularMixes[0].genre}</p>
                    <p className="text-white/60 mb-6 max-w-2xl">{popularMixes[0].description}</p>
                    <div className="flex items-center gap-6">
                      <button 
                        className="bg-reggae-gold text-reggae-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition"
                        onClick={() => handlePlay(0)}
                      >
                        <Play size={18} />
                        <span className="font-bold">Play Mix</span>
                      </button>
                      <div className="flex items-center text-white/70">
                        <Clock size={18} className="mr-2" />
                        {popularMixes[0].duration}
                      </div>
                      <div className="flex items-center text-white/70">
                        <Heart size={18} className="mr-2" />
                        {popularMixes[0].likes} likes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          
          {/* Filter Section */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-5 py-2 rounded-full transition-all ${
                      activeCategory === category 
                        ? 'bg-reggae-gold text-reggae-black font-bold shadow-md' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>
          
          {/* Mixes Grid - Spotify Style */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="bg-white/5 rounded-lg p-4 mb-12">
                <h2 className="font-heading text-2xl text-white mb-6">All Mixes</h2>
                <table className="w-full table-auto">
                  <thead className="border-b border-white/10">
                    <tr>
                      <th className="text-left py-4 text-white/60 font-normal">#</th>
                      <th className="text-left py-4 text-white/60 font-normal">TITLE</th>
                      <th className="text-left py-4 text-white/60 font-normal hidden md:table-cell">DJ</th>
                      <th className="text-left py-4 text-white/60 font-normal hidden md:table-cell">GENRE</th>
                      <th className="text-left py-4 text-white/60 font-normal hidden lg:table-cell">DATE</th>
                      <th className="text-right py-4 text-white/60 font-normal">
                        <Clock size={18} />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMixes.map((mix, index) => (
                      <tr 
                        key={mix.id} 
                        className={`border-b border-white/5 hover:bg-white/10 group transition-colors ${
                          activeIndex === index ? 'bg-white/10' : ''
                        }`}
                      >
                        <td className="py-4 text-white/60 text-left">
                          <div className="relative">
                            <span className="group-hover:hidden">{index + 1}</span>
                            <button 
                              className="hidden group-hover:block absolute top-1/2 -translate-y-1/2"
                              onClick={() => handlePlay(index)}
                            >
                              {activeIndex === index && isPlaying ? (
                                <Volume size={18} className="text-reggae-gold" />
                              ) : (
                                <Play size={18} className="text-white" />
                              )}
                            </button>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded mr-3 overflow-hidden hidden sm:block">
                              <img 
                                src={mix.imageUrl} 
                                alt={mix.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">{mix.title}</h4>
                              <p className="text-white/60 text-sm md:hidden">{mix.dj}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-white/60 hidden md:table-cell">{mix.dj}</td>
                        <td className="py-4 text-white/60 hidden md:table-cell">{mix.genre}</td>
                        <td className="py-4 text-white/60 hidden lg:table-cell">{mix.date}</td>
                        <td className="py-4 text-white/60 text-right">{mix.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-16 bg-[url('/reggae-artist.jpg')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-reggae-black to-reggae-black/70"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="font-heading text-3xl mb-6 text-white">WANT TO CONTRIBUTE A MIX?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
                Are you a DJ with a passion for reggae music? Submit your mix to be featured on our platform.
              </p>
              <button className="bg-reggae-green text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition duration-200 inline-flex items-center">
                <Music size={20} className="mr-2" />
                Submit Your Mix
              </button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Mixes;
