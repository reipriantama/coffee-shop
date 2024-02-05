import React from 'react';
import Footer from '../../components/features/layout/footer';
import Hero from '../../components/features/hero';
import Home from '../../components/features/section1';
import About from '../../components/features/section2';
import Menu from '../../components/features/section3';
import Varieties from '../../components/features/section4';
import Contact from '../../components/features/section5';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Home />
      <About />
      <Menu />
      <Varieties />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
