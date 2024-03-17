import React from 'react'
import HeroSection from './HeroSection';
import Services from './Services';
import Destination from './Destination';
import Booking from './Booking';
import Testimonial from './Testimonial';
import Partners from './Partners';
import NewsLetter from './NewsLetter';
import FooterSection from './FooterSection';


const Landing = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Destination />
      <Booking />
      <Testimonial />
      <Partners />
      <NewsLetter />
      <FooterSection />
    </>
  );
}

export default Landing