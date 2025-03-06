import React from 'react';

const Map = () => (
<>
    {/* Map */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="h-64 bg-gray-300 w-full relative">
        {/* Placeholder for Google Maps */}
        <div className="flex items-center justify-center h-full w-full bg-green-50">
        <div className="text-center p-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm text-gray-600">
            Google Maps akan dimuat di sini. <br />
            <span className="text-xs text-gray-500">
                (Untuk implementasi sebenarnya, gunakan Google Maps API)
            </span>
            </p>
        </div>
        </div>
    </div>
    </div>
</>
);

export default Map;