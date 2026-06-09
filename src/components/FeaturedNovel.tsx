/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen, Star, Sparkles, MessageSquareHeart, Compass, Eye, MapPin } from 'lucide-react';
import { NOVELS } from '../data';
import { Novel } from '../types';

interface FeaturedNovelProps {
  onReadSampleClick: (novel: Novel) => void;
}

export default function FeaturedNovel({ onReadSampleClick }: FeaturedNovelProps) {
  const novel = NOVELS[0]; // "When Love Happened Accidentally"

  const points = [
    {
      title: "The First Message",
      desc: "It began with an accidental keyboard string on an obscure online forum, cutting through midnight silence.",
      icon: MessageSquareHeart,
      bg: "bg-rose-500/10 text-rose-400"
    },
    {
      title: "An Unexpected Connection",
      desc: "Two lives connected by secrets written in the drafts of folders they thought were forgotten.",
      icon: Eye,
      bg: "bg-amber-400/10 text-amber-400"
    },
    {
      title: "Misty Darjeeling Hills",
      desc: "Where the pine needles smell sweet and the historic railway café houses memories that refuse to fade.",
      icon: MapPin,
      bg: "bg-indigo-500/10 text-indigo-400"
    },
    {
      title: "Silence & Destination",
      desc: "An exploration of physical miles, emotional letters, and the invisible threads that keep pulling them back.",
      icon: Compass,
      bg: "bg-emerald-500/10 text-emerald-400"
    }
  ];
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
      id="featured-novel" 
      className="py-24 relative overflow-hidden bg-neutral-950/40 border-y border-neutral-900/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={containerVariants}
    >
      
      {/* Dynamic Background Light Layer */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial header */}
        <motion.div variants={itemVariants} className="text-center md:text-left mb-16 space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">THE HEADLINER</p>
          <span className="inline-block px-3 py-1 rounded bg-rose-500/10 text-rose-400 text-[9px] font-mono uppercase tracking-widest font-bold">
            MASTERPIECE SINGLE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-neutral-50 tracking-tight mt-1.5">Featured Book Release</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-rose-600 mt-4 rounded" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Interactive book artwork container */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-[3/4.2] w-72 sm:w-80 group">
              {/* Backglow layer */}
              <div className="absolute inset-x-0 -inset-y-6 bg-gradient-to-b from-rose-500/15 through-purple-500/10 to-indigo-500/15 blur-[40px] pointer-events-none" />

              {/* Cover Plate */}
              <div 
                className="w-full h-full rounded-2xl p-8 flex flex-col justify-between items-center text-center shadow-3xl relative overflow-hidden border border-white/10"
                style={{ backgroundImage: novel.coverGradient }}
              >
                {/* Book Spine Overlay */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/50 via-white/5 to-transparent pointer-events-none" />

                {/* Cover Details */}
                <div className="space-y-2 pt-6">
                  <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-amber-400">NOVEL</span>
                  <p className="font-serif text-sm tracking-widest text-neutral-300 uppercase">{novel.genre}</p>
                </div>

                <div className="relative my-8">
                  <div className="w-14 h-14 rounded-full bg-neutral-950/40 border border-amber-500/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-amber-500 fill-amber-500/20" />
                  </div>
                  <div className="absolute top-0 right-0">
                    <Sparkles className="w-3 h-3 text-rose-400/90 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-3 pb-6">
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight leading-tight text-neutral-50 px-2 font-medium">
                    {novel.title}
                  </h3>
                  <div className="h-[1px] w-12 bg-neutral-800 mx-auto" />
                  <p className="font-mono text-[8px] tracking-[0.25em] text-rose-400 uppercase">
                    ABHINAV KUMAR
                  </p>
                </div>

                {/* Soft glaze filter */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>

              {/* Tiny tag label */}
              <div className="absolute top-4 left-4 bg-emerald-500/90 text-[8px] font-mono font-bold text-neutral-950 uppercase tracking-[0.2em] px-2.5 py-1 rounded">
                PUBLISHED
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial Synopsis and highlights */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold">
                “When Love Happened Accidentally”
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-neutral-100 tracking-tight leading-tight italic font-medium">
                {novel.hook}
              </h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-sans pt-1">
                {novel.synopsis}
              </p>
            </div>

            {/* Core emotional highlights column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-800/40 hover:border-neutral-800 transition-all">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`p-2 rounded-lg ${pt.bg}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif text-sm font-semibold text-neutral-200">{pt.title}</h4>
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed pl-1.5">
                      {pt.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Platform callouts */}
            <div className="pt-6 border-t border-neutral-900 flex flex-wrap gap-4 items-center justify-start">
              
              <button
                onClick={() => onReadSampleClick(novel)}
                className="px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-neutral-50 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 transition-all duration-300 flex items-center space-x-2 cursor-pointer transform active:scale-95 font-mono"
              >
                <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
                <span>Read Short Sample</span>
              </button>

              <a
                href={novel.googlePlayBooksUrl}
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all duration-300 flex items-center space-x-2 cursor-pointer transform active:scale-95 font-mono"
              >
                <span>Google Play Books</span>
              </a>

              <a
                href={novel.appleBooksUrl}
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-50 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex items-center space-x-2 cursor-pointer transform active:scale-95 font-mono"
              >
                <span>Apple Books</span>
              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}
