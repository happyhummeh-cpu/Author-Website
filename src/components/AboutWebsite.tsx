/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, Sparkles, BookOpen, AlertTriangle } from 'lucide-react';
import { AUTHOR_NAME } from '../data';

export default function AboutWebsite() {
  const values = [
    {
      title: "Authentic Distribution",
      desc: "All purchases redirect strictly to official platforms. No direct payment processing occurs on this site, ensuring safety and compliance with global publishing channels.",
      icon: Shield
    },
    {
      title: "Previews & Insights",
      desc: "We believe in the power of a hook. Each novel listed here provides carefully selected chapters and excerpt cards so readers can sample the style before proceeding to checkout.",
      icon: BookOpen
    },
    {
      title: "Direct Reader Loop",
      desc: "This platform is a direct communication hub. The reader club receives newsletters and drafts authored directly by Abhinav Kumar without algorithm manipulation or noise.",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-neutral-950/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="p-8 md:p-12 rounded-3xl bg-neutral-900/20 border border-neutral-900/60">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="font-mono text-xs text-rose-500 font-bold uppercase tracking-widest block">PORTAL PURPOSE</span>
              <h3 className="font-serif text-2xl md:text-4xl text-neutral-50 tracking-tight">About This Space</h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-sans">
                This is the official digital parlor of novelist {AUTHOR_NAME}. Our purpose is to catalog Abhinav's continuous story expansion, publish emotional hooks, host reader samples, and direct visitors straight to their favorite bookstore.
              </p>
              
              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 flex items-start space-x-3 text-left">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#a3a3a3] leading-relaxed font-sans">
                  <strong>Notice regarding novel files:</strong> All stories remain copyrighted under Abhinav Kumar. Complete editions of these novels are not displayed or downloadable from this server. Direct access is exclusively formatted and sold on official store mirrors.
                </p>
              </div>
            </div>

            {/* Right Showcase Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-1 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div 
                    key={i}
                    className="flex items-start space-x-4 p-5 rounded-2xl bg-neutral-950/40 border border-neutral-900/50"
                  >
                    <div className="p-2.5 rounded-lg bg-neutral-900 text-amber-400 border border-neutral-850">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1 text-left flex-1">
                      <h4 className="font-serif text-sm text-neutral-200 font-semibold">{v.title}</h4>
                      <p className="text-xs text-neutral-500 leading-relaxed font-sans">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
