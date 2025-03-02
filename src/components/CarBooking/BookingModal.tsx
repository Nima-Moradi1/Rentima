import React from 'react'
import { CarsProps } from '../HomePage/CarsList'
import { Button } from '../ui/button'
import Card from '../HomePage/Card'
import BookingForm from './BookingForm'

const BookingModal = ({carDetail}:{carDetail?:CarsProps}) => {
    
    if(!carDetail) return <div>
        <p className='text-destructive font-bold text-lg text-center'
    >Sorry! We could not find the car for you at this moment!</p>
    
    </div>
  return (
    <form method='dialog' className=' w-11/12 max-w-5xl'>
        <div className='border-b pb-2 mb-2'>
            <h3 className='text-3xl font-light text-secondary-foreground/50'>
                Rent A Car Now!
            </h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-y-0 divide-y gap-4'>
            {/* {car info} */}
            <div>
                <Card car={carDetail}/>
            </div>
            {/* {form} */}
            <div>
                <BookingForm car={carDetail}/>
            </div>
        </div>
        <div className='modal-action lg:-mt-2'>
            <Button className='' variant='outline'
            >Close</Button>
        
        </div>
    </form>
  )
}

export default BookingModal