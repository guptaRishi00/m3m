import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "WHERE IS IT LOCATED?",
            a: "The project is located in Sector 79, Gurgaon, within the prestigious Gurugram International City (GIC)."
        },
        {
            q: "WHAT CONFIGURATIONS ARE AVAILABLE?",
            a: "The project offers premium 3 BHK residences and high-end lifestyle amenities."
        },
        {
            q: "WHAT IS THE STARTING PRICE?",
            a: "Prices start from ₹15,000 per sq. ft. onwards. Please contact our sales team for detailed pricing."
        },
        {
            q: "WHAT IS THE STARTING PRICE OF M3M FORESTIA GIC MANESAR?",
            a: "Prices start from ₹15,000 per sq. ft., with investment value from ₹2.35 Cr onwards."
        }
    ];

    return (
        <section className="py-20 bg-white border-t border-zinc-100">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center uppercase tracking-wide">
                    Gurugram – Price, Floor Plan, Location
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="flex flex-col h-full">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`flex items-center justify-between p-5 border text-left transition-all font-bold uppercase tracking-tight text-sm w-full
                  ${openIndex === index ? 'bg-blue-50 border-blue-200 text-blue-700 ring-1 ring-blue-100 shadow-sm' : 'bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300'}
                `}
                            >
                                <span>{faq.q}</span>
                                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${openIndex === index ? 'rotate-90' : ''}`} />
                            </button>

                            {openIndex === index && (
                                <div className="p-5 bg-white border-x border-b border-blue-100 text-zinc-600 text-sm animate-in fade-in slide-in-from-top-1 leading-relaxed">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
