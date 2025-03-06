import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const iframeRef = useRef(null);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Optional: Intersection Observer for animation when scrolling into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Handle video play/pause toggle
  const toggleVideo = () => {
    if (!isPlaying) {
      // Start playing
      setIsPlaying(true);
    } else {
      // Pause by replacing the iframe without autoplay
      setIsPlaying(false);
    }
  };

  return (
    <section id="beranda" className="py-16 md:py-24 overflow-hidden relative bg-white">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-500 blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-green-600 blur-3xl opacity-20"></div>
        <div className="absolute -bottom-32 right-1/3 w-80 h-80 rounded-full bg-green-400 blur-3xl opacity-20"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 md:right-20 w-20 h-20 opacity-20 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-full h-full">
          <path fill="currentColor" d="M47.5,-68.2C59.3,-62.6,65.3,-44.4,70.2,-26.8C75.1,-9.2,78.9,7.8,74.9,22.9C70.9,38,59.1,51.2,45.1,60.2C31.1,69.3,15.5,74.2,-0.5,75C-16.6,75.7,-33.2,72.3,-45.6,63.1C-58.1,53.8,-66.4,38.8,-70.9,22.9C-75.4,7,-76,-9.8,-71.7,-25.5C-67.4,-41.2,-58.2,-55.8,-45.4,-61.2C-32.6,-66.6,-16.3,-62.7,1.2,-64.5C18.7,-66.3,37.3,-73.7,47.5,-68.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-5 md:left-16 w-14 h-14 opacity-20 z-0 animate-spin-slow">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-green-500 w-full h-full">
          <path fill="currentColor" d="M41.3,-65.2C53.3,-55.1,62.9,-42.8,67.7,-29.1C72.6,-15.4,72.6,-0.3,70.1,14.9C67.5,30.1,62.3,45.3,51.6,54.5C40.9,63.6,24.6,66.6,7.7,70.5C-9.2,74.3,-26.7,79,-40.2,74.4C-53.7,69.8,-63.1,55.9,-67.8,41.3C-72.4,26.6,-72.4,11.2,-70.1,-3.4C-67.8,-18.1,-63.4,-32.1,-54.7,-42.4C-46,-52.7,-33.1,-59.4,-19.6,-68C-6.1,-76.6,8,-87.1,21.4,-86.6C34.8,-86.1,47.5,-74.6,41.3,-65.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Content Column with enhanced animations */}
          <div className={`text-left transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-green-50 mb-6 border border-green-100">
              <p className="text-green-700 text-sm font-medium flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Bersama Berbagi Untuk Sesama
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="relative inline-block">
                <span className="relative z-10">Berbagi</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-green-200 opacity-60 z-0 skew-x-3"></span>
              </span> Kebaikan, <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">Mewujudkan</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-green-200 opacity-60 z-0 -skew-x-3"></span>
              </span> Harapan
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
              Yayasan Teman Sehati Sejati hadir sebagai jembatan kebaikan untuk menebar manfaat dan menyalurkan harapan bagi mereka yang membutuhkan di seluruh Indonesia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#tentang" 
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl shadow-lg hover:shadow-green-200 transform hover:-translate-y-1 transition-all duration-300 text-center font-medium group"
              >
                <span className="flex items-center justify-center">
                  Kenali Kami
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
              <a 
                href="#donasi" 
                className="px-8 py-4 bg-white border-2 border-green-600 text-green-700 rounded-xl hover:bg-green-50 transform hover:-translate-y-1 transition-all duration-300 text-center font-medium flex items-center justify-center group shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Mulai Berdonasi
                <span className="ml-1 transform group-hover:scale-110 transition-transform text-green-600">♥</span>
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-3 text-center max-w-md">
              {[
                { number: '10+', text: 'Program Aktif' },
                { number: '500+', text: 'Donatur Bergabung' },
                { number: '1000+', text: 'Penerima Manfaat' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg bg-white shadow-sm border border-gray-100 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${600 + (index * 150)}ms` }}
                >
                  <div className="font-bold text-green-700 text-xl">{stat.number}</div>
                  <div className="text-gray-500 text-xs">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Video Column with thumbnail and custom play button */}
          <div 
            ref={videoRef}
            className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-100 rounded-full z-0 animate-pulse-slow"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-green-200 rounded-full z-0 animate-bounce-slow"></div>
              
              {/* Main video container */}
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-3 relative z-10">
                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden">
                  {/* Gradient overlay for video */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-transparent z-10 rounded-lg"></div>
                  
                  {/* YouTube thumbnail with play button or YouTube iframe */}
                  {!isPlaying ? (
                    <div className="absolute inset-0 z-20">
                      {/* YouTube thumbnail - using standard YouTube thumbnail URL */}
                      <div className="absolute inset-0 bg-black">
                        <img 
                          src={`https://img.youtube.com/vi/zYkqaaiUm_g/maxresdefault.jpg`} 
                          alt="Video thumbnail" 
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      
                      {/* Custom play button */}
                      <div 
                        onClick={toggleVideo}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-600/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-green-700/90">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/30 absolute animate-ping-slow opacity-60"></div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white text-sm font-medium px-4 py-2 rounded-lg backdrop-blur-sm">
                          Mari Berwakaf di Yayasan Teman Sehati Sejati
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 z-20">
                      <iframe 
                        ref={iframeRef}
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/zYkqaaiUm_g?autoplay=1" 
                        title="Mari Berwakaf di Yayasan Teman Sehati Sejati" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                      
                      {/* Pause button overlay */}
                      <div 
                        onClick={toggleVideo}
                        className="absolute bottom-4 right-4 z-30 cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Caption with enhanced styling */}
                <div className="py-4 px-2 flex items-center justify-between">
                  <p className="text-sm text-gray-600 font-medium">Program-program Yayasan</p>
                  
                  <div className="flex space-x-2">
                    <a 
                      href="https://www.youtube.com/@YayasanTemanSehatiSejati" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/>
                      </svg>
                    </a>
                    <button 
                      className="px-3 py-1 text-xs font-medium text-green-700 rounded-full bg-green-50 hover:bg-green-100 transition-colors flex items-center"
                      aria-label="Bagikan"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      Bagikan
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className={`mt-6 bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-3 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Terpercaya & Transparan</h3>
                  <p className="text-xs text-gray-500">Laporan penggunaan dana diaudit secara berkala</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-14 md:h-20">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="#38a938"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="#38a938"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      
      {/* Add to your Tailwind config */}
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(1.2); opacity: 0; }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}