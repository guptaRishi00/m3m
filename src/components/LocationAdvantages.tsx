import React from 'react';
import { CheckSquare } from 'lucide-react';

const LocationAdvantages = () => {

    const advantages = [
        "Direct access to NH-48 (Delhi-Jaipur Highway)",
        "Close to Dwarka Expressway",
        "Seamless connectivity via KMP Expressway",
        "Upcoming metro corridors",
        "Easy reach to IGI Airport",
        "Proximity to Cyber City, Udyog Vihar & IMT Manesar",
        "Close to top schools, warehouses, industries & logistics hubs"
    ];

    return (
        <section className="bg-white py-16 md:py-24 border-t border-zinc-100">
            <div className="container mx-auto px-4">

                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 text-center uppercase tracking-wide mb-12">
                    Location Advantages
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    {/* Left Column - Map Image */}
                    <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden shadow-lg border border-zinc-200">
                        {/* Placeholder for Map */}
                        <div className="absolute inset-0 bg-zinc-100 animate-pulse"></div>
                        <img
                            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2662&auto=format&fit=crop"
                            alt="Location Map"
                            className="relative w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                        />
                        {/* Map Pin Overlay Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg animate-bounce"></div>
                            <div className="w-8 h-2 bg-black/20 blur-sm rounded-[100%] absolute bottom-[-10px] left-0 animate-pulse"></div>
                        </div>
                    </div>

                    {/* Right Column - Advantages List */}
                    <div className="w-full md:w-1/2">
                        <ul className="space-y-5">
                            {advantages.map((item, index) => (
                                <li key={index} className="flex items-start gap-4 group">
                                    <div className="mt-0.5 text-[#22c55e] transition-transform group-hover:scale-110">
                                        <CheckSquare className="w-5 h-5 fill-[#22c55e] text-white" />
                                    </div>
                                    <span className="text-zinc-700 font-medium text-sm md:text-base leading-relaxed group-hover:text-zinc-900 transition-colors">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LocationAdvantages;
