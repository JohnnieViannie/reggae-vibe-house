
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Headphones, ShoppingCart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample data
const events = [
  {
    id: 1,
    title: 'Reggae Sundowner',
    date: 'June 15, 2025',
    location: 'Nyege Nyege Beach, Jinja',
    imageUrl: '/reggae-beach.jpg',
  },
  {
    id: 2,
    title: 'Roots & Culture Festival',
    date: 'July 22-23, 2025',
    time: 'All Day Event',
    location: 'National Theatre, Kampala',
    imageUrl: '/reggae-concert1.jpg',
  },
  {
    id: 3,
    title: 'Dancehall Night',
    date: 'August 5, 2025',
    time: '8:00 PM - 3:00 AM',
    location: 'Club Guvnor, Kampala',
    imageUrl: '/reggae-dancers.jpg',
  },
];

const mixes = [
  {
    id: 1,
    title: 'Rootsman Edition 4',
    dj: 'DJ Zion',
    genre: 'Ugandan Reggae',
    imageUrl: '/reggae-dj.jpg',
  },
  {
    id: 2,
    title: "Skank'n Reggae 8",
    dj: 'Selecta Morris',
    genre: 'Dub',
    imageUrl: '/reggae-drums.jpg',
  },
  {
    id: 3,
    title: 'Empress Vibes Vol. 1',
    dj: 'Sister Blaze',
    genre: 'Roots',
    imageUrl: '/reggae-artwork.jpg',
  },
];

const products = [
  {
    id: 1,
    name: 'House of Reggae T-Shirt',
    price: 25.99,
    image: '/reggae-product2.jpg',
  },
  {
    id: 2,
    name: 'Rasta Lion Hoodie',
    price: 45.99,
    image: '/reggae-product1.jpg',
  },
  {
    id: 3,
    name: 'Roots & Culture Mug',
    price: 12.99,
    image: '/reggae-product3.jpg',
  },
];

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
          {/* Events Preview with Carousel */}
          <div className="bg-reggae-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <Carousel className="w-full" autoPlay={true} opts={{
              loop: true,
              duration: 20,
            }}>
              <CarouselContent>
                {events.map((event) => (
                  <CarouselItem key={event.id}>
                    <div className="h-48 overflow-hidden relative">
                      <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white font-heading text-xl">{event.title}</h3>
                        <p className="text-white opacity-75 text-sm">{event.date} • {event.location}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-3 w-6 h-6 bg-white/70 hover:bg-white" />
              <CarouselNext className="-right-3 w-6 h-6 bg-white/70 hover:bg-white" />
            </Carousel>
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
          
          {/* Mixes Preview with Carousel */}
          <div className="bg-reggae-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <Carousel className="w-full" autoPlay={true} opts={{
              loop: true,
              duration: 20,
            }}>
              <CarouselContent>
                {mixes.map((mix) => (
                  <CarouselItem key={mix.id}>
                    <div className="h-48 overflow-hidden relative">
                      <img src={mix.imageUrl} alt={mix.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white font-heading text-xl">{mix.title}</h3>
                        <p className="text-white opacity-75 text-sm">By {mix.dj} • {mix.genre}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-3 w-6 h-6 bg-white/70 hover:bg-white" />
              <CarouselNext className="-right-3 w-6 h-6 bg-white/70 hover:bg-white" />
            </Carousel>
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
          
          {/* Merchandise Preview with Carousel */}
          <div className="bg-reggae-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <Carousel className="w-full" autoPlay={true} opts={{
              loop: true,
              duration: 20,
            }}>
              <CarouselContent>
                {products.map((product) => (
                  <CarouselItem key={product.id}>
                    <div className="h-48 overflow-hidden relative">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white font-heading text-xl">{product.name}</h3>
                        <p className="text-white opacity-75 text-sm">${product.price}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-3 w-6 h-6 bg-white/70 hover:bg-white" />
              <CarouselNext className="-right-3 w-6 h-6 bg-white/70 hover:bg-white" />
            </Carousel>
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
