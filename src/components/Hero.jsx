import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="beranda" className="py-12 md:py-20 overflow-hidden relative">
      {/* Background overlay with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white opacity-70 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Column */}
          <div className={`text-left transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-green-600">Berbagi</span> Kebaikan, <span className="text-green-600">Mewujudkan</span> Harapan
            </h1>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Yayasan Teman Sehati Sejati hadir sebagai jembatan kebaikan untuk menebar manfaat dan menyalurkan harapan bagi mereka yang membutuhkan di seluruh Indonesia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#tentang" 
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all text-center font-medium"
              >
                Kenali Kami
              </a>
              <a 
                href="#donasi" 
                className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-all text-center font-medium"
              >
                Mulai Berdonasi
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Bersama kita bisa mewujudkan perubahan yang berarti</span>
            </div>
          </div>
          
          {/* Video Column */}
          <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white p-2">
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/zYkqaaiUm_g" 
                  title="Mari Berwakaf di Yayasan Teman Sehati Sejati" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="pt-3 pb-1 px-2">
                <p className="text-sm text-gray-500 text-center">Pelajari lebih lanjut tentang program-program kami</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
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
    </section>
  );
}