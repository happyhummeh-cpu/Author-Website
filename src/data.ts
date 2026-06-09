/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Novel, Quote, ReaderEmotion, SocialLink } from './types';

// ============================================================================
// CONFIGURATION CARD: EDIT THESE TO PERSONALIZE YOUR OFFICIAL WEBSITE
// ============================================================================

/**
 * 1. AUTHOR MAIN PROFILE
 * Customize your brand name, tagline, and official biography.
 */
export const AUTHOR_NAME = "Abhinav Kumar";
export const AUTHOR_TAGLINE = "Stories that stay after the last page.";
export const AUTHOR_BIO_SHORT = "Official home of modern romantic fiction, sweet heartbreaks, and cinematic destiny.";
export const AUTHOR_BIO_LONG = [
  "Abhinav Kumar is an international contemporary novelist who doesn't just write books—he designs emotional, cinematic landscapes. Known for his delicate prose and high-contrast emotional tension, Abhinav's stories focus on the beauty of silent glances, the heavy weight of letters never sent, and the silent collisions of fate.",
  "Drawing inspiration from quiet coffee shops, rainfall on glass, train stations at midnight, and long-lost letters, his stories feel like indie films that live in your head long after you finish the final line. He currently writes from his studio, crafting worlds where distance is just another character, and love always happens when it's least expected."
];

/**
 * 2. NOVELS CATALOG
 * Edit this array to add, modify, or reorder your novels.
 * The coverGradient is a standard CSS linear gradient. Feel free to use rich colors!
 */
export const NOVELS: Novel[] = [
  {
    id: "when-love-happened-accidentally",
    title: "When Love Happened Accidentally",
    genre: "Romantic Fiction / New Adult",
    hook: "It started with a simple Hi/Hlo… and became a memory neither of them could forget.",
    synopsis: "A cinematic romantic story about two hearts who meet unexpectedly in a digital sprawl. What begins as brief, accidental conversations quickly deepens into high-contrast devotion, shared secrets, distance, and birthday promises. Set against the misty backdrop of Darjeeling and the modern city's isolating speed, it examines the fragile threads that connect us, the quiet gaps between messages, and the destiny that holds them together even when miles apart.",
    status: "Published",
    releaseDate: "Published Autumn 2025",
    googlePlayBooksUrl: "#", // Replace with your actual Google Play Books book link
    appleBooksUrl: "#", // Replace with your actual Apple Books book link
    amazonKindleUrl: "#", // Replace with your actual Amazon Kindle link
    coverGradient: "linear-gradient(135deg, #1e1e38 0%, #3b1c32 50%, #4c111a 100%)", // Rich dark purple and deep rose pink
    accentColor: "from-rose-500 to-indigo-500",
    sampleExcerpt: [
      "CHAPTER ONE: THE INITIAL PING",
      "The message arrived at 11:42 PM. Rain was hammering against the pane of the bedroom window, drowning out the low hum of the desktop tower. She didn't expect anyone to write. It was an unrecognized handle, a string of letters that looked like an accidental keyboard swipe.",
      "“Hi. I know this is random, but did you ever find that notebook you lost yesterday near the railway station café?”",
      "She stared at the screen. The cafe. The rain. Yes, her dark moleskin notebook was gone, detailing years of untold letters, sketches, and plans. How could a complete stranger have tracked her down through an anonymous forum post?",
      "“Hlo,” she replied, her fingers hovering nervously. “Who is this? And how did you find my handle?”",
      "The reply was immediate. “Someone who watches the steam rise from his tea too long. I saw you leave it on the wooden stool. Page ninety-eight has your forum banner painted in watercolor. It wasn't hard to piece together. I have your book. If you'd like it back, tell me the story of what was written on page one.”",
      "And just like that, with two letters and a rain-swept mystery, the silence of her world fractured."
    ]
  },
  {
    id: "letters-i-never-sent",
    title: "Letters I Never Sent",
    genre: "Contemporary Romance / epistolary",
    hook: "The words that would have changed everything, buried in a drawer.",
    synopsis: "An emotional, beautifully structured piece tracking five years of unspoken letters. Following two college sweethearts who parted ways in the misty hills of the East, this novel is an exploration of 'what-ifs,' containing gorgeous letters left unmailed, the letters they did write, and the accidental meeting that forces them to read them aloud.",
    status: "Coming Soon",
    releaseDate: "Expected Winter 2026",
    googlePlayBooksUrl: "#",
    appleBooksUrl: "#",
    amazonKindleUrl: "#",
    coverGradient: "linear-gradient(135deg, #0e1d24 0%, #1a3636 50%, #40534c 100%)", // Deep forest pine and sage green
    accentColor: "from-emerald-500 to-teal-500",
    sampleExcerpt: [
      "PROLOGUE: THE BOX UNDER THE FLOOR",
      "There are precisely forty-seven of them. Held together by a frayed green ribbon that smelled of old Cedar and damp Darjeeling rain. I never bought stamps for them. Deep down, I knew that if any of these envelopes ever reached your hands, they would act as slow matches, burning down the comfortable new lives we built for ourselves.",
      "This is letter number one: Dated May 12th. The day you boarded the 4:15 PM train..."
    ]
  },
  {
    id: "the-last-message",
    title: "The Last Message",
    genre: "Drama / Young Adult",
    hook: "If you had only three words left to transmit, who would you send them to?",
    synopsis: "A high-concept young adult love story addressing the ephemeral nature of digital love. Two young programmers who only communicate through terminal logs and server variables build a private universe of memories, only to be separated by a national communication blackout. A story about staying human, finding hope in the dark, and saving the last bytes of devotion.",
    status: "Coming Soon",
    releaseDate: "Expected Summer 2026",
    googlePlayBooksUrl: "#",
    appleBooksUrl: "#",
    coverGradient: "linear-gradient(135deg, #0d0d15 0%, #181d31 50%, #1c2b54 100%)", // Dark midnight blue and steel silver
    accentColor: "from-blue-500 to-indigo-600",
    sampleExcerpt: [
      "CHAPTER ONE: PORT 3000 CONNECTION",
      "He sat in the dark, listening to the static. Every node in the city had gone silent, but a tiny leakage of electricity in the fiber-optic line under Section 4 was still glowing, running a local Express server on port 3000. It was their last handshake.",
      "“Are you there?” he typed. The terminal blinked once. Twice. Then letters formed: “I'm here. Keep pinging. Don't let the lines go cold.”"
    ]
  },
  {
    id: "after-the-rain",
    title: "After The Rain",
    genre: "Emotional Romance",
    hook: "Some storms are meant to wash clean the paths we were too afraid to take.",
    synopsis: "A powerful healing-themed romance tracking a weary photographer who captures travelers in local train terminals and a gifted classical composer recovering from memory loss. Set in a gorgeous, rain-swept mountain town, they learn to play the notes of their past together, navigating the beautiful pain of rediscovery and the healing of shared grief.",
    status: "Coming Soon",
    releaseDate: "Expected Autumn 2026",
    googlePlayBooksUrl: "#",
    appleBooksUrl: "#",
    coverGradient: "linear-gradient(135deg, #2b1f1d 0%, #483434 50%, #6b4f4f 100%)", // Terracotta and warm twilight mahogany
    accentColor: "from-amber-500 to-orange-600",
    sampleExcerpt: [
      "INTRODUCTION: THE SEPIA METRONOME",
      "Memory is a fickle thing. It doesn't disappear all at once. It trickles out like fine tea through a cracked porcelain cup. She remembers the sound of minor scales on the old petrof grand piano. She remembers the wet smell of pine needles. But she does not remember the face on the photo that sits inside her silver locket."
    ]
  }
];

/**
 * 3. CINEMATIC QUOTES
 * Rotating or marquee-displayed quotes highlighting the central romantic/emotional tone.
 */
export const QUOTES: Quote[] = [
  {
    id: "quote-1",
    text: "Some stories do not end. They hide inside us, waiting for the right kind of rain.",
    source: "When Love Happened Accidentally"
  },
  {
    id: "quote-2",
    text: "A simple message can become a lifetime memory, and a lifetime memory can be undone in a single silent read.",
    source: "Letters I Never Sent"
  },
  {
    id: "quote-3",
    text: "Love does not always arrive loudly. Sometimes it starts with a simple 'Hi' across miles of quiet fiber.",
    source: "When Love Happened Accidentally"
  },
  {
    id: "quote-4",
    text: "Distance is just an ornament that makes the reunion look infinitely more deserved.",
    source: "After The Rain"
  }
];

/**
 * 4. READER EMOTION CARDS
 * Highlights why the target audience falls in love with Abhinav Kumar's books.
 */
export const READER_EMOTIONS: ReaderEmotion[] = [
  {
    id: "first-love",
    title: "First Love",
    description: "Capturing the wild butterfly flutter of fresh dialogue, young dreams, and the clumsy magic of starting over.",
    vibe: "Butterfly"
  },
  {
    id: "missed-chances",
    title: "Missed Chances",
    description: "Writing about the near-miss meetings, delayed trains, and the tragic yet beautiful timing of fate.",
    vibe: "Sigh"
  },
  {
    id: "emotional-silence",
    title: "Emotional Silence",
    description: "The painful poetry found in the gaps between replies, unread messages, and things we left unvoiced.",
    vibe: "Silence"
  },
  {
    id: "memories",
    title: "Treasured Memories",
    description: "Polaroid-clear fragments: steaming paper cups, lost moleskin journals, and long forgotten birthdays.",
    vibe: "Memory"
  },
  {
    id: "healing",
    title: "Deep Healing",
    description: "Journeys that do not shy away from grief but promise warm, soft light through rain clouds.",
    vibe: "Healing"
  },
  {
    id: "destiny",
    title: "Quiet Destiny",
    description: "Exploring the silent, invisible currents of fate connecting isolated hearts across miles.",
    vibe: "Destiny"
  }
];

/**
 * 5. SOCIAL MEDIA LINKS
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://instagram.com",
    iconName: "Instagram"
  },
  {
    platform: "YouTube",
    url: "https://youtube.com",
    iconName: "Youtube"
  },
  {
    platform: "X / Twitter",
    url: "https://x.com",
    iconName: "Twitter"
  },
  {
    platform: "Threads",
    url: "https://threads.net",
    iconName: "MessageCircle"
  }
];
