import { Car, CloudRain, TrendingUp } from 'lucide-react';

export default function DailyThree() {
  return (
    <section className="mt-4">
      {/* <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Your Daily 3</h2>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 text-green-600 mb-2">
            <Car size={18} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Commute Pulse</span>
          </div>
          <p className="text-sm font-medium text-slate-700 leading-tight">3rd Mainland is FREE. Eko Bridge light.</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 text-amber-500 mb-2">
            <CloudRain size={18} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Rain & Flood</span>
          </div>
          <p className="text-sm font-medium text-slate-700 leading-tight text-amber-600">40% rain at 4 PM—avoid Island roads.</p>
        </div>
      </div> */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><TrendingUp size={20} /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Market Rate</p>
            <p className="text-sm font-semibold text-slate-800">USD/NGN: ₦1,480</p>
          </div>
        </div>
        <div className="text-right border-l pl-4 border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Petrol</p>
          <p className="text-sm font-semibold text-slate-800">₦720/L</p>
        </div>
        <div className="text-right border-l pl-4 border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Gas</p>
          <p className="text-sm font-semibold text-slate-800">₦1300/kg</p>
        </div>
      </div>
    </section>
  );
}