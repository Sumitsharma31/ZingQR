import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* ✅ SEO: Brand + keyword */}
        <div className="text-center md:text-left">
          <div className="text-2xl font-bold text-primary-600">
            ZingQR
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Free QR Code Generator for creating custom QR codes online.
          </p>
        </div>

        {/* ✅ SEO: Internal links */}
        <div className="flex gap-6 text-sm text-slate-500">
          <Link to="/" title="Free QR Code Generator Home" className="hover:text-primary-600">
            Home
          </Link>
          <a href="#features" title="QR Code Generator Features" className="hover:text-primary-600">
            Features
          </a>
          <a href="#how-it-works" title="How QR Code Generator Works" className="hover:text-primary-600">
            How it Works
          </a>
          <Link to="/app" title="Generate QR Code Online" className="hover:text-primary-600">
            Generator
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-slate-500 text-sm">
          © 2026 ZingQR. All rights reserved.
        </div>

        {/* Social */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Sumitsharma31"
            target="_blank"
            rel="noopener noreferrer"
            title="ZingQR GitHub"
            className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/sumit-sharma-1906762a2/"
            target="_blank"
            rel="noopener noreferrer"
            title="ZingQR LinkedIn"
            className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-2xl font-bold text-primary-600">ZingQR</div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link to="/about" className="text-slate-500 hover:text-primary-600 transition-colors text-sm font-medium">About</Link>
            <Link to="/contact" className="text-slate-500 hover:text-primary-600 transition-colors text-sm font-medium">Contact</Link>
            <Link to="/privacy" className="text-slate-500 hover:text-primary-600 transition-colors text-sm font-medium">Privacy Policy</Link>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/Sumitsharma31" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>

            <a href="https://www.linkedin.com/in/sumit-sharma-1906762a2/" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center text-slate-400 text-xs border-t border-slate-100 dark:border-slate-800/50 pt-8">
          © 2026 ZingQR. All rights reserved. Made with love for the developer community.
        </div>

      </div>
    </footer>
  );
};

export default Footer;