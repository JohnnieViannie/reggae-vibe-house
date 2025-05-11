
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Marketplace = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center">Marketplace</h1>
          <div className="relative mb-10 flex justify-center">
            <div className="h-1 w-16 bg-reggae-gold"></div>
          </div>
          <p className="text-center text-xl mb-12">Coming soon! Shop our exclusive reggae merchandise and art.</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Marketplace;
