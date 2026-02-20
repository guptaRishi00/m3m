import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { getUTMParameters } from '@/lib/utm';

interface ScheduleModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const utmParams = getUTMParameters();
        const payload = {
            ...formData,
            ...utmParams,
            source: 'Schedule Modal'
        };

        try {
            await fetch('https://script.google.com/macros/s/AKfycbx0j3Odz0bWDEJyEdcQLrR0FGn-4_T8agN-SgYn6jSmME5e-DyE2ise6Ed734MN6gU2/exec', {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(payload),
            });
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ name: '', phone: '', email: '', message: '' });
            }, 1500);
        } catch (error) {
            console.error(error);
            setStatus('idle');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="relative w-full max-w-[900px] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200 max-h-[90vh]">

                {/* Header */}
                <div className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4 border-b border-zinc-200 bg-white shrink-0">
                    <h2 className="text-lg md:text-xl font-bold text-black">Register Your Interest</h2>
                    <button onClick={onClose} className="text-zinc-500 hover:text-zinc-800 transition-colors">
                        <X className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row overflow-y-auto overflow-x-hidden">
                    {/* Left Pane - Creative */}
                    <div className="w-full md:w-[45%] bg-[#1c3a8a] text-white p-5 md:p-8 relative flex flex-col items-center justify-center text-center overflow-hidden shrink-0">

                        {/* 2026 */}
                        <div className="text-[#4ade80] font-black text-5xl md:text-6xl leading-none mb-1 shadow-black drop-shadow-lg" style={{ WebkitTextStroke: '1px #166534' }}>
                            2026
                        </div>

                        {/* BIG BILLION PROPERTY SALE */}
                        <div className="bg-[#fbbf24] text-[#1c3a8a] font-black text-xl md:text-2xl px-2 py-1 leading-[0.9] w-full max-w-[240px] md:max-w-[280px] border-2 border-white mb-4 md:mb-6 transform -skew-x-6">
                            <span className="block text-2xl md:text-3xl">BIG BILLION</span>
                            <span className="block text-lg md:text-xl">PROPERTY SALE</span>
                        </div>

                        {/* Arrows Decoration */}
                        <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-50 hidden md:flex">
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#fbbf24]" />
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#fbbf24] -ml-4" />
                        </div>
                        <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-50 rotate-180 hidden md:flex">
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#fbbf24]" />
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#fbbf24] -ml-4" />
                        </div>

                        {/* BUY SELL LEASE */}
                        <div className="space-y-0 mb-3 md:mb-2">
                            <div className="text-[#fbbf24] font-black text-2xl md:text-3xl flex gap-3 md:block">
                                <span className="drop-shadow-md">BUY</span>
                                <span className="drop-shadow-md md:hidden">•</span>
                                <span className="drop-shadow-md">SELL</span>
                                <span className="drop-shadow-md md:hidden">•</span>
                                <span className="drop-shadow-md">LEASE</span>
                            </div>
                        </div>

                        <div className="text-white text-[8px] md:text-[10px] tracking-[0.2em] font-medium mb-5 md:mb-8">
                            YOUR PROPERTY <br className="hidden md:block" /> ALL UNDER ONE ROOF
                        </div>

                        {/* Bottom Boxes */}
                        <div className="flex gap-2 w-full mt-auto">
                            <div className="bg-[#fbbf24] text-[#1c3a8a] p-1.5 md:p-2 flex-1 flex items-center justify-center text-[8px] md:text-[10px] font-bold leading-tight border border-white">
                                SELL YOUR PROPERTY AT A PREMIUM*
                            </div>
                            <div className="bg-white text-[#1c3a8a] p-1.5 md:p-2 flex-1 flex items-center justify-center text-[8px] md:text-[10px] font-bold leading-tight border border-[#fbbf24]">
                                BUY AT A DISCOUNTED PRICE
                            </div>
                        </div>
                    </div>

                    {/* Right Pane - Form */}
                    <div className="w-full md:w-[55%] bg-white p-5 md:p-8 shrink-0">
                        <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>

                            {/* Name */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white border border-zinc-300 rounded-sm focus:outline-none focus:border-[#005bb7] text-zinc-900 placeholder:text-zinc-400 text-sm"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white border border-zinc-300 rounded-sm focus:outline-none focus:border-[#005bb7] text-zinc-900 placeholder:text-zinc-400 text-sm"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email (Optional)"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white border border-zinc-300 rounded-sm focus:outline-none focus:border-[#005bb7] text-zinc-900 placeholder:text-zinc-400 text-sm"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    rows={3}
                                    placeholder="Type your message..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white border border-zinc-300 rounded-sm focus:outline-none focus:border-[#005bb7] text-zinc-900 placeholder:text-zinc-400 text-sm resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-2.5 md:py-3 bg-[#005bb7] hover:bg-[#004a99] text-white font-bold text-base md:text-lg rounded-sm transition-colors shadow-sm disabled:opacity-50"
                            >
                                {status === 'loading' ? 'Processing...' : status === 'success' ? 'Thank You!' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleModal;
