import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { SERVICES, GALLERY_ITEMS, TESTIMONIALS } from '../constants';
import { ArrowRight, Star, HeartHandshake, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 3);
  const featuredGallery = GALLERY_ITEMS.slice(0, 4);

  return (
    <div>
      <Hero />

      {/* Intro Section - Updated styling */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative">
               <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold-400 -mt-4 -ml-4"></div>
               <img 
                src="https://picsum.photos/id/250/600/800" 
                alt="Event Decoration Setup" 
                className="w-full h-auto rounded-sm shadow-2xl relative z-10"
              />
               <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold-400 -mb-4 -mr-4"></div>
            </div>
            
            <div className="w-full md:w-1/2">
              <span className="text-gold-500 font-bold uppercase tracking-widest text-sm flex items-center mb-4">
                <Sparkles size={16} className="mr-2" />
                About Yathraa Events
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                We Create Memories That Last a Lifetime
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6 text-lg">
                Based in Coimbatore, <span className="font-bold text-stone-900">Yathraa Events</span> specializes in bringing your vision to life. 
                Whether it is a grand wedding, a joyful birthday bash, or a corporate milestone, 
                our dedicated team ensures every detail is perfect.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                We believe in the power of celebration. Our designs are not just about decoration; they are about creating an atmosphere where joy flourishes.
              </p>
              
              <Link to="/about" className="text-stone-900 font-bold border-b-2 border-gold-400 hover:text-gold-600 hover:border-gold-600 transition-colors inline-flex items-center pb-1">
                Read Our Story <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Clean Grid */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="font-serif text-4xl font-bold text-stone-900 mb-4">Our Premium Services</h3>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-stone-600">Tailored experiences for every occasion, executed with precision and flair.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="group bg-white p-10 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 to-gold-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                <div className="w-16 h-16 bg-gold-50 rounded-2xl flex items-center justify-center text-gold-500 mb-8 group-hover:rotate-12 transition-transform duration-300">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-stone-900 mb-4 group-hover:text-gold-600 transition-colors">{service.title}</h4>
                <p className="text-stone-500 mb-8 leading-relaxed">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-stone-400 group-hover:text-gold-600 transition-colors">
                  Learn More <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/services" className="inline-block px-8 py-3 bg-stone-900 text-white font-bold rounded-full hover:bg-gold-500 hover:text-black transition-all shadow-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Break / Quote - Updated to Black/Yellow theme */}
      <section className="py-32 bg-stone-900 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
             <img src="https://picsum.photos/id/319/1920/600" alt="Background" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-transparent to-stone-900"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <HeartHandshake size={48} className="text-gold-400 mx-auto mb-8 opacity-80" />
          <h2 className="font-serif text-3xl md:text-6xl text-white font-bold leading-tight max-w-5xl mx-auto mb-8">
            "We do not remember days,<br/> we remember <span className="text-gold-400 italic">moments</span>."
          </h2>
          <Link to="/contact" className="inline-block border border-gold-400 text-gold-400 px-8 py-3 rounded-full hover:bg-gold-400 hover:text-stone-900 transition-all font-bold uppercase tracking-widest text-xs">
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Gallery Preview - Masonry-ish feel */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
             <div>
              <h3 className="font-serif text-4xl font-bold text-stone-900">Recent Works</h3>
              <p className="text-stone-500 mt-2">Highlights from our portfolio</p>
            </div>
            <Link to="/gallery" className="hidden md:flex items-center text-gold-600 font-bold hover:text-stone-900 transition-colors">
              View Full Gallery <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGallery.map((item, idx) => (
              <div key={item.id} className={`relative group overflow-hidden rounded-lg shadow-lg ${idx % 2 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-gold-400 text-xs uppercase tracking-widest font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</span>
                  <h5 className="text-white font-serif text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link 
              to="/gallery" 
              className="inline-block px-8 py-3 border border-stone-900 text-stone-900 font-bold hover:bg-stone-900 hover:text-white transition-colors rounded-full uppercase tracking-wider text-xs"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-900 text-white relative">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Sparkles size={200} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="font-serif text-4xl font-bold text-center mb-16">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-stone-800 p-8 rounded-2xl border border-stone-700 hover:border-gold-500 transition-colors duration-300">
                <div className="flex text-gold-400 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-stone-300 mb-8 italic leading-relaxed">"{t.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-stone-900 font-bold text-lg mr-4">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-white">{t.name}</h5>
                    <p className="text-xs text-stone-500 uppercase tracking-wide">{t.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;