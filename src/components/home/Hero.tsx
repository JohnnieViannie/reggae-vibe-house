
import React from 'react';
import HeroBanner from './HeroBanner';
import ActionButtons from './ActionButtons';
import FeaturedMixesSection from './FeaturedMixesSection';
import UpcomingEventsSection from './UpcomingEventsSection';
import FeaturedDjSection from './FeaturedDjSection';
import OnlineRadioSection from './OnlineRadioSection';

const Hero = () => {
  return (
    <section className="bg-reggae-green min-h-screen flex flex-col pt-16">
      <HeroBanner />
      <ActionButtons />
      <FeaturedMixesSection />
      <UpcomingEventsSection />
      <FeaturedDjSection />
      <OnlineRadioSection />
    </section>
  );
};

export default Hero;
