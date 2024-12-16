import React from 'react'
import Banner from '@/components/Banner/Banner'
import Features from '@/components/Features/Features'
import ProductCard from '@/components/ProductCard/ProductCard'

const shop = () => {
    const products = [
        {
            name: "Syltherine",
            description: "Stylish cafe chair",
            image: "/Images/Product-Image1.png",
            discount: "-30%",
            discountColor: "#E97171",
            discountedPrice: "2,500.000",
            originalPrice: "3,500.000"
        },
        {
            name: "Leviosa",
            description: "Stylish cafe chair",
            image: "/Images/Product-Image2.png",
            discount: "",
            discountColor: "",
            discountedPrice: "2,500.000",
            originalPrice: ""
        },
        {
            name: "Lolito",
            description: "Luxury Big Sofa",
            image: "/Images/Product-Image3.png",
            discount: "-50%",
            discountColor: "#E97171",
            discountedPrice: "7,500.000",
            originalPrice: "14,000.000",
        },
        {
            name: "Respira",
            description: "Outdoor bar table and stool",
            image: "/Images/Product-Image4.png",
            discount: "New",
            discountColor: "#2EC1AC",
            discountedPrice: "500.000",
            originalPrice: "",
        },
        {
            name: "Syltherine",
            description: "Stylish cafe chair",
            image: "/Images/Product-Image1.png",
            discount: "-30%",
            discountColor: "#E97171",
            discountedPrice: "2,500.000",
            originalPrice: "3,500.000"
        },
        {
            name: "Leviosa",
            description: "Stylish cafe chair",
            image: "/Images/Product-Image2.png",
            discount: "",
            discountColor: "",
            discountedPrice: "2,500.000",
            originalPrice: ""
        },
        {
            name: "Lolito",
            description: "Luxury Big Sofa",
            image: "/Images/Product-Image3.png",
            discount: "-50%",
            discountColor: "#E97171",
            discountedPrice: "7,500.000",
            originalPrice: "14,000.000",
        },
        {
            name: "Respira",
            description: "Outdoor bar table and stool",
            image: "/Images/Product-Image4.png",
            discount: "New",
            discountColor: "#2EC1AC",
            discountedPrice: "500.000",
            originalPrice: "",
        },
        {
            name: "Syltherine",
            description: "Stylish cafe chair",
            image: "/Images/Product-Image1.png",
            discount: "-30%",
            discountColor: "#E97171",
            discountedPrice: "2,500.000",
            originalPrice: "3,500.000"
        },
        {
            name: "Leviosa",
            description: "Stylish cafe chair",
            image: "/Images/Product-Image2.png",
            discount: "",
            discountColor: "",
            discountedPrice: "2,500.000",
            originalPrice: ""
        },
        {
            name: "Lolito",
            description: "Luxury Big Sofa",
            image: "/Images/Product-Image3.png",
            discount: "-50%",
            discountColor: "#E97171",
            discountedPrice: "7,500.000",
            originalPrice: "14,000.000",
        },
        {
            name: "Respira",
            description: "Outdoor bar table and stool",
            image: "/Images/Product-Image4.png",
            discount: "New",
            discountColor: "#2EC1AC",
            discountedPrice: "500.000",
            originalPrice: "",
        },
        {
            name: "Syltherine",
            description: "Stylish cafe chair",
            image: "/Images/Product-Image1.png",
            discount: "-30%",
            discountColor: "#E97171",
            discountedPrice: "2,500.000",
            originalPrice: "3,500.000"
        },
        {
            name: "Leviosa",
            description: "Stylish cafe chair",
            image: "/Images/Product-Image2.png",
            discount: "",
            discountColor: "",
            discountedPrice: "2,500.000",
            originalPrice: ""
        },
        {
            name: "Lolito",
            description: "Luxury Big Sofa",
            image: "/Images/Product-Image3.png",
            discount: "-50%",
            discountColor: "#E97171",
            discountedPrice: "7,500.000",
            originalPrice: "14,000.000",
        },
        {
            name: "Respira",
            description: "Outdoor bar table and stool",
            image: "/Images/Product-Image4.png",
            discount: "New",
            discountColor: "#2EC1AC",
            discountedPrice: "500.000",
            originalPrice: "",
        }
    ]
    return (
        <div>
            <Banner title='Shop' link='/shop' />

            {/* Filter section */}
            <div className="Filter w-full h-[100px] bg-[#F9F1E7] flex items-center justify-around">
                <div className="Filter flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M22.0238 7.14285H8.92857M6.54762 7.14285H2.97619M22.0238 19.0476H8.92857M6.54762 19.0476H2.97619M16.0714 13.0952H2.97619M22.0238 13.0952H18.4524M7.7381 4.7619C8.05383 4.7619 8.35663 4.88733 8.57989 5.11058C8.80315 5.33384 8.92857 5.63664 8.92857 5.95238V8.33333C8.92857 8.64906 8.80315 8.95187 8.57989 9.17512C8.35663 9.39838 8.05383 9.52381 7.7381 9.52381C7.42236 9.52381 7.11956 9.39838 6.8963 9.17512C6.67304 8.95187 6.54762 8.64906 6.54762 8.33333V5.95238C6.54762 5.63664 6.67304 5.33384 6.8963 5.11058C7.11956 4.88733 7.42236 4.7619 7.7381 4.7619V4.7619ZM7.7381 16.6667C8.05383 16.6667 8.35663 16.7921 8.57989 17.0153C8.80315 17.2386 8.92857 17.5414 8.92857 17.8571V20.2381C8.92857 20.5538 8.80315 20.8566 8.57989 21.0799C8.35663 21.3031 8.05383 21.4286 7.7381 21.4286C7.42236 21.4286 7.11956 21.3031 6.8963 21.0799C6.67304 20.8566 6.54762 20.5538 6.54762 20.2381V17.8571C6.54762 17.5414 6.67304 17.2386 6.8963 17.0153C7.11956 16.7921 7.42236 16.6667 7.7381 16.6667ZM17.2619 10.7143C17.5776 10.7143 17.8804 10.8397 18.1037 11.063C18.327 11.2862 18.4524 11.589 18.4524 11.9048V14.2857C18.4524 14.6014 18.327 14.9042 18.1037 15.1275C17.8804 15.3508 17.5776 15.4762 17.2619 15.4762C16.9462 15.4762 16.6434 15.3508 16.4201 15.1275C16.1969 14.9042 16.0714 14.6014 16.0714 14.2857V11.9048C16.0714 11.589 16.1969 11.2862 16.4201 11.063C16.6434 10.8397 16.9462 10.7143 17.2619 10.7143V10.7143Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h3>Filter</h3>

                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M18.6667 22.1667C17.7384 22.1667 16.8482 21.7979 16.1918 21.1416C15.5354 20.4852 15.1667 19.5949 15.1667 18.6667C15.1667 17.7384 15.5354 16.8482 16.1918 16.1918C16.8482 15.5354 17.7384 15.1667 18.6667 15.1667C19.5949 15.1667 20.4852 15.5354 21.1415 16.1918C21.7979 16.8482 22.1667 17.7384 22.1667 18.6667C22.1667 19.5949 21.7979 20.4852 21.1415 21.1416C20.4852 21.7979 19.5949 22.1667 18.6667 22.1667ZM9.33334 22.1667C8.40508 22.1667 7.51484 21.7979 6.85846 21.1416C6.20208 20.4852 5.83334 19.5949 5.83334 18.6667C5.83334 17.7384 6.20208 16.8482 6.85846 16.1918C7.51484 15.5354 8.40508 15.1667 9.33334 15.1667C10.2616 15.1667 11.1518 15.5354 11.8082 16.1918C12.4646 16.8482 12.8333 17.7384 12.8333 18.6667C12.8333 19.5949 12.4646 20.4852 11.8082 21.1416C11.1518 21.7979 10.2616 22.1667 9.33334 22.1667ZM18.6667 12.8333C17.7384 12.8333 16.8482 12.4646 16.1918 11.8082C15.5354 11.1518 15.1667 10.2616 15.1667 9.33334C15.1667 8.40509 15.5354 7.51485 16.1918 6.85847C16.8482 6.20209 17.7384 5.83334 18.6667 5.83334C19.5949 5.83334 20.4852 6.20209 21.1415 6.85847C21.7979 7.51485 22.1667 8.40509 22.1667 9.33334C22.1667 10.2616 21.7979 11.1518 21.1415 11.8082C20.4852 12.4646 19.5949 12.8333 18.6667 12.8333ZM9.33334 12.8333C8.40508 12.8333 7.51484 12.4646 6.85846 11.8082C6.20208 11.1518 5.83334 10.2616 5.83334 9.33334C5.83334 8.40509 6.20208 7.51485 6.85846 6.85847C7.51484 6.20209 8.40508 5.83334 9.33334 5.83334C10.2616 5.83334 11.1518 6.20209 11.8082 6.85847C12.4646 7.51485 12.8333 8.40509 12.8333 9.33334C12.8333 10.2616 12.4646 11.1518 11.8082 11.8082C11.1518 12.4646 10.2616 12.8333 9.33334 12.8333Z" fill="black" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                        <path d="M3.5 4.75H18.5C19.2956 4.75 20.0587 5.06607 20.6213 5.62868C21.1839 6.19129 21.5 6.95435 21.5 7.75V12.25C21.5 13.0456 21.1839 13.8087 20.6213 14.3713C20.0587 14.9339 19.2956 15.25 18.5 15.25H3.5C2.70435 15.25 1.94129 14.9339 1.37868 14.3713C0.816071 13.8087 0.5 13.0456 0.5 12.25V7.75C0.5 6.95435 0.816071 6.19129 1.37868 5.62868C1.94129 5.06607 2.70435 4.75 3.5 4.75ZM3.5 6.25C3.10218 6.25 2.72064 6.40804 2.43934 6.68934C2.15804 6.97064 2 7.35218 2 7.75V12.25C2 12.6478 2.15804 13.0294 2.43934 13.3107C2.72064 13.592 3.10218 13.75 3.5 13.75H18.5C18.8978 13.75 19.2794 13.592 19.5607 13.3107C19.842 13.0294 20 12.6478 20 12.25V7.75C20 7.35218 19.842 6.97064 19.5607 6.68934C19.2794 6.40804 18.8978 6.25 18.5 6.25H3.5ZM0.5 1C0.5 0.801088 0.579018 0.610322 0.71967 0.46967C0.860322 0.329018 1.05109 0.25 1.25 0.25H20.75C20.9489 0.25 21.1397 0.329018 21.2803 0.46967C21.421 0.610322 21.5 0.801088 21.5 1C21.5 1.19891 21.421 1.38968 21.2803 1.53033C21.1397 1.67098 20.9489 1.75 20.75 1.75H1.25C1.05109 1.75 0.860322 1.67098 0.71967 1.53033C0.579018 1.38968 0.5 1.19891 0.5 1ZM0.5 19C0.5 18.8011 0.579018 18.6103 0.71967 18.4697C0.860322 18.329 1.05109 18.25 1.25 18.25H20.75C20.9489 18.25 21.1397 18.329 21.2803 18.4697C21.421 18.6103 21.5 18.8011 21.5 19C21.5 19.1989 21.421 19.3897 21.2803 19.5303C21.1397 19.671 20.9489 19.75 20.75 19.75H1.25C1.05109 19.75 0.860322 19.671 0.71967 19.5303C0.579018 19.3897 0.5 19.1989 0.5 19Z" fill="black" />
                    </svg>

                    <p>Showing 1-16 of 32 results</p>
                </div>
                <div className="Sort flex">
                    <p>Show</p>
                    <input type="number" value={16} />
                    <p>Sort by</p>
                    <input type="text" value={"Default"} />
                </div>
            </div>

            {/* Product Cards */}
            <section className="ProductCards w-full h-auto p-12 grid grid-cols-4 grid-flow-row justify-center items-center">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        description={product.description}
                        image={product.image}
                        discount={product.discount}
                        discountColor={product.discountColor}
                        discountedPrice={product.discountedPrice}
                        originalPrice={product.originalPrice}
                    />
                ))}
            </section>
            <Features />
        </div>
    )
}

export default shop

export const metadata = {
    title: "Shop - fasdf",
    description: "Explore Furniro's wide range of premium furniture.",
};