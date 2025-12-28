import React from 'react';
import { 
  CloudRain, 
  Car, 
  TrendingUp, 
  Scissors, 
  CreditCard, 
  PlusSquare, 
  Coffee, 
  Truck, 
  Sparkles, 
  ShoppingBag 
} from 'lucide-react';

export default function LagosAssistHome() {
  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen pb-20 font-sans">
      {/* Header */}
      <header className="p-6 bg-white border-b border-slate-100 flex justify-between items-center">
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">LAGOS ASSIST</h1>
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
          JD
        </div>
      </header>

      <main className="p-4 space-y-6">
        
        {/* Section 1: The Daily 3 */}
        <section>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Your Daily  3</h2>
          <div className="grid grid-cols-2 gap-3 mb-3">
            {/* Traffic Card */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <Car size={18} />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Commute Pulse</span>
              </div>
              <p className="text-sm font-medium text-slate-700 leading-tight">3rd Mainland is FREE. Eko Bridge light.</p>
            </div>

            {/* Weather Card */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 text-amber-500 mb-2">
                <CloudRain size={18} />
                <span className="text-[10px] font-bold uppercase tracking-tighter">Rain & Flood</span>
              </div>
              <p className="text-sm font-medium text-slate-700 leading-tight text-amber-600">40% rain at 4 PM—avoid Island roads.</p>
            </div>
          </div>

          {/* Market Rate Full Width */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Market Rate</p>
                <p className="text-sm font-semibold text-slate-800">USD/NGN: ₦1,480 (Parallel)</p>
              </div>
            </div>
            <div className="text-right border-l pl-4 border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Petrol</p>
              <p className="text-sm font-semibold text-slate-800">₦720/L</p>
            </div>
          </div>
        </section>

        {/* Section 2: Point the Way (Circular Buttons) */}
        <section>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 text-center">Point the Way</h2>
          <div className="flex justify-between items-start px-2">
            <UtilityButton icon={<Scissors size={20}/>} label="Salons" color="bg-amber-100 text-amber-700" />
            <UtilityButton icon={<CreditCard size={20}/>} label="POS/ATM" color="bg-blue-100 text-blue-700" />
            <UtilityButton icon={<PlusSquare size={20}/>} label="Pharmacy" color="bg-green-100 text-green-700" />
            <UtilityButton icon={<Coffee size={20}/>} label="Co-work" color="bg-purple-100 text-purple-700" />
          </div>
        </section>

        {/* Section 3: Weekly Needs */}
        <section className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
          <h2 className="text-center font-bold text-slate-800 mb-4">Your Weekly Planner</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Monday - Wednesday: Productivity</p>
              <div className="flex gap-3">
                <SmallAction icon={<Truck size={16}/>} label="Dispatch" />
                <SmallAction icon={<Sparkles size={16}/>} label="Car Wash" />
                <SmallAction icon={<ShoppingBag size={16}/>} label="Laundry" />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

// Sub-components for cleaner code
function UtilityButton({ icon, label, color }: { icon: React.ReactNode, label: string, color: string }) {
  return (
    <button className="flex flex-col items-center gap-2 group">
      <div className={`${color} p-4 rounded-full transition-transform active:scale-90 shadow-sm`}>
        {icon}
      </div>
      <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">{label}</span>
    </button>
  );
}

function SmallAction({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex-1 bg-white p-3 rounded-xl border border-slate-200 flex items-center justify-center gap-2 hover:border-blue-300 transition-colors">
      <span className="text-slate-500">{icon}</span>
      <span className="text-xs font-semibold text-slate-700">{label}</span>
    </button>
  );
}