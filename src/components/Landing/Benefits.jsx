import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe } from 'lucide-react';

const stats = [
  { label: 'QR Codes Generated Daily', value: '10K+', icon: TrendingUp },
  { label: 'Active QR Code Users', value: '50K+', icon: Users },
  { label: 'Countries Using ZingQR', value: '120+', icon: Globe },
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why ZingQR is the Trusted <br /> <span className="text-primary-400">Free QR Code Generator</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              ZingQR is a fast and reliable QR code generator trusted by thousands of users worldwide.
              Create custom QR codes, download in high-quality formats, and use them for marketing,
              business, or personal needs — all without signup.
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
              "ZingQR is one of the best free QR code generators we’ve used. The customization options and SVG quality helped us create professional QR codes for our campaigns."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
