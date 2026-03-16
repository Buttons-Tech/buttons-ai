'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

// This fixes the 'response' implicitly has an 'any' type error
interface PaystackResponse {
    reference: string;
    status: string;
}

const EasterEventCard = () => {
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePayment = (e: React.MouseEvent) => {
        e.preventDefault();
        
        if (!phone || phone.length < 10) {
            alert("Please enter a valid phone number to proceed.");
            return;
        }

        setLoading(true);

        // Using phone number as a virtual email for Paystack
        const virtualEmail = `${phone}@buttons-tech.com`;

// @ts-expect-error - PaystackPop is loaded via external script        
const handler = window.PaystackPop.setup({
key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY, // Pulls from .env            
email: virtualEmail,
            amount: 10000 * 100, // 10,000 Naira in kobo
            currency: 'NGN',
            callback: function(response: PaystackResponse) {
                setLoading(false);
                const message = encodeURIComponent(
                    `🎟️ *ACTIVATE WITH SKY 2.0 TICKET*\n\n` +
                    `Hello Coach Sky, I just paid ₦10,000 for the Easter Party.\n\n` +
                    `📞 Phone: ${phone}\n` +
                    `💳 Ref: ${response.reference}`
                );
                // Redirect to WhatsApp chat
                window.location.href = `https://wa.me/2349033811883?text=${message}`;
            },
            onClose: function() {
                setLoading(false);
                alert('Transaction cancelled.');
            }
        });
        handler.openIframe();
    };

    return (
        <>
            <Script src="https://js.paystack.co/v1/inline.js" strategy="beforeInteractive" />
            
            <div className="max-w-md mx-auto bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Header Image/Gradient Section */}
                <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700 p-6 flex flex-col justify-end" style={{backgroundImage: 'url("/activate.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full w-fit mb-2">
                        EASTER 2.0
                    </span>
                    <h2 className="text-white text-2xl font-extrabold tracking-tight">
                        Activate with Sky
                    </h2>
                </div>

                <div className="p-6 space-y-6">
                    {/* Event Details */}
                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">📅</span>
                            <span className="font-semibold">April 4th, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg">📍</span>
                            <span>Governors Road, Ikotun (Serviced Apt)</span>
                        </div>
                    </div>

                    {/* Pricing Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Male</p>
                            <p className="text-xl font-bold text-slate-800">₦15,000</p>
                            <p className="text-[10px] text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded-md mt-1 inline-block">
                                ₦10,000 Early Bird
                            </p>
                        </div>
                        <Link href="https://forms.gle/JPA8CAKaJwZukHBL7">  
                            <div className="bg-green-200 p-4 rounded-2xl border border-slate-100">
                                <p className="text-xs text-black font-medium uppercase tracking-wider">Female</p>
                                <p className="text-xl font-bold text-green-600 uppercase">Free</p>
                                <p className="text-[10px] text-slate-900 mt-1 italic">Registration req.</p>
                            </div>
                        </Link>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{`What's Happening`}</p>
                        <ul className="text-sm text-slate-700 grid grid-cols-1 gap-1">
                            <li className="flex items-center gap-2">✨ Free Drinks & Chops</li>
                            <li className="flex items-center gap-2">🎁 First 20 guests get gifts</li>
                            <li className="flex items-center gap-2">🎮 FIFA, PS Games & Charades</li>
                            <li className="flex items-center gap-2">🤝 Business Networking</li>
                        </ul>
                    </div>

                    {/* Input Area */}
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Phone Number</label>
                        <input 
                            type="tel"
                            placeholder="e.g. 08033811883"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 text-slate-800"
                        />
                    </div>

                    {/* Action Button */}
                    <button 
                        onClick={handlePayment}
                        disabled={loading}
                        className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-200 transition-all active:scale-95 disabled:bg-slate-400"
                    >
                        {loading ? "Processing..." : "Pay ₦10,000 Now"}
                    </button>

                    {/* Footer Info */}
                    <div className="pt-4 border-t border-slate-100 text-center space-y-2">
                        <p className="text-xs text-slate-500">
                            Host: <span className="font-bold text-slate-700">Coach Sky</span>
                        </p>
                        <p className="text-[10px] text-slate-400">
                            Powered by <span className="font-semibold">Buttons Technology</span>
                        </p>
                        <div className="mt-2">
                            <a href="tel:09033811883" className="text-xs text-indigo-500 font-medium hover:underline">
                                Partnership: 09033811883
                            </a>        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EasterEventCard;