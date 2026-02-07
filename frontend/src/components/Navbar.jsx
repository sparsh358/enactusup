import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Impact', path: '/impact' },
    { name: 'Get Involved', path: '/get-involved' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-lg shadow-lg shadow-amber-500/10 border-b border-amber-500/20' 
          : 'bg-black/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/30">
              <span className="text-black font-bold text-xl">E</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg leading-none">Enactus</span>
              <span className="text-xs text-amber-400">Shaheed Rajguru</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? 'text-amber-400'
                    : 'text-gray-300 hover:text-amber-400'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 transform transition-transform ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-bold hover:from-amber-400 hover:to-yellow-400 transition-all shadow-lg shadow-amber-500/30"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-amber-400 hover:bg-amber-500/10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-amber-500/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'text-gray-300 hover:bg-amber-500/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-bold text-center hover:from-amber-400 hover:to-yellow-400"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
