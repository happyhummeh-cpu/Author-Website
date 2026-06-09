/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, ArrowRight, BookOpen, Star, ShieldCheck } from 'lucide-react';
import { AUTHOR_NAME, AUTHOR_TAGLINE, AUTHOR_BIO_SHORT, NOVELS } from '../data';

interface HeroProps {
  onExploreClick: () => void;
  onFeaturedClick: () => void;
}

export default function Hero({ onExploreClick, onFeaturedClick }: HeroProps) {
  const latestNovel = NOVELS[0]; // When Love Happened Accidentally

  return (
    <section className="relative min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Brand Strategy, Headline, Tagline */}
        <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
          
          {/* Trust badges */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.15em] bg-neutral-900/60 border border-neutral-800 text-amber-400 font-medium">
              <Sparkles className="w-3 h-3 animate-spin duration-3000" />
              <span>Official Author Website</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.15em] bg-neutral-900/60 border border-neutral-800 text-neutral-400">
              <Star className="w-3 h-3 text-rose-500 fill-rose-500" />
              <span>Romantic Fiction</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.15em] bg-neutral-900/60 border border-neutral-800 text-neutral-400">
              <ShieldCheck className="w-3 h-3 text-indigo-400" />
              <span>New Release Featured</span>
            </span>
          </motion.div>

          {/* Core Brand Headlines */}
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-amber-500 font-mono uppercase tracking-[0.25em] text-xs font-semibold"
            >
              INTRODUCING THE NOVELS OF
            </motion.h2>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-neutral-50"
            >
              {AUTHOR_NAME}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="font-serif text-xl md:text-3xl italic text-neutral-400 max-w-xl pl-1 border-l-2 border-rose-500/30 py-1"
            >
              “{AUTHOR_TAGLINE}”
            </motion.p>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl font-sans"
          >
            {AUTHOR_BIO_SHORT} Immerse your senses in stories filled with the scent of pine needles, accidental text messages, rain-drenched hill stations, and the sweet ache of silent devotion.
          </motion.p>

          {/* Call To Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <button
              onClick={onFeaturedClick}
              className="group px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-neutral-900 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-500/25 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 font-mono"
            >
              <BookOpen className="w-4 h-4 text-neutral-900 group-hover:scale-110 transition-transform" />
              <span>Buy Latest Novel</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-900 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreClick}
              className="px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-neutral-200 bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 font-mono"
            >
              <span>Explore Story Universe</span>
            </button>
          </motion.div>

        </div>

        {/* Right Side: Cinematic Floating Book Visual Mockup */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 sm:w-80 group cursor-pointer"
          >
            {/* Soft backdrop radial light matching book cover colors */}
            <div className="absolute inset-x-0 -inset-y-12 bg-gradient-to-tr from-rose-500/20 to-indigo-500/20 blur-[60px] opacity-80 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

            {/* volumetric 3D shadows */}
            <div className="absolute -bottom-6 left-12 right-12 h-8 bg-black/60 filter blur-[20px] rounded-full opacity-60" />

            {/* Book Body Container */}
            <motion.div
              animate={{
                y: [-12, 12, -12],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 transform group-hover:scale-[1.03] group-hover:rotate-1 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)]"
              style={{
                backgroundImage: latestNovel.coverGradient,
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {/* Gold luxury foil border lines on Book */}
              <div className="absolute inset-4 border border-amber-500/15 rounded-lg pointer-events-none" />
              <div className="absolute inset-5 border border-amber-500/5 rounded pointer-events-none" />

              {/* Spine shadow representation */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/50 via-white/5 to-transparent" />

              {/* Book content layout */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between items-center text-center">
                
                {/* Author text */}
                <div className="space-y-1.5 pt-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.4em] text-amber-500/80">NOVELIST</p>
                  <p className="font-serif text-sm uppercase tracking-widest text-neutral-200">{AUTHOR_NAME}</p>
                </div>

                {/* Central Motif */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  {/* Glowing star motifs */}
                  <div className="absolute inset-0 bg-rose-500/10 rounded-full blur-xl animate-pulse" />
                  <Star className="w-8 h-8 text-amber-500 fill-amber-500/20 stroke-[1.25]" />
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                  </div>
                </div>

                {/* Novel Book Title */}
                <div className="space-y-3 pb-4">
                  <h3 className="font-serif text-2xl leading-snug tracking-wide text-neutral-50 px-2 font-medium">
                    {latestNovel.title}
                  </h3>
                  <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
                  <p className="font-mono text-[8px] tracking-[0.25em] text-neutral-400 uppercase">
                    {latestNovel.genre}
                  </p>
                </div>

              </div>
              
              {/* Soft reflection glare across book surface */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none duration-1000 transform -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 1s' }} />

              {/* Status Ribbon Tag */}
              <div className="absolute top-4 right-4 bg-amber-500/90 text-[8px] font-mono font-bold text-neutral-950 uppercase tracking-[0.2em] px-2.5 py-1 rounded">
                {latestNovel.status}
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Elegant bottom section separator */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
    </section>
  );
}
