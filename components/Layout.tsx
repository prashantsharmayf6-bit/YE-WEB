import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone, MapPin, Mail, PartyPopper } from 'lucide-react';
import { NAV_LINKS, PHONE_NUMBER, ADDRESS, INSTAGRAM_URL } from '../constants';

const Logo: React.FC<{ isScrolled: boolean; isHome: boolean }> = ({ isScrolled, isHome }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="flex flex-col items-center leading-none">
        <span className={`font-serif text-2xl font-bold ${isScrolled || !isHome ? 'text-stone-900' : 'text-white'}`}>
          Yathraa
        </span>
        <span className="text-[0.6rem] tracking-widest font-sans font-black uppercase text-gold-400">
          Events
        </span>
      </div>
    );
  }

  return (
    <img 
      src="/logo.png" 
      alt="Yathraa Events" 
      className="h-16 md:h-20 w-auto object-contain rounded-full bg-white shadow-sm hover:scale-105 transition-transform duration-300"
      onError={() => setImgError(true)}
    />
  );
};

const FooterLogo: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="flex flex-col items-start leading-none">
        <span className="font-serif text-2xl text-white font-bold tracking-wide">Yathraa</span>
        <span className="text-[0.6rem] tracking-[0.3em] font-sans font-black uppercase text-gold-400 mt-1">Events</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <img 
        src="/logo.png" 
        alt="Yathraa" 
        className="h-12 w-12 rounded-full bg-white p-0.5 object-cover" 
        onError={() => setImgError(true)}
      />
      <div className="flex flex-col items-start leading-none">
        <span className="font-serif text-2xl text-white font-bold tracking-wide">Yathraa</span>
        <span className="text-[0.6rem] tracking-[0.3em] font-sans font-black uppercase text-gold-400 mt-1">Events</span>
      </div>
    </div>
  );
};

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
  }`;

  const linkClasses = (isActive: boolean) => 
    `text-sm tracking-widest uppercase font-bold transition-colors duration-300 ${
      isActive 
        ? 'text-gold-500' 
        : isScrolled || pathname !== '/' ? 'text-stone-700 hover:text-gold-500' : 'text-white hover:text-gold-400'
    }`;

  const mobileLinkClasses = (isActive: boolean) =>
    `block px-4 py-3 text-lg font-serif ${
      isActive ? 'text-gold-600 bg-gold-50 border-l-4 border-gold-400' : 'text-stone-700 hover:bg-stone-50'
    }`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className={navClasses}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <RouterNavLink to="/" className="hover:opacity-90 transition-opacity">
            <Logo isScrolled={isScrolled} isHome={pathname === '/'} />
          </RouterNavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => linkClasses(isActive)}
              >
                {link.label}
              </RouterNavLink>
            ))}
             <a 
              href={`tel:${PHONE_NUMBER}`} 
              className={`ml-4 border px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                 isScrolled || pathname !== '/' 
                 ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' 
                 : 'border-white text-white hover:bg-white hover:text-stone-900'
              }`}
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen 
              ? <X size={32} className="text-stone-900" /> 
              : <Menu size={32} className={isScrolled || pathname !== '/' ? 'text-stone-900' : 'text-white'} />
            }
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-28 px-6 md:hidden overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => mobileLinkClasses(isActive)}
              >
                {link.label}
              </RouterNavLink>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-stone-100">
            <a 
              href="https://wa.me/919876543210" 
              className="flex items-center justify-center w-full bg-[#25D366] text-white py-4 rounded-xl font-bold shadow-lg mb-4 hover:bg-[#20bd5a] transition-colors"
            >
              <Phone size={20} className="mr-2" /> Chat on WhatsApp
            </a>
            <div className="flex justify-center space-x-6 text-stone-400 mt-6">
               <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">
                <Instagram size={28} />
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="hover:text-gold-500 transition-colors">
                <Phone size={28} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Brand Info */}
            <div className="space-y-6">
               <FooterLogo />
               
              <p className="text-stone-400 leading-relaxed max-w-sm">
                Transforming every celebration with a creative touch. Based in Cheran Ma Nagar, Coimbatore, we bring your dream events to life with elegance and style.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="bg-stone-800 p-3 rounded-full hover:bg-gold-400 hover:text-black transition-all group">
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href={`tel:${PHONE_NUMBER}`} className="bg-stone-800 p-3 rounded-full hover:bg-gold-400 hover:text-black transition-all group">
                  <Phone size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:contact@yathraaevents.com" className="bg-stone-800 p-3 rounded-full hover:bg-gold-400 hover:text-black transition-all group">
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:pl-10">
              <h4 className="font-serif text-xl text-white mb-8 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gold-500"></span>
              </h4>
              <ul className="space-y-4">
                {NAV_LINKS.map(link => (
                  <li key={link.path}>
                    <RouterNavLink to={link.path} className="hover:text-gold-400 transition-colors flex items-center">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3 opacity-0 hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </RouterNavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-xl text-white mb-8 relative inline-block">
                Visit Us
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gold-500"></span>
              </h4>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <MapPin size={22} className="mr-4 text-gold-500 shrink-0 mt-1 group-hover:animate-bounce" />
                  <span className="group-hover:text-white transition-colors">{ADDRESS}</span>
                </div>
                <div className="flex items-center group">
                  <Phone size={22} className="mr-4 text-gold-500 shrink-0" />
                  <span className="group-hover:text-white transition-colors">{PHONE_NUMBER}</span>
                </div>
                <div className="flex items-center group">
                  <Mail size={22} className="mr-4 text-gold-500 shrink-0" />
                  <span className="group-hover:text-white transition-colors">contact@yathraaevents.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p>&copy; {new Date().getFullYear()} Yathraa Events. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center">
              Designed with <PartyPopper size={14} className="mx-2 text-gold-500" /> in Coimbatore
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button - Enhanced Visuals */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <Phone size={28} fill="currentColor" className="group-hover:animate-wiggle" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-stone-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          Chat with us!
        </span>
      </a>
      
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        .group-hover\\:animate-wiggle:hover {
          animation: wiggle 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Layout;