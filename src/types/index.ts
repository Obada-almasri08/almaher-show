export interface Participant {
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  videoUrl?: string;
}

export interface Judge {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface Season {
  id: string;
  title: string;
  year: number;
  description: string;
  coverImage: string;
  judges: Judge[];
  participants: Participant[];
  highlightsUrl?: string;
}
