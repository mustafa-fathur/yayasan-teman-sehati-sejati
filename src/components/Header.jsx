import { useState, useEffect } from 'react';
import Layout from './Layout';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <Layout>
        <div className="flex justify-between items-center py-3">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo Yayasan" className="w-12 h-12 md:w-14 md:h-14" />
            <h1 className="text-xl md:text-2xl font-bold text-green-600 hidden sm:block">
              Yayasan Teman Sehati Sejati
            </h1>
            <h1 className="text-lg font-bold text-green-600 sm:hidden">
              YTSS
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#beranda" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Beranda</a>
            <a href="#tentang" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Tentang</a>
            <a href="#kontak" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Kontak</a>
            <a 
              href="#donasi" 
              className="bg-green-600 text-white px-5 py-2 rounded-full font-medium shadow-md hover:bg-green-700 transform hover:scale-105 transition-all"
            >
              Donasi
            </a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden flex items-center p-2 text-green-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 px-2 bg-white rounded-lg shadow-lg mb-4 animate-fadeIn">
            <a 
              href="#beranda" 
              className="block py-2 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </a>
            <a 
              href="#tentang" 
              className="block py-2 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </a>
            <a 
              href="#kontak" 
              className="block py-2 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </a>
            <a 
              href="#donasi" 
              className="block py-2 px-4 mt-2 bg-green-600 text-white rounded-md text-center font-medium shadow-sm hover:bg-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Donasi
            </a>
          </div>
        )}
      </Layout>
    </header>
  );
}