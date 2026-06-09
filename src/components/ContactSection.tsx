/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Youtube, Twitter, Mail, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';
import { SOCIAL_LINKS, AUTHOR_NAME } from '../data';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailVal = "hello@abhinavkumar.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailVal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialIcons: Record<string, any> = {
    "Instagram": Instagram,
    "Youtube": Youtube,
    "Twitter": Twitter,
    "MessageCircle": MessageSquare
  };

  return (
    <section id="contact-section" className="py-24 relative overflow-hidden bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative Contact Proposal */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold block">TRANSMISSIONS</span>
            <h2 className="font-serif text-3xl md:text-5xl text-neutral-50 tracking-tight">Stay Connected</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-rose-600 mt-4 rounded" />
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-sans">
              For general inquiries, school book clubs, movie licensing rights, or reading circle appearances, get in touch with Abhinav or his management through our direct channels.
            </p>

            {/* Premium Copy Email Widget */}
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-900 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center space-x-3 text-neutral-300">
                <Mail className="w-4 h-4 text-rose-500" />
                <span>{emailVal}</span>
              </div>
              
              <button
                onClick={handleCopyEmail}
                className="p-2 border border-neutral-800 rounded-lg hover:border-neutral-600 bg-neutral-950 hover:bg-neutral-900 text-neutral-400 hover:text-white duration-200 cursor-pointer flex items-center space-x-1.5"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px] text-emerald-450 uppercase font-bold tracking-wider">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Block: Dynamic Social Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOCIAL_LINKS.map((social) => {
              const IconComp = socialIcons[social.iconName] || MessageSquare;
              return (
                <a
                  href={social.url}
                  key={social.platform}
                  target="_blank"
                  rel="noopener noreferrer referrerPolicy"
                  className="group relative p-6 rounded-2xl bg-neutral-950/45 border border-neutral-900/80 hover:bg-neutral-900/30 hover:border-neutral-800 transition-all duration-300 flex items-center justify-between"
                >
                  {/* Hover background gradient shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="flex items-center space-x-4 relative z-10">
                    <div className="p-3 bg-neutral-950 border border-neutral-850 rounded-xl text-neutral-400 group-hover:text-amber-400 group-hover:border-neutral-700 transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-neutral-200 group-hover:text-neutral-100">{social.platform}</h4>
                      <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-0.5">@{AUTHOR_NAME.toLowerCase().replace(/\s/g, '')}</p>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 relative z-10" />

                </a>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
