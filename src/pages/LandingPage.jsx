import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Landing/Navigation';
import Hero from '../components/Landing/Hero';
import Features from '../components/Landing/Features';
import HowItWorks from '../components/Landing/HowItWorks';
import Benefits from '../components/Landing/Benefits';
import CTA from '../components/Landing/CTA';
import Footer from '../components/Landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
