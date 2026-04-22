import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe } from 'lucide-react';

const stats = [
  { label: 'Daily Codes', value: '10K+', icon: TrendingUp },
  { label: 'Active Users', value: '50K+', icon: Users },
  { label: 'Countries', value: '120+', icon: Globe },
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why thousands trust <br /> <span className="text-primary-400">ZingQR</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              We prioritize speed, quality, and ease of use. Our generator is built for professionals who need reliable results without the bloat.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-primary-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 flex items-center gap-2">
                    <stat.icon className="w-4 h-4" /> {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full" />
              <div>
                <div className="font-bold">Alex Rivera</div>
                <div className="text-sm text-slate-400">Marketing Lead at TechFlow</div>
              </div>
            </div>
            <p className="text-lg italic text-slate-300">
              "The customization options are incredible. We used ZingQR to create unique codes for our 2024 campaign, and the SVG export quality was perfect for our print billboards."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
