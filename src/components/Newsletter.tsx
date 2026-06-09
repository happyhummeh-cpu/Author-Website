/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle, Sparkles, BookOpen } from 'lucide-react';

export default function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteGenre, setFavoriteGenre] = useState('Romantic Fiction');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);

    // Simulate luxury networking dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setName('');
      setEmail('');
    }, 1200);
  };

  return (
    <motion.section 
      id="reader-club" 
      className="py-24 relative overflow-hidden bg-neutral-950/40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={containerVariants}
    >
      
      {/* Background visual circular aurora */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Main Box structured with thin gold overlay */}
        <motion.div variants={itemVariants} className="relative p-8 md:p-14 bg-neutral-900/40 border border-neutral-800/80 rounded-3xl overflow-hidden backdrop-blur-xl">
          
          {/* Inner decor lines */}
          <div className="absolute inset-4 border border-white/[0.01] rounded-2xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="subscription-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                
                {/* Left side explanation */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-amber-500/10 text-amber-400 text-[9px] font-mono uppercase tracking-[0.15em] font-medium border border-amber-500/10">
                    <Sparkles className="w-3 h-3 animate-pulse" />
                    <span>THE INNER PORTAL</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl md:text-3xl text-neutral-100 font-semibold leading-tight">
                    Join the Official Reader Club
                  </h3>
                  
                  <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-sans">
                    Members receive early cinematic chapter samples, invitations to online roundtables, exclusive quotes, and notification updates before public releases.
                  </p>
                </div>

                {/* Right side form */}
                <form 
                  onSubmit={handleSubmit}
                  className="lg:col-span-7 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="newsletter-name" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block font-bold">
                        Full Name
                      </label>
                      <input
                        id="newsletter-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Abhinav"
                        className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 duration-300 font-sans"
                      />
                    </div>

                    {/* Genre selector */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="newsletter-genre" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block font-bold">
                        Vibe Choice
                      </label>
                      <select
                        id="newsletter-genre"
                        value={favoriteGenre}
                        onChange={(e) => setFavoriteGenre(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-neutral-300 focus:outline-none focus:border-amber-500/60 duration-300 font-sans cursor-pointer"
                      >
                        <option value="Romantic Fiction">Romantic Fiction</option>
                        <option value="New Adult">New Adult</option>
                        <option value="Epistolary Novels">Epistolary / Letters</option>
                        <option value="Young Adult Drama">Young Adult Drama</option>
                      </select>
                    </div>
                  </div>

                  {/* Email input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="newsletter-email" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block font-bold">
                      Email Address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="abhinav@storyuniverse.com"
                      className="w-full bg-neutral-950 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-700 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 duration-300 font-sans"
                    />
                  </div>

                  {/* Submit Button trigger */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-98 transformation duration-300 cursor-pointer flex items-center justify-center space-x-2 font-mono shadow-lg shadow-amber-500/10"
                    >
                      {loading ? (
                        <span className="text-[9px] font-mono animate-pulse uppercase">TRANSMITTING CREDENTIALS...</span>
                      ) : (
                        <>
                          <Mail className="w-3.5 h-3.5" />
                          <span>Join Reader Club</span>
                          <Send className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

              </motion.div>
            ) : (
              <motion.div
                key="subscription-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8 space-y-6 max-w-lg mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-400 font-bold block">
                    CONNECTION HANDSHAKE SECURED
                  </span>
                  
                  <h3 className="font-serif text-2xl text-neutral-100 font-medium">
                    Thank you for joining the reader club.
                  </h3>
                  
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-sm mx-auto font-sans">
                    We have successfully logged your affinity for <strong className="text-amber-400">{favoriteGenre}</strong>. You'll hear from Abhinav Kumar's studio shortly when new chapters or dates lock.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-all cursor-pointer"
                  >
                    Register Another Account
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </motion.section>
  );
}
