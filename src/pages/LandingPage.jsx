import React from 'react';
import { motion } from 'framer-motion';
import {Helmet} from "react-helmet-async";
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
      {/* seo things */}
      <Helmet>
        <title>ZingQR - Free QR Code Generator | Create Custom QR Codes Online</title>

        <meta
          name="description"
          content="ZingQR lets you generate free QR codes online instantly. Create custom QR codes with colors, styles, and download in PNG or SVG. No signup required."
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zingqr.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content="ZingQR - Free QR Code Generator" />
        <meta
          property="og:description"
          content="Create custom QR codes instantly for free. No signup required. Download PNG or SVG."
        />
        <meta property="og:url" content="https://zingqr.vercel.app/" />
        <meta property="og:image" content="https://zingqr.vercel.app/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ZingQR - Free QR Code Generator" />
        <meta
          name="twitter:description"
          content="Generate QR codes online for free. Fast, customizable, and no signup required."
        />
        <meta name="twitter:image" content="https://zingqr.vercel.app/og-image.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ZingQR - Free QR Code Generator",
            "url": "https://zingqr.vercel.app/",
            "description": "Generate free QR codes online instantly with customization and download options."
          })}
        </script>
      </Helmet>
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <CTA />
      {/* Hidden seo */}
      <section className="hidden">
        <h1>Free QR Code Generator Online</h1>
        <h2>Create Custom QR Codes Instantly</h2>
        <p>
          ZingQR is a free QR code generator that allows users to create custom QR codes online.
          Generate QR codes for URLs, text, and more. Download in PNG or SVG format without signup.
        </p>
        <p>
          This QR code generator is fast, secure, and works on all devices. Customize colors,
          styles, and patterns to match your brand.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
