/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Heart, Compass, EyeOff, Sparkles, Milestone, Wind } from 'lucide-react';
import { READER_EMOTIONS } from '../data';

export default function ReaderEmotions() {
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

  // Map vibe words to Lucide icons & styling
  const emotionIcons = [
    {
      vibe: "Butterfly",
      icon: Heart,
      color: "text-rose-400 bg-rose-500/10 border-rose-500/10",
      glowColor: "from-rose-500/10 via-transparent"
    },
    {
      vibe: "Sigh",
      icon: Milestone,
      color: "text-amber-400 bg-amber-400/10 border-amber-400/10",
      glowColor: "from-amber-400/10 via-transparent"
    },
    {
      vibe: "Silence",
      icon: EyeOff,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/10",
      glowColor: "from-indigo-500/10 via-transparent"
    },
    {
      vibe: "Warmth",
      icon: Wind,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/10",
      glowColor: "from-emerald-500/10 via-transparent"
    }
  ];

  return (
    <motion.section 
      id="reader-emotions" 
      className="py-24 relative overflow-hidden bg-neutral-950/20 border-t border-neutral-900/40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={containerVariants}
    >
      
      {/* Decorative center grid beam */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neutral-900 via-neutral-900/10 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-rose-400 font-semibold">THE RESONANCE</p>
          <span className="inline-block h-[1px] w-8 bg-amber-500/70" />
          <h2 className="font-serif text-3xl md:text-5xl text-neutral-50 tracking-tight leading-tight max-w-2xl mx-auto">
            Why Readers Remember Abhinav Kumar's Stories
          </h2>
          <p className="text-neutral-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            These novels are designed as sensory experiences. They don't just tell reports—they capture fleeting notes of memory, heartbreak, healing, and hope.
          </p>
        </motion.div>

        {/* Bento grid panels */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {READER_EMOTIONS.map((emotion, idx) => {
            const style = emotionIcons[idx % emotionIcons.length];
            const IconComponent = style?.icon || Sparkles;

            return (
              <motion.div
                key={emotion.id}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/70 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Micro spot halo */}
                <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-br ${style.glowColor} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  {/* Icon label badge */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${style.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500 font-bold">
                      {emotion.vibe.toUpperCase()} THEME
                    </span>
                    <h3 className="font-serif text-lg text-neutral-100 group-hover:text-amber-400 transition-colors duration-300 font-semibold">
                      {emotion.title}
                    </h3>
                    <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                      {emotion.description}
                    </p>
                  </div>
                </div>

                {/* Aesthetic index tag */}
                <div className="pt-6 mt-4 border-t border-neutral-900/60 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>SENSORY FOCUS</span>
                  <span className="font-semibold text-neutral-600">0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
}
