import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  // Group data by organ for better organization
  const structureData = [
    {
      organ: "PEMBINA",
      icon: "🏛️",
      description: "Memberikan arahan dan bimbingan strategis bagi yayasan",
      members: [
        { name: "AHMAD WIRA", position: "KETUA" },
        { name: "ADEL WAHIDI", position: "ANGGOTA" },
        { name: "ALFI SYUKRI RAMA", position: "ANGGOTA" },
      ]
    },
    {
      organ: "PENGURUS",
      icon: "⚙️",
      description: "Mengelola operasional dan program-program yayasan",
      members: [
        { name: "DAVY HENDRI", position: "KETUA" },
        { name: "IRSADUNAS", position: "SEKRETARIS" },
        { name: "RIANDY MARDHIKA ADIF", position: "BENDAHARA" },
      ]
    },
    {
      organ: "PENGAWAS",
      icon: "👁️",
      description: "Memastikan transparansi dan akuntabilitas yayasan",
      members: [
        { name: "ROMI ISKANDAR", position: "KETUA" },
        { name: "LUKMANUL HAKIM", position: "ANGGOTA" },
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="tentang" className="relative my-16 py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#16a34a" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.5,75.6,43.5C67.3,56.4,55.2,67,41.3,74.7C27.4,82.3,11.8,86.9,-2.8,84.7C-17.4,82.5,-35,73.5,-49.8,63.5C-64.6,53.5,-76.7,42.4,-84.1,28.2C-91.6,14,-94.4,-3.2,-89.6,-18.4C-84.7,-33.6,-72.1,-46.8,-58.5,-54.6C-44.9,-62.4,-30.3,-64.8,-16.5,-71.1C-2.8,-77.5,10.1,-87.8,24.3,-86.9C38.6,-86,53.9,-74,66.3,-62.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#16a34a" d="M39.9,-65.7C52.8,-60.5,65.2,-52.1,72.7,-40.4C80.2,-28.8,82.8,-14.4,83.9,0.6C85.1,15.7,84.7,31.4,77.7,43.3C70.7,55.3,57,63.5,43.2,69.3C29.4,75.1,15.5,78.4,0.8,77.1C-13.9,75.8,-27.9,69.9,-41,62.4C-54.1,54.9,-66.3,45.9,-74.2,33.3C-82.2,20.7,-85.9,4.5,-83.4,-10.9C-80.9,-26.3,-72.1,-40.9,-60.5,-48.9C-48.8,-56.9,-34.3,-58.4,-22,-61.7C-9.6,-65.1,0.8,-70.3,12.7,-73C24.7,-75.7,40.1,-75.9,51.9,-70.1Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold mb-2 text-gray-800 relative inline-block"
          >
            Tentang Kami
            <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full"></span>
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="w-16 h-1 bg-green-500 mx-auto rounded-full mb-6 hidden"
          ></motion.div>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-700 max-w-3xl mx-auto mb-6"
          >
            Yayasan Teman Sehati Sejati hadir sebagai jembatan kebaikan untuk merawat manfaat dan menyalurkan
            harapan bagi mereka yang membutuhkan di seluruh Indonesia.
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Kami berkomitmen untuk bersama-sama menciptakan perubahan positif melalui berbagai program yang 
            berkelanjutan dan transparan.
          </motion.p>
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Susunan Organ Yayasan
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {structureData.map((organGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg hover:border-green-200"
            >
              <div className="bg-gradient-to-r from-green-600 to-green-500 py-4 px-4">
                <div className="flex items-center justify-center text-white">
                  <span className="text-2xl mr-2">{organGroup.icon}</span>
                  <h3 className="text-xl font-semibold">{organGroup.organ}</h3>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-600 mb-4 text-sm">{organGroup.description}</p>
                <div className="space-y-3">
                  {organGroup.members.map((member, midx) => (
                    <div 
                      key={midx} 
                      className={`py-3 px-2 rounded-lg ${midx !== organGroup.members.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-green-50 transition-colors`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold mr-3 shadow-sm">
                            {member.name.split(' ').map(name => name.charAt(0)).join('')}
                          </div>
                          <span className="font-medium text-gray-800">{member.name}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          member.position === "KETUA" ? "bg-green-100 text-green-800" : 
                          member.position === "SEKRETARIS" ? "bg-blue-100 text-blue-800" : 
                          member.position === "BENDAHARA" ? "bg-amber-100 text-amber-800" : 
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {member.position}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission and Vision section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Misi Kami</h3>
            </div>
            <p className="text-gray-600">
              Memberikan bantuan yang tepat sasaran dan berkelanjutan kepada mereka yang membutuhkan, 
              dengan mengutamakan transparansi, akuntabilitas, dan kolaborasi dengan berbagai pihak untuk 
              menciptakan dampak yang berarti bagi masyarakat Indonesia.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6 hover:shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Visi Kami</h3>
            </div>
            <p className="text-gray-600">
              Menjadi yayasan terpercaya yang mampu membangun jembatan kebaikan antara para donatur 
              dan penerima manfaat, menciptakan ekosistem berbagi yang berkelanjutan, dan mewujudkan 
              masyarakat Indonesia yang lebih sejahtera dan berkeadilan.
            </p>
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-sm p-8 mb-10"
        >
          <h3 className="text-xl font-bold text-center mb-8 text-gray-800">Dampak Yang Telah Kami Berikan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="h-16 w-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-4xl font-bold text-green-600 mb-2">10+</h4>
              <p className="text-gray-600">Program Aktif</p>
            </div>
            <div className="p-4">
              <div className="h-16 w-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="text-4xl font-bold text-green-600 mb-2">500+</h4>
              <p className="text-gray-600">Donasi Tersalurkan</p>
            </div>
            <div className="p-4">
              <div className="h-16 w-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-4xl font-bold text-green-600 mb-2">1000+</h4>
              <p className="text-gray-600">Penerima Manfaat</p>
            </div>
          </div>
        </motion.div>

        {/* Mobile-friendly traditional table view for smaller screens */}
        <div className="md:hidden overflow-x-auto rounded-lg shadow mb-10">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">NAMA</th>
                <th className="py-3 px-4 text-left">ORGAN</th>
                <th className="py-3 px-4 text-left">JABATAN</th>
              </tr>
            </thead>
            <tbody>
              {structureData.flatMap(group => 
                group.members.map((member, idx) => (
                  <tr key={`${group.organ}-${idx}`} className="hover:bg-green-50">
                    <td className="py-3 px-4 border-b">{member.name}</td>
                    <td className="py-3 px-4 border-b">{group.organ}</td>
                    <td className="py-3 px-4 border-b">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        member.position === "KETUA" ? "bg-green-100 text-green-800" : 
                        member.position === "SEKRETARIS" ? "bg-blue-100 text-blue-800" : 
                        member.position === "BENDAHARA" ? "bg-amber-100 text-amber-800" : 
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {member.position}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}