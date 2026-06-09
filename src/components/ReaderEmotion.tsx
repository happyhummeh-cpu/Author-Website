/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Heart, Footprints, MessageSquareOff, Image, HeartHandshake, Compass, Sparkles } from 'lucide-react';
import { READER_EMOTIONS } from '../data';

// Map our vibes to corresponding custom luxury icons
const iconMap: Record<string, any> = {
  "Butterfly": Heart,
  "Sigh": Footprints,
  "Silence": MessageSquareOff,
  "Memory": Image,
  "Healing": HeartHandshake,
  "Destiny": Compass
};

export default function ReaderEmotion() {
  return (
    <section id="reader-emotions" className="py-24 relative overflow-hidden bg-neutral-950/20">
      
      {/* Visual Ambient highlights */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-950/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent font-medium">READER IMPACT</p>
          <h2 className="font-serif text-3xl md:text-5xl text-neutral-50 tracking-tight">Why Readers Remember These Stories</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-rose-600 mt-4 mx-auto rounded" />
          <p className="text-neutral-500 text-sm max-w-md mx-auto mt-2">
            Each novel is mathematically tuned to capture the simple, unforgettable, yet painful human moments.
          </p>
        </div>

        {/* Emotion Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {READER_EMOTIONS.map((emotion, idx) => {
            // Safe fallback lookup
            const IconComponent = iconMap[emotion.vibe] || Compass;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                key={emotion.id}
                className="group relative p-8 rounded-2xl bg-neutral-900/35 border border-neutral-900/60 hover:bg-neutral-900/80 hover:border-neutral-800 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                
                {/* Subtle soft gradient light that triggers on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-850 flex items-center justify-center text-rose-500 group-hover:text-amber-400 group-hover:border-neutral-700 transition-colors duration-300">
                    <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>

                  <h3 className="font-serif text-lg text-neutral-200 group-hover:text-neutral-50 transition-colors">
                    {emotion.title}
                  </h3>

                  <p className="text-xs md:text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed font-sans">
                    {emotion.description}
                  </p>
                </div>

                {/* Vibe / Mood tag */}
                <div className="flex items-center space-x-1.5 self-start pt-2 relative z-10">
                  <span className="w-1 h-1 rounded-full bg-amber-500" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500 group-hover:text-amber-400 duration-300">
                    {emotion.vibe}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
