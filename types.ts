import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  event: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: number;
  category: 'wedding' | 'birthday' | 'corporate' | 'decoration' | 'other' | 'baby-shower';
  imageUrl: string;
  title: string;
}

export interface NavLink {
  label: string;
  path: string;
}