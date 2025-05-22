
import React from 'react';
import { Link } from 'react-router-dom';

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

const UpcomingEventsSection = () => {
  return (
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
  );
};

export default UpcomingEventsSection;
