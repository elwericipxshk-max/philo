export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  imageUrl: string;
  readTime: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum PhilosopherPersona {
  SOCRATES = 'Socrates',
  NIETZSCHE = 'Friedrich Nietzsche',
  SIMONE_DE_BEAUVOIR = 'Simone de Beauvoir',
  CONFUCIUS = 'Confucius',
  MARCUS_AURELIUS = 'Marcus Aurelius'
}

export interface ChartDataPoint {
  subject: string;
  A: number;
  fullMark: number;
}
