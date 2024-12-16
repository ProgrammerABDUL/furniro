import React from "react";
import Image from "next/image";

const ProductCard = (
    {
        image,
        discount,
        discountColor,
        name,
        description,
        discountedPrice,
        originalPrice
    }: {
        image: string,
        discount: string,
        discountColor: string,
        name: string,
        description: string,
        discountedPrice: string,
        originalPrice: string
    }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="group relative w-[200px] h-[446px] bg-white overflow-hidden transition-transform transform hover:scale-105 hover:cursor-pointer">
                {/* Product Image */}
                <div className="relative w-full h-[200px]">
                    <Image
                        className="w-full h-full object-contain"
                        src={image}
                        alt='Product Image'
                        width={285}
                        height={301}
                        priority={true}
                    />

                    {/* Discount Badge */}
                    {discount && (
                        <span className={`absolute top-2 right-2 text-white text-sm font-semibold px-2 py-1 rounded-full w-[45px] h-[45px] flex items-center justify-center`} style={{ backgroundColor: discountColor }}>
                            {discount}
                        </span>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-[72%] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white text-[#B88E2F] font-semibold py-2 px-4 mb-4 hover:bg-gray-200">
                            Add to Cart
                        </button>
                        <div className="flex space-x-4 text-white">
                            <button className="hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                                    <path d="M10 9.66667C9.47467 9.66667 9 9.87333 8.644 10.2047L3.94 7.46667C3.97333 7.31334 4 7.16 4 7C4 6.84 3.97333 6.68667 3.94 6.53334L8.64 3.79334C9 4.12667 9.47333 4.33334 10 4.33334C11.1067 4.33334 12 3.44 12 2.33334C12 1.22667 11.1067 0.333336 10 0.333336C8.89333 0.333336 8 1.22667 8 2.33334C8 2.49334 8.02667 2.64667 8.06 2.8L3.36 5.54C3 5.20667 2.52667 5 2 5C0.893333 5 0 5.89334 0 7C0 8.10667 0.893333 9 2 9C2.52667 9 3 8.79333 3.36 8.46L8.05867 11.2053C8.02112 11.3563 8.00143 11.5111 8 11.6667C8 12.0622 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5144C9.60009 13.6658 10.0022 13.7054 10.3902 13.6282C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0568C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5358 11.44 10.2235 11.1111 10.0037C10.7822 9.78397 10.3956 9.66667 10 9.66667Z" fill="white" />
                                </svg>
                                Share
                            </button>
                            <button className="hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M9.08001 6L10.08 7L13.52 3.55L10 0L9.00001 1L10.8 2.8H1.00001V4.2H10.82L9.08001 6ZM4.86001 8L3.86001 7L0.420013 10.5L3.91001 14L4.91001 13L3.10001 11.2H13V9.8H3.10001L4.86001 8Z" fill="white" />
                                </svg>
                                Compare
                            </button>
                            <button className="hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                    <path d="M7.99973 13.0361C-5.33333 5.66667 3.99999 -2.33333 7.99973 2.72537C12 -2.33334 21.3333 5.66667 7.99973 13.0361Z" stroke="white" stroke-width="1.8" />
                                </svg>
                                Like
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="p-4 bg-[#F4F5F7]">
                    {/* 1440 till end The font will be text-2xl */}
                    <h3 className="text-lg font-semibold text-[#3A3A3A]">{name}</h3>
                    <p className="text-sm text-[#898989]">{description}</p>

                    {/* Pricing */}
                    <div className="mt-4">
                        {/* 1440 till end The font will be text-xl */}
                        <p className="text-lg font-semibold text-[#3A3A3A]">
                            Rp {discountedPrice}
                        </p>
                        {originalPrice && (
                            <p className="text-sm text-[#B0B0B0] line-through">
                                Rp {originalPrice}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductCard;