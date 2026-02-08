
export interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  achievements?: string[];
  features?: string[];
  image: string;
  tags?: string[];
  links?: {
    web?: string;
    kyobo?: string;
    store?: string;
  };
}

export interface ServiceSystem {
  title: string;
  items: string[];
}