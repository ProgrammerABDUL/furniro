import React from 'react'
import './style.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className='navbar bg-white flex flex-wrap md:flex-nowrap justify-around items-center p-4 md:p-6'>

            <Link href='/' className='logo flex items-center gap-2 md:gap-4 hover:cursor-pointer'>
                <Image
                    src="/Images/Logo.png"
                    alt='Logo'
                    width={50}
                    height={32}
                />
                <h1 className='font-logo text-[2.125rem] font-bold'>Furniro</h1>
            </Link>

            <ul className='navigation-links flex justify-between gap-20'>
                <Link href="/" className=''>
                    <li className='text-[1rem] font-medium hover:cursor-pointer'>Home</li>
                </Link>
                <Link href="/shop" className=''>
                    <li className='text-[1rem] font-medium hover:cursor-pointer'>Shop</li>
                </Link>
                <Link href="/blog" className=''>
                    <li className='text-[1rem] font-medium hover:cursor-pointer'>Blog</li>
                </Link>
                <Link href="/" className=''>
                    <li className='text-[1rem] font-medium hover:cursor-pointer'>Contact</li>
                </Link>
            </ul>

            <ul className='icons flex gap-11'>
                <li>
                    <Image className='hover:cursor-pointer'
                        src='/Images/Account.png'
                        alt='Account-Icon'
                        width={28}
                        height={28}
                    />
                </li>
                <li>
                    <Image className='hover:cursor-pointer'
                        src='/Images/Search.png'
                        alt='Search-Icon'
                        width={28}
                        height={28}
                    />
                </li>
                <li>
                    <Image className='hover:cursor-pointer'
                        src='/Images/Wishlist.png'
                        alt='Wishlist-Icon'
                        width={28}
                        height={28}
                    />
                </li>
                <li>
                    <Image className='hover:cursor-pointer'
                        src='/Images/Shopping-Cart.png'
                        alt='Shopping-Cart-Icon'
                        width={28}
                        height={28}
                    />
                </li>
            </ul>
        </header>
    )
}

export default Navbar
