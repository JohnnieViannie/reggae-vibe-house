
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Headphones, ShoppingCart } from 'lucide-react';

// Sample data
const event = {
  title: 'Reggae Sundowner',
  date: 'June 15, 2025',
  location: 'Nyege Nyege Beach, Jinja',
  imageUrl: '/reggae-beach.jpg',
};

const mix = {
  title: 'Rootsman Edition 4',
  dj: 'DJ Zion',
  genre: 'Ugandan Reggae',
  imageUrl: '/reggae-dj.jpg',
};

const product = {
  name: 'House of Reggae T-Shirt',
  price: 25.99,
  image: '/reggae-product2.jpg',
};

const HomeSummarySection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Explore What We Offer</h2>
          <div className="relative mb-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-16 h-1 bg-reggae-gold"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Events Preview */}
          <div className="bg-reggae-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="h-48 overflow-hidden relative">
              <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-heading text-xl">{event.title}</h3>
                <p className="text-white opacity-75 text-sm">{event.date} • {event.location}</p>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <span className="font-bold text-reggae-black">Events</span>
              <Link 
                to="/events" 
                className="bg-reggae-green text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition"
              >
                <Calendar size={18} />
                See All Events
              </Link>
            </div>
          </div>
          
          {/* Mixes Preview */}
          <div className="bg-reggae-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="h-48 overflow-hidden relative">
              <img src={mix.imageUrl} alt={mix.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-heading text-xl">{mix.title}</h3>
                <p className="text-white opacity-75 text-sm">By {mix.dj} • {mix.genre}</p>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <span className="font-bold text-white">Mixes</span>
              <Link 
                to="/mixes" 
                className="bg-reggae-gold text-reggae-black px-4 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition"
              >
                <Headphones size={18} />
                Listen to Mixes
              </Link>
            </div>
          </div>
          
          {/* Merchandise Preview */}
          <div className="bg-reggae-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <div className="h-48 overflow-hidden relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-heading text-xl">{product.name}</h3>
                <p className="text-white opacity-75 text-sm">${product.price}</p>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <span className="font-bold text-reggae-black">Merchandise</span>
              <Link 
                to="/marketplace" 
                className="bg-reggae-red text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-90 transition"
              >
                <ShoppingCart size={18} />
                Shop Merch
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-r from-reggae-red via-reggae-gold to-reggae-green opacity-10"></div>
      </div>
    </section>
  );
};

export default HomeSummarySection;
