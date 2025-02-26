import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 text-center overflow-hidden'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-4xl xl:text-5xl font-extrabold tracking-wider'>
                Special Car Rent Application For You!
            </h1>
            <h2
            className='text-lg lg:text-xl text-secondary-foreground/60'
            >
                Book your favorite selected car with no Effort!, Pay
                for driving only! you choose and let us take care of the rest!
            </h2>
            <Button className='w-full'>
                Explore the Cars
            </Button>
        </div>
        <div className='xl:w-[600px] overflow-hidden'>
            <div>
            <Image src='/hero.png' alt='car' width={400} height={50}
            className='w-full object-fill rounded-lg'/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection