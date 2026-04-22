import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto bg-primary-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary-500/40">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32" />

        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
          Ready to create your <br /> first QR code?
        </h2>
        <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto relative z-10">
          Join thousands of users creating professional QR codes for free. No signup required.
        </p>
        <Link to="/app" className="px-8 py-4 bg-white text-primary-600 rounded-full text-lg font-bold hover:bg-slate-100 transition-all relative z-10 inline-block">
          Launch the Generator Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;
