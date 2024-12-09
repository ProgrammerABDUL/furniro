import React from 'react'
import Banner from '@/components/Banner/Banner'
import Features from '@/components/Features/Features'

const blog = () => {
    return (
        <div>
            <Banner title='Blog' link='/blog' />
            <Features />
        </div>
    )
}

export default blog

export const metadata = {
    title: "Blog - fasdf",
    description: "Explore Furniro's wide range of premium furniture.",
};