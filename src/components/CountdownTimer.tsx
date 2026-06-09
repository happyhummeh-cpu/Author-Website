/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CountdownTimerProps {
  targetDate: string; // ISO string or parsable date
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft | null => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference <= 0) {
        setIsCompleted(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    // Initialize
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="flex justify-center items-center h-16">
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 animate-pulse">
          Calculating release clock...
        </span>
      </div>
    );
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hrs', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-bold">
          {isCompleted ? 'RELEASED / NOW LIVE' : 'PRE-RELEASE COUNTDOWN'}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2.5">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="relative px-2 py-3 rounded-xl bg-neutral-950/90 border border-neutral-900/60 overflow-hidden flex flex-col items-center justify-center group"
          >
            {/* Subtle inner grid glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
            
            {/* Animate-on-change value container using Framer Motion */}
            <div className="relative h-8 flex items-center justify-center overflow-hidden w-full">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={unit.value}
                  initial={{ y: 22, opacity: 0, filter: 'blur(3px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -22, opacity: 0, filter: 'blur(3px)' }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 180, 
                    damping: 18, 
                    mass: 0.8 
                  }}
                  className="font-mono text-xl font-bold tracking-tight text-neutral-100 block absolute"
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
            </div>

            <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 mt-1.5 block">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
