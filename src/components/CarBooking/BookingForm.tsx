'use client'

import { AddressProps, createBooking, getStoreLocations } from '@/services/index'
import React, { useContext, useEffect } from 'react'
import { Button } from '../ui/button';
import { CarsProps } from '../HomePage/CarsList';
import { useUser } from '@clerk/nextjs';
import { BookingContext } from '@/providers/BookingContext';



interface FormValues {
    location: string;
    pickupDate: string;
    dropoffDate: string;
    pickupTime: string;
    dropoffTime: string;
    contactNumber: string;
    username : string,
    email : string,
    carList : {
        connect : {
            id : string
        }
    }
}


const BookingForm = ({car}:{car?:CarsProps}) => {

    //get user data from client hook of clerk
    const {user} = useUser()
    const userId =user?.id;
    const userEmailAddress = user?.emailAddresses[0]?.emailAddress;
    //we're not letting the user choose a date earlier than today
    const today = new Date().toISOString().split("T")[0];
    // we use the context to pass the toast to the home page since we're not using react-hot-toast
    const {showToastMsg,setShowToastMsg} = useContext(BookingContext)
    const [formValues , setFormValues] = React.useState<FormValues>({
        location: '' ,
        pickupDate : '',
        dropoffDate : '' ,
        pickupTime : '',
        dropoffTime : '' ,
        contactNumber : '', 
        username : userId ? userId : '', 
        email : userEmailAddress ? userEmailAddress : '' ,
        carList : {connect : {id : ''}}
    })
    const [value, setValue] = React.useState<string>('Pickup Location')
    const [addresses , setAddresses] = React.useState<AddressProps[]>([])
//since we want to send the car data in the booking form, we do this :
useEffect(()=> {
    if(car){
        setFormValues({
            ...formValues ,
            carList : {connect : 
                {
                    id : car.id
                }
            }
        })
    }
},[car])
    //this function gives us the address values for the dropdown
    const getAddresses = async ()=> {
        const response = await getStoreLocations()
        setAddresses(response)
    }
    useEffect(()=> {
        getAddresses()
    },[])


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    });
}
const handleFormSubmit = async () => {
   await createBooking(formValues)
   setShowToastMsg(true)
    
}

  return (
    <div className='md:ml-5'>
        {/* {inputs for date} */}
        <div className='flex flex-col w-full mb-5'>
            <label className='text-secondary-foreground/60'>
                Pickup Location
            </label>
            <select value={value} name='location'
            onChange={(e)=>{
                setValue(e.target.value)
                handleChange(e)
            }}
             className='select bg-slate-50 select-bordered w-full max-w-5xl'>
                <option value="Pickup Location" disabled>Pickup Location ?</option>
                {addresses?.map((item: AddressProps, index: number) => {
                    return (
                        <option key={index} value={item?.address}>
                            {item?.address}
                        </option>
                    )
                })}
            </select>
        </div>
        <div className='flex flex-col gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-secondary-foreground/50'
                >Pick Up Date
                </label>
                <input min={today}
                onChange={handleChange}
                 type="date" placeholder='Type here' name='pickupDate'
                className='input bg-slate-50 input-bordered w-full max-w-lg'
                />
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-secondary-foreground/50'
                >Drop Off Date
                </label>
                <input onChange={handleChange}
                 min={today} type="date" placeholder='Type here' name='dropoffDate'
                className='input bg-slate-50 input-bordered w-full max-w-lg'
                />
            </div>
        </div>
        {/* {inputs for time} */}
        <div className='flex gap-5'>
            <div className='flex flex-col w-full mb-5'>
                <label className='text-secondary-foreground/50'>
                    Pick Up Time
                </label>
                <input onChange={handleChange}
                 type="time" placeholder='Type here' name='pickupTime'
                className='input input-bordered bg-slate-50 max-w-lg' />
            </div>
            <div className='flex flex-col w-full mb-5'>
                <label className='text-secondary-foreground/50'>
                    Drop Off Time
                </label>
                <input onChange={handleChange}
                type="time" placeholder='Type here' name='dropoffTime'
                className='input input-bordered bg-slate-50 max-w-lg' />
            </div>
        </div>
        {/* {contact number} */}
        <div className='flex flex-col w-full mb-5'>
            <label className='text-secondary-foreground/50'
            >Contact Number</label>
            <input type="text" name='contactNumber' onChange={handleChange}
            className='input input-bordered bg-slate-50 w-full max-w-lg'/>
        </div>
        <div>
        <Button
         type='submit' onClick={handleFormSubmit}
         className='w-full md:w-1/4'
            >Submit</Button>
        </div>
    </div>
  )
}

export default BookingForm