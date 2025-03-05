export default function About() {
    // Group data by organ for better organization
    const structureData = [
      {
        organ: "PEMBINA",
        members: [
          { name: "AHMAD WIRA", position: "KETUA" },
          { name: "ADEL WAHIDI", position: "ANGGOTA" },
          { name: "ALFI SYUKRI RAMA", position: "ANGGOTA" },
        ]
      },
      {
        organ: "PENGURUS",
        members: [
          { name: "DAVY HENDRI", position: "KETUA" },
          { name: "IRSADUNAS", position: "SEKRETARIS" },
          { name: "RIANDY MARDHIKA ADIF", position: "BENDAHARA" },
        ]
      },
      {
        organ: "PENGAWAS",
        members: [
          { name: "ROMI ISKANDAR", position: "KETUA" },
          { name: "LUKMANUL HAKIM", position: "ANGGOTA" },
        ]
      }
    ];
  
    return (
      <section id="tentang" className="my-16 py-12 bg-gradient-to-br from-white to-green-50 rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Susunan Organ Yayasan</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
            Yayasan Teman Sehati Sejati dikelola oleh individu-individu yang berdedikasi untuk mewujudkan
            perubahan positif bagi masyarakat Indonesia.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {structureData.map((organGroup, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-green-200 transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="bg-green-600 py-3 px-4">
                  <h3 className="text-xl font-semibold text-white text-center">{organGroup.organ}</h3>
                </div>
                <div className="p-4">
                  {organGroup.members.map((member, midx) => (
                    <div key={midx} className={`py-3 ${midx !== organGroup.members.length - 1 ? 'border-b border-gray-100' : ''}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold mr-3">
                            {member.name.charAt(0)}
                          </div>
                          <span className="font-medium">{member.name}</span>
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
            ))}
          </div>
  
          {/* Mobile-friendly traditional table view for smaller screens */}
          <div className="md:hidden overflow-x-auto rounded-lg shadow">
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