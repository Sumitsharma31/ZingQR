import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import QRCode from "react-qr-code";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white transition-colors duration-300">

      {/* 🔥 Glow Particles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-500 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-indigo-500 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-400 rounded-full blur-sm animate-pulse"></div>
      </div>

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block"
          >
            <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm">
              ⚡ Free QR Code Generator • No Signup Required
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 text-transparent bg-clip-text">
              Create Custom QR Codes Instantly
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-xl"
          >
            Generate free QR codes online instantly. Customize colors, styles, and download high-quality QR codes in PNG or SVG format. No signup required.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <Link
              to="/app"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition"
            >
              Generate QR Code
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>

            <a
              href="#features"
              className="px-8 py-4 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Learn More
            </a>
          </motion.div>

          <div className="flex gap-8 justify-center md:justify-start">
            <div>
              <div className="text-xl font-bold text-slate-900 dark:text-white">100%</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Free</div>
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 dark:text-white">6+</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Formats</div>
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 dark:text-white">∞</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Codes</div>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center relative">

          {/* Glow */}
          <div className="absolute w-[300px] h-[300px] bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >

            <div className="p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl relative overflow-hidden"
              >

                {/* Scan Line */}
                <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: 200 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute w-full h-[2px] bg-blue-400/40"
                />

                <QRCode value="https://zingqr.vercel.app" size={180} />

                <p className="text-center mt-4 text-slate-700 dark:text-slate-200 font-medium">
                  Scan Me
                </p>

                <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                  zingQR APP
                </p>

              </motion.div>
            </div>

            {/* Floating Tags */}
            <div className="absolute -top-5 -left-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-transparent px-3 py-1 rounded-lg text-xs shadow">
              ⚡ Fast
            </div>

            <div className="absolute -bottom-5 -right-5 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-transparent px-3 py-1 rounded-lg text-xs shadow">
              🎨 Custom
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;