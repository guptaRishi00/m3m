import React from 'react';
import Image from 'next/image';
import { MinusCircle } from 'lucide-react';

interface ResidentialProjectsProps {
    onEnquire?: () => void;
}

const ResidentialProjects: React.FC<ResidentialProjectsProps> = ({ onEnquire }) => {

    const projects = [
        {
            title: "M3M ST. ANDREWS",
            location: "Sector 113, Dwarka Expressway, Gurgaon",
            type: "Type: 3.5 BHK, 4.5 BHK & Luxury Penthouses",
            size: "Size: 2730 - 7400 Sq. Ft.",
            price: "Starting from ₹6.0 Cr* Onwards",
            status: "Under Construction",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1770886911_Untitled%20design%20(4).png"
        },
        {
            title: "M3M CROWN",
            location: "Sector 111 Dwarka Expressway",
            type: "Type: 3 & 4 BHK",
            size: "Size: 1605 to 2670 sq. ft.",
            price: "Starting from ₹3.50 Cr* Onwards",
            status: "New Launch",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1749368529_Untitled%20design%20(91).jpg"
        },
        {
            title: "M3M MANSION",
            location: "Sector 113 Dwarka Expressway",
            type: "Type: 3, 4 & 5 BHK",
            size: "Size: 2080 to 3230 sq. ft.",
            price: "Starting from ₹4.99 Cr* Onwards",
            status: "New Launch",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/projects/1749369478_Untitled%20design%20(94).jpg"
        },
        {
            title: "M3M ALTITUDE",
            location: "Sector 65 Gurgaon",
            type: "Type: 4 BHK",
            size: "Size: 3,712 to 8,200 sq. ft.",
            price: "Starting from ₹9.00 Cr* Onwards",
            status: "New Launch",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1749376833_Untitled%20design%20(97).jpg"
        },
        {
            title: "M3M GOLF HILLS",
            location: "Sector 79 Gurgaon",
            type: "Type: 2, 3 & 4BHK",
            size: "Size: 1420 to 7200 sq.ft.",
            price: "Starting from ₹2.50 Cr* Onwards",
            status: "New Launch",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1749377824_Untitled%20design%20(100).jpg"
        },
        {
            title: "M3M ANTALYA HILLS",
            location: "Sector 79 Gurgaon",
            type: "Type: 1.5, 2.5, 3.5 BHK",
            size: "Size: 1100 to 1670 sq.ft.",
            price: "Starting from ₹1.70 Cr* Onwards",
            status: "Under Construction",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1749378968_Untitled%20design%20-%202025-06-08T160516.995.jpg"
        },
        {
            title: "M3M FORESTIA GIC",
            location: "Gurgaon, Manesar",
            type: "Type: 3 & 3.5 BHK",
            size: "Size: 1900 - 2500 sq ft.",
            price: "Starting from ₹2.5 Cr* Onwards",
            status: "New Launch",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1768221952_Untitled%20design%20-%202026-01-12T181525.971.jpg"
        },
        {
            title: "M3M ELIE SAAB",
            location: "Sector 111 Gurugram",
            type: "Type: 4 BHK + Utility",
            size: "Size: 4,150 sq.ft.",
            price: "Starting from ₹14 Cr* Onwards",
            status: "New Launch",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1768473669_M3M%20Elie%20Saab%20%20Desk.jpg"
        },
        {
            title: "M3M CAPITAL",
            location: "Sector 113, Dwarka Expressway",
            type: "Type: 2, 3 & 4 BHK Apartments",
            size: "Size: 1300 - 2290 Sq. Ft.",
            price: "Starting from ₹5.2 Cr* Onwards",
            status: "Under construction",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1770887401_Untitled%20design%20(9).png"
        }
    ];

    return (
        <section className="bg-white py-16 md:py-20 border-t border-zinc-100">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#002f5b] mb-6 tracking-wide">
                        M3M RESIDENTIAL PROJECTS
                    </h2>
                    <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                        M3M's residential projects offer luxury-focused homes with premium amenities, strategic locations, and modern design tailored for comfort and lifestyle. They feature a range of apartments, penthouses, and villas with robust security and green spaces. Known for quality construction and strong resale potential in key NCR micro markets.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow border border-zinc-100 flex flex-col">
                            {/* Image Area */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white text-black text-[10px] font-bold px-3 py-1.5 uppercase tracking-wide rounded-sm shadow-sm">
                                    {project.status}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-serif text-[#002f5b] tracking-wide">
                                        {project.title}
                                    </h3>
                                    <MinusCircle className="w-5 h-5 text-zinc-400 stroke-1" />
                                </div>

                                <p className="text-xs text-zinc-500 mb-4 h-8">
                                    {project.location}
                                </p>

                                <div className="space-y-2 mb-6">
                                    <div className="bg-zinc-50 px-3 py-1.5 rounded text-[10px] font-bold text-zinc-700 inline-block mr-2 border border-zinc-100">
                                        {project.type}
                                    </div>
                                    <div className="bg-zinc-50 px-3 py-1.5 rounded text-[10px] font-bold text-zinc-700 inline-block border border-zinc-100">
                                        {project.size}
                                    </div>
                                </div>

                                <button
                                    onClick={onEnquire}
                                    className="w-full mt-auto bg-[#22c55e] hover:bg-[#16a34a] text-white py-2.5 rounded text-xs font-bold uppercase tracking-wide transition-colors shadow-md shadow-green-900/10"
                                >
                                    {project.price}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ResidentialProjects;
