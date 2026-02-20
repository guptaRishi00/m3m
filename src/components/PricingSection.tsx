
import React from 'react';
import Image from 'next/image';
import { DownloadCloud } from 'lucide-react';

interface PricingSectionProps {
    onEnquire: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onEnquire }) => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-normal text-center text-zinc-900 mb-12">
                    Unit Type, Sizes & Pricing Details
                </h2>

                {/* Desktop Pricing Table */}
                <div className="hidden md:block overflow-x-auto mb-16 shadow-lg rounded-lg border border-zinc-200">
                    <table className="w-full border-collapse bg-white text-left">
                        <thead>
                            <tr className="bg-[#1a1a1a] text-white">
                                <th className="py-4 px-8 text-sm font-bold border-r border-zinc-700 w-1/3">Type***</th>
                                <th className="py-4 px-8 text-sm font-bold border-r border-zinc-700 w-1/3">RERA Area***</th>
                                <th className="py-4 px-8 text-sm font-bold w-1/3">Price (in ₹)***</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-zinc-200 hover:bg-zinc-50 transition-colors">
                                <td className="py-6 px-8 text-zinc-900 font-bold border-r border-zinc-100">
                                    Premium 3 BHK Residences
                                </td>
                                <td className="py-6 px-8 text-zinc-900 font-bold border-r border-zinc-100">
                                    1900 - 2200 sq. ft.
                                </td>
                                <td className="py-6 px-8">
                                    <button
                                        onClick={onEnquire}
                                        className="px-6 py-2 border border-zinc-900 rounded text-zinc-900 font-medium hover:bg-zinc-900 hover:text-white transition-all text-sm w-full md:w-auto"
                                    >
                                        View Unit Price
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Mobile Pricing Card */}
                <div className="md:hidden flex flex-col gap-4 mb-16">
                    <div className="bg-white border text-center border-zinc-200 rounded-lg shadow-md overflow-hidden flex flex-col">
                        <div className="bg-[#1a1a1a] text-white py-3 px-5">
                            <h3 className="font-bold text-sm tracking-wide">Premium 3 BHK Residences</h3>
                        </div>
                        <div className="p-5 flex flex-col gap-4">
                            <div className="flex justify-between items-center border-b border-zinc-100 pb-3">
                                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">RERA Area</span>
                                <span className="font-bold text-zinc-900 text-sm">1900 - 2200 sq. ft.</span>
                            </div>
                            <div className="pt-2">
                                <button
                                    onClick={onEnquire}
                                    className="w-full py-3 border border-zinc-900 rounded text-zinc-900 font-bold hover:bg-zinc-900 hover:text-white transition-all text-xs uppercase tracking-wider shadow-sm active:scale-[0.98]"
                                >
                                    View Unit Price
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Image 1: Entrance/Water Feature */}
                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden group shadow-xl">
                        <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
                        <Image
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                            alt="M3M Entrance Water Feature"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>

                    {/* Image 2: Poolside */}
                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden group shadow-xl">
                        <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
                        <Image
                            src="https://m3mindiaresidentialprojects.in/admin_panel/uploads/1768221601_Untitled%20design%20-%202026-01-12T180921.067.jpg"
                            alt="M3M Poolside Lifestyle"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
