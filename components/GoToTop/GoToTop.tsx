'use client';

import React, { useState, useEffect } from 'react';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show/hide the button when scrolling
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 bg-[#B68D40] text-white p-3 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:bg-[#A37A37] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
            aria-label="Go to top"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    );
};

export default GoToTop;