import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
    onEnquireClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onEnquireClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl text-white flex flex-col border-b border-white/10 shadow-lg shadow-black/50">
            <div className="px-6 py-5 flex justify-between items-center w-full">
                {/* Logo Text */}
                <div className="flex flex-col select-none cursor-pointer lg:ml-15">
                    <h1 className="text-4xl font-black tracking-tighter leading-[0.8]">M3M</h1>
                    <p className="text-[10px] font-medium tracking-[0.2em] opacity-90 mt-1">Our Expertise. Your Joy.</p>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-amber-500 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.15em]">
                    <Link href="#home" className="hover:text-amber-500 transition-colors">Home</Link>

                    <Link href="#pricing" className="hover:text-amber-500 transition-colors">Pricing</Link>
                    <Link href="#floor-plan" className="hover:text-amber-500 transition-colors">Amenities</Link>
                    <Link href="#location" className="hover:text-amber-500 transition-colors">Location</Link>
                    <div
                        onClick={onEnquireClick}
                        className="hover:text-amber-500 transition-colors cursor-pointer"
                    >
                        Enquire Now
                    </div>

                    <div className="flex items-center space-x-5 ml-6 pl-6 border-l border-white/10">
                        <a href="tel:+919090907712" className="group relative cursor-pointer">
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
                                <Phone className="w-3.5 h-3.5 group-hover:text-amber-500 transition-colors" />
                            </div>
                        </a>
                        <a href="https://wa.me/919090907712" target="_blank" rel="noopener noreferrer" className="group relative cursor-pointer">
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500/10 transition-all">
                                <MessageCircle className="w-3.5 h-3.5 text-green-500" />
                            </div>
                        </a>
                    </div>
                </nav>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-zinc-950/90 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col space-y-4 text-[11px] font-bold uppercase tracking-[0.15em] animate-in slide-in-from-top-2">
                    <Link href="#home" className="hover:text-amber-500 transition-colors block" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="#project-highlights" className="hover:text-amber-500 transition-colors block" onClick={() => setIsMenuOpen(false)}>Highlights</Link>
                    <Link href="#pricing" className="hover:text-amber-500 transition-colors block" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                    <Link href="#floor-plan" className="hover:text-amber-500 transition-colors block" onClick={() => setIsMenuOpen(false)}>Amenities</Link>
                    <Link href="#location" className="hover:text-amber-500 transition-colors block" onClick={() => setIsMenuOpen(false)}>Location</Link>
                    <div
                        onClick={() => {
                            setIsMenuOpen(false);
                            onEnquireClick();
                        }}
                        className="hover:text-amber-500 transition-colors cursor-pointer"
                    >
                        Enquire Now
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;