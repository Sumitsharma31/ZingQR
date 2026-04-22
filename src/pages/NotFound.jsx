import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import QRCode from "react-qr-code";

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden px-6">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* ✨ Floating Particles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
      </div>

      <div className="text-center max-w-2xl">

        {/* 🔥 404 Number */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-8xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
        >
          404
        </motion.h1>

        {/* 🚀 Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-semibold mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-slate-400 mb-10"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* 🎯 Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Home */}
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition shadow-lg shadow-blue-500/30"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>

          {/* Back */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-600 hover:bg-slate-800 rounded-xl transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>

        {/* 💡 Floating QR Easter Egg */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="p-3 bg-white rounded-2xl shadow-xl shadow-blue-500/10">
            <Link to="/">
              <QRCode value={window.location.origin} size={100} />
            </Link>
          </div>
          <p className="text-slate-500 text-sm">Lost? Scan your way back 😉</p>
        </motion.div>

      </div>
    </section>
  );
};

export default NotFound;