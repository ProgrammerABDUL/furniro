'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        // Disable or Enable Scroll
        if (!isMenuOpen) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = "auto"; // Enable scrolling
        }
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto"; // Restore scrolling
    };

    return (

        // Navbar
        <nav className="bg-white w-full p-4 md:p-6 sticky top-0 z-50">

            <div className="flex justify-between items-center md:flex-wrap md:flex-col lg:flex-nowrap lg:flex-row">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-1 md:gap-4 hover:cursor-pointer justify-center">
                    <Image
                        className='w-[40px] xl:w-[50px]'
                        src="/Images/Logo.png"
                        alt="Logo"
                        width={50}
                        height={32}
                        priority={true}
                    />
                    <h1 className="font-montserrat text-2xl xl:text-[2.125rem] font-bold">Furniro</h1>
                </Link>

                {/* Hamburger Menu */}
                <button
                    className="md:hidden flex items-center text-gray-700 focus:outline-none z-50"
                    // className="md:hidden flex items-center text-gray-700 focus:outline-none"
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

                {/* Overlay for Hamburger Menu */}
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                    onClick={toggleMenu}
                ></div>

                {/* Navigation Links */}
                {/* <div className="Nav-Links md:flex md:justify-around md:items-center md:w-full"> */}
                <ul
                    className={`fixed top-0 right-0 h-full bg-white z-40 w-3/4 max-w-sm flex flex-col justify-center gap-8 p-5 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        } md:static md:translate-x-0 md:w-auto md:flex-row md:gap-20`}
                >
                    {/* <ul
                    className={`navigation-links absolute md:static bg-white z-30 top-0 right-0 w-full h-full md:w-auto flex flex-col md:flex-row items-center md:gap-20 transition-transform duration-300 ${isMenuOpen ? '-translate-x-0' : '-translate-x-full md:-translate-x-0'
                        }`}
                > */}

                    {/* Home */}
                    <Link href="/" className="hover:cursor-pointer py-2 md:py-0 flex gap-6 items-center" onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B88E2F" className='md:hidden'>
                            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                        </svg>
                        <li className="2xl:text-xl font-medium">Home</li>
                    </Link>

                    {/* Shop */}
                    <Link href="/shop" className="hover:cursor-pointer py-2 md:py-0 flex gap-6 items-center" onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B88E2F" className='md:hidden'>
                            <path d="M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Zm-38-240h556-556Zm0 0h556l-24-120H226l-24 120Z" />
                        </svg>
                        <li className="2xl:text-xl font-medium">Shop</li>
                    </Link>

                    {/* Blog */}
                    <Link href="/blog" className="hover:cursor-pointer py-2 md:py-0 flex gap-6 items-center" onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B88E2F" className='md:hidden'>
                            <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                        </svg>
                        <li className="2xl:text-xl font-medium">Blog</li>
                    </Link>

                    {/* Contact */}
                    <Link href="/contact" className="hover:cursor-pointer py-2 md:py-0 flex gap-6 items-center" onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B88E2F" className='md:hidden'>
                            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                        </svg>
                        <li className="2xl:text-xl font-medium">Contact</li>
                    </Link>

                    {/* Wishlist */}
                    <Link href="/" className="hover:cursor-pointer py-2 md:py-0 flex gap-6 items-center md:hidden" onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none" className='md:hidden'>
                            <path d="M7.16668 1.5C3.94551 1.5 1.33334 4.08533 1.33334 7.275C1.33334 9.84983 2.35418 15.9608 12.4027 22.1383C12.5827 22.2479 12.7893 22.3058 13 22.3058C13.2107 22.3058 13.4173 22.2479 13.5973 22.1383C23.6458 15.9608 24.6667 9.84983 24.6667 7.275C24.6667 4.08533 22.0545 1.5 18.8333 1.5C15.6122 1.5 13 5 13 5C13 5 10.3878 1.5 7.16668 1.5Z" stroke="#B88E2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <li className="font-medium">Wishlist</li>
                    </Link>

                    {/* Shopping Cart */}
                    <Link href="/" className="hover:cursor-pointer py-2 md:py-0 flex gap-6 items-center md:hidden" onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none" className='md:hidden'>
                            <path d="M24.2355 16.1926H7.95234L8.76991 14.5273L22.3543 14.5027C22.8137 14.5027 23.2074 14.1746 23.2894 13.7207L25.1707 3.19062C25.2199 2.91445 25.1461 2.63008 24.9656 2.41406C24.8764 2.30775 24.7652 2.22211 24.6396 2.16309C24.514 2.10407 24.377 2.07308 24.2383 2.07227L6.95702 2.01484L6.80937 1.32031C6.7164 0.877344 6.31718 0.554688 5.86328 0.554688H1.63867C1.38267 0.554688 1.13716 0.656381 0.956142 0.837398C0.775125 1.01841 0.673431 1.26393 0.673431 1.51992C0.673431 1.77592 0.775125 2.02143 0.956142 2.20245C1.13716 2.38346 1.38267 2.48516 1.63867 2.48516H5.08124L5.72656 5.55312L7.31523 13.2449L5.26992 16.5836C5.1637 16.727 5.09972 16.8972 5.08523 17.075C5.07073 17.2528 5.10629 17.4312 5.18788 17.5898C5.35195 17.9152 5.68281 18.1203 6.04921 18.1203H7.7664C7.40032 18.6065 7.20258 19.1988 7.20312 19.8074C7.20312 21.3551 8.46093 22.6129 10.0086 22.6129C11.5562 22.6129 12.8141 21.3551 12.8141 19.8074C12.8141 19.1977 12.6117 18.6043 12.2508 18.1203H16.6559C16.2898 18.6065 16.092 19.1988 16.0926 19.8074C16.0926 21.3551 17.3504 22.6129 18.898 22.6129C20.4457 22.6129 21.7035 21.3551 21.7035 19.8074C21.7035 19.1977 21.5012 18.6043 21.1402 18.1203H24.2383C24.7687 18.1203 25.2035 17.6883 25.2035 17.1551C25.2019 16.8994 25.0993 16.6546 24.9179 16.4743C24.7366 16.294 24.4913 16.1927 24.2355 16.1926ZM7.35898 3.91797L23.1035 3.96992L21.5613 12.6051L9.19374 12.627L7.35898 3.91797ZM10.0086 20.6715C9.53281 20.6715 9.14452 20.2832 9.14452 19.8074C9.14452 19.3316 9.53281 18.9434 10.0086 18.9434C10.4844 18.9434 10.8726 19.3316 10.8726 19.8074C10.8726 20.0366 10.7816 20.2564 10.6196 20.4184C10.4575 20.5805 10.2378 20.6715 10.0086 20.6715ZM18.898 20.6715C18.4223 20.6715 18.034 20.2832 18.034 19.8074C18.034 19.3316 18.4223 18.9434 18.898 18.9434C19.3738 18.9434 19.7621 19.3316 19.7621 19.8074C19.7621 20.0366 19.6711 20.2564 19.509 20.4184C19.347 20.5805 19.1272 20.6715 18.898 20.6715Z" fill="#B88E2F" />
                        </svg>
                        <li className="font-medium">Shopping Cart</li>
                    </Link>

                    {/* Account */}
                    <Link href="/" className="hover:cursor-pointer py-2 md:py-0 flex gap-6 items-center md:hidden" onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none" className='md:hidden'>
                            <path d="M21.3333 10V4.16669H23.6666V11.1667H21.3333M21.3333 15.8334H23.6666V13.5H21.3333M9.66665 11.1667C12.7816 11.1667 19 12.73 19 15.8334V19.3334H0.333313V15.8334C0.333313 12.73 6.55165 11.1667 9.66665 11.1667ZM9.66665 0.666687C10.9043 0.666687 12.0913 1.15835 12.9665 2.03352C13.8416 2.90869 14.3333 4.09568 14.3333 5.33335C14.3333 6.57103 13.8416 7.75802 12.9665 8.63319C12.0913 9.50836 10.9043 10 9.66665 10C8.42897 10 7.24198 9.50836 6.36682 8.63319C5.49164 7.75802 4.99998 6.57103 4.99998 5.33335C4.99998 4.09568 5.49164 2.90869 6.36682 2.03352C7.24198 1.15835 8.42897 0.666687 9.66665 0.666687ZM9.66665 13.3834C6.20165 13.3834 2.54998 15.0867 2.54998 15.8334V17.1167H16.7833V15.8334C16.7833 15.0867 13.1316 13.3834 9.66665 13.3834ZM9.66665 2.88335C9.01687 2.88335 8.3937 3.14148 7.93424 3.60094C7.47477 4.06041 7.21665 4.68357 7.21665 5.33335C7.21665 5.98313 7.47477 6.6063 7.93424 7.06577C8.3937 7.52523 9.01687 7.78335 9.66665 7.78335C10.3164 7.78335 10.9396 7.52523 11.3991 7.06577C11.8585 6.6063 12.1166 5.98313 12.1166 5.33335C12.1166 4.68357 11.8585 4.06041 11.3991 3.60094C10.9396 3.14148 10.3164 2.88335 9.66665 2.88335Z" fill="#B88E2F" />
                        </svg>
                        <li className="font-medium">Accounts</li>
                    </Link>

                    {/* Search Field */}
                    <li className="md:hidden w-full md:w-auto">
                        <form className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full md:w-60 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                            <button type="submit" className="absolute right-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M23.5 23.5L18.2663 18.257M21.1666 11.25C21.1666 13.88 20.1219 16.4024 18.2621 18.2621C16.4024 20.1219 13.88 21.1666 11.25 21.1666C8.61992 21.1666 6.09757 20.1219 4.23784 18.2621C2.3781 16.4024 1.33331 13.88 1.33331 11.25C1.33331 8.61992 2.3781 6.09757 4.23784 4.23784C6.09757 2.3781 8.61992 1.33331 11.25 1.33331C13.88 1.33331 16.4024 2.3781 18.2621 4.23784C20.1219 6.09757 21.1666 8.61992 21.1666 11.25V11.25Z" stroke="#B88E2F" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </button>
                        </form>
                    </li>
                </ul>

                {/* Icons */}
                <ul className="hidden md:flex gap-11">
                    <li>
                        <Image
                            className="hover:cursor-pointer 2xl:w-8"
                            src="/Icons/Account.png"
                            alt="Account-Icon"
                            width={28}
                            height={28}
                        />
                    </li>
                    <li>
                        <Image
                            className="hover:cursor-pointer 2xl:w-8"
                            src="/Icons/Search.png"
                            alt="Search-Icon"
                            width={28}
                            height={28}
                        />
                    </li>
                    <li>
                        <Image
                            className="hover:cursor-pointer 2xl:w-8"
                            src="/Icons/Wishlist.png"
                            alt="Wishlist-Icon"
                            width={28}
                            height={28}
                        />
                    </li>
                    <li>
                        <Image
                            className="hover:cursor-pointer 2xl:w-8"
                            src="/Icons/Shopping-Cart.png"
                            alt="Shopping-Cart-Icon"
                            width={28}
                            height={28}
                        />
                    </li>
                </ul>
            </div>
            {/* </div> */}
        </nav >
    );
};

export default Navbar;

// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <nav className="bg-white w-full p-4 md:p-6 sticky top-0 z-50 shadow-md">
//             <div className="flex justify-between items-center">
//                 {/* Logo */}
//                 <Link href="/" className="flex items-center gap-2 hover:cursor-pointer">
//                     <Image
//                         className="w-[40px]"
//                         src="/Images/Logo.png"
//                         alt="Logo"
//                         width={40}
//                         height={40}
//                         priority
//                     />
//                     <h1 className="font-logo text-2xl font-bold">Furniro</h1>
//                 </Link>

//                 {/* Hamburger Menu */}
//                 <button
//                     className="md:hidden flex items-center text-gray-700 focus:outline-none z-50"
//                     onClick={toggleMenu}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d={
//                                 isMenuOpen
//                                     ? 'M6 18L18 6M6 6l12 12' // Close icon
//                                     : 'M4 6h16M4 12h16M4 18h16' // Hamburger icon
//                             }
//                         />
//                     </svg>
//                 </button>

//                 {/* Navigation Links */}
//                 <ul
//                     className={`absolute md:static bg-white z-40 top-0 right-0 w-3/4 md:w-auto h-full md:h-auto shadow-md md:shadow-none flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-6 md:p-0 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
//                         }`}
//                 >
//                     <li>
//                         <Link
//                             href="/"
//                             className="flex items-center gap-2 text-[1rem] font-medium hover:cursor-pointer"
//                         >
//                             <Image src="/Icons/Home.png" alt="Home" width={20} height={20} />
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             href="/shop"
//                             className="flex items-center gap-2 text-[1rem] font-medium hover:cursor-pointer"
//                         >
//                             <Image src="/Icons/Shop.png" alt="Shop" width={20} height={20} />
//                             Shop
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             href="/blog"
//                             className="flex items-center gap-2 text-[1rem] font-medium hover:cursor-pointer"
//                         >
//                             <Image src="/Icons/Blog.png" alt="Blog" width={20} height={20} />
//                             Blog
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             href="/contact"
//                             className="flex items-center gap-2 text-[1rem] font-medium hover:cursor-pointer"
//                         >
//                             <Image src="/Icons/Contact.png" alt="Contact" width={20} height={20} />
//                             Contact
//                         </Link>
//                     </li>

//                     {/* Search Field */}
//                     <li className="mt-4 md:mt-0 w-full md:w-auto">
//                         <form className="relative flex items-center">
//                             <input
//                                 type="text"
//                                 placeholder="Search"
//                                 className="w-full md:w-60 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
//                             />
//                             <button type="submit" className="absolute right-3">
//                                 <Image src="/Icons/Search.png" alt="Search" width={20} height={20} />
//                             </button>
//                         </form>
//                     </li>
//                 </ul>

//                 {/* Icons Section */}
//                 <ul className="hidden md:flex gap-6 items-center">
//                     <li>
//                         <Image
//                             className="hover:cursor-pointer"
//                             src="/Icons/Account.png"
//                             alt="Account"
//                             width={24}
//                             height={24}
//                         />
//                     </li>
//                     <li>
//                         <Image
//                             className="hover:cursor-pointer"
//                             src="/Icons/Wishlist.png"
//                             alt="Wishlist"
//                             width={24}
//                             height={24}
//                         />
//                     </li>
//                     <li>
//                         <Image
//                             className="hover:cursor-pointer"
//                             src="/Icons/Shopping-Cart.png"
//                             alt="Shopping Cart"
//                             width={24}
//                             height={24}
//                         />
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;