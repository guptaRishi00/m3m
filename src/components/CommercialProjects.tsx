import React from 'react';
import { MinusCircle } from 'lucide-react';

interface CommercialProjectsProps {
    onEnquire?: () => void;
}

const CommercialProjects: React.FC<CommercialProjectsProps> = ({ onEnquire }) => {

    const projects = [
        {
            title: "M3M PARAGON 57",
            location: "Sector 57, Gurugram",
            type: "Type: Hi-street Retail Shops",
            size: "Size: 500 - 2000sqft.",
            price: "Starting from ₹ 1.40 Cr* Onwards",
            status: "Under Construction",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1749390731_Untitled%20design%20-%202025-06-08T191407.753.jpg"
        },
        {
            title: "M3M ROUTE65",
            location: "Sector 65 Gurgaon",
            type: "Type: Retail, Food courts",
            size: "Size: 300 to 2,500+ sq. ft.",
            price: "Starting from ₹ 90 Lacs* Onwards",
            status: "Under Construction",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1749447308_Untitled%20design%20-%202025-06-09T110343.772.jpg"
        },
        {
            title: "M3M JEWEL",
            location: "Sector 25, MG Road, Gurgaon",
            type: "Type: Retail/Food court",
            size: "Size: 300 to 5,000 sq. ft.",
            price: "Starting from ₹ 2 Cr* Onwards",
            status: "Under Construction",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1749449214_Untitled%20design%20-%202025-06-09T113542.723.jpg"
        },
        {
            title: "M3M CAPITAL WALK",
            location: "Sector 113 Gurgaon",
            type: "Type: Retail and Office units",
            size: "Size: 300 – 3,201 sq ft",
            price: "Starting from ₹ 75 Lakhs* Onwards",
            status: "READY TO MOVE",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1749450619_Untitled%20design%20-%202025-06-09T115843.741.jpg"
        },
        {
            title: "M3M ATRIUM57",
            location: "Sector 57 Gurgaon",
            type: "Type: Retail/F&B/Office",
            size: "Size: 320-1,500 sq ft",
            price: "Starting from ₹ 1.40 Cr* Onwards",
            status: "Under Construction",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1749452120_Untitled%20design%20-%202025-06-09T122355.742.jpg"
        },
        {
            title: "M3M IFC 2",
            location: "Sector 113, Gurugram",
            type: "Type: Lockable Spaces",
            size: "Size: 3000 to 5000 sq. ft.",
            price: "Starting from ₹ 10 Cr* Onwards",
            status: "New Launch",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1749471437_Untitled%20design%20-%202025-06-09T174117.012.jpg"
        },
        {
            title: "M3M PREMIUM INDUSTRIAL PLOTS",
            location: "Manesar Sectors M9 M10 M11",
            type: "Type: Industrial Plots",
            size: "Size: 225 sq. m. onwards",
            price: "Starting from ₹3.70 Cr* Onwards",
            status: "New Launch",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/img_68d91974748e8.jpg"
        },
        {
            title: "M3M IFC GURGAON",
            location: "Sector 66, Golf Course Extension Road",
            type: "Type: Retail Shops & Premium Office",
            size: "Size: 500 – 2500 Sq. Ft.",
            price: "Starting from ₹2 Cr* Onwards",
            status: "Delivered",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1770887992_Untitled%20design%20(14).png"
        },
        {
            title: "M3M 65TH AVENUE",
            location: "Sector 65, Golf Course Extension Road",
            type: "Type: Retail Shops, Restaurants",
            size: "Size: 300 – 2500 Sq. Ft.",
            price: "Starting from ₹78 Lakhs* Onwards",
            status: "Ready to Move",
            image: "https://m3mindiaresidentialprojects.in/admin_panel/uploads/1770889125_Untitled%20design%20(6).jpg"
        }
    ];

    return (
        <section className="bg-white py-16 md:py-20 border-t border-zinc-100">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#002f5b] mb-6 tracking-wide uppercase">
                        COMMERCIAL: ONGOING PROJECTS
                    </h2>
                    <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-4xl mx-auto">
                        M3M commercial developments provide high footfall retail, office, and mixed-use spaces designed for investor and business growth. These projects deliver strong connectivity, branded infrastructure, and future-ready facilities. They're positioned as landmark business destinations with high leasing demand and ROI.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow border border-zinc-100 flex flex-col">
                            {/* Image Area */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
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

export default CommercialProjects;
