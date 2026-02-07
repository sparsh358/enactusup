import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { socialLinks } from '../data/mockData';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-none">Enactus</span>
                <span className="text-xs text-gray-400">Shaheed Rajguru</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering communities through entrepreneurial action and sustainable solutions.
            </p>
            <div className="flex space-x-3">
              <a href={socialLinks.instagram} className="hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={socialLinks.linkedin} className="hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={socialLinks.facebook} className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href={socialLinks.twitter} className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-sm hover:text-white transition-colors">Our Projects</Link></li>
              <li><Link to="/impact" className="text-sm hover:text-white transition-colors">Impact</Link></li>
              <li><Link to="/get-involved" className="text-sm hover:text-white transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Our Projects */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Projects</h3>
            <ul className="space-y-2">
              <li><Link to="/projects/pehchaan" className="text-sm hover:text-white transition-colors">Project Pehchaan</Link></li>
              <li><Link to="/projects/sehej" className="text-sm hover:text-white transition-colors">Project Sehej</Link></li>
              <li><Link to="/projects/kashida" className="text-sm hover:text-white transition-colors">Project Kashida</Link></li>
              <li><Link to="/projects/ishnakari" className="text-sm hover:text-white transition-colors">Ishnakari</Link></li>
              <li><Link to="/projects/sugavya" className="text-sm hover:text-white transition-colors">Project Sugavya</Link></li>
              <li><Link to="/projects/greenhaven" className="text-sm hover:text-white transition-colors">Project Green Haven</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-indigo-400 mt-1 flex-shrink-0" />
                <span className="text-sm">Shaheed Rajguru College of Applied Sciences for Women, University of Delhi</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-indigo-400 flex-shrink-0" />
                <a href={`mailto:${socialLinks.email}`} className="text-sm hover:text-white transition-colors">
                  {socialLinks.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-indigo-400 flex-shrink-0" />
                <span className="text-sm">{socialLinks.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Enactus Shaheed Rajguru. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Part of Global Enactus Network | 33+ Countries
          </p>
        </div>
      </div>
    </footer>
  );
};
