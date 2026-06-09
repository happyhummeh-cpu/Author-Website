/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Novel {
  id: string;
  title: string;
  genre: string;
  hook: string;
  synopsis: string;
  status: 'Published' | 'Coming Soon';
  releaseDate?: string;
  countdownTargetDate?: string; // Optional target ISO date string for countdown timers
  googlePlayBooksUrl: string;
  appleBooksUrl: string;
  amazonKindleUrl?: string;
  coverGradient: string; // Dynamic CSS gradient representing book cover
  accentColor: string; // Tailwind glow color class
  sampleExcerpt: string[]; // List of paragraphs for sample read
}

export interface Quote {
  id: string;
  text: string;
  source: string;
}

export interface ReaderEmotion {
  id: string;
  title: string;
  description: string;
  vibe: string; // Emotional keyword
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}
