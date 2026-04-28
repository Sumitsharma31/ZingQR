import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="text-2xl font-bold text-primary-600">
            ZingQR
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Free QR Code Generator for creating custom QR codes online.
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          <Link to="/about" className="hover:text-primary-600">About</Link>
          <Link to="/contact" className="hover:text-primary-600">Contact</Link>
          <Link to="/privacy" className="hover:text-primary-600">Privacy Policy</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Sumitsharma31"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/sumit-sharma-1906762a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-slate-400 text-xs border-t border-slate-100 dark:border-slate-800/50 pt-8 mt-8">
        © 2026 ZingQR. All rights reserved. Made for the developer community.
      </div>

    </footer>
  );
};

export default Footer;