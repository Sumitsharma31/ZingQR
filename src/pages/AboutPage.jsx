import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Landing/Navigation';
import Footer from '../components/Landing/Footer';
import { Target, Users, Zap, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About <span className="text-primary-600">ZingQR</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We're on a mission to provide the world's most intuitive, powerful, and beautiful QR code generation tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                ZingQR was born out of a simple observation: most QR code generators are either too complex, full of ads, or just plain ugly. We wanted to build something better—a tool that developers and creators would actually love to use.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Our focus is on clean design, fast performance, and user privacy. We believe that technology should be elegant and accessible to everyone.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <Target className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Precision</h3>
                <p className="text-xs text-slate-500">Pixel-perfect QR codes every time.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <Users className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Community</h3>
                <p className="text-xs text-slate-500">Built for creators by creators.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <Zap className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Speed</h3>
                <p className="text-xs text-slate-500">Instant generation and loading.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <Shield className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Privacy</h3>
                <p className="text-xs text-slate-500">Your data never leaves your browser.</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-primary-600 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Join thousands of users</h2>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              Experience the next generation of QR code tools. Free, fast, and secure.
            </p>
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold hover:bg-primary-50 transition-colors">
              Get Started for Free
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
