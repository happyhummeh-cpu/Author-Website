/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Sparkles, Check, Heart, HelpCircle } from 'lucide-react';
import { AUTHOR_NAME } from '../data';

export default function ReaderClub() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    genre: 'Romantic Fiction'
  });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    // Simulate luxury slow loaders
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
    }, 1200);
  };

  return (
    <section id="reader-club" className="py-24 relative overflow-hidden">
      
      {/* Decorative colored glow backdrop behind subscription form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-rose-500/[0.04] filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="relative p-8 md:p-14 rounded-3xl bg-neutral-900/40 border border-neutral-900 backdrop-blur-xl overflow-hidden shadow-3xl">
          
          {/* Aesthetic tiny corner elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/10 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-500/10 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-500/10 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/10 rounded-br-xl" />

          {/* Core state switcher with sliding micro transitions */}
          <AnimatePresence mode="wait">
            {!isSubscribed ? (
              <motion.div
                key="subscribe-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                {/* Heading details */}
                <div className="text-center space-y-3.5 max-w-lg mx-auto">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mx-auto">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl text-neutral-50 tracking-tight">
                    Join the Reader Club
                  </h3>
                  <p className="text-xs md:text-sm text-[#8a8a8a] leading-relaxed">
                    Subscribe to receive direct letters from {AUTHOR_NAME}, advance novel chapters, exclusive cover previews, and release date announcements.
                  </p>
                </div>

                {/* Submission Form */}
                <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto font-mono text-xs">
                  
                  {/* Name field */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="club-name" className="text-[10px] tracking-widest uppercase text-neutral-400 font-bold block">
                      Name
                    </label>
                    <input
                      id="club-name"
                      type="text"
                      required
                      placeholder="e.g. Juliet Capulet"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-850 text-neutral-200 placeholder-neutral-700 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="club-email" className="text-[10px] tracking-widest uppercase text-neutral-400 font-bold block">
                      Email Address
                    </label>
                    <input
                      id="club-email"
                      type="email"
                      required
                      placeholder="e.g. juliet@verona.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-850 text-neutral-200 placeholder-neutral-700 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 duration-300"
                    />
                  </div>

                  {/* Favorite Genre selector */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="club-genre" className="text-[10px] tracking-widest uppercase text-neutral-400 font-bold block">
                      Favorite Genre Accent
                    </label>
                    <select
                      id="club-genre"
                      value={formData.genre}
                      onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-850 text-neutral-200 outline-none focus:border-amber-500/50 duration-300 appearance-none cursor-pointer"
                    >
                      <option value="Romantic Fiction">Romantic Fiction (Accidental Connections)</option>
                      <option value="Epistolary Romance">Epistolary (Letters & Unsent Thoughts)</option>
                      <option value="New Adult Fiction">New Adult (Distance, Destiny & Time)</option>
                      <option value="Contemporary Drama">Contemporary Drama (Poetry & Healing)</option>
                    </select>
                  </div>

                  {/* Interactive Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest text-neutral-950 bg-amber-400 hover:bg-amber-300 disabled:bg-neutral-800 disabled:text-neutral-500 duration-350 transform active:scale-98 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-neutral-950 border-t-transparent animate-spin" />
                          <span>Sealing Envelope...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-neutral-950" />
                          <span>Join Reader Club</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </motion.div>
            ) : (
              <motion.div
                key="subscription-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
                  <Check className="w-8 h-8" />
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded">
                    ENVELOPE SEALED SECURELY
                  </span>
                  <h3 className="font-serif text-2xl md:text-4xl text-neutral-50 tracking-tight">
                    Welcome to the Circle
                  </h3>
                  <p className="text-xs md:text-sm text-[#8a8a8a] max-w-md mx-auto leading-relaxed">
                    Thank you for joining the reader club. We have recorded your interest in <span className="text-amber-400 font-semibold">{formData.genre}</span>. Elena will transmit her first letter shortly. Keep an eye on your inbox (<span className="text-neutral-300">{formData.email}</span>).
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-1 text-rose-500">
                  <Heart className="w-4 h-4 fill-rose-500" />
                  <span className="font-serif text-[13px] italic">Made for readers who feel deeply.</span>
                </div>

                <button
                  onClick={() => setIsSubscribed(false)}
                  className="font-mono text-[10px] uppercase text-neutral-500 hover:text-neutral-300 underline underline-offset-4 cursor-pointer"
                >
                  Register another account
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
