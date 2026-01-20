
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { NAV_LINKS, BUSINESS_NAME, PHONE_PLACEHOLDER, EMAIL_PLACEHOLDER } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="#/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-indigo-700 transition-colors">
                B
              </div>
              <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
                {BUSINESS_NAME}
              </span>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                      isScrolled ? 'text-slate-600' : 'text-slate-600 md:text-white/90'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="#/contact" 
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  isScrolled 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-white text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                Request a Quote
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <ul className="flex flex-col space-y-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-2xl font-bold text-slate-800 flex items-center justify-between"
                  onClick={closeMenu}
                >
                  {link.label}
                  <ChevronRight size={24} className="text-slate-400" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 space-y-4">
            <a 
              href="#/contact" 
              className="block w-full py-4 bg-indigo-600 text-white text-center rounded-xl font-bold text-lg"
              onClick={closeMenu}
            >
              Request a Quote
            </a>
            <div className="flex items-center justify-center space-x-6 pt-6">
              <a href={`tel:${PHONE_PLACEHOLDER}`} className="flex items-center text-slate-600 font-medium">
                <Phone size={20} className="mr-2 text-indigo-600" /> Call Us
              </a>
              <a href={`mailto:${EMAIL_PLACEHOLDER}`} className="flex items-center text-slate-600 font-medium">
                <Mail size={20} className="mr-2 text-indigo-600" /> Email
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-lg">
                  B
                </div>
                <span className="font-bold text-xl text-white tracking-tight">{BUSINESS_NAME}</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Providing elite level craftsmanship and reliable service solutions for residential and commercial clients since inception.
              </p>
              <div className="flex space-x-4">
                {/* Placeholder Socials */}
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">FB</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">IG</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <span className="text-xs font-bold">LI</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-white transition-colors text-sm">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6">Our Services</h4>
              <ul className="space-y-4">
                <li className="text-sm hover:text-white cursor-pointer transition-colors">Residential Solutions</li>
                <li className="text-sm hover:text-white cursor-pointer transition-colors">Commercial Maintenance</li>
                <li className="text-sm hover:text-white cursor-pointer transition-colors">Expert Installations</li>
                <li className="text-sm hover:text-white cursor-pointer transition-colors">Consultation & Planning</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <Phone size={18} className="mr-3 text-indigo-500 shrink-0" />
                  <span>{PHONE_PLACEHOLDER}</span>
                </li>
                <li className="flex items-start">
                  <Mail size={18} className="mr-3 text-indigo-500 shrink-0" />
                  <span>{EMAIL_PLACEHOLDER}</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-indigo-500 shrink-0">
                    <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>123 Service Way, Suite 100<br />Metro City, ST 12345</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookies Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
