
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

const mixes = [
  {
    id: 1,
    title: 'Rootsman Edition 4',
    dj: 'DJ Zion',
    genre: 'Ugandan Reggae',
    date: 'May 2, 2025',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1219621886&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/reggae-dj.jpg',
  },
  {
    id: 2,
    title: "Skank'n Reggae 8",
    dj: 'Selecta Morris',
    genre: 'Dub',
    date: 'April 15, 2025',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1334568403&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/reggae-drums.jpg',
  },
  {
    id: 3,
    title: 'Empress Vibes Vol. 1',
    dj: 'Sister Blaze',
    genre: 'Roots',
    date: 'March 28, 2025',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1508795148&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/reggae-artwork.jpg',
  },
  {
    id: 4,
    title: 'Lovers Rock Special',
    dj: 'DJ Conscious',
    genre: 'Lovers Rock',
    date: 'February 14, 2025',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1410256938&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    imageUrl: '/reggae-beach.jpg',
  },
];

const categories = ['All', 'Ugandan Reggae', 'Roots', 'Dub', 'Lovers Rock'];

const FeaturedMixes = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredMixes = activeCategory === 'All' 
    ? mixes 
    : mixes.filter(mix => mix.genre === activeCategory);

  return (
    <section className="py-20 bg-reggae-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">Featured Mixes</h2>
          <div className="relative mb-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-16 h-1 bg-reggae-gold"></div>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category 
                  ? 'bg-reggae-gold text-reggae-black font-bold' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Mixes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMixes.map(mix => (
            <MixCard key={mix.id} mix={mix} />
          ))}
        </div>
        
        {/* See All Mixes Button */}
        <div className="text-center mt-10">
          <Link 
            to="/mixes" 
            className="bg-reggae-gold text-reggae-black font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-200 inline-flex items-center"
          >
            <Music size={20} className="mr-2" />
            See All Mixes
          </Link>
        </div>
      </div>
    </section>
  );
};

const MixCard = ({ mix }: { mix: any }) => {
  return (
    <Link to="/mixes" className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 block">
      <div className="h-48 bg-gray-800 relative">
        <img src={mix.imageUrl} alt={mix.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-reggae-red text-white text-xs px-2 py-1 rounded">
            {mix.genre}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-heading text-xl text-white mb-1">{mix.title}</h3>
        <p className="text-gray-400 text-sm mb-3">By {mix.dj} • {mix.date}</p>
        
        <div className="h-20">
          <iframe 
            width="100%" 
            height="100%" 
            scrolling="no" 
            frameBorder="no" 
            src={mix.embedUrl}
            title={mix.title}
          ></iframe>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedMixes;
