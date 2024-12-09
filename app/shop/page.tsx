import React from 'react'
import Banner from '@/components/Banner/Banner'
import Features from '@/components/Features/Features'

const shop = () => {
    return (
        <div>
            <Banner title='Shop' link='/shop' />
            
            <Features />
        </div>
    )
}

export default shop

export const metadata = {
    title: "Shop - fasdf",
    description: "Explore Furniro's wide range of premium furniture.",
};