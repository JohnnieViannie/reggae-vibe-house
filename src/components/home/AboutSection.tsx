
import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-reggae-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="section-title">What is House of Reggae?</h2>
          
          <div className="relative mb-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-16 h-1 bg-reggae-gold"></div>
          </div>
          
          <p className="text-xl mb-10 leading-relaxed">
            House of Reggae (HoR) is a movement that celebrates, promotes, and unites
            reggae talent in Uganda. From dancehall to lovers rock, we push the culture
            forward through music, events, and community.
          </p>
          
          <Link 
            to="/about" 
            className="bg-reggae-black text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-200 inline-flex items-center"
          >
            <Users size={20} className="mr-2" />
            Meet the Team
          </Link>
        </div>
      </div>
      
      {/* Decorative wood texture pattern */}
      <div className="h-8 bg-wood-texture bg-repeat-x mt-16 opacity-20"></div>
    </section>
  );
};

export default AboutSection;
