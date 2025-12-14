'use client'
import React, { useState, useEffect } from 'react';

// --- MOCK DATA (Move this to your Node Backend later) ---
const MARKET_DATA = [
  { item: "50kg Rice", market: "₦110,000", us: "₦105,000", status: "good" },
  { item: "12.5kg Gas", market: "₦19,500", us: "₦18,500", status: "good" },
  { item: "Tomato (Basket)", market: "₦85,000", us: "₦90,000", status: "bad" }, 
];

const PRODUCTS = [
  { id: 1, name: "Foreign Rice (50kg)", price: 105000, category: "Food", image: "🍚", desc: "Premium parboiled, stone-free." },
  { id: 2, name: "Cooking Gas (12.5kg)", price: 18500, category: "Gas", image: "🔥", desc: "Refill service. We pick up cylinder." },
  { id: 3, name: "Diesel (25 Litres)", price: 32000, category: "Fuel", image: "⛽", desc: "Generator friendly. delivered in keg." },
  { id: 4, name: "Ice Block (Pack of 10)", price: 3000, category: "Chill", image: "❄️", desc: "Solid blocks, lasts 24hrs." },
  { id: 5, name: "Crate of Eggs", price: 5500, category: "Food", image: "🥚", desc: "Large size, fresh from farm." },
  { id: 6, name: "Semovita (10kg)", price: 14000, category: "Food", image: "🥣", desc: "Golden Penny." },
];

const STATUS_UPDATES = {
  weather: "☁️ Cloudy (Rain likely)",
  traffic: "🚗 Gate 1: Free Flow",
  security: "🛡️ Estate Gates: Locked at 10PM"
};

// --- COMPONENT START ---
function MyRoadApp() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // --- LOGIC: Add to Cart ---
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // --- LOGIC: Remove/Decrease ---
  const removeFromCart = (id) => {
    setCart((prev) => prev.reduce((acc, item) => {
      if (item.id === id) {
        if (item.qty === 1) return acc;
        return [...acc, { ...item, qty: item.qty - 1 }];
      }
      return [...acc, item];
    }, []));
  };

  // --- LOGIC: WhatsApp Checkout ---
  const handleCheckout = () => {
    const phoneNumber = "2349066596603"; // REPLACE WITH YOUR NUMBER
    const address = prompt("Please enter your House Number (e.g., Block 5, Flat 2):");
    
    if (!address) return;

    let message = `*Order for [Road Name]*\n\n`;
    cart.forEach(item => {
      message += `▪️ ${item.qty}x ${item.name} - ₦${(item.price * item.qty).toLocaleString()}\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    message += `\n*TOTAL: ₦${total.toLocaleString()}*`;
    message += `\n\n📍 *Address:* ${address}`;
    message += `\n💳 *Payment:* Pay on Delivery`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans">
      
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 bg-green-700 text-white p-4 shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight">The Road Hub</h1>
          <p className="text-xs text-green-200">Your Street. Your Pocket.</p>
        </div>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative bg-green-800 p-2 rounded-full"
        >
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </header>

      {/* 2. STATUS BAR (The Hook) */}
      <div className="bg-slate-900 text-white p-4">
        <div className="flex justify-between text-xs font-mono mb-4 border-b border-slate-700 pb-2">
          <span>{STATUS_UPDATES.weather}</span>
          <span>{STATUS_UPDATES.traffic}</span>
        </div>

        {/* Price Ticker */}
        <div className="bg-slate-800 rounded-lg p-3">
          <h3 className="text-yellow-400 text-xs font-bold uppercase mb-2 tracking-wide">📉 Market Watch (Today)</h3>
          <div className="space-y-2">
            {MARKET_DATA.map((d, i) => (
              <div key={i} className="flex justify-between text-sm items-center">
                <span className="text-slate-300 w-1/3">{d.item}</span>
                <span className="text-slate-500 line-through text-xs w-1/3 text-center">{d.market}</span>
                <span className={`font-bold w-1/3 text-right ${d.status === 'good' ? 'text-green-400' : 'text-red-400'}`}>
                  {d.us}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. CATEGORIES */}
      <div className="p-4 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {["All", "Food", "Gas", "Fuel", "Chill"].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat 
              ? "bg-green-700 text-white shadow-md" 
              : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 4. PRODUCT GRID */}
      <div className="px-4 grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="h-24 bg-gray-100 flex items-center justify-center text-4xl">
              {product.image}
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="font-bold text-gray-800 text-sm">{product.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{product.desc}</p>
              <div className="mt-auto flex justify-between items-center">
                <span className="font-bold text-green-700">₦{(product.price/1000).toFixed(1)}k</span>
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-green-100 text-green-700 hover:bg-green-200 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. CART MODAL (Slide Up) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          
          {/* Modal Content */}
          <div className="bg-white w-full sm:w-96 rounded-t-2xl sm:rounded-2xl p-6 relative z-10 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Basket</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your basket is empty.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <div>
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">₦{item.price.toLocaleString()} x {item.qty}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => removeFromCart(item.id)} className="w-6 h-6 bg-gray-200 rounded text-gray-600">-</button>
                      <span className="font-medium">{item.qty}</span>
                      <button onClick={() => addToCart(item)} className="w-6 h-6 bg-green-100 text-green-700 rounded">+</button>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-lg font-bold mb-4">
                    <span>Total</span>
                    <span>₦{cartTotal.toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={handleCheckout}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>📲</span> Order via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyRoadApp;