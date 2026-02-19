import React from 'react';

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

                {/* Pricing Table */}
                <div className="overflow-x-auto mb-16 shadow-lg rounded-lg border border-zinc-200">
                    <table className="w-full min-w-[800px] border-collapse bg-white text-left">
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
                                        className="px-6 py-2 border border-zinc-900 rounded text-zinc-900 font-medium hover:bg-zinc-900 hover:text-white transition-all text-sm"
                                    >
                                        View Unit Price
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Gallery Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Image 1: Entrance/Water Feature */}
                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden group shadow-xl">
                        <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                            alt="M3M Entrance Water Feature"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>

                    {/* Image 2: Poolside */}
                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden group shadow-xl">
                        <div className="absolute inset-0 bg-zinc-200 animate-pulse"></div>
                        <img
                            src="https://m3mindiaresidentialprojects.in/admin_panel/uploads/1768221601_Untitled%20design%20-%202026-01-12T180921.067.jpg"
                            alt="M3M Poolside Lifestyle"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
