
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Music, Calendar, Heart } from 'lucide-react';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center">About House of Reggae</h1>
          <div className="relative mb-10 flex justify-center">
            <div className="h-1 w-16 bg-reggae-gold"></div>
          </div>
          
          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl leading-relaxed">
              House of Reggae (HoR) is Uganda's premier reggae culture movement, dedicated to 
              celebrating, promoting, and uniting reggae talent across East Africa. Founded in 2018, 
              we've grown from intimate gatherings to a cultural institution that pushes the 
              boundaries of reggae music and its associated lifestyle.
            </p>
          </div>
          
          {/* History Section */}
          <div className="mb-16 bg-reggae-light p-8 rounded-xl">
            <h2 className="text-3xl font-heading mb-6">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  House of Reggae began as a small gathering of reggae enthusiasts in the backyard of founder 
                  Marcus Garvey Jr. What started as friends sharing their favorite reggae records quickly 
                  evolved into regular events that attracted larger and more diverse crowds from across Kampala.
                </p>
                <p>
                  By 2020, our "Rootsman" series of events had become the talk of the Uganda music scene, 
                  bringing together both established and underground reggae talent. Today, we operate as a 
                  full cultural movement with regular events, a record label, merchandise line, and a 
                  strong community of reggae lovers.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/reggae-history.jpg" 
                  alt="The first House of Reggae gathering" 
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading mb-10 text-center">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard 
                icon={<Music size={40} />}
                title="Music Production"
                description="We curate and produce reggae music, from classic roots to contemporary dancehall, showcasing Uganda's finest talent."
              />
              <ServiceCard 
                icon={<Calendar size={40} />}
                title="Events & Shows"
                description="Regular live events bringing together DJs, vocalists, and bands for authentic reggae experiences."
              />
              <ServiceCard 
                icon={<Users size={40} />}
                title="Community Building"
                description="Creating spaces for reggae lovers to connect, share, and celebrate the culture and lifestyle."
              />
              <ServiceCard 
                icon={<Heart size={40} />}
                title="Cultural Preservation"
                description="Documenting and preserving Uganda's unique contribution to global reggae culture."
              />
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading mb-10 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember 
                name="Marcus Garvey Jr." 
                role="Founder & Creative Director"
                image="/reggae-team1.jpg"
              />
              <TeamMember 
                name="DJ Zion" 
                role="Head of Music"
                image="/reggae-team2.jpg"
              />
              <TeamMember 
                name="Sarah Roots" 
                role="Events Manager"
                image="/reggae-team3.jpg"
              />
              <TeamMember 
                name="Jah Mike" 
                role="Sound Engineer"
                image="/reggae-team4.jpg"
              />
              <TeamMember 
                name="Queen Nyah" 
                role="Community Relations"
                image="/reggae-team5.jpg"
              />
              <TeamMember 
                name="Lion Heart" 
                role="Merchandise Design"
                image="/reggae-team6.jpg"
              />
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-16 bg-reggae-green text-white p-8 rounded-xl">
            <h2 className="text-3xl font-heading mb-10 text-center">What People Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Testimonial 
                quote="House of Reggae has completely transformed Uganda's music scene. Their events are unlike anything else in East Africa."
                author="The Kampala Times"
              />
              <Testimonial 
                quote="The authenticity and passion behind this movement is what makes it special. It's not just about music, it's about a way of life."
                author="International Reggae Magazine"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-reggae-red mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-heading mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamMember = ({ name, role, image }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md group">
    <div className="h-64 overflow-hidden">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h3 className="font-heading text-xl">{name}</h3>
      <p className="text-reggae-red">{role}</p>
    </div>
  </div>
);

const Testimonial = ({ quote, author }) => (
  <div className="bg-white bg-opacity-10 p-6 rounded-lg">
    <p className="text-lg italic mb-4">{quote}</p>
    <p className="font-bold text-reggae-gold">— {author}</p>
  </div>
);

export default About;
