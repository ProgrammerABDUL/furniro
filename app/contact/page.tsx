import React from 'react'
import Banner from '@/components/Banner/Banner'
import Features from '@/components/Features/Features'

const contact = () => {
    return (
        <div>
            <Banner title='Contact' link='/contact' />
            <div className="contact w-full p-5 text-center">
                <div>
                    <h1 className='capitalize font-semibold text-4xl'>Get in touch with us</h1>
                    <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>

                <div>

                </div>
            </div>
            <Features />
        </div>
    )
}

export default contact

export const metadata = {
    title: "Contact - fasdf",
    description: "Explore Furniro's wide range of premium furniture.",
};