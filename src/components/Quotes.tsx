/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote as QuoteIcon, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { QUOTES } from '../data';

export default function Quotes() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto scroll quotes every 9 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % QUOTES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % QUOTES.length);
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
    hidden: { opacity: 0, y: 40 },
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
    <motion.section 
      id="quotes" 
      className="py-24 relative overflow-hidden bg-neutral-950/60 border-y border-neutral-900/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={containerVariants}
    >
      
      {/* Decorative ambient background spotlight */}
      <div className="absolute inset-x-0 -top-40 h-[300px] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Floating graphic element */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <div className="inline-flex p-3 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-4 animate-radial-glow">
            <QuoteIcon className="w-5 h-5 fill-rose-500/10" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-2">CINEMATIC FRAGMENTS</p>
          <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
            Lines that stay written in the dark
          </span>
        </motion.div>

        {/* Dynamic sliding viewport for quotes */}
        <motion.div variants={itemVariants} className="relative min-h-[220px] md:min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center space-y-6"
            >
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-neutral-100 font-medium leading-relaxed max-w-4xl mx-auto italic px-4">
                “{QUOTES[activeIdx].text}”
              </h3>
              
              <div className="flex items-center justify-center space-x-2">
                <span className="w-1.5 h-[1px] bg-neutral-800" />
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-bold">
                  {QUOTES[activeIdx].source}
                </span>
                <span className="w-1.5 h-[1px] bg-neutral-800" />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Carousel pagination bullets + triggers */}
        <motion.div variants={itemVariants} className="flex items-center justify-between pt-12 border-t border-neutral-900/60 mt-10">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full border border-neutral-800 text-neutral-400 hover:text-neutral-50 hover:bg-neutral-900/50 hover:border-neutral-700 transition-all cursor-pointer transform active:scale-90"
            aria-label="Previous quote"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Dots progression indications */}
          <div className="flex items-center space-x-2.5">
            {QUOTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIdx === idx ? 'w-6 bg-amber-500' : 'w-1.5 bg-neutral-800 hover:bg-neutral-700'
                }`}
                aria-label={`Go to quote ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-full border border-neutral-800 text-neutral-400 hover:text-neutral-50 hover:bg-neutral-900/50 hover:border-neutral-700 transition-all cursor-pointer transform active:scale-90"
            aria-label="Next quote"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>

      {/* Atmospheric flowing horizontal scroll text ticker (marquee) */}
      <div className="w-full overflow-hidden whitespace-nowrap bg-neutral-950 py-3 border-y border-neutral-900/40 relative mt-16 select-none opacity-50">
        <div className="inline-block animate-marquee tracking-[0.3em] font-mono text-[9px] uppercase text-neutral-400">
          WHEN LOVE HAPPENED ACCIDENTALLY • LETTERS I NEVER SENT • THE LAST MESSAGE • AFTER THE RAIN • STORIES THAT STAY AFTER THE LAST PAGE • 
        </div>
        <div className="inline-block animate-marquee tracking-[0.3em] font-mono text-[9px] uppercase text-neutral-400 pl-4">
          WHEN LOVE HAPPENED ACCIDENTALLY • LETTERS I NEVER SENT • THE LAST MESSAGE • AFTER THE RAIN • STORIES THAT STAY AFTER THE LAST PAGE • 
        </div>
      </div>
    </motion.section>
  );
}
