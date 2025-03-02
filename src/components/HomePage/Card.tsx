'use client'

import Image from 'next/image';
import { CarsProps } from './CarsList'
import { TbSteeringWheelFilled } from 'react-icons/tb';
import { CgUiKit } from 'react-icons/cg';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';

const Card = ({car}:{car:CarsProps}) => {
    const [singleCar, setSingleCar] = React.useState<CarsProps>(car)

    useEffect(()=> {
        if(car) {
            setSingleCar(car)
        }
    },[car])

    if(!car) return null;
  return (
    <div>
        <div className='border p-3 group rounded-xl hover:border-primary transition-all duration-300 '>
            <h2 className='text-xl font-extrabold mb-2'>{singleCar?.name}</h2>
            <div className='relative w-full'>
            <Image src={singleCar?.image?.url} alt={singleCar?.name}
            width={220} height={200}
            className='w-full scale-95 group-hover:scale-100 transition-all duration-300 mb-3 h-48 object-cover rounded-xl shadow-lg shadow-secondary-foreground/50'/>
            </div>
            <div className=' relative flex justify-between items-center px-3 text-xs md:text-sm'>
            <div className='flex flex-col items-center justify-center '>
            <TbSteeringWheelFilled className='size-6'/>
            <h1>{(singleCar?.carBrand)?.toLocaleUpperCase()}</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <CurrencyDollarIcon className='size-6'/>
            <h2 className='font-extrabold flex items-center justify-between gap-1'>
            <span>{(singleCar?.price)/1000}</span>
            <span className='font-extralight text-xs'>{" "}/ day</span>
            </h2> 
            </div>
            <div className='flex flex-col items-center justify-center'>
            <CgUiKit className='size-6' />
            <h1>{singleCar?.carType}</h1>
            </div>
            <div className="absolute w-full bg-destructive p-3 right-1 shadow-lg rounded-xl opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <div className='flex items-center justify-between gap-2'>
                    <p className='text-white'>Rent Now</p>
                    <ArrowRightCircleIcon stroke='white' className='size-6'/>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card