import React from 'react';
import { FOUNDER_NAME } from '../constants';
import { Target, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="https://picsum.photos/id/450/800/800" 
              alt="Event Setup" 
              className="rounded-sm shadow-2xl"
            />
            <div className="hidden md:block absolute -mt-12 -ml-12 w-48 h-48 bg-gold-100 -z-10 rounded-sm"></div>
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">Who We Are</h4>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6">Crafting Experiences, Not Just Events</h1>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Founded by <strong>{FOUNDER_NAME}</strong>, Yathraa Events was born out of a passion for bringing joy to people through meticulously planned celebrations. 
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Based in Coimbatore, we have grown from a small passionate team to one of the most sought-after event management firms in the region. We believe that every event tells a story, and we are here to help you write yours with elegance and creativity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-stone-50 border border-stone-100">
                <Target className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                <h4 className="font-bold text-stone-800">Vision</h4>
                <p className="text-xs text-stone-500 mt-2">To be Tamil Nadu's leading creator of premium event experiences.</p>
              </div>
              <div className="p-4 bg-stone-50 border border-stone-100">
                <Award className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                <h4 className="font-bold text-stone-800">Quality</h4>
                <p className="text-xs text-stone-500 mt-2">Uncompromising attention to detail in every decoration.</p>
              </div>
              <div className="p-4 bg-stone-50 border border-stone-100">
                <Users className="w-8 h-8 text-gold-600 mx-auto mb-3" />
                <h4 className="font-bold text-stone-800">Client Focus</h4>
                <p className="text-xs text-stone-500 mt-2">Your satisfaction is our ultimate measure of success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-stone-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl mb-6">Lets Work Together</h2>
          <p className="text-stone-300 max-w-2xl mx-auto mb-8">
            Whether it's an intimate birthday party or a grand wedding reception, we are ready to make it spectacular.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;