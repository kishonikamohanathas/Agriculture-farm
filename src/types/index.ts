export type ProductCategory = 'all' | 'vegetables' | 'fruits' | 'grains' | 'herbs';

export interface Product {
  id: string;
  name: string;
  botanicalName?: string;
  category: 'vegetables' | 'fruits' | 'grains' | 'herbs';
  price: number;
  unit: string;
  image: string;
  description: string;
  origin: string;
  isHeirloom?: boolean;
  isSeasonal?: boolean;
  harvestWindow: string;
  nutritionHighlight: string;
  stockCount: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  durationOrSchedule: string;
  pricingInfo: string;
  idealFor: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  seasonOrTiming: string;
  ecoTechnique: string;
  detailPoints: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fields' | 'crops' | 'farmers' | 'harvesting' | 'greenhouses' | 'produce';
  categoryLabel: string;
  image: string;
  location: string;
  caption: string;
  season: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  favoriteCrop: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar: string;
  rating: number;
  favoriteProduct: string;
}
