"use client";


import Image from 'next/image';
import { CustomButton } from '.';



const Hero = () => {

    const handleScroll = () => {

    }

    return (
        <div className="Hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Your dream car is here!
                </h1>

                <p className="hero__subtitle">
                    Find, book or rent it with us.
                </p>

                <CustomButton 
                    title="Explore Cars"
                    containerStyles="bg-primary-blue
                    text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image 
                        src="/gwagon.jpg" 
                        alt="hero"
                        fill
                        className="object-contain" 
                    />
                </div>
                
                <div className="hero__image-overlay" />
            </div>
        </div>
    )
}



export default Hero;