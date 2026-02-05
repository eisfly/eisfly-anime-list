export type Anime = {
  id: string;
  title: string;
  description: string;
  coverImageURL: string;
  genres: string[];
  releaseYear: number;
  status: string;
  category: string;
  comment?: string;
  trailerUrl?: string;
};
