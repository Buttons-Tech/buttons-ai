import React from 'react';
import { Truck, Sparkles, ShoppingBag, Music, Utensils, Church } from 'lucide-react';

export default function WeeklyPlanner() {
  // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday
  const today = new Date().getDay();
  const isWeekend = today === 0 || today === 6;

  return (
    <section className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-slate-800">Your Weekly Planner</h2>
        <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-bold uppercase">
          {isWeekend ? "Weekend Mode" : "Weekday Flow"}
        </span>
      </div>
      
      <div className="space-y-4">
        {!isWeekend ? (
          /* Work Week View (Monday - Friday) */
          <div className="p-4 bg-slate-50 rounded-2xl">
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-wide">
              Monday - Friday: Productivity
            </p>
            <div className="flex gap-3">
              <SmallAction icon={<Truck size={16}/>} label="Dispatch" />
              <SmallAction icon={<Sparkles size={16}/>} label="Car Wash" />
              <SmallAction icon={<ShoppingBag size={16}/>} label="Laundry" />
            </div>
          </div>
        ) : (
          /* Weekend View (Saturday - Sunday) */
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <p className="text-[10px] font-bold text-indigo-400 uppercase mb-3 tracking-wide">
              Saturday - Sunday: Lifestyle
            </p>
            <div className="flex gap-3">
              <SmallAction icon={<Utensils size={16}/>} label="Eat Out" />
              <SmallAction icon={<Music size={16}/>} label="Events" />
              <SmallAction icon={<Church size={16}/>} label="Worship" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function SmallAction({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex-1 bg-white p-3 rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-1 hover:border-blue-300 transition-all active:scale-95 shadow-sm">
      <span className="text-slate-500">{icon}</span>
      <span className="text-[10px] font-semibold text-slate-700">{label}</span>
    </button>
  );
}