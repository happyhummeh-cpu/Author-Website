/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Play, Book, Store, ArrowUpRight } from 'lucide-react';

export default function PlatformSales() {
  const stores = [
    {
      name: "Google Play Books",
      description: "Experience reflowable text, real-time sync across devices, night modes, and official reader updates instantly.",
      badge: "RECOMMENDED",
      icon: Play,
      url: "#",
      color: "hover:border-amber-500/30",
      accent: "text-amber-400 bg-amber-400/10"
    },
    {
      name: "Apple Books",
      description: "Optimized exclusively for iOS, iPadOS, and macOS. Deep cinematic integration, page scroll physics, and dark highlights.",
      badge: "PREMIUM EXPERIENCE",
      icon: Book,
      url: "#",
      color: "hover:border-rose-500/30",
      accent: "text-rose-400 bg-rose-500/10"
    },
    {
      name: "Amazon Kindle Store",
      description: "Read on your dedicated Kindle e-readers, tablets, or Kindle browser configurations anywhere in the world.",
      badge: "COMING SOON",
      icon: Store,
      url: "#",
      color: "hover:border-blue-500/30",
      accent: "text-blue-400 bg-blue-400/10"
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
      id="platform-sales" 
      className="py-24 relative overflow-hidden bg-neutral-950/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={containerVariants}
    >
      
      {/* Decorative vertical line dividers */}
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-neutral-900/10 pointer-events-none" />
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-neutral-900/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <motion.div variants={itemVariants} className="text-center mb-16 space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">DISTRIBUTION NETWORKS</p>
          <span className="inline-block h-[1px] w-8 bg-neutral-800" />
          <h2 className="font-serif text-3xl md:text-5xl text-neutral-50 tracking-tight leading-tight max-w-2xl mx-auto">
            Choose Your Favorite Reading Platform
          </h2>
          <p className="text-neutral-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            All buy actions safely forward readers to official storefronts to secure, download, and review authentic editions.
          </p>
        </motion.div>

        {/* Store Grid panels */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 p-1">
          {stores.map((store, index) => {
            const Icon = store.icon;
            return (
              <motion.div
                key={store.name}
                variants={itemVariants}
                className={`relative p-8 rounded-2xl bg-neutral-900/35 border border-neutral-800/80 transition-all duration-300 flex flex-col justify-between ${store.color} group`}
              >
                <div className="space-y-6">
                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-mono font-bold uppercase tracking-[0.2em] bg-neutral-950 text-neutral-400 px-2.5 py-1 rounded">
                      {store.badge}
                    </span>
                    <div className={`p-2.5 rounded-xl border border-neutral-800/40 ${store.accent} group-hover:scale-105 duration-300`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-semibold text-neutral-100 group-hover:text-amber-400 transition-colors duration-300">
                      {store.name}
                    </h3>
                    <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                      {store.description}
                    </p>
                  </div>
                </div>

                {/* Buy Button anchor link */}
                <div className="pt-8 mt-6 border-t border-neutral-900/60">
                  <a
                    href={store.url}
                    onClick={(e) => { if(store.badge === "COMING SOON") e.preventDefault(); }}
                    className={`w-full py-3 px-4 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest flex items-center justify-center space-x-1.5 transition-all duration-300 ${
                      store.badge === "COMING SOON"
                        ? 'bg-neutral-950 border border-neutral-900/60 text-neutral-600 cursor-not-allowed'
                        : 'bg-neutral-950 border border-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-900 hover:border-neutral-700'
                    }`}
                  >
                    <span>{store.badge === "COMING SOON" ? "EXCLUSIVITY COMING" : "EXPLORE STORE"}</span>
                    {store.badge !== "COMING SOON" && <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
}
