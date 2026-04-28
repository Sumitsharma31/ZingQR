import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Palette, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    title: 'Instant QR Code Generation',
    desc: 'Generate QR codes instantly online as you type. Fast, real-time QR code generator with no delays.',
    icon: Zap,
    color: 'text-yellow-500'
  },
  {
    title: 'Custom QR Code Design',
    desc: 'Create custom QR codes with colors, styles, and sizes to perfectly match your brand identity.',
    icon: Palette,
    color: 'text-purple-500'
  },
  {
    title: 'High-Quality QR Code Export',
    desc: 'Download QR codes in high-resolution PNG and SVG formats for print, web, and professional use.',
    icon: Shield,
    color: 'text-blue-500'
  },
  {
    title: 'Mobile-Friendly QR Codes',
    desc: 'All QR codes are optimized for fast scanning across smartphones and all modern devices.',
    icon: Smartphone,
    color: 'text-green-500'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Powerful Free QR Code Generator Features
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            ZingQR provides everything you need to create, customize, and download QR codes online.
            Generate free QR codes with advanced customization, high-quality export, and instant performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all group hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feat.icon className={`w-6 h-6 ${feat.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feat.title}</h3>
              
              <p className="text-slate-600 dark:text-slate-400">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
