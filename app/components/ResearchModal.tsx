'use client'
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function ResearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [thought, setThought] = useState('');

  useEffect(() => {
    // Show pop-up after 4 seconds
    const timer = setTimeout(() => setIsOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative bg-[#FFEB3B] border-4 border-black p-8 w-full max-w-lg shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute -top-4 -right-4 bg-black text-white p-2 border-2 border-white rounded-full"
        >
          <X size={24} />
        </button>

        <h2 className="text-4xl font-black uppercase italic leading-none mb-4">
          Wait! <br /> Help us build.
        </h2>
        
        <p className="font-bold text-black text-lg mb-6 leading-tight">
          What is the <span className="underline decoration-4">one thing</span> on this road that stresses you out the most?
        </p>

        <textarea 
          placeholder="E.g. No ATM has cash, or Gas is too heavy..."
          className="w-full bg-white border-4 border-black p-4 font-bold text-lg outline-none focus:ring-4 ring-green-600/30 mb-4"
          rows={3}
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        />

        <button 
          onClick={() => {
            console.log("Logged Demand:", thought);
            setIsOpen(false); 
            // Here you'll trigger your MongoDB save
          }}
          className="w-full bg-black text-white font-black py-4 uppercase italic text-xl tracking-tighter hover:bg-green-600 transition-colors"
        >
          Tell Buttons
        </button>
        
        <p className="text-center mt-4 text-[10px] font-bold uppercase opacity-60">
          Skip to browse services
        </p>
      </div>
    </div>
  );
}