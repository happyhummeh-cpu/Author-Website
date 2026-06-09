/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AuraBackground from './components/AuraBackground';
import Hero from './components/Hero';
import AuthorIdentity from './components/AuthorIdentity';
import FeaturedNovel from './components/FeaturedNovel';
import NovelCatalog from './components/NovelCatalog';
import ReaderEmotions from './components/ReaderEmotions';
import Quotes from './components/Quotes';
import PlatformSales from './components/PlatformSales';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import NovelSampleModal from './components/NovelSampleModal';
import { Novel } from './types';
import { AUTHOR_NAME, AUTHOR_TAGLINE, NOVELS } from './data';

export default function App() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [selectedNovel, setSelectedNovel] = useState<Novel | null>(null);

  // Dynamic Scroll Tracking for Navbar bar percentage
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollPercent((window.scrollY / scrollHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Structural SEO Injection: JSON-LD Schemas for Author and Book
  useEffect(() => {
    const authorSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": AUTHOR_NAME,
      "jobTitle": "Novelist",
      "description": AUTHOR_TAGLINE,
      "url": window.location.origin,
      "sameAs": [
        "https://instagram.com",
        "https://youtube.com",
        "https://x.com"
      ]
    };

    const bookSchema = {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "When Love Happened Accidentally",
      "author": {
        "@type": "Person",
        "name": AUTHOR_NAME
      },
      "genre": "Romantic Fiction / Young Adult",
      "description": "It started with a simple Hi/Hlo… and became a memory neither of them could forget. A story about destiny and letters never sent.",
      "bookFormat": "https://schema.org/EBook",
      "publisher": {
        "@type": "Organization",
        "name": "Abhinav Kumar Studios"
      }
    };

    const authorScript = document.createElement('script');
    authorScript.type = 'application/ld+json';
    authorScript.text = JSON.stringify(authorSchema);
    document.head.appendChild(authorScript);

    const bookScript = document.createElement('script');
    bookScript.type = 'application/ld+json';
    bookScript.text = JSON.stringify(bookSchema);
    document.head.appendChild(bookScript);

    return () => {
      document.head.removeChild(authorScript);
      document.head.removeChild(bookScript);
    };
  }, []);

  // CTA triggers for smooth scrolling
  const scrollToReaderClub = () => {
    const element = document.getElementById('reader-club');
    if (element) {
      const offset = 80;
      const pos = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const scrollToStoryUniverse = () => {
    const element = document.getElementById('story-universe');
    if (element) {
      const offset = 80;
      const pos = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const scrollToFeatured = () => {
    const element = document.getElementById('featured-novel');
    if (element) {
      const offset = 80;
      const pos = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-neutral-100 selection:bg-rose-500/30 selection:text-neutral-50 antialiased overflow-x-hidden font-sans">
      
      {/* 1. Immersive Atmospheric Backdrop (stars + auroral light spots) */}
      <AuraBackground />

      {/* 2. Top-level sticky dynamic Navbar */}
      <Navbar onJoinClubClick={scrollToReaderClub} scrollPercent={scrollPercent} />

      {/* Main Structural Chapters */}
      <main className="relative">
        
        {/* 3. Hero Visual Section */}
        <Hero 
          onExploreClick={scrollToStoryUniverse} 
          onFeaturedClick={scrollToFeatured} 
        />

        {/* 4. Author Branding Profile Section */}
        <AuthorIdentity />

        {/* 5. Highlight Section for Priority Novel: "When Love Happened Accidentally" */}
        <FeaturedNovel onReadSampleClick={(novel) => setSelectedNovel(novel)} />

        {/* 6. Extensive Catalog: "The Story Universe" Grid */}
        <NovelCatalog onReadSampleClick={(novel) => setSelectedNovel(novel)} />

        {/* 7. Poetic Quotes slideshow marquee */}
        <Quotes />

        {/* 8. Sensory theme cards: "Why Readers Remember" */}
        <ReaderEmotions />

        {/* 9. Sales Distribution Platforms Section */}
        <PlatformSales />

        {/* 10. Front-end Readers Club subscription desk */}
        <Newsletter />

      </main>

      {/* 11. Full-service Sitemap Footer */}
      <Footer onJoinClubClick={scrollToReaderClub} />

      {/* 12. Slide drawer overlay reading excerpt modal */}
      <NovelSampleModal 
        novel={selectedNovel} 
        onClose={() => setSelectedNovel(null)} 
      />

    </div>
  );
}
