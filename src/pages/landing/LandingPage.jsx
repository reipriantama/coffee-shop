import React from "react";
import Footer from "../../components/features/layout/footer";
import Hero from "../../components/features/hero";
import Home from "../../components/features/section1";
import About from "../../components/features/section2";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Home />
      <About />
      <Footer />
    </div>
  );
};

export default LandingPage;
