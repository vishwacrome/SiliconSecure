
import { Service, Project, Stat, Client, MediaAsset } from './types';

export const STATS: Stat[] = [
  { label: 'Years Of Experience', value: '20+' },
  { label: 'Clients', value: '500+' },
  { label: 'Projects Completed', value: '1000+' },
  { label: 'Talented Personals', value: '75+' },
  { label: 'Authorised Channel Partners', value: '10+' },
];

export const CORE_SERVICES: Service[] = [
  { id: 1, title: 'Security & Surveillance', description: 'Advanced IP CCTV and monitoring solutions for high-stakes environments.', icon: 'fa-shield-halved' },
  { id: 2, title: 'Fire Protection Systems', description: 'Comprehensive sprinkler, hydrant, and detection systems for life safety.', icon: 'fa-fire-extinguisher' },
  { id: 3, title: 'Professional Audio-Video', description: 'Elite Bose project partner for auditoriums and large scale integration.', icon: 'fa-volume-high' },
  { id: 4, title: 'Access Control Systems', description: 'Sophisticated biometric and smart card entry management.', icon: 'fa-id-card' },
  { id: 5, title: 'Building Management', description: 'Smart integration of environmental and safety systems.', icon: 'fa-building' },
  { id: 6, title: 'IP Nurse Call Systems', description: 'Specialized healthcare communication and safety protocols.', icon: 'fa-user-nurse' },
];

export const MEDIA_LIBRARY: MediaAsset[] = [
  {
    id: 1,
    title: 'Smart Office Surveillance Setup',
    type: 'photo',
    thumbnail: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop',
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop',
    category: 'Security'
  },
  {
    id: 2,
    title: 'Auditorium Audio Walkthrough',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
    category: 'Audio-Visual'
  },
  {
    id: 3,
    title: 'Fire Suppression Testing',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1599708153386-62e257805903?q=80&w=800&auto=format&fit=crop',
    url: 'https://www.w3schools.com/html/movie.mp4', // Placeholder video
    category: 'Fire Safety'
  },
  {
    id: 4,
    title: 'Hospital Nurse Call Integration',
    type: 'photo',
    thumbnail: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
    url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    category: 'Healthcare'
  },
  {
    id: 5,
    title: 'Control Room Monitoring',
    type: 'photo',
    thumbnail: 'https://images.unsplash.com/photo-1454165833222-d1d2265d644b?q=80&w=800&auto=format&fit=crop',
    url: 'https://images.unsplash.com/photo-1454165833222-d1d2265d644b?q=80&w=1200&auto=format&fit=crop',
    category: 'Security'
  },
  {
    id: 6,
    title: 'Bose Professional Sound Rig',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
    category: 'Audio-Visual'
  }
];

export const SECURITY_PROJECTS: Project[] = [
  { 
    id: 1, 
    name: 'Amadeus Software Labs', 
    area: '7,00,000 Sq. Ft', 
    description: 'Complete Integrated Safety and Security Systems', 
    category: 'Security',
    imageUrl: 'https://picsum.photos/seed/amadeus/800/600'
  },
  { 
    id: 2, 
    name: 'Tejas Networks Ltd.', 
    area: '6,00,000 Sq. Ft', 
    description: 'Integrated Safety and Security Systems', 
    category: 'Security',
    imageUrl: 'https://picsum.photos/seed/tejas/800/600'
  },
  { 
    id: 3, 
    name: 'UB City, Bangalore', 
    area: '10,00,000 Sq. Ft', 
    description: 'Integrated Safety and Security Systems', 
    category: 'Security',
    imageUrl: 'https://picsum.photos/seed/ubcity/800/600'
  },
  { 
    id: 4, 
    name: 'Qualcomm Bangalore', 
    area: '6,00,000 Sq. Ft', 
    description: 'Integrated Safety and Security Systems', 
    category: 'Security',
    imageUrl: 'https://picsum.photos/seed/qualcomm/800/600'
  },
];

export const AV_PROJECTS: Project[] = [
  { 
    id: 5, 
    name: 'BIET Auditorium', 
    description: '800 Seat Auditorium with Bose Delta Q Array Speaker and Christie FHD Projector.', 
    category: 'Audio-Visual',
    imageUrl: 'https://picsum.photos/seed/biet/800/600'
  },
  { 
    id: 6, 
    name: 'SS Gardenia', 
    description: '1200 Seater Open Amphitheatre with Bose Delta Q Audio Systems.', 
    category: 'Audio-Visual',
    imageUrl: 'https://picsum.photos/seed/gardenia/800/600'
  },
  { 
    id: 7, 
    name: 'FKCCI Conference', 
    description: 'Multiple Displays, Video Wall LED Based Conferences and Bose Audio Systems.', 
    category: 'Audio-Visual',
    imageUrl: 'https://picsum.photos/seed/fkcci/800/600'
  },
  { 
    id: 8, 
    name: 'World\'s First Dolby Atmos', 
    description: 'Barco 4K Projector and Bose Professional audio systems.', 
    category: 'Audio-Visual',
    imageUrl: 'https://picsum.photos/seed/dolby/800/600'
  },
];

export const DISTRIBUTORS = [
  'SIEMENS', 'EDWARDS', 'Honeywell', 'SCHRACK SECONET', 'BOSE PROFESSIONAL', 'Electro-Voice', 'BOSCH', 'DYNACORD'
];

export const CLIENT_LOGOS: string[] = [
  'Tata Power', 'Kone', 'LeeBoy', 'Manipal', 'Mantri', 'Marvell', 'Sagar Hospitals', 'Reliance Mart', 
  'Schneider Electric', 'Idea', 'ThyssenKrupp', 'Wipro', 'Ola', 'Uber', 'Radisson Blu', 'CBRE', 'JLL', 'Colliers'
];
