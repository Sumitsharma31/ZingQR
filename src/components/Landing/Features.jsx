import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Palette, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    title: 'Instant Generation',
    desc: 'Create your QR code in real-time as you type. No waiting, no delays.',
    icon: Zap,
    color: 'text-yellow-500'
  },
  {
    title: 'Full Customization',
    desc: 'Change colors, styles, and sizes to match your brand identity perfectly.',
    icon: Palette,
    color: 'text-purple-500'
  },
  {
    title: 'Enterprise Grade',
    desc: 'High-resolution SVG and PNG exports ensure your codes look crisp everywhere.',
    icon: Shield,
    color: 'text-blue-500'
  },
  {
    title: 'Mobile Optimized',
    desc: 'Every QR code is tested for instant scanning across all mobile devices.',
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
            Everything you need to create <span className="text-primary-600">Perfect QR Codes</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our generator provides the tools used by top marketers and developers to create engagement.
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
