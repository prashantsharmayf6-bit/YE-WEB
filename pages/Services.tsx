import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-stone-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Services</h1>
        <p className="text-stone-400 text-lg">Comprehensive event planning for every milestone</p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-16">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-sm shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-80 md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full shadow-lg">
                    <service.icon className="text-gold-600 w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">{service.title}</h2>
                <div className="w-16 h-1 bg-gold-500 mb-6"></div>
                <p className="text-stone-600 text-lg leading-relaxed mb-8">
                  {service.description} We handle everything from concept to execution, ensuring a stress-free experience for you and your guests.
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {['Planning & Logistics', 'Decor & Styling', 'Vendor Management', 'On-site Coordination'].map((feature, i) => (
                    <li key={i} className="flex items-center text-stone-600">
                      <Check className="w-5 h-5 text-gold-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className="inline-block px-6 py-3 bg-stone-800 text-white font-medium hover:bg-gold-600 transition-colors uppercase tracking-wide text-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Strip */}
      <div className="bg-gold-50 py-16 text-center px-4">
        <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">Ready to plan your next big event?</h3>
        <p className="text-stone-600 mb-8 max-w-2xl mx-auto">Let Yathraa Events take care of the details so you can enjoy the celebration.</p>
        <Link to="/contact" className="bg-gold-600 text-white px-8 py-3 font-semibold hover:bg-gold-700 transition-colors rounded-sm shadow-md">
          Start Planning Today
        </Link>
      </div>
    </div>
  );
};

export default Services;