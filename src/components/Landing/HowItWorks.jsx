import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Enter Content for QR Code',
    desc: 'Add your website URL, text, or contact details into the QR code generator.',
    step: '01'
  },
  {
    title: 'Customize Your QR Code',
    desc: 'Change colors, patterns, and styles to create a custom QR code that matches your brand.',
    step: '02'
  },
  {
    title: 'Download QR Code',
    desc: 'Download your QR code in PNG or SVG format and use it anywhere online or offline.',
    step: '03'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            How to Generate QR Codes Online
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Follow these simple steps to create a free QR code using our online QR code generator.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-10">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
