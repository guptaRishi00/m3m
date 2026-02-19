import React from 'react';
import { Building2 } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-90"
                style={{ backgroundImage: "url('/bg.webp')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-0" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Property Details */}
                <div className="text-white space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            M3M Forestia GIC <br /> Manesar Gurugram
                        </h2>
                        <p className="text-gray-400 font-medium">Gurgaon, Manesar</p>
                    </div>

                    <div className="space-y-3">
                        {[
                            "3 BHK Luxury Apartments",
                            "Payment Plan:- Flexible CLP",
                            "Size:- 1900 - 2500 sq.ft."
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit backdrop-blur-md"
                            >
                                <Building2 className="w-4 h-4 text-amber-500" />
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <p className="text-2xl font-semibold">
                            Starting Price <span className="text-amber-500">₹2.5 Cr* Onwards</span>
                        </p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex justify-center lg:justify-end">
                    <div className="bg-black/80 backdrop-blur-xl p-8 rounded-xl border border-white/10 w-full max-w-md shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-6 tracking-tight uppercase">Get Instant Callback</h3>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-white text-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="tel"
                                placeholder="Mobile No"
                                className="w-full bg-white text-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Email ID"
                                className="w-full bg-white text-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <p className="text-[10px] text-gray-400 py-2">
                                Your information will be kept strictly confidential.
                            </p>

                            <button className="w-full bg-[#005bb7] hover:bg-blue-600 text-white font-bold py-3 rounded transition-all uppercase tracking-wider">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;