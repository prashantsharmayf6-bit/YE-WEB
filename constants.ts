import { 
  PartyPopper, 
  Heart, 
  GlassWater, 
  Briefcase, 
  Baby, 
  Scissors 
} from 'lucide-react';
import { Service, Testimonial, GalleryItem, NavLink } from './types';

export const BRAND_NAME = "Yathraa Events";
export const TAGLINE = "Transforming Every Celebration with a Creative Touch";
export const PHONE_NUMBER = "+91 98765 43210"; // Placeholder format based on location
export const ADDRESS = "Cheran Ma Nagar, Coimbatore, Tamil Nadu – 641012";
export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.084126903273!2d77.0084!3d11.0316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8586000000001%3A0x1234567890abcdef!2sCheran%20Ma%20Nagar%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1234567890";
export const FOUNDER_NAME = "Selva K";
export const INSTAGRAM_HANDLE = "@yathraa_events";
export const INSTAGRAM_URL = "https://instagram.com/yathraa_events";

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'birthdays',
    title: 'Birthday Parties',
    description: 'From first birthdays to milestone celebrations, we create magical themes that bring joy to all ages.',
    icon: PartyPopper,
    image: 'https://picsum.photos/id/102/800/600'
  },
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Elegant decor, seamless planning, and unforgettable moments for your special day.',
    icon: Heart,
    image: 'https://picsum.photos/id/349/800/600'
  },
  {
    id: 'baby-showers',
    title: 'Baby Showers',
    description: 'Welcoming new life with warmth, pastel themes, and beautiful setups for the mom-to-be.',
    icon: Baby,
    image: 'https://picsum.photos/id/453/800/600'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional inauguration ceremonies, conferences, and team gatherings handled with precision.',
    icon: Briefcase,
    image: 'https://picsum.photos/id/6/800/600'
  },
  {
    id: 'bachelorette',
    title: 'Bachelorette Parties',
    description: 'Fun, trendy, and stylish pre-wedding celebrations tailored to the bride\'s vibe.',
    icon: GlassWater,
    image: 'https://picsum.photos/id/431/800/600'
  },
  {
    id: 'inaugurations',
    title: 'Inaugurations',
    description: 'Grand opening ceremonies with traditional and modern decor to mark your new beginning.',
    icon: Scissors,
    image: 'https://picsum.photos/id/250/800/600'
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya S.",
    event: "First Birthday",
    content: "Yathraa Events made my son's first birthday absolutely magical. The jungle theme was executed perfectly!",
    rating: 5
  },
  {
    id: 2,
    name: "Karthik R.",
    event: "Wedding Reception",
    content: "Selva and his team are incredibly professional. The stage decoration was exactly what we envisioned. Highly recommended.",
    rating: 5
  },
  {
    id: 3,
    name: "Anitha M.",
    event: "House Warming",
    content: "Elegant and traditional decor. They understood our requirements and delivered within budget.",
    rating: 5
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, category: 'wedding', imageUrl: 'https://picsum.photos/id/1059/600/600', title: 'Traditional Mandap' },
  { id: 2, category: 'birthday', imageUrl: 'https://picsum.photos/id/158/600/800', title: 'Balloon Arch' },
  { id: 3, category: 'decoration', imageUrl: 'https://picsum.photos/id/249/600/600', title: 'Floral Entrance' },
  { id: 4, category: 'corporate', imageUrl: 'https://picsum.photos/id/366/800/600', title: 'Stage Setup' },
  { id: 5, category: 'wedding', imageUrl: 'https://picsum.photos/id/400/600/800', title: 'Reception Backdrop' },
  { id: 6, category: 'baby-shower', imageUrl: 'https://picsum.photos/id/514/600/600', title: 'Cradle Ceremony' },
  { id: 7, category: 'birthday', imageUrl: 'https://picsum.photos/id/835/600/600', title: 'Theme Cake Table' },
  { id: 8, category: 'decoration', imageUrl: 'https://picsum.photos/id/973/600/800', title: 'Outdoor Lights' },
];