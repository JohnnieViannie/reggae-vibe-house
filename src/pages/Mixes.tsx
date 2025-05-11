
import React, { useState } from 'react';
import { Headphones, Music } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const mixes = [
  {
    id: 1,
    title: 'Rootsman Edition 4',
    dj: 'DJ Zion',
    genre: 'Ugandan Reggae',
    date: 'May 2, 2025',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1219621886&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/placeholder.svg',
    description: 'Deep roots reggae selections featuring classic Ugandan artists and international legends.',
  },
  {
    id: 2,
    title: "Skank'n Reggae 8",
    dj: 'Selecta Morris',
    genre: 'Dub',
    date: 'April 15, 2025',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1334568403&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/placeholder.svg',
    description: 'Heavy dub plates and bass-driven selections to move your soul and sound system.',
  },
  {
    id: 3,
    title: 'Empress Vibes Vol. 1',
    dj: 'Sister Blaze',
    genre: 'Roots',
    date: 'March 28, 2025',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1508795148&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/placeholder.svg',
    description: 'Celebrating female reggae artists from across Africa and the Caribbean. Powerful lyrics and conscious vibes.',
  },
  {
    id: 4,
    title: 'Lovers Rock Special',
    dj: 'DJ Conscious',
    genre: 'Lovers Rock',
    date: 'February 14, 2025',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1410256938&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/placeholder.svg',
    description: 'Smooth and soulful reggae love songs for a perfect romantic evening.',
  },
  {
    id: 5,
    title: 'Dancehall Sessions 12',
    dj: 'DJ Ruga',
    genre: 'Dancehall',
    date: 'January 20, 2025',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1219621886&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/placeholder.svg',
    description: 'High energy dancehall beats to get the party jumping. Latest hits and classic riddims.',
  },
  {
    id: 6,
    title: 'Conscious Chronicles',
    dj: 'Lion Heart',
    genre: 'Roots',
    date: 'December 12, 2024',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1334568403&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/placeholder.svg',
    description: 'Deep and spiritual selections focused on conscious messages and liberation themes.',
  },
];

const categories = ['All', 'Ugandan Reggae', 'Roots', 'Dub', 'Lovers Rock', 'Dancehall'];

const Mixes = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredMixes = activeCategory === 'All' 
    ? mixes 
    : mixes.filter(mix => mix.genre === activeCategory);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Banner */}
        <div className="bg-reggae-black py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block mb-4 p-3 rounded-full bg-reggae-green bg-opacity-20">
              <Headphones size={40} className="text-white" />
            </div>
            <h1 className="font-music text-5xl md:text-6xl mb-6">REGGAE MIXES</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-80">
              Dive into our collection of exclusive reggae mixes from Uganda's finest selectors and international guest DJs.
            </p>
          </div>
        </div>
        
        {/* Filter Section */}
        <section className="py-10 bg-reggae-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full transition-all ${
                    activeCategory === category 
                      ? 'bg-reggae-gold text-reggae-black font-bold shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Mixes Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMixes.map(mix => (
                <MixCard key={mix.id} mix={mix} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-reggae-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl mb-6">WANT TO CONTRIBUTE A MIX?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Are you a DJ with a passion for reggae music? Submit your mix to be featured on our platform.
            </p>
            <button className="bg-reggae-green text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition duration-200 inline-flex items-center">
              <Music size={20} className="mr-2" />
              Submit Your Mix
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

const MixCard = ({ mix }: { mix: any }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 border border-gray-200">
      <div className="h-48 bg-gray-200 relative">
        <img src={mix.imageUrl} alt={mix.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-reggae-red text-white text-xs px-2 py-1 rounded">
            {mix.genre}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-heading text-2xl text-reggae-black mb-1">{mix.title}</h3>
        <p className="text-gray-600 text-sm mb-4">By {mix.dj} • {mix.date}</p>
        <p className="text-gray-700 mb-6">{mix.description}</p>
        
        <div className="h-24 mb-4 border border-gray-200 rounded bg-gray-50">
          <iframe 
            width="100%" 
            height="100%" 
            scrolling="no" 
            frameBorder="no" 
            src={mix.embedUrl}
            title={mix.title}
          ></iframe>
        </div>
        
        <button className="w-full bg-reggae-black text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 transition flex items-center justify-center">
          <Headphones size={18} className="mr-2" />
          Listen Full Mix
        </button>
      </div>
    </div>
  );
};

export default Mixes;
