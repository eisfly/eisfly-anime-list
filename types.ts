export type Anime = {
  id: string;
  title: string;
  description: string;
  coverImageURL: string;
  genres: string[];
  releaseYear: number;
  status: string;
  category: string; // bewusst string -> keine Enum-Hölle mehr
  comment?: string;
  trailerUrl?: string;
};
