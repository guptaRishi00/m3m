import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, X, MessageSquare } from 'lucide-react';
import { getUTMParameters } from '@/lib/utm';

interface FloatingContactMenuProps {
    onEmailClick: () => void;
}

const FloatingContactMenu: React.FC<FloatingContactMenuProps> = ({ onEmailClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/919090907712");

    useEffect(() => {
        const params = getUTMParameters();
        const utmString = Object.entries(params)
            .filter(([_, value]) => value !== '')
            .map(([key, value]) => `${key}=${value}`)
            .join(', ');

        if (utmString) {
            setWhatsappUrl(`https://wa.me/919090907712?text=${encodeURIComponent('Hi, I need more info. ' + utmString)}`);
        }
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
            {/* Action Buttons */}
            <div className={`flex flex-col gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>

                {/* Phone */}
                <a
                    href="tel:+919090907712"
                    className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                    title="Call Us"
                >
                    <Phone className="w-5 h-5" />
                </a>

                {/* WhatsApp */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                    title="WhatsApp"
                >
                    <MessageCircle className="w-6 h-6" />
                </a>

                {/* Email / Enquire */}
                <button
                    onClick={() => {
                        onEmailClick();
                        setIsOpen(false);
                    }}
                    className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                    title="Enquire"
                >
                    <Mail className="w-5 h-5" />
                </button>
            </div>

            {/* Main Toggle Button */}
            <button
                onClick={toggleMenu}
                className={`w-14 h-14 bg-[#005bb7] rounded-full flex items-center justify-center text-white shadow-xl hover:bg-[#004a99] transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </button>
        </div>
    );
};

export default FloatingContactMenu;
