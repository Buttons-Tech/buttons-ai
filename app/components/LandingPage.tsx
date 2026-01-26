import React from 'react';
import { ShoppingCart, Flame, Smartphone, UtilityPole, ChevronRight } from 'lucide-react';

export default function LandingPage() {
  const services = [
    { id: 1, name: 'Gas Refill', icon: <Flame className="text-orange-500" />, price: 'From ₦1,200/kg', desc: 'We pick up & return in 20 mins.' },
    { id: 2, name: 'Soup Bundles', icon: <ShoppingCart className="text-green-500" />, price: 'From ₦8,500', desc: 'Pre-cut meat & blended pepper.' },
    { id: 3, name: 'Data/Broadband', icon: <UtilityPole className="text-blue-500" />, price: 'SME Rates', desc: 'Fast internet for your shop.' },
    { id: 4, name: 'Tech Fix', icon: <Smartphone className="text-purple-500" />, price: 'Free Diagnosis', desc: 'Software, Security & Setup.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* --- HERO SECTION --- */}
      <header className="bg-white px-6 py-12 pt-20 text-center border-b shadow-sm">
        <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
          📍 Serving [Your Road Name], Lagos
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Everything on the Road, <br /> 
          <span className="text-green-600">Delivered to your Door.</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-md mx-auto">
          Market prices. Zero traffic. No stress. Pay only when you see your items.
        </p>
        
        <button className="mt-8 w-full max-w-xs bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 mx-auto">
          Start Your Order <ChevronRight size={20} />
        </button>
      </header>

      {/* --- SERVICES GRID --- */}
      <main className="px-6 py-10">
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">What do you need today?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s) => (
            <div key={s.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                {s.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{s.name}</h3>
                <p className="text-xs text-green-600 font-semibold">{s.price}</p>
                <p className="text-sm text-gray-500 mt-1">{s.desc}</p>
              </div>
              <button className="bg-gray-100 p-2 rounded-full self-center text-gray-400">
                <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* --- TRUST BANNER --- */}
        <section className="mt-12 bg-blue-900 rounded-3xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Built for the Neighborhood</h3>
          <p className="text-blue-100 text-sm mb-6">
            We vet every vendor on the road so you don't have to. Real quality, guaranteed.
          </p>
          <div className="flex justify-around items-center opacity-80 text-xs">
            <div>🚀 20min Delivery</div>
            <div>|</div>
            <div>🔒 Safe Payment</div>
            <div>|</div>
            <div>⭐ Local Support</div>
          </div>
        </section>
      </main>
      
      {/* --- BOTTOM STICKY CART (Mobile) --- */}
      <div className="fixed bottom-6 left-0 right-0 px-6">
         <div className="bg-white border shadow-2xl rounded-2xl p-4 flex justify-between items-center max-w-lg mx-auto">
            <div className="flex items-center gap-3">
               <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">0</div>
               <span className="font-semibold text-gray-700 italic">No items yet</span>
            </div>
            <button className="text-green-600 font-bold">View Catalog</button>
         </div>
      </div>
    </div>
  );
}