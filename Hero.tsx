export type ThemeMode = 'light' | 'dark';

export interface GalleryItem {
  id: string;
  name: string;
  category: 'wedding' | 'celebration' | 'artisan' | 'mini';
  image: string;
  description: string;
  flavors: string[];
  priceRange: string;
  slices: string;
  details: string[];
}

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string; // Lucide icon name
  process: string[];
  priceLabel: string;
}

export interface CakeQuoteRequest {
  shape: 'round' | 'square' | 'hexagon';
  tiers: number;
  finish: 'smooth_fondant' | 'textured_buttercream' | 'naked_rustic' | 'geode_sculpt';
  flavor: string;
  accents: string[];
  eventDate: string;
  servingsNeeded: number;
  name: string;
  email: string;
  notes: string;
}

export interface CakeQuoteResponse {
  basePrice: number;
  tierSurcharge: number;
  finishSurcharge: number;
  accentSurcharge: number;
  estimatedTotal: number;
}
