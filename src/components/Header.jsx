import { useState, useEffect } from 'react';
import Layout from './Layout';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Optional: Update active section based on scroll position
      const sections = ['beranda', 'tentang', 'kontak', 'donasi'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (section) => activeSection === section;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <Layout>
        <div className="flex justify-between items-center">
          {/* Logo & Title with enhanced styling */}
          <div className="flex items-center space-x-3 group">
            <div className={`relative rounded-full p-1 overflow-hidden transition-all duration-300 ${
              scrolled ? 'bg-green-50' : 'bg-white/80'
            }`}>
              <a href="/">
              <img 
                src="/logo.png" 
                alt="Logo Yayasan" 
                className="w-11 h-11 md:w-12 md:h-12 transform group-hover:scale-105 transition-transform duration-300" 
              />
              </a>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-green-700 hidden sm:block group-hover:text-green-600 transition-colors">
                Yayasan Teman Sehati Sejati
              </h1>
              <p className="text-sm text-green-600/80 hidden md:block mt-0.5">Berbagi Kebaikan, Mewujudkan Harapan</p>
              <h1 className="text-lg font-bold text-green-700 sm:hidden">
                YTSS
              </h1>
            </div>
          </div>

          {/* Enhanced Desktop Nav with indicators */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: 'Beranda', href: '#beranda', section: 'beranda' },
              { name: 'Tentang', href: '#tentang', section: 'tentang' },
              { name: 'Kontak', href: '#kontak', section: 'kontak' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className={`relative px-4 py-2 font-medium rounded-md transition-all duration-300 ${
                  isActive(item.section)
                    ? 'text-green-700'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50/70'
                }`}
              >
                {item.name}
                {isActive(item.section) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-green-500 rounded-full" />
                )}
              </a>
            ))}
            <a 
              href="#donasi" 
              className="ml-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg hover:from-green-500 hover:to-green-600 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <span className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>Donasi</span>
              </span>
            </a>
          </nav>

          {/* Enhanced Mobile Nav Toggle */}
          <button 
            className="md:hidden flex items-center p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute h-0.5 bg-green-600 transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 w-6 top-3' : 'w-6 top-1.5'
              }`}></span>
              <span className={`absolute h-0.5 bg-green-600 transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 w-0 left-3' : 'opacity-100 w-6 top-3'
              }`}></span>
              <span className={`absolute h-0.5 bg-green-600 transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 w-6 top-3' : 'w-6 top-4.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Nav Menu with animations */}
        {isMenuOpen && (
          <div className="md:hidden py-3 px-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl mb-4 mt-3 animate-fadeIn">
            {[
              { name: 'Beranda', href: '#beranda', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { name: 'Tentang', href: '#tentang', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { name: 'Kontak', href: '#kontak', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="flex items-center py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-3" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-3 pb-1">
              <a 
                href="#donasi" 
                className="flex items-center justify-center py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Donasi Sekarang
              </a>
              <div className="mt-4 flex justify-center space-x-4 pt-3 border-t border-gray-100">
                <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 3.95-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-3.95-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </header>
  );
}