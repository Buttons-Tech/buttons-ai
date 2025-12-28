import { Scissors, CreditCard, PlusSquare, Coffee } from 'lucide-react';

export default function PointTheWay() {
  return (
    <section className="py-4">
      <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 text-center">Point the Way</h2>
      <div className="flex justify-between items-start px-2">
        <UtilityBtn icon={<Scissors size={20}/>} label="Salons" color="bg-amber-100 text-amber-700" />
        <UtilityBtn icon={<CreditCard size={20}/>} label="POS/ATM" color="bg-blue-100 text-blue-700" />
        <UtilityBtn icon={<PlusSquare size={20}/>} label="Pharmacy" color="bg-green-100 text-green-700" />
        <UtilityBtn icon={<Coffee size={20}/>} label="Co-work" color="bg-purple-100 text-purple-700" />
      </div>
    </section>
  );
}

function UtilityBtn({ icon, label, color }: { icon: React.ReactNode, label: string, color: string }) {
  return (
    <button className="flex flex-col items-center gap-2 group">
      <div className={`${color} p-4 rounded-full transition-transform active:scale-90 shadow-sm`}>{icon}</div>
      <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">{label}</span>
    </button>
  );
}