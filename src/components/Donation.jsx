import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Donation() {
  const [activeTab, setActiveTab] = useState('bank');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="donasi" className="my-16 py-16 bg-gradient-to-r from-green-50 to-white rounded-xl">
      <div className="container mx-auto px-4">
        {/* Decorative Elements */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#16a34a" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.5,75.6,43.5C67.3,56.4,55.2,67,41.3,74.7C27.4,82.3,11.8,86.9,-2.8,84.7C-17.4,82.5,-35,73.5,-49.8,63.5C-64.6,53.5,-76.7,42.4,-84.1,28.2C-91.6,14,-94.4,-3.2,-89.6,-18.4C-84.7,-33.6,-72.1,-46.8,-58.5,-54.6C-44.9,-62.4,-30.3,-64.8,-16.5,-71.1C-2.8,-77.5,10.1,-87.8,24.3,-86.9C38.6,-86,53.9,-74,66.3,-62.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#16a34a" d="M39.9,-65.7C52.8,-60.5,65.2,-52.1,72.7,-40.4C80.2,-28.8,82.8,-14.4,83.9,0.6C85.1,15.7,84.7,31.4,77.7,43.3C70.7,55.3,57,63.5,43.2,69.3C29.4,75.1,15.5,78.4,0.8,77.1C-13.9,75.8,-27.9,69.9,-41,62.4C-54.1,54.9,-66.3,45.9,-74.2,33.3C-82.2,20.7,-85.9,4.5,-83.4,-10.9C-80.9,-26.3,-72.1,-40.9,-60.5,-48.9C-48.8,-56.9,-34.3,-58.4,-22,-61.7C-9.6,-65.1,0.8,-70.3,12.7,-73C24.7,-75.7,40.1,-75.9,51.9,-70.1Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 inline-block relative text-gray-800">
            Donasi
            <div className="absolute h-1 w-24 bg-green-500 bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Dukung program-program kami untuk membantu mereka yang membutuhkan di seluruh Indonesia.
            Setiap kontribusi Anda sangat berarti dalam mewujudkan harapan.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Donation Methods Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full shadow-md p-1 inline-flex">
              <button
                onClick={() => setActiveTab('bank')}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  activeTab === 'bank'
                    ? 'bg-green-500 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                Transfer Bank
              </button>
              <button
                onClick={() => setActiveTab('qris')}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  activeTab === 'qris'
                    ? 'bg-green-500 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                QRIS
              </button>
            </div>
          </div>

          {/* Donation Cards */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-5">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                  <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#16a34a"></circle>
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
              </svg>
            </div>

            {/* Bank Transfer Method */}
            {activeTab === 'bank' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 shadow-lg max-w-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1zm5-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Transfer Bank</h3>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-green-100">
                      <div className="flex flex-col items-center">
                        <div className="w-56 h-32 bg-gradient-to-r from-green-400 to-green-600 rounded-xl shadow-md relative overflow-hidden mb-6">
                          <div className="absolute top-3 left-3">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 10H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <div className="text-xs opacity-80 mb-1">Nomor Rekening</div>
                            <div className="font-mono text-xl font-bold tracking-wider">7293841386</div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="bg-green-50 rounded-full px-4 py-1 inline-block mb-2">
                            <p className="font-medium text-green-800">Teman Sehati Sejati</p>
                          </div>
                          <p className="text-sm text-gray-600">Bank Syariah Indonesia</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <div className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-600">
                          Setelah melakukan transfer, simpan bukti transfer Anda.
                          Konfirmasi donasi akan diberikan melalui email atau WhatsApp.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* QRIS Method */}
            {activeTab === 'qris' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 shadow-lg max-w-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">QRIS</h3>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md p-6 border border-green-100">
                      <div className="flex flex-col items-center">
                        {/* Enhanced QR code display */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-green-600 rounded-lg opacity-10 blur-md transform -rotate-3"></div>
                          <div className="relative bg-white p-3 rounded-lg shadow-md border-2 border-green-100 mb-6">
                            <div className="w-64 h-64 relative">
                              {/* Replace with actual QR code image */}
                              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white">
                                <img src="/qris.jpg" alt="QR Code" className="w-full h-full object-cover" />
                              </div>
                              {/* <div className="absolute bottom-1 right-1">
                                <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </div> */}
                            </div>
                            <div className="absolute -top-2 -right-2">
                              <div className="bg-green-100 rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="bg-green-50 rounded-full px-4 py-1 inline-block mb-2">
                            <p className="font-medium text-green-800">YYS Teman Sehati Sejati</p>
                          </div>
                          <p className="text-sm text-gray-600">Scan untuk donasi melalui e-wallet atau m-banking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Confirmation Instructions */}
          <motion.div
            variants={fadeIn}
            className="bg-white rounded-xl p-6 border border-green-100 shadow-md max-w-2xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-3">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Laporan Donasi</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Kami berkomitmen untuk transparansi dalam penggunaan dana donasi.
              Laporan penggunaan dana akan dikirimkan kepada donatur secara berkala.
            </p>
            <a 
              href="mailto:mustafa.fathur@gmail.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hubungi Kami
            </a>
          </motion.div>

          {/* Impact of Donation */}
          <motion.div
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Kemanusiaan</h4>
              <p className="text-gray-600">Donasi Anda membantu menyediakan bantuan darurat untuk mereka yang terdampak bencana alam dan krisis kemanusiaan.</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Pendidikan</h4>
              <p className="text-gray-600">Kontribusi Anda mendukung program beasiswa dan penyediaan fasilitas belajar bagi anak-anak kurang mampu.</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Pemberdayaan</h4>
              <p className="text-gray-600">Donasi Anda membantu menciptakan peluang ekonomi dan pemberdayaan masyarakat melalui pelatihan keterampilan.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}