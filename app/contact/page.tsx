import React from 'react'
import Banner from '@/components/Banner/Banner'
import Features from '@/components/Features/Features'

const contact = () => {
    return (
        <div>
            <Banner title='Contact' link='/contact' />
            <Features />
        </div>
    )
}

export default contact

export const metadata = {
    title: "Contact - fasdf",
    description: "Explore Furniro's wide range of premium furniture.",
};