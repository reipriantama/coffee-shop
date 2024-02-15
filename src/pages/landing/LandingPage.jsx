import React from 'react';
import Footer from '../../components/features/layout/footer';
import Hero from '../../components/features/hero';
import Home from '../../components/features/section1';
import About from '../../components/features/section2';
import Menu from '../../components/features/section3';
import Varieties from '../../components/features/section4';
import Contact from '../../components/features/section5';
import Gallery from '../../components/features/section6';
import Experience from '../../components/features/section7';
import News from '../../components/features/section8';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Home />
      <About />
      <Menu />
      <Varieties />
      <Contact />
      <Gallery />
      <Experience />
      <News />
      <Footer />

      {/* <ResponsiveIndicator /> */}
    </div>
  );
};

export default LandingPage;

// export const ResponsiveIndicator = () => {
//   if (process.env.NODE_ENV === 'production') return null;

//   return (
//     <div className='fixed bottom-1 left-1 z-[999999999] flex h-6 w-6 items-center justify-center rounded-full bg-red-800 p-3 font-mono text-xs text-white'>
//       <div className='block sm:hidden'>xs</div>
//       <div className='hidden sm:block md:hidden'>sm</div>
//       <div className='hidden md:block lg:hidden'>md</div>
//       <div className='hidden lg:block xl:hidden'>lg</div>
//       <div className='hidden xl:block 2xl:hidden'>xl</div>
//       <div className='hidden 2xl:block'>2xl</div>
//     </div>
//   );
// };
