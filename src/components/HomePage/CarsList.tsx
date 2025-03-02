'use client'

import React, { useState } from 'react'
import Card from './Card';
import Modal from './Modal';

export interface CarsProps {
    name : string , 
    id:string , 
    carAvg : number , 
    carBrand : string, 
    carType : 'automatic' | 'manual' ,
    price : number,
    image : {
        url : string
    }
}

const CarsList = ({carsList}:{carsList : CarsProps[]}) => {

    const [selectedCar,setSelectedCar] = useState<CarsProps>()

    if(!carsList) return <div className='my-10 flex text-center flex-col gap-5 p-5 rounded-2xl bg-destructive text-white'>
            <p className='font-extrabold text-xl'>OOPS!</p>
            <p>We cannot Find Any Cars For you at this moment!</p></div>

            
  return (
    <div>
        <div className='mt-10 grid-cols-1 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {carsList?.map((car:CarsProps)=> {
                return (
                    <div 
                    className='cursor-pointer'
                    onClick={()=>{
                        const modal = document?.getElementById('show-modal') as HTMLDialogElement;
                        modal?.showModal();
                        setSelectedCar(car)
                    }}
                    key={car.id}
                    >
                        <Card car={car} />
                    </div>
                )
            })}
        </div>
        <Modal car={selectedCar}/>
    </div>
  )
}

export default CarsList