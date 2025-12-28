import React from 'react';
import { ShieldCheck, GraduationCap, Mic2, ArrowRight, Play } from 'lucide-react';

export default function ProductDiscovery() {
  const isWeekend = new Date().getDay() === 0 || new Date().getDay() === 6;
  
  // Replace this with your actual Spotify Show ID later
  const spotifyLink = "https://open.spotify.com/show/YOUR_SHOW_ID";

  return (
    <div className="space-y-6 pb-10">
      {/* 1. Dynamic Weekend Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-5 shadow-lg text-white mx-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">
            {isWeekend ? "Weekend Vibe" : "Weekend Prep"}
          </h2>
          <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full uppercase font-bold animate-pulse">
            {isWeekend ? "Live Now" : "Coming Up"}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className={`p-3 rounded-xl border ${isWeekend ? 'bg-white/20 border-white/30' : 'bg-white/5 border-white/10'}`}>
            <p className="text-[10px] text-blue-100 uppercase font-bold">Saturday</p>
            <p className="text-sm font-medium">Owambe & Groceries</p>
          </div>
          <div className={`p-3 rounded-xl border ${isWeekend ? 'bg-white/20 border-white/30' : 'bg-white/5 border-white/10'}`}>
            <p className="text-[10px] text-blue-100 uppercase font-bold">Sunday</p>
            <p className="text-sm font-medium">Rest & School Prep</p>
          </div>
        </div>
      </section>

      {/* 2. Product Showcase */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Solutions for You</h2>
          <span className="text-[10px] text-blue-600 font-bold italic underline">View All</span>
        </div>

        {/* Backup App */}
        <ProductCard 
          title="Backup" 
          tagline="Safety first in the city."
          description="Real-time security alerts and emergency contacts."
          icon={<ShieldCheck className="text-red-500" size={24} />}
          bgColor="bg-red-50"
          link="#"
        />

        {/* Bloom App */}
        <ProductCard 
          title="Bloom" 
          tagline="Education made simple."
          description="Manage your school schedule and assignments effortlessly."
          icon={<GraduationCap className="text-blue-500" size={24} />}
          bgColor="bg-blue-50"
          link="#"
        />

        {/* Loud City - Podcast Integrated */}
        <div className="relative group bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
           {/* Background Decoration */}
           <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-purple-600/20 rounded-full blur-2xl"></div>
           
           <div className="flex gap-4 relative z-10">
            <div className="bg-purple-500 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
              <Mic2 className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white">Loud City</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-tight">Hear the pulse of Lagos</span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-ping"></span>
                  </div>
                </div>
                <a href={spotifyLink} target="_blank" className="bg-white/10 p-2 rounded-full text-white hover:bg-white/20">
                  <Play size={14} fill="white" />
                </a>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                The city's biggest podcast app. New episode: "Navigating Lagos Traffic Secrets"
              </p>
              
              <a 
                href={spotifyLink} 
                target="_blank" 
                className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold text-white bg-green-600 px-3 py-1.5 rounded-full hover:bg-green-500 transition-colors"
              >
                Listen on Spotify <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ title, tagline, description, icon, bgColor, link }: { 
  title: string, tagline: string, description: string, icon: React.ReactNode, bgColor: string, link: string 
}) {
  return (
    <a href={link} className="block group bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all active:scale-[0.98]">
      <div className="flex gap-4">
        <div className={`${bgColor} w-14 h-14 rounded-2xl flex items-center justify-center shrink-0`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-slate-800">{title}</h3>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-tight">{tagline}</p>
            </div>
            <ArrowRight size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
          </div>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}