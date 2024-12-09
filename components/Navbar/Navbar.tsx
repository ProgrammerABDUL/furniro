'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white w-full p-4 md:p-6">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 md:gap-4 hover:cursor-pointer">
                    <Image
                        src="/Images/Logo.png"
                        alt="Logo"
                        width={50}
                        height={32}
                    />
                    <h1 className="font-logo text-[2.125rem] font-bold">Furniro</h1>
                </Link>

                {/* Hamburger Menu */}
                <button
                    className="md:hidden flex items-center text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                    </svg>
                </button>

                {/* Navigation Links */}
                <ul
                    className={`navigation-links absolute md:static bg-white z-10 top-16 left-0 w-full md:w-auto flex flex-col md:flex-row items-center md:gap-20 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                        }`}
                >
                    <Link href="/" className="hover:cursor-pointer py-2 md:py-0">
                        <li className="text-[1rem] font-medium">Home</li>
                    </Link>
                    <Link href="/shop" className="hover:cursor-pointer py-2 md:py-0">
                        <li className="text-[1rem] font-medium">Shop</li>
                    </Link>
                    <Link href="/blog" className="hover:cursor-pointer py-2 md:py-0">
                        <li className="text-[1rem] font-medium">Blog</li>
                    </Link>
                    <Link href="/contact" className="hover:cursor-pointer py-2 md:py-0">
                        <li className="text-[1rem] font-medium">Contact</li>
                    </Link>
                </ul>

                {/* Icons */}
                <ul className="hidden md:flex gap-11">
                    <li>
                        <Image
                            className="hover:cursor-pointer"
                            src="/Icons/Account.png"
                            alt="Account-Icon"
                            width={28}
                            height={28}
                        />
                    </li>
                    <li>
                        <Image
                            className="hover:cursor-pointer"
                            src="/Icons/Search.png"
                            alt="Search-Icon"
                            width={28}
                            height={28}
                        />
                    </li>
                    <li>
                        <Image
                            className="hover:cursor-pointer"
                            src="/Icons/Wishlist.png"
                            alt="Wishlist-Icon"
                            width={28}
                            height={28}
                        />
                    </li>
                    <li>
                        <Image
                            className="hover:cursor-pointer"
                            src="/Icons/Shopping-Cart.png"
                            alt="Shopping-Cart-Icon"
                            width={28}
                            height={28}
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;