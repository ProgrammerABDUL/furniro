import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './style.css'

const Banner = ({ title, link }: { title: string; link: string }) => {
    return (
        <div className="banner relative w-full h-[316px] md:h-[400px] lg:h-[316px] flex items-center justify-center text-center">
            {/* Background Image */}
            <Image
                className="bg-img object-cover"
                src="/Images/Banner.jpg"
                alt="Banner"
                fill={true}
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-30"></div>

            {/* Content */}
            <div className="relative z-9 flex flex-col items-center">
                {/* Logo */}
                <Image
                    src="/Images/Logo.png"
                    alt="Logo"
                    width={50}
                    height={32}
                    className="mb-4"
                />
                {/* Title */}
                <h1 className="text-3xl md:text-5xl">{title}</h1>

                {/* Breadcrumb */}
                <p className="text-sm md:text-base mt-2">
                    <Link href='/' className="font-medium hover:cursor-pointer">
                        Home
                    </Link>
                    &nbsp;&gt;&nbsp;
                    <Link href={link} className="font-light">
                        {title}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Banner;