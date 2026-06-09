/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Feather, Heart, Milestone, Coffee, Clock, Sparkles } from 'lucide-react';
import { AUTHOR_NAME, AUTHOR_TAGLINE, AUTHOR_BIO_LONG } from '../data';

export default function AuthorIdentity() {
  const pillars = [
    {
      title: "Cinematic Atmosphere",
      description: "Describing worlds with photographic precision—misty mountain towns, midnight train stations, and rain-pattered coffee shops.",
      icon: Coffee,
      color: "text-amber-400"
    },
    {
      title: "Silent Connections",
      description: "Focusing on the beauty of unspoken words: messages unreceived, emails left raw in drafts, and look glances across crowded platforms.",
      icon: Feather,
      color: "text-rose-400"
    },
    {
      title: "The Logic of Fate",
      description: "Tracing why paths cross randomly, why some conversations never fade away, and how small actions turn into lifetime anchors.",
      icon: Milestone,
      color: "text-indigo-400"
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
      id="author-identity" 
      className="py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Subheader */}
        <motion.div variants={itemVariants} className="text-center md:text-left mb-16 space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">THE PROFILE</p>
          <h2 className="font-serif text-3xl md:text-5xl text-neutral-50 tracking-tight">Behind the Creative Pen</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-rose-600 mt-4 rounded" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Author Narrative Biography */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl italic text-neutral-300 leading-relaxed font-semibold">
              “I believe the most important things are usually written in the margins of notebooks we never show anyone.”
            </h3>

            {AUTHOR_BIO_LONG.map((paragraph, idx) => (
              <p key={idx} className="text-neutral-400 text-sm md:text-base leading-relaxed font-sans">
                {paragraph}
              </p>
            ))}

            <div className="pt-6 border-t border-neutral-900 flex items-center space-x-6">
              <div>
                <p className="font-serif text-xl tracking-wider text-neutral-50">{AUTHOR_NAME}</p>
                <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mt-0.5">Contemporary Novelist</p>
              </div>
              <div className="w-[1px] h-10 bg-neutral-800" />
              <div className="flex items-center space-x-1 text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-widest">Est. 2020</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key pillars of Abhinav's storytelling (Bento Graphic Style) */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">OUR STORYTELLING PHILOSOPHY</span>
              <h4 className="font-serif text-lg text-neutral-200">The Pillars of Abhinav's Universe</h4>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="group relative p-6 rounded-2xl bg-neutral-900/45 border border-neutral-800/60 hover:bg-neutral-900/85 hover:border-neutral-700/80 transition-all duration-300"
                  >
                    {/* Tiny background glow */}
                    <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 group-hover:scale-105 duration-300 ${pillar.color}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h5 className="font-serif text-base text-neutral-200 group-hover:text-neutral-100 font-semibold">
                          {pillar.title}
                        </h5>
                        <p className="text-neutral-500 group-hover:text-neutral-400 text-xs md:text-sm leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}
