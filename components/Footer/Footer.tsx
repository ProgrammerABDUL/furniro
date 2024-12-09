import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white py-8 w-full">
            {/* Top Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 px-4 md:px-10 lg:px-20">
                {/* Logo Section */}
                <div>
                    <h1 className="font-bold mb-4 text-2xl">Furniro.</h1>
                    <p className="text-[#9F9F9F] leading-6">
                        400 University Drive Suite 200 Coral Globes, <br /> FL 331134 USA
                    </p>
                </div>

                {/* Links Section */}
                <div>
                    <h5 className="mb-4 text-[#9F9F9F] font-semibold">Links</h5>
                    <ul className="flex flex-col space-y-3">
                        <li>
                            <Link href="/" className="text-[1rem] font-medium hover:text-black transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" className="text-[1rem] font-medium hover:text-black transition">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-[1rem] font-medium hover:text-black transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-[1rem] font-medium hover:text-black transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Help Section */}
                <div>
                    <h5 className="mb-4 text-[#9F9F9F] font-semibold">Help</h5>
                    <ul className="flex flex-col space-y-3">
                        <li>
                            <Link href="/" className="text-[1rem] font-medium hover:text-black transition">
                                Payment Options
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" className="text-[1rem] font-medium hover:text-black transition">
                                Returns
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-[1rem] font-medium hover:text-black transition">
                                Privacy Policies
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h5 className="mb-4 text-[#9F9F9F] font-semibold">Newsletter</h5>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <input
                            type="text"
                            placeholder="Enter your Email Address"
                            className="w-full sm:w-auto flex-1 text-[#9F9F9F] bg-transparent border-b-2 border-black px-1 py-1 mb-4 sm:mb-0"
                        />
                        <button className="sm:ml-4 border-b-2 border-black uppercase text-black">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto mt-8 border-t border-gray-300 pt-4 px-4 md:px-10 lg:px-20">
                <p className="text-sm text-center md:text-left">
                    © 2023 Furniro. All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;