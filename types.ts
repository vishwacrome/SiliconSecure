
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  name: string;
  area?: string;
  description: string;
  category: 'Security' | 'Audio-Visual';
  imageUrl: string;
}

export interface MediaAsset {
  id: number;
  title: string;
  type: 'photo' | 'video';
  thumbnail: string;
  url: string; // Image URL or Video URL
  category: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Client {
  name: string;
  logo: string;
}
