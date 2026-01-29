import React from "react";
import {
  Smartphone,
  Banknote,
  Flame,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ResearchModal from "./components/ResearchModal";

interface ServiceCardProps {
  title: string;
  sub: string;
  icon: React.ReactNode; // This handles the Lucide icons
  status: string;
  color: string;
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#00C853] font-sans text-black selection:bg-yellow-300">
      {/* 1. BLINKING MARQUEE TOP BAR */}
      <div className="bg-black text-[#FFEB3B] py-2 overflow-hidden border-b-2 border-black">
        <div className="animate-marquee whitespace-nowrap font-black uppercase text-sm italic">
          ⚠️ Buttons is coming to ISUTI road • Join the Priority List • ⚠️
        </div>
      </div>

      {/* 2. HERO SECTION WITH VIDEO OVERLAY */}
      <section className="relative h-[70vh] flex flex-col justify-end p-6 border-b-4 border-black overflow-hidden">
        {/* Replace with your neighborhood video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale-[50%] contrast-125"
        >
          <source src="/neighborhood-hustle.mp4" type="video/mp4" />
        </video>

        {/* Dark Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="relative z-10 mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] italic uppercase tracking-tighter">
            MAKE <br />
            <span className="text-[#FFEB3B] bg-black px-2">THINGS</span> <br />
            HAPPEN
          </h1>
          <p className="mt-4 text-white font-bold text-xl max-w-sm uppercase leading-tight">
            Your neighborhood services, <br /> One button away.
          </p>
        </div>
      </section>

      {/* 3. THE "BUTTONS" GRID - DEMAND CAPTURE */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 -mt-10 relative z-20">
        {/* POS / CASH SERVICE */}
        <ServiceCard
          title="Cash To Door"
          sub="Avoid ATM queues. We bring the POS to you."
          icon={<Banknote size={32} />}
          status="Coming Soon"
          color="bg-[#FFEB3B]"
        />

        {/* GAS SERVICE */}
        <ServiceCard
          title="Gas Refill"
          sub="We pick up, refill & return in 20 mins."
          icon={<Flame size={32} />}
          status="Coming Soon"
          color="bg-white"
        />

        {/* TECH CONCIERGE (Your current active skill) */}
        <ServiceCard
          title="Tech Fix"
          sub="Software, Security, & High-End Gadgets."
          icon={<Smartphone size={32} />}
          status="Live Chat"
          color="bg-[#FFEB3B]"
        />

        {/* MARKET BUNDLE */}
        <ServiceCard
          title="Market Box"
          sub="Fresh soup ingredients, pre-prepped."
          icon={<ShoppingBag size={32} />}
          status="Coming Soon"
          color="bg-white"
        />
      </main>

      {/* 4. THE TRUST SECTION (YOU) */}
      <section className="p-8 bg-black text-white mt-10 mb-20 rounded-t-[3rem]">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full border-4 border-[#FFEB3B] overflow-hidden mb-4">
            <Image
              src="/my-photo.jpg"
              alt="Founder"
              className="object-cover w-full h-full"
              width={96}
              height={96}
            />
          </div>
          <h2 className="text-2xl font-black uppercase italic text-[#FFEB3B]">The Founder&apos;s Promise</h2>

          <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-md">
            {`            "As a Software Engineer and your Neighbor. I built **Buttons** to fix the stress of Isuti Road. No middlemen, just tech-driven service you can trust."  @ohakwechi
`}{" "}
          </p>
          <button className="mt-6 border-2 border-[#FFEB3B] text-[#FFEB3B] px-6 py-2 font-bold uppercase hover:bg-[#FFEB3B] hover:text-black transition-all">
            Talk to me on WhatsApp
          </button>
        </div>
        <WhatsAppFloat/>
        <ResearchModal/>
      </section>
    </div>
  );
}

function ServiceCard({ title, sub, icon, status, color }: ServiceCardProps) {
  return (
    <div
      className={`${color} border-4 border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group`}
    >
      <div className="flex justify-between items-start">
        <div className="p-2 border-2 border-black">{icon}</div>
        <span className="text-[10px] font-black uppercase border-2 border-black px-2 py-1 bg-black text-white italic">
          {status}
        </span>
      </div>
      <h3 className="text-4xl font-black mt-6 leading-none italic uppercase tracking-tighter">
        {title}
      </h3>
      <p className="mt-2 font-bold text-xs uppercase opacity-70 tracking-tight">
        {sub}
      </p>
      <div className="mt-6 flex items-center gap-2 font-black text-sm uppercase italic group-hover:gap-4 transition-all">
        Notify Me <ArrowRight size={16} />
      </div>
    </div>
  );
}
