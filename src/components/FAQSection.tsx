import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const leftFaqs = [
        {
            q: "WHERE IS M3M FORESTIA GIC MANESAR LOCATED?",
            a: "The project is located in Sector 79, Gurgaon, within the prestigious Gurugram International City (GIC)."
        },
        {
            q: "WHAT IS THE SIZE RANGE OF 3 BHK APARTMENTS?",
            a: "The size range for 3 BHK apartments is 1900 - 2200 sq. ft."
        }
    ];

    const rightFaqs = [
        {
            q: "WHAT CONFIGURATIONS ARE AVAILABLE IN M3M FORESTIA?",
            a: "The project offers premium 3 BHK residences and high-end lifestyle amenities."
        },
        {
            q: "WHAT IS THE STARTING PRICE OF M3M FORESTIA GIC MANESAR?",
            a: "Prices start from ₹2.5 Cr* onwards. Please contact our sales team for detailed pricing."
        }
    ];

    const FAQItem = ({ faq, index }: { faq: any, index: number }) => (
        <div className={`flex flex-col bg-white ${index !== 1 ? 'border-b border-zinc-200' : ''}`}>
            <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between p-4 md:p-5 text-left transition-colors font-serif uppercase tracking-wide text-sm md:text-[13px] text-zinc-800 hover:bg-zinc-50 w-full"
            >
                <span className="pr-4 leading-relaxed">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-zinc-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>

            {openIndex === index && (
                <div className="p-4 md:p-5 pt-0 text-zinc-600 text-[13px] md:text-sm animate-in fade-in slide-in-from-top-2 duration-300 leading-relaxed border-t border-zinc-50 bg-zinc-50/50">
                    {faq.a}
                </div>
            )}
        </div>
    );

    return (
        <section className="py-20 bg-white border-t border-zinc-100">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                <h2 className="text-2xl md:text-3xl lg:text-[28px] font-medium text-zinc-900 mb-12 text-center tracking-wide">
                    M3M Forestia GIC Manesar Gurugram – Price, Floor Plan, Location & Reviews – FAQs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col border border-zinc-200 rounded-sm shadow-sm overflow-hidden h-fit">
                        {leftFaqs.map((faq, i) => (
                            <FAQItem key={`left-${i}`} faq={faq} index={i} />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col border border-zinc-200 rounded-sm shadow-sm overflow-hidden h-fit">
                        {rightFaqs.map((faq, i) => (
                            <FAQItem key={`right-${i}`} faq={faq} index={i + 2} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
