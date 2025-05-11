
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ExternalLink, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const events = [
  {
    id: 1,
    title: 'Reggae Sundowner',
    date: 'June 15, 2025',
    time: '4:00 PM - 11:00 PM',
    location: 'Nyege Nyege Beach, Jinja',
    imageUrl: '/reggae-beach.jpg',
    description: 'Join us for sunset vibes by the shores of the Nile. Featuring live performances and top DJs spinning the best in roots reggae and dub.',
    lineup: ['DJ Zion', 'Selecta Morris', 'Sister Blaze'],
    ticketUrl: '#',
    fullDescription: 'Experience the magic of reggae music as the sun sets over the Nile River. This special event brings together Uganda\'s finest reggae selectors and artists for an unforgettable evening. Bring your friends and family for food, drinks, and positive vibes by the water. Early arrival recommended as space is limited.',
    admission: 'UGX 50,000 at the gate, UGX 40,000 advance',
  },
  {
    id: 2,
    title: 'Roots & Culture Festival',
    date: 'July 22-23, 2025',
    time: 'All Day Event',
    location: 'National Theatre, Kampala',
    imageUrl: '/reggae-concert1.jpg',
    description: 'A two-day celebration of reggae music and Rastafarian culture. Experience live bands, drum circles, food stalls, and craft markets.',
    lineup: ['Reggae Powerhouse Band', 'Lion Heart', 'DJ Ruga'],
    ticketUrl: '#',
    fullDescription: 'The annual Roots & Culture Festival returns bigger and better than ever. This two-day extravaganza celebrates everything reggae and Rastafarian culture with international headliners and local talent. Enjoy authentic food, browse craft vendors, participate in drum circles and cultural workshops, and dance to the best reggae music Uganda has to offer.',
    admission: 'UGX 80,000 for 2-day pass, UGX 50,000 single day',
  },
  {
    id: 3,
    title: 'Dancehall Night',
    date: 'August 5, 2025',
    time: '8:00 PM - 3:00 AM',
    location: 'Club Guvnor, Kampala',
    imageUrl: '/reggae-dancers.jpg',
    description: 'The hottest dancehall party in Kampala. Get ready to dance all night to the best dancehall riddims from Jamaica and Africa.',
    lineup: ['DJ Conscious', 'Queen Nyah', 'Jah Mike'],
    ticketUrl: '#',
    fullDescription: 'Kampala\'s premiere dancehall event returns with even more energy than before. The ultimate dancehall experience featuring competitions, special guest performances, and the latest tracks that are shaking the global dancehall scene. Dress to impress and come ready to move!',
    admission: 'UGX 30,000 standard entry, UGX 50,000 VIP',
  },
  {
    id: 4,
    title: 'Acoustic Reggae Session',
    date: 'September 12, 2025',
    time: '6:00 PM - 10:00 PM',
    location: 'Design Hub, Kampala',
    imageUrl: '/reggae-drums.jpg',
    description: 'An intimate evening of acoustic reggae performances. Feel the raw emotion and power of reggae in its most stripped-down form.',
    lineup: ['Akello Jane', 'Tamba Soul', 'Acoustic Roots Band'],
    ticketUrl: '#',
    fullDescription: 'Experience reggae music in its purest form at this intimate acoustic session. This event showcases the depth and beauty of reggae lyrics and melodies without the heavy production. Limited seating available to maintain the intimate atmosphere. Complimentary welcome drink included with ticket.',
    admission: 'UGX 35,000 pre-sale only, limited capacity',
  },
  {
    id: 5,
    title: 'Reggae History Exhibition',
    date: 'October 1-7, 2025',
    time: '10:00 AM - 6:00 PM Daily',
    location: 'Uganda Museum, Kampala',
    imageUrl: '/reggae-history.jpg',
    description: 'A week-long exhibition exploring the rich history of reggae music in Uganda and its influence on local culture and politics.',
    lineup: ['Daily talks by reggae historians', 'Film screenings', 'Vinyl listening sessions'],
    ticketUrl: '#',
    fullDescription: 'This comprehensive exhibition chronicles the evolution of reggae music in Uganda from the 1970s to the present day. View rare photographs, album covers, instruments, and memorabilia while learning about the political and cultural impact reggae has had in East Africa. Special daily presentations and film screenings included with admission.',
    admission: 'UGX 15,000 adults, UGX 5,000 students with ID',
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const openEventDetails = (event: any) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };
  
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[url('/wood-texture.jpg')] bg-fixed bg-cover">
        <div className="bg-reggae-black bg-opacity-95 min-h-screen">
          {/* Hero Banner */}
          <div className="bg-[url('/reggae-concert1.jpg')] bg-cover bg-center py-16 pt-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-reggae-black/70 to-reggae-black/90"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="inline-block mb-4 p-3 rounded-full bg-reggae-red bg-opacity-20">
                <Calendar size={40} className="text-white" />
              </div>
              <h1 className="font-music text-5xl md:text-6xl mb-6 text-white">UPCOMING EVENTS</h1>
              <p className="text-xl max-w-3xl mx-auto text-white opacity-80">
                Experience the power of reggae music live with our upcoming shows, festivals, and cultural gatherings.
              </p>
            </div>
          </div>
          
          {/* Calendar View */}
          <section className="py-16 bg-gradient-to-b from-reggae-black/90 to-transparent">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-white text-center mb-12">Events Calendar</h2>
              
              <div className="space-y-10">
                {events.map(event => (
                  <EventCard 
                    key={event.id} 
                    event={event} 
                    onDetailsClick={() => openEventDetails(event)}
                  />
                ))}
              </div>
            </div>
          </section>
          
          {/* Map Section */}
          <section className="py-16 bg-gradient-to-t from-reggae-black/90 to-transparent">
            <div className="container mx-auto px-4">
              <h2 className="section-title text-white text-center mb-6">Our Venues</h2>
              <p className="text-center text-lg mb-10 text-white/80">Find our regular event locations across Uganda</p>
              
              <div className="max-w-4xl mx-auto border-4 border-reggae-gold rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/reggae-map.jpg" 
                  alt="Map of venues" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          
          {/* Host Your Own Event */}
          <section className="py-16 bg-[url('/reggae-crowd.jpg')] bg-cover bg-center text-white relative">
            <div className="absolute inset-0 bg-reggae-black/80"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl mb-6">HOST YOUR OWN REGGAE EVENT</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Want to organize a reggae event? Partner with House of Reggae for DJs, equipment, promotion, and more.
              </p>
              <button className="bg-reggae-green text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition duration-200 inline-flex items-center">
                Contact Us About Events
              </button>
            </div>
          </section>
          
          {/* Event Details Modal */}
          {selectedEvent && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative h-64 md:h-80">
                  <img 
                    src={selectedEvent.imageUrl} 
                    alt={selectedEvent.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <button 
                    className="absolute top-4 right-4 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition"
                    onClick={closeEventDetails}
                  >
                    <X size={24} />
                  </button>
                  <h2 className="absolute bottom-4 left-4 right-4 font-heading text-3xl md:text-4xl text-white">
                    {selectedEvent.title}
                  </h2>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-1 text-reggae-red" />
                      <span>{selectedEvent.date}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock size={18} className="mr-1 text-reggae-red" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin size={18} className="mr-1 text-reggae-red" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 text-lg">{selectedEvent.fullDescription}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold uppercase text-reggae-red mb-2">Admission:</h4>
                    <p className="text-gray-700">{selectedEvent.admission}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold uppercase text-reggae-red mb-2">Lineup:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.lineup.map((artist: string, index: number) => (
                        <span 
                          key={index} 
                          className="bg-reggae-light text-reggae-black text-sm px-3 py-1 rounded-full"
                        >
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <a 
                      href={selectedEvent.ticketUrl} 
                      className="bg-reggae-gold text-reggae-black px-8 py-3 rounded-md font-bold flex items-center hover:bg-opacity-90 transition"
                    >
                      Get Tickets Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

const EventCard = ({ event, onDetailsClick }: { event: any, onDetailsClick: () => void }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-reggae-gold">
      <div className="md:w-1/3 h-64 md:h-auto">
        <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
      </div>
      
      <div className="p-6 md:w-2/3">
        <h3 className="font-heading text-3xl mb-2 text-reggae-black">{event.title}</h3>
        
        <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
          <div className="flex items-center">
            <Calendar size={18} className="mr-1 text-reggae-red" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center">
            <Clock size={18} className="mr-1 text-reggae-red" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin size={18} className="mr-1 text-reggae-red" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{event.description}</p>
        
        <div className="mb-6">
          <h4 className="font-bold text-sm uppercase text-gray-500 mb-2">Lineup:</h4>
          <div className="flex flex-wrap gap-2">
            {event.lineup.map((artist: string, index: number) => (
              <span 
                key={index} 
                className="bg-reggae-light text-reggae-black text-sm px-3 py-1 rounded-full"
              >
                {artist}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <a 
            href={event.ticketUrl} 
            className="bg-reggae-green text-white px-6 py-2 rounded font-bold flex items-center hover:bg-opacity-90 transition"
          >
            Get Tickets
          </a>
          
          <button 
            className="border border-reggae-black text-reggae-black px-6 py-2 rounded font-bold flex items-center hover:bg-reggae-black hover:text-white transition"
            onClick={onDetailsClick}
          >
            Learn More
            <ExternalLink size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
