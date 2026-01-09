import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER, GOOGLE_MAPS_EMBED_URL } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Wedding',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend. 
    // Here we just alert or log
    console.log('Form Submitted', formData);
    alert('Thank you! We will contact you shortly.');
    setFormData({ name: '', phone: '', type: 'Wedding', date: '', message: '' });
  };

  return (
    <div className="pt-20">
       <div className="bg-stone-50 py-16 text-center">
        <h1 className="text-4xl font-serif font-bold text-stone-800 mb-4">Get in Touch</h1>
        <p className="text-stone-500">We'd love to hear about your upcoming event</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info & Form */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-8 mb-12">
              <div className="flex items-start">
                <div className="bg-gold-100 p-3 rounded-full mr-4 text-gold-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 text-lg">Call Us</h4>
                  <p className="text-stone-600">{PHONE_NUMBER}</p>
                  <p className="text-xs text-stone-400 mt-1">Available 9 AM - 8 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gold-100 p-3 rounded-full mr-4 text-gold-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 text-lg">Visit Us</h4>
                  <p className="text-stone-600 max-w-xs">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-gold-100 p-3 rounded-full mr-4 text-gold-700">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 text-lg">Email</h4>
                  <p className="text-stone-600">contact@yathraaevents.com</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-sm shadow-lg border-t-4 border-gold-500">
              <h3 className="font-serif text-2xl font-bold mb-6 text-stone-800">Send us a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-stone-600 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-200 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-600 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-200 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="+91 90000 00000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                  <label className="block text-sm font-semibold text-stone-600 mb-2">Event Type</label>
                  <select 
                    name="type" 
                    value={formData.type} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-200 focus:border-gold-500 focus:outline-none transition-colors bg-white"
                  >
                    <option>Wedding</option>
                    <option>Birthday Party</option>
                    <option>Baby Shower</option>
                    <option>Corporate Event</option>
                    <option>Inauguration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-600 mb-2">Event Date (Tentative)</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-200 focus:border-gold-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-stone-600 mb-2">Message / Requirements</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-200 focus:border-gold-500 focus:outline-none transition-colors"
                  placeholder="Tell us about your theme or specific needs..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-stone-800 text-white font-bold py-4 hover:bg-gold-600 transition-colors flex items-center justify-center uppercase tracking-wide"
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="w-full lg:w-1/2 h-96 lg:h-auto min-h-[400px]">
            <iframe 
              src={GOOGLE_MAPS_EMBED_URL} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-sm shadow-md"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;