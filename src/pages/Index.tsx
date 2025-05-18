
import React from 'react';
import Hero from '@/components/home/Hero';
import HomeSummarySection from '@/components/home/HomeSummarySection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeSummarySection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
