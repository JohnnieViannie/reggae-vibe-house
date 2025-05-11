
import React from 'react';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import FeaturedMixes from '@/components/home/FeaturedMixes';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import FeaturedArtist from '@/components/home/FeaturedArtist';
import PhotoGallery from '@/components/home/PhotoGallery';
import MerchandiseHighlights from '@/components/home/MerchandiseHighlights';
import Newsletter from '@/components/home/Newsletter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <FeaturedMixes />
        <UpcomingEvents />
        <FeaturedArtist />
        <PhotoGallery />
        <MerchandiseHighlights />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Index;
