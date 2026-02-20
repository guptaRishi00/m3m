import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import { getUTMParameters } from '@/lib/utm';

const HeroSection = () => {
    const [formData, setFormData] = useState({ name: '', mobile: '', email: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const utmParams = getUTMParameters();
        const payload = {
            ...formData,
            ...utmParams,
            source: 'Hero Section Form',
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbx0j3Odz0bWDEJyEdcQLrR0FGn-4_T8agN-SgYn6jSmME5e-DyE2ise6Ed734MN6gU2/exec', {
                method: 'POST',
                mode: 'no-cors', // Apps Script requires no-cors for simple POST
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            setStatus('success');
            setFormData({ name: '', mobile: '', email: '' });
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-28 md:pt-20 overflow-hidden bg-zinc-950">
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
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            M3M Forestia GIC <br className="hidden md:block" /> Manesar Gurugram
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
                        <p className="text-xl md:text-2xl font-semibold">
                            Starting Price <span className="text-amber-500">₹2.5 Cr* Onwards</span>
                        </p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex justify-center lg:justify-end">
                    <div className="bg-black/80 backdrop-blur-xl p-8 rounded-xl border border-white/10 w-full max-w-md shadow-2xl">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-6 tracking-tight uppercase">Get Instant Callback</h3>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white text-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="tel"
                                placeholder="Mobile No"
                                required
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                className="w-full bg-white text-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Email ID"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-white text-black p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                disabled={status === 'loading'}
                                className="w-full bg-[#005bb7] hover:bg-blue-600 active:scale-95 text-white font-bold py-3 rounded transition-all uppercase tracking-wider disabled:opacity-50"
                            >
                                {status === 'loading' ? 'Submitting...' : status === 'success' ? 'Sent!' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;