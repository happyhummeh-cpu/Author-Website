/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Sparkles, Star, Moon, Menu, X, Mail, Heart } from 'lucide-react';
import { AUTHOR_NAME } from '../data';

interface NavbarProps {
  onJoinClubClick: () => void;
  scrollPercent: number;
}

export default function Navbar({ onJoinClubClick, scrollPercent }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: "Featured Novel", id: "featured-novel" },
    { label: "The Story Universe", id: "story-universe" },
    { label: "Reader Emotions", id: "reader-emotions" },
    { label: "Poetic Quotes", id: "quotes" },
    { label: "Author Story", id: "author-identity" },
  ];

  return (
    <>
      {/* Scroll Progress Indicator spanning top of page */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-neutral-900/40 z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500 transition-all duration-75"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      <motion.nav 
        id="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-500 ${
          isScrolled 
            ? 'bg-neutral-950/75 backdrop-blur-xl border-b border-neutral-900/50 py-4 shadow-2xl' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo / Author Name */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center space-x-2.5 text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shadow-lg shadow-rose-950/40 group-hover:scale-105 duration-300 relative overflow-hidden">
              {/* Shining Sweep Animation Accent */}
              <div className="absolute inset-0 w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-25deg] animate-shine pointer-events-none" />
              
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-heart-glow" />
            </div>
            <div>
              <span className="font-serif tracking-[0.2em] font-medium text-lg uppercase bg-gradient-to-r from-neutral-50 via-neutral-100 to-neutral-400 bg-clip-text text-transparent group-hover:text-amber-400 transition-colors duration-300">
                {AUTHOR_NAME}
              </span>
              <span className="block text-[9px] uppercase tracking-[0.3em] text-neutral-500 mt-0.5">
                Official Website
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium tracking-wide text-neutral-400 hover:text-neutral-50 transition-colors duration-200 uppercase text-[12px] cursor-pointer relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onJoinClubClick}
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-neutral-100 hover:bg-amber-400 border border-neutral-100 hover:border-amber-400 shadow-md shadow-neutral-950/25 duration-300 transform active:scale-95 cursor-pointer flex items-center space-x-2 font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-950" />
              <span>Reader Club</span>
            </button>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-neutral-50 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] bg-neutral-950/98 backdrop-blur-2xl border-b border-neutral-900 z-40 lg:hidden p-8 flex flex-col space-y-6 shadow-3xl text-center"
          >
            {navLinks.map((link, idx) => (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-lg font-serif text-neutral-300 hover:text-amber-400 transition-colors uppercase py-2 cursor-pointer"
              >
                {link.label}
              </motion.button>
            ))}
            
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinClubClick();
              }}
              className="w-full py-4.5 rounded-xl text-sm font-semibold uppercase tracking-widest text-neutral-950 bg-amber-400 shadow-xl font-mono"
            >
              Join Reader Club
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
