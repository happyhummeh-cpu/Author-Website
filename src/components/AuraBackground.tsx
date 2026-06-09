/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';

export default function AuraBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect mobile touch capability or viewport width to avoid cursor tracker on mobile
    const checkViewportAndTouch = () => {
      const mobileStatus = 
        window.innerWidth < 1024 || 
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobileStatus);
    };

    checkViewportAndTouch();
    window.addEventListener('resize', checkViewportAndTouch);

    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', checkViewportAndTouch);
      };
    }

    return () => {
      window.removeEventListener('resize', checkViewportAndTouch);
    };
  }, [isMobile]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-neutral-950 pointer-events-none">
      {/* Dynamic Aurora Glow Balls */}
      <div 
        className="absolute w-[40rem] h-[40rem] rounded-full filter blur-[120px] opacity-20 bg-rose-500 animate-pulse duration-[8000ms] -top-40 -left-20"
      />
      <div 
        className="absolute w-[50rem] h-[50rem] rounded-full filter blur-[140px] opacity-15 bg-indigo-600 animate-pulse duration-[12000ms] top-1/3 -right-40"
      />
      <div 
        className="absolute w-[45rem] h-[45rem] rounded-full filter blur-[130px] opacity-10 bg-amber-600 animate-pulse duration-[10000ms] bottom-[-200px] left-1/4"
      />

      {/* Cinematic subtle stars/particles backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Cursor position tracking light (Desktop only) */}
      {!isMobile && (
        <div
          className="absolute w-[400px] h-[400px] rounded-full filter blur-[80px] opacity-[0.12] bg-indigo-400 pointer-events-none transition-transform duration-300 ease-out"
          style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      )}

      {/* Dark luxury vignetting layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(10,10,10,0.8)_85%)]" />
    </div>
  );
}
