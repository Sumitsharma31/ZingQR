import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-bold text-primary-600">ZingQR</div>
        <div className="text-slate-500 text-sm">
          © 2026 ZingQR. All rights reserved.
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
    </footer>
  );
};

export default Footer;
