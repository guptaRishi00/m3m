import React from 'react';
import { Lock, Eye, CheckCircle2 } from 'lucide-react';

interface FloorPlanAmenitiesProps {
    onViewPlan?: () => void;
}

const FloorPlanAmenities: React.FC<FloorPlanAmenitiesProps> = ({ onViewPlan }) => {

    const plans = [
        { title: 'Floor Plan', icon: <Eye className="w-4 h-4" />, blur: true, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop' }, // Architectural drawing placeholder
        { title: 'Master Plan', icon: <Eye className="w-4 h-4" />, blur: true, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop' }, // Master plan landscape placeholder
        { title: 'Payment Plan', icon: <Lock className="w-4 h-4" />, blur: true, image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2671&auto=format&fit=crop' }, // Document placeholder
    ];

    const amenities = [
        "Two grand clubhouses (~80,000 sq. ft.)", "Banquet & multipurpose halls", "Indoor lounges & social zones", "Fully equipped gymnasium",
        "Yoga & meditation studios", "Swimming pool", "Jogging & cycling tracks", "Badminton, tennis & basketball courts",
        "Indoor games arena", "Dedicated kids' play areas", "Senior citizen zones", "Forest themed landscaped gardens",
        "Open lawns & meditation areas", "3+1 high speed elevators", "Advanced security & surveillance", "Multiple entry & exit points"
    ];

    return (
        <section className="bg-white py-16 md:py-20 border-t border-zinc-100">
            <div className="container mx-auto px-4">

                {/* Plans Header */}
                <div className="text-center mb-12">
                    <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 leading-snug max-w-4xl mx-auto">
                        M3M Forestia GIC Manesar Gurugram – Price, Floor Plan, Location & Reviews Floor Plan & Master Plan
                    </h2>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {plans.map((plan, index) => (
                        <div key={index} className="group cursor-pointer" onClick={onViewPlan}>
                            <div className="relative aspect-[4/3] overflow-hidden border border-zinc-200 rounded-sm bg-zinc-50 shadow-sm transition-all hover:shadow-xl">
                                {/* Blurred Image Placeholder */}
                                <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${plan.blur ? 'blur-[8px]' : ''}`}
                                    style={{ backgroundImage: `url('${plan.image}')` }}></div>
                                <div className="absolute inset-0 bg-white/30"></div>

                                {/* Overlay Content */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-black/80 lg:bg-black/70 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wide transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform shadow-md">
                                        View Detail
                                    </div>
                                </div>

                                {/* Bottom Bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-r from-[#004a99] to-[#005bb7] flex items-center justify-center text-white gap-2 text-sm font-bold tracking-wide z-10">
                                    {plan.title} {plan.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Amenities Section */}
                <div className="bg-zinc-50 py-12 px-4 rounded-xl border border-zinc-100/50">
                    <h3 className="text-2xl font-bold text-center text-zinc-900 mb-10 uppercase tracking-wide">
                        Amenities & Facilities
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200">
                        {amenities.map((item, index) => (
                            <div key={index} className="bg-white p-4 flex items-center justify-center text-center h-full hover:bg-amber-50/50 transition-colors">
                                <p className="text-xs md:text-sm text-zinc-700 font-medium leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FloorPlanAmenities;
