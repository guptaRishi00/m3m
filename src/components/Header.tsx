import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
    onEnquireClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onEnquireClick }) => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black text-white px-6 py-5 flex justify-between items-center border-b border-white/5 shadow-lg shadow-black/50">
            {/* Logo Text */}
            <div className="flex flex-col select-none cursor-pointer">
                <h1 className="text-4xl font-black tracking-tighter leading-[0.8]">M3M</h1>
                <p className="text-[10px] font-medium tracking-[0.2em] opacity-90 mt-1">Our Expertise. Your Joy.</p>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.15em]">
                <a href="#" className="hover:text-amber-500 transition-colors">Home</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Our Offerings</a>
                <div
                    onClick={onEnquireClick}
                    className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                    Enquire Now
                </div>

                <div className="flex items-center space-x-5 ml-6 pl-6 border-l border-white/10">
                    <a href="tel:+919220038472" className="group relative cursor-pointer">
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
                            <Phone className="w-3.5 h-3.5 group-hover:text-amber-500 transition-colors" />
                        </div>
                    </a>
                    <a href="https://wa.me/918448774030" target="_blank" rel="noopener noreferrer" className="group relative cursor-pointer">
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500/10 transition-all">
                            <MessageCircle className="w-3.5 h-3.5 text-green-500" />
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;