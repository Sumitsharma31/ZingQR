import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navigation = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-primary-600">ZingQR</Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors">How it Works</a>
          <Link to="/app" className="px-5 py-2 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all">
            Launch App
          </Link>
        </div>

        {/* Right side: Theme Toggle (always visible) + Mobile launch button */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </button>

          {/* Mobile-only Launch App button */}
          <Link
            to="/app"
            className="md:hidden px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-all"
          >
            Launch
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
