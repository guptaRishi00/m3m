import React from 'react';

interface StickyScheduleButtonProps {
    onClick: () => void;
}

const StickyScheduleButton: React.FC<StickyScheduleButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed top-1/2 right-0 z-40 bg-[#005bb7] text-white font-bold py-4 px-5 rounded-l-lg shadow-lg hover:bg-[#004a99] transition-colors flex items-center justify-center transform -translate-y-1/2"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
            <span className="tracking-wider uppercase text-sm">Schedule a visit</span>
        </button>
    );
};

export default StickyScheduleButton;
