export default function Donation() {
    return (
      <section id="donasi" className="my-16 py-12 bg-green-50 rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Donasi</h2>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
            <p className="text-center text-gray-700 mb-6">
              Dukung program-program kami untuk membantu mereka yang membutuhkan di seluruh Indonesia.
              Setiap kontribusi Anda sangat berarti dalam mewujudkan harapan.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="bg-white p-4 rounded-lg shadow-md border border-green-200 transition-all hover:shadow-lg">
                <h3 className="text-xl font-semibold text-green-700 text-center mb-2">Transfer Bank</h3>
                <div className="flex flex-col items-center">
                  <img src="/account_number.jpg" alt="Nomor Rekening" className="w-48 h-48 object-cover rounded-lg mb-3" />
                  <div className="text-center">
                    <p className="font-medium">Teman Sehati Sejati</p>
                    <p className="text-gray-600 font-mono">7250341086</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border border-green-200 transition-all hover:shadow-lg">
                <h3 className="text-xl font-semibold text-green-700 text-center mb-2">QRIS</h3>
                <div className="flex flex-col items-center">
                  <img src="/qris.jpg" alt="Transfer VIA QRIS" className="w-48 h-48 object-cover rounded-lg mb-3" />
                  <p className="text-gray-600 text-sm">Scan untuk donasi melalui e-wallet atau m-banking</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Konfirmasi Donasi</h3>
            <p className="text-gray-600 mb-4">
              Setelah melakukan donasi, silakan konfirmasi melalui WhatsApp untuk mendapatkan laporan penggunaan dana:
            </p>
            <a 
              href="https://wa.me/+6282456789" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Konfirmasi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }