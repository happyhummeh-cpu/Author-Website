/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen, ShoppingBag, ArrowUpRight, Star } from 'lucide-react';
import { NOVELS } from '../data';
import { Novel } from '../types';
import CountdownTimer from './CountdownTimer';

interface NovelCatalogProps {
  onReadSampleClick: (novel: Novel) => void;
}

export default function NovelCatalog({ onReadSampleClick }: NovelCatalogProps) {
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
      id="story-universe" 
      className="py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Subheader */}
        <motion.div variants={itemVariants} className="text-center md:text-left mb-16 space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">THE PORTFOLIO</p>
          <h2 className="font-serif text-3xl md:text-5xl text-neutral-50 tracking-tight">The Story Universe</h2>
          <p className="text-sm text-neutral-500 font-sans max-w-lg leading-relaxed pt-1">
            An expanding library of emotional depths. Explore completed releases, read previews, or track real-time countdown clocks for upcoming sensory masterpieces.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-rose-600 mt-4 rounded" />
        </motion.div>

        {/* Scalable grid catalog list */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {NOVELS.map((novel) => {
            const isPublished = novel.status === 'Published';
            
            return (
              <motion.div
                key={novel.id}
                variants={itemVariants}
                className="relative flex flex-col sm:flex-row bg-neutral-900/35 border border-neutral-800/80 rounded-2xl overflow-hidden hover:bg-neutral-900/60 hover:border-neutral-700/80 duration-500 group"
              >
                {/* Book graphic art plate - styled as a real book cover */}
                <div 
                  className="sm:w-52 h-72 sm:h-auto flex-shrink-0 relative overflow-hidden flex flex-col justify-between items-center text-center p-6 border-b sm:border-b-0 sm:border-r border-neutral-800/80"
                  style={{ backgroundImage: novel.coverGradient }}
                >
                  {/* Subtle Spine fold overlay */}
                  <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/45 via-white/5 to-transparent pointer-events-none" />

                  {/* Top text details */}
                  <div className="space-y-1">
                    <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-amber-400">OFFICIAL EDITION</p>
                    <p className="font-serif text-[10px] tracking-widest text-neutral-300 uppercase leading-none">{novel.genre.split('/')[0]}</p>
                  </div>

                  {/* Center Star motif */}
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${novel.accentColor} rounded-full blur-lg opacity-25`} />
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500/10 stroke-[1]" />
                  </div>

                  {/* Title and signature */}
                  <div className="space-y-1.5 pb-2">
                    <h4 className="font-serif text-base leading-snug tracking-normal text-neutral-100 font-medium max-w-[140px] mx-auto line-clamp-2">
                      {novel.title}
                    </h4>
                    <div className="h-[1px] w-6 bg-neutral-800/50 mx-auto" />
                    <p className="font-mono text-[6.5px] tracking-[0.3em] text-neutral-400 uppercase">
                      A. KUMAR
                    </p>
                  </div>

                  {/* Top corner status bubble */}
                  <div className={`absolute top-4 right-4 text-[7px] font-mono font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded shadow ${
                    isPublished ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-900/90 border border-neutral-800 text-neutral-300'
                  }`}>
                    {novel.status}
                  </div>

                  {/* Glare effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>

                {/* Book specifications content area */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between space-y-6">
                  
                  {/* Metadata Header */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-amber-500">
                        {novel.genre}
                      </span>
                      <span>•</span>
                      <span className="text-[10px] font-mono text-neutral-500 tracking-[0.05em] uppercase">
                        {novel.releaseDate || 'Upcoming Release'}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg md:text-xl text-neutral-100 font-semibold group-hover:text-amber-400 transition-colors duration-300">
                      {novel.title}
                    </h3>

                    <blockquote className="font-serif italic text-xs text-neutral-300 border-l border-rose-500/40 pl-3 md:pl-4 py-0.5 leading-relaxed">
                      “{novel.hook}”
                    </blockquote>

                    <p className="text-neutral-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {novel.synopsis}
                    </p>
                  </div>

                  {/* Action items bottom drawer */}
                  <div className="space-y-4 pt-4 border-t border-neutral-900">
                    
                    {/* Render countdown countdown-clocks on Coming Soon novels */}
                    {!isPublished && novel.countdownTargetDate && (
                      <div className="p-3.5 bg-neutral-950/80 border border-neutral-900 rounded-xl">
                        <CountdownTimer targetDate={novel.countdownTargetDate} />
                      </div>
                    )}

                    {/* Book Link trigger CTAs */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <button
                        onClick={() => onReadSampleClick(novel)}
                        className="px-4 py-2.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-200 hover:text-white bg-neutral-950 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 duration-300 flex items-center space-x-1.5 cursor-pointer flex-1 justify-center"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-500" />
                        <span>Read Sample</span>
                      </button>

                      {isPublished ? (
                        <>
                          <a
                            href={novel.googlePlayBooksUrl}
                            className="px-4 py-2.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-950 bg-amber-400 hover:bg-amber-300 duration-300 flex items-center justify-center space-x-1 cursor-pointer flex-1 text-center"
                          >
                            <span>Google Play</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                          <a
                            href={novel.appleBooksUrl}
                            className="px-4 py-2.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-200 hover:text-white bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 duration-300 flex items-center justify-center space-x-1 cursor-pointer flex-1 text-center"
                          >
                            <span>Apple Books</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </>
                      ) : (
                        <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-neutral-500 py-2.5 px-4 bg-neutral-950 rounded-lg text-center font-bold border border-neutral-900/60 select-none flex-1">
                          Coming Soon to Stores
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
}
