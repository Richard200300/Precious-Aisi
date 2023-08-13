import React from 'react'
import left from "../assets/icons/left.svg"
import right from "../assets/icons/right.svg"
const Banner = () => {
    return (
        <section className='global bg-[#17A500] h-12 flex justify-center mt-5'>
            <div className="flex flex-col justify-center items-center text-xs font-medium text-[#FFFEF5]  relative">
                <div className="bg-[#17A500]">
                    Members: Free Shipping On Orders above 50,000 NGN
                </div>
                <p className='bg-[#17A500] underline cursor-pointer'>Join Now</p>
                <img src={left} alt="left" className='absolute -left-8 cursor-pointer' />
                <img src={right} alt="left" className='absolute -right-8 cursor-pointer' />

            </div>

        </section>
    )
}

export default Banner;
