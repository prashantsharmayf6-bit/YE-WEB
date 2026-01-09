import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TAGLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Gradient for Text Readability */}
      <div className="absolute inset-0 z-0">
        {/* Using a wedding/event image that has warm tones to match yellow */}
        <img 
          src="https://picsum.photos/id/433/1920/1080" 
          alt="Luxury Event Decoration" 
          className="w-full h-full object-cover"
        />
        {/* Darker overlay to make white text and yellow accents pop */}
        <div className="absolute inset-0 bg-stone-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up flex flex-col items-center">
          
          <div className="inline-block border border-gold-400 px-6 py-2 rounded-full mb-8 bg-stone-900/50 backdrop-blur-sm">
             <h2 className="text-gold-400 text-xs md:text-sm uppercase tracking-[0.2em] font-bold">
              Premium Event Planning in Coimbatore
            </h2>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8 drop-shadow-2xl max-w-5xl">
            {TAGLINE}
          </h1>
          
          <p className="text-stone-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            We curate unforgettable experiences for life's most cherished moments. 
            From intimate gatherings to grand weddings.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-lg">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-10 py-4 bg-gold-400 text-stone-900 font-bold rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] uppercase tracking-wider text-sm"
            >
              Book Your Event
            </Link>
            <Link 
              to="/gallery" 
              className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-stone-900 transition-all uppercase tracking-wider text-sm flex items-center justify-center group"
            >
              View Portfolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;