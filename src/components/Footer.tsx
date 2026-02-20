import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { getUTMParameters } from '@/lib/utm';

interface FooterProps {
    onEnquire?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onEnquire }) => {
    const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/918448774030");

    useEffect(() => {
        const params = getUTMParameters();
        const utmString = Object.entries(params)
            .filter(([_, value]) => value !== '')
            .map(([key, value]) => `${key}=${value}`)
            .join(', ');

        if (utmString) {
            const message = encodeURIComponent(`I'm interested in M3M Forestia. (Source: ${utmString})`);
            setWhatsappUrl(`https://wa.me/918448774030?text=${message}`);
        }
    }, []);

    return (
        <footer className="bg-white pt-16 pb-8 border-t border-zinc-100">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Logo Section */}
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-5xl font-black tracking-tighter text-[#4ade80] leading-[0.8]">M3M</h2>
                    <p className="text-[10px] font-medium tracking-[0.2em] text-zinc-600 mt-1">Our Expertise. Your Joy.</p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16 text-center md:text-left">

                    {/* Left Column: Description */}
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-zinc-600 text-sm leading-relaxed max-w-xs text-center md:text-left">
                            One of the fastest growing real estate conglomerates, M3M has customer delight at the very core of its vision. We are always striving to be the best, be it in the projects we develop or the people we work with.
                        </p>
                    </div>

                    {/* Center Column: Contact Info */}
                    <div className="flex flex-col items-center">
                        <p className="text-zinc-800 font-bold mb-4 text-sm">
                            Gurugram: Schedule a Site Visit or get the Brochure, Floor Plans & Pricing
                        </p>
                        <a href="tel:+919220038472" className="text-zinc-900 font-black text-lg mb-2 hover:text-[#005bb7] transition-colors">
                            Call us at +91 92200 38472
                        </a>
                        <a href={whatsappUrl} className="text-zinc-900 font-bold text-sm flex items-center gap-2 hover:text-[#25D366] transition-colors">
                            <MessageCircle className="w-4 h-4 text-[#25D366]" />
                            WhatsApp us at +91 8448774030 instantly!
                        </a>
                    </div>

                    {/* Right Column: Quick Links */}
                    <div className="flex flex-col items-center md:items-end gap-3">
                        <a href="#residential" className="text-zinc-600 hover:text-zinc-900 text-sm transition-colors">Residential</a>
                        <a href="#retail" className="text-zinc-600 hover:text-zinc-900 text-sm transition-colors">Retail</a>
                        <button onClick={onEnquire} className="text-zinc-600 hover:text-zinc-900 text-sm transition-colors font-medium">
                            Enquire Now
                        </button>
                    </div>
                </div>

                {/* Bottom Divider & Disclaimer */}
                <div className="border-t border-zinc-200 pt-8 text-center">
                    <p className="text-zinc-500 text-xs mb-2">
                        Disclaimer: The content provided on this website is for information purposes.
                    </p>
                    <p className="text-zinc-500 text-[10px]">
                        Marketed By – Officially Authorized Channel Partner | RERA : RC/HARERA/GGM/3305/2900/2025/182
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
