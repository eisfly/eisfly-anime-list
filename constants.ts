import type { Anime } from './types';

export const CATEGORIES = [
  'All',
  'Good Anime',
  'Must Watch',
  'Peak',
  'Goats',
  'Underrated',
  'Sports',
  'Unknown',
];

export const ANIME_LIST: Anime[] = [
  // Beispiel-Animes (ersetze/erweitere mit deinen echten)
  {
    id: 'charlotte',
    title: 'Charlotte',
    category: 'Good Anime',
    genres: ['Drama', 'Supernatural', 'School', 'Comedy'],
    description:
      'A boy discovers his supernatural ability—and gets pulled into a secret war between gifted teenagers.',
    coverImageURL:
      'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=1400&q=70',
    releaseYear: 2015,
    status: 'Finished',
    comment: '📝 My Comment: (hier kommt später dein Kommentar rein)',
    trailerUrl: 'https://www.youtube.com/results?search_query=Charlotte+anime+official+trailer',
  },
];
