/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, Quote, Calendar, ArrowUpRight } from 'lucide-react';
import { Novel } from '../types';

interface NovelSampleModalProps {
  novel: Novel | null;
  onClose: () => void;
}

export default function NovelSampleModal({ novel, onClose }: NovelSampleModalProps) {
  if (!novel) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
        {/* Backdrop overlay filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Drawer content */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: "spring", damping: 25, stiffness: 180 }}
          className="relative w-full max-w-xl md:max-w-2xl h-full bg-neutral-900 border-l border-neutral-800/80 shadow-2xl flex flex-col pt-6 z-10"
        >
          {/* Header section with cover visualization preview */}
          <div className="px-6 md:px-8 pb-4 flex items-center justify-between border-b border-neutral-800/60">
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-14 rounded shadow-lg overflow-hidden flex-shrink-0"
                style={{ background: novel.coverGradient }}
              />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold block mb-0.5">
                  EXCLUSIVE EXCERPT
                </span>
                <h3 className="font-serif text-lg text-neutral-100 line-clamp-1 font-semibold">{novel.title}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-neutral-100 transition-all cursor-pointer"
              aria-label="Close reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Reading Canvas area */}
          <div className="flex-1 overflow-y-auto px-6 md:px-12 py-10 space-y-8 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
            {/* Novel Info Banner */}
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.1em] bg-neutral-950 text-neutral-400 border border-neutral-800">
                {novel.genre}
              </span>
              
              <div className="space-y-2">
                <blockquote className="font-serif italic text-lg text-neutral-200 border-l-2 border-rose-500 pl-4 py-1">
                  “{novel.hook}”
                </blockquote>
              </div>
            </div>

            {/* Separator */}
            <div className="h-[1px] bg-gradient-to-r from-neutral-800 via-transparent to-neutral-800" />

            {/* Excerpt Paragraphs */}
            <div className="space-y-6 font-serif text-neutral-300 md:text-lg leading-relaxed select-none antialiased">
              {novel.sampleExcerpt && novel.sampleExcerpt.length > 0 ? (
                novel.sampleExcerpt.map((paragraph, index) => {
                  const isHeader = paragraph.startsWith('CHAPTER') || paragraph.startsWith('PROLOGUE') || paragraph.startsWith('INTRODUCTION');
                  if (isHeader) {
                    return (
                      <h4 key={index} className="font-mono text-xs uppercase tracking-[0.3em] text-amber-500 pt-4 font-bold text-center">
                        {paragraph}
                      </h4>
                    );
                  }
                  return (
                    <p key={index} className="indent-4 text-justify">
                      {paragraph}
                    </p>
                  );
                })
              ) : (
                <p className="text-center font-mono text-sm text-neutral-500">
                  Sample text preparing to load...
                </p>
              )}
            </div>

            {/* Cliffhanger Call-out */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800/80 space-y-4 text-center mt-12">
              <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 mx-auto">
                <Quote className="w-4 h-4" />
              </div>
              <div className="space-y-1.5">
                <h5 className="font-serif text-base text-neutral-200 font-semibold">Will their worlds collide?</h5>
                <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Protecting copyright limits, this is only a brief sample of the novel.
                  To experience the full journey, read on Google Play, Apple Books, or Amazon Kindle.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 justify-center pt-2">
                <a
                  href={novel.googlePlayBooksUrl}
                  onClick={(e) => { if (novel.status === 'Coming Soon') e.preventDefault(); }}
                  className={`inline-flex items-center space-x-1 px-4 py-2 rounded-xl text-[10px] font-mono uppercase tracking-widest ${
                    novel.status === 'Coming Soon'
                      ? 'bg-neutral-900 text-neutral-500 border border-neutral-800 cursor-not-allowed'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  <span>Google Play</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={novel.appleBooksUrl}
                  onClick={(e) => { if (novel.status === 'Coming Soon') e.preventDefault(); }}
                  className={`inline-flex items-center space-x-1 px-4 py-2 rounded-xl text-[10px] font-mono uppercase tracking-widest ${
                    novel.status === 'Coming Soon'
                      ? 'bg-neutral-900 text-neutral-500 border border-neutral-800 cursor-not-allowed'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  <span>Apple Books</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer of modal */}
          <div className="p-6 bg-neutral-950/80 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>© {new Date().getFullYear()} Official Author Website</span>
            <span className="flex items-center space-x-1">
              <BookOpen className="w-3 h-3 text-amber-500" />
              <span>Full text on official stores</span>
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
