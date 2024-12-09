import React from 'react';
import Image from 'next/image';

const Features = () => {
    const features = [
        {
            icon: '/Icons/Quality.png',
            title: 'High Quality',
            description: 'Crafted from top materials',
        },
        {
            icon: '/Icons/Warranty.png',
            title: 'Warranty Protection',
            description: 'Over 2 years',
        },
        {
            icon: '/Icons/Shipping.png',
            title: 'Free Shipping',
            description: 'Order over 150 $',
        },
        {
            icon: '/Icons/Customer-Support.png',
            title: '24 / 7 Support',
            description: 'Dedicated support',
        },
    ];

    return (
        <div className="py-10 bg-[#FAF3EA] w-full">
            <div className="flex flex-wrap flex-col justify-between items-center max-w-7xl mx-auto px-4 gap-6 sm:flex-row">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center w-[200px] md:w-[220px]">
                        <Image
                            src={feature.icon}
                            alt={`${feature.title}-Icon`}
                            width={60}
                            height={60}
                            className="mb-4"
                        />
                        <p className="text-lg font-semibold text-black">
                            {feature.title}
                        </p>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>

        // Make it Responsive
        // <div className="features py-10 bg-[#FAF3EA] w-full">
        //     <div className="flex flex-wrap flex-col justify-between items-center max-w-7xl mx-auto px-4 gap-6 sm:flex-row">
        //         {features.map((feature, index) => (
        //             <div
        //                 key={index}
        //                 className="items-center w-[200px] md:w-[220px] lg:flex flex-none">
        //                 <Image
        //                     className="mb-4 lg:mb-0"
        //                     src={feature.icon}
        //                     alt={`${feature.title}-Icon`}
        //                     width={60}
        //                     height={60}
        //                 />
        //                 <div
        //                     className="flex flex-col items-start text-center w-[200px] md:w-[220px]">
        //                     <p className="text-lg font-semibold text-black ">
        //                         {feature.title}
        //                     </p>
        //                     <p className="text-sm text-gray-600">{feature.description}</p>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
};

export default Features;