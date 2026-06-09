/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { AUTHOR_NAME, AUTHOR_TAGLINE, SOCIAL_LINKS } from '../data';
import { Instagram, Youtube, Twitter, MessageCircle, Heart, ArrowUp, Send, Music, Volume2, VolumeX } from 'lucide-react';

interface FooterProps {
  onJoinClubClick: () => void;
}

export default function Footer({ onJoinClubClick }: FooterProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Lazy initialize & configure the audio element safely on action
  const toggleAmbientSound = () => {
    if (!audioRef.current) {
      setIsLoading(true);
      // Beautiful copyright-free, classical Gymnopédie No. 1 piano performance
      const audio = new Audio("https://upload.wikimedia.org/wikipedia/commons/6/6c/Gymnop%C3%A9die_No._1.mp3");
      audio.loop = true;
      audio.volume = 0.12; // Kept at a gentle 12% level to enhance mood without disrupting

      audio.addEventListener('canplaythrough', () => {
        setIsLoading(false);
      });

      audio.addEventListener('playing', () => {
        setIsPlaying(true);
        setIsLoading(false);
      });

      audio.addEventListener('pause', () => {
        setIsPlaying(false);
      });

      audio.addEventListener('error', () => {
        setIsLoading(false);
        setIsPlaying(false);
      });

      audioRef.current = audio;
    }

    const inst = audioRef.current;
    if (isPlaying) {
      inst.pause();
    } else {
      inst.play().catch((err) => {
        console.warn("Autoplay block protection triggered:", err);
        setIsPlaying(false);
        setIsLoading(false);
      });
    }
  };

  // Safe cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Icon picker helper mapping named strings
  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      case 'Youtube':
        return <Youtube className="w-4 h-4" />;
      case 'Twitter':
        return <Twitter className="w-4 h-4" />;
      case 'MessageCircle':
      default:
        return <MessageCircle className="w-4 h-4" />;
    }
  };

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18,
        duration: 0.8
      }
    }
  };

  return (
    <motion.footer 
      className="relative bg-neutral-950 border-t border-neutral-900/60 pt-20 pb-12 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      
      {/* Absolute positioning of top trigger button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <button
          onClick={scrollToTop}
          className="p-3.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all cursor-pointer shadow-xl transform hover:-translate-y-1 active:translate-y-0"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Top Grid */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          
          {/* Brand Col */}
          <motion.div variants={itemVariants} className="md:col-span-4 space-y-6 text-left">
            <div className="space-y-2">
              <span className="font-serif text-xl tracking-[0.2em] font-semibold text-neutral-50 uppercase block">
                {AUTHOR_NAME}
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-amber-500 font-mono font-bold block">
                Official Author brand
              </span>
            </div>

            <p className="font-serif italic text-neutral-400 text-sm md:text-base leading-relaxed pl-3 border-l-2 border-rose-500/30">
              “{AUTHOR_TAGLINE}”
            </p>

            {/* Newsletter VIP Club short Trigger */}
            <div className="pt-2">
              <button
                onClick={onJoinClubClick}
                className="group inline-flex items-center space-x-2 text-xs font-semibold text-neutral-300 hover:text-amber-400 transition-all cursor-pointer font-mono"
              >
                <span>Enter VIP Reader Club</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Ambient Audio Atmospheric Controller */}
            <div className="pt-4 border-t border-neutral-900/60 flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-[9px] font-mono tracking-[0.15em] text-neutral-500 uppercase font-bold">
                  AMBIENT SOUNDSCAPE
                </span>
                {isPlaying && (
                  <div className="flex items-end gap-[2px] h-2.5 w-3">
                    <span className="w-[1.5px] bg-amber-400 rounded-full animate-sound-1 origin-bottom" style={{ height: '100%' }} />
                    <span className="w-[1.5px] bg-rose-500 rounded-full animate-sound-2 origin-bottom" style={{ height: '100%' }} />
                    <span className="w-[1.5px] bg-indigo-400 rounded-full animate-sound-3 origin-bottom" style={{ height: '100%' }} />
                  </div>
                )}
              </div>
              
              <button
                onClick={toggleAmbientSound}
                disabled={isLoading}
                className="group flex items-center space-x-2.5 px-3.5 py-2.5 bg-neutral-900/30 hover:bg-neutral-900/80 border border-neutral-900 hover:border-neutral-800 rounded-xl transition-all duration-300 text-left w-fit cursor-pointer relative overflow-hidden"
              >
                {isLoading ? (
                  <>
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-neutral-800 border-t-amber-400 animate-spin" />
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                      Tuning Piano...
                    </span>
                  </>
                ) : isPlaying ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-amber-400 transition-colors uppercase tracking-wider font-semibold">
                      Gymnopédie No. 1 (Playing)
                    </span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-400 transition-colors" />
                    <span className="text-[10px] font-mono text-neutral-400 group-hover:text-neutral-200 transition-colors uppercase tracking-wider">
                      Gymnopédie No. 1 (Silent)
                    </span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Quick Links Sitemap */}
          <motion.div variants={itemVariants} className="md:col-span-3 text-left space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">INDEX PORTAL</h4>
            <div className="flex flex-col space-y-2.5">
              <button 
                onClick={() => scrollToSection('featured-novel')} 
                className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors cursor-pointer text-left uppercase tracking-wide"
              >
                Featured Release
              </button>
              <button 
                onClick={() => scrollToSection('story-universe')} 
                className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors cursor-pointer text-left uppercase tracking-wide"
              >
                The Story Universe
              </button>
              <button 
                onClick={() => scrollToSection('reader-emotions')} 
                className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors cursor-pointer text-left uppercase tracking-wide"
              >
                Emotional Resonances
              </button>
              <button 
                onClick={() => scrollToSection('quotes')} 
                className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors cursor-pointer text-left uppercase tracking-wide"
              >
                Author Quotes
              </button>
              <button 
                onClick={() => scrollToSection('author-identity')} 
                className="text-xs text-neutral-500 hover:text-neutral-200 transition-colors cursor-pointer text-left uppercase tracking-wide"
              >
                Brand Biography
              </button>
            </div>
          </motion.div>

          {/* Editorial Disclaimer / Scope statement */}
          <motion.div variants={itemVariants} className="md:col-span-5 text-left space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">ABOUT THIS PLATFORM</h4>
            <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-sans">
              This is the certified official home base for contemporary novelist <strong>{AUTHOR_NAME}</strong>. 
              Here, readers can preview upcoming novels, track release countdowns, access short excerpts, and sign up for update handshakes. 
              Full chapters and authentic distribution remain exclusively on Google Play Books, Apple Books, and certified sales networks.
            </p>
          </motion.div>

        </motion.div>

        {/* Separator beam */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-900 to-transparent" />

        {/* Bottom Bar: Copyrights, Social connections, details */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
          
          {/* Copyright description links */}
          <div className="text-center sm:text-left space-y-1.5 order-2 sm:order-1">
            <p className="text-[11px] font-mono text-neutral-600">
              © {currentYear} {AUTHOR_NAME}. All Rights Reserved worldwide.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-[10px] font-mono text-neutral-600">
              <span className="hover:text-neutral-400 cursor-not-allowed">PRIVACY PROTOCOL</span>
              <span>•</span>
              <span className="hover:text-neutral-400 cursor-not-allowed">DISTRIBUTION PROTOCOL</span>
              <span>•</span>
              <span className="hover:text-neutral-400 cursor-not-allowed">COOKIES</span>
            </div>
          </div>

          {/* Direct channels links panel */}
          <div className="flex flex-col items-center sm:items-end space-y-4 order-1 sm:order-2">
            <div className="flex items-center space-x-3.5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-400 hover:border-neutral-700 hover:bg-neutral-950 transition-all duration-300 transform active:scale-90"
                  aria-label={`Official channel on ${link.platform}`}
                >
                  {getSocialIcon(link.iconName)}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-1.5 text-[10px] font-mono text-neutral-500 uppercase tracking-widest pl-1">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
              <span>for readers who feel deeply</span>
            </div>
          </div>

        </motion.div>

      </div>
    </motion.footer>
  );
}
