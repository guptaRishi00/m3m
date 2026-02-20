import React, { useState } from 'react';
import { Ruler, Home, CreditCard, Building2, LayoutTemplate, Phone, FileText, CheckCircle2 } from 'lucide-react';
import { getUTMParameters } from '@/lib/utm';

const ProjectHighlights = () => {
    const handleBrochureDownload = () => {
        const params = getUTMParameters();
        const query = new URLSearchParams(params as any).toString();
        const basePath = '/brochure.pdf';
        const url = query ? `${basePath}?${query}` : basePath;
        window.open(url, '_blank');
    };

    const handleViewNumber = () => {
        window.location.href = 'tel:+919220038472';
    };

    return (
        <section className="bg-white">
            {/* Top Banner */}
            <div className="bg-[#1e1b4b] relative overflow-hidden">
                {/* Abstract BG Decorations */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-[#1e1b4b] to-[#1e1b4b]"></div>

                <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        {/* Event Logo Area */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="relative inline-block">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 drop-shadow-sm tracking-tighter">
                                    2026
                                </h2>
                                <p className="text-white font-bold uppercase tracking-widest text-sm md:text-base border-t border-b border-amber-500/50 py-1 mt-1">
                                    Big Billion Property Sale
                                </p>
                            </div>
                        </div>

                        {/* Center Text */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl md:text-5xl font-black text-amber-500 uppercase leading-none tracking-tight">
                                BUY <br /><span className="text-white">SELL</span> <br />LEASE
                            </h3>
                            <p className="text-zinc-400 text-[10px] uppercase tracking-[0.3em] mt-2">All Under One Roof</p>
                        </div>

                        {/* Offer Box */}
                        <div className="bg-[#1a1844] border border-amber-500/30 p-6 rounded-xl shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] text-center max-w-xs">
                            <p className="text-zinc-300 text-sm mb-1">New Customers</p>
                            <h4 className="text-white font-bold leading-tight">
                                Buy Property <br /> By Just Paying at
                            </h4>
                            <div className="text-5xl font-black text-amber-500 my-2">20%</div>
                            <div className="bg-amber-500 text-[#1e1b4b] text-xs font-bold px-3 py-1 rounded-full inline-block">
                                Offer Valid till 1st of March
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-amber-50 border-b border-amber-100 py-3 text-center">
                <p className="text-sm font-semibold text-amber-900 flex items-center justify-center gap-2">
                    <span className="animate-pulse">👉</span>
                    Click here to know more about this exclusive offer
                </p>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column - Details */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
                            Experience Nature-Inspired Luxury Living with Future-Ready Infrastructure
                        </h2>

                        <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-10 text-justify">
                            M3M Forestia GIC Manesar Gurugram is a landmark forest-themed ultra-luxury residential development within the prestigious Gurugram International City (GIC). Developed by M3M India, this premium township is spread across a massive 150-acre integrated city and is designed to offer an elevated lifestyle surrounded by nature, world-class infrastructure, and seamless connectivity. With premium 3 BHK residences and high-end lifestyle amenities, M3M Forestia is emerging as one of the most promising residential and investment destinations in New Gurgaon.
                        </p>

                        <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-10">
                            <div className="flex gap-3">
                                <div className="mt-1"><Ruler className="w-5 h-5 text-zinc-800" /></div>
                                <div>
                                    <h5 className="font-bold text-zinc-900 text-sm">Project Area:</h5>
                                    <p className="text-zinc-500 text-sm">150 Acres</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-1"><LayoutTemplate className="w-5 h-5 text-zinc-800" /></div>
                                <div>
                                    <h5 className="font-bold text-zinc-900 text-sm">Sizes:</h5>
                                    <p className="text-zinc-500 text-sm">1900 - 2200 sq. ft.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-1"><Home className="w-5 h-5 text-zinc-800" /></div>
                                <div>
                                    <h5 className="font-bold text-zinc-900 text-sm">Configurations:</h5>
                                    <p className="text-zinc-500 text-sm">3 BHK Luxury Apartments</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-1"><CreditCard className="w-5 h-5 text-zinc-800" /></div>
                                <div>
                                    <h5 className="font-bold text-zinc-900 text-sm">Payment Plan:</h5>
                                    <p className="text-blue-600 font-medium text-sm">Flexible CLP</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-1"><Building2 className="w-5 h-5 text-zinc-800" /></div>
                                <div>
                                    <h5 className="font-bold text-zinc-900 text-sm">Project Size:</h5>
                                    <p className="text-zinc-500 text-sm">G+35 Towers</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={handleViewNumber} className="flex-1 bg-[#005bb7] hover:bg-[#004a99] text-white py-3 px-6 rounded-md font-bold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-blue-900/10">
                                View Number
                            </button>
                            <button onClick={handleBrochureDownload} className="flex-1 border border-[#005bb7] text-[#005bb7] hover:bg-blue-50 py-3 px-6 rounded-md font-bold text-sm uppercase tracking-wide transition-colors flex items-center justify-center gap-2">
                                <FileText className="w-4 h-4" /> Brochure
                            </button>
                            <button className="flex-1 border border-zinc-300 text-zinc-600 hover:border-[#005bb7] hover:text-[#005bb7] py-3 px-6 rounded-md font-medium text-sm transition-colors flex items-center justify-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Approved RERA Status
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        {/* Placeholder for the Mall/Interior Image */}
                        <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
                        {/* You would use next/image here in production */}
                        <img
                            src="https://m3mindiarealty.com/images/highlights4.webp"
                            alt="M3M Interior"
                            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectHighlights;
