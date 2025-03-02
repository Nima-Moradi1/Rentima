import { MapPin } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
    <div className='mt-10'>
        <h2 className='text-center text-lg text-secondary-foreground/50 mb-3'
        >Search for what you need</h2>
        <div className='flex items-center justify-center'>
            <div className='flex bg-gray-200 p-1 px-3 rounded-full divide-x divide-secondary-foreground/30'>
            <div className='flex items-center '>
                <MapPin className='size-5' />
                <input
                type='text'
                placeholder='Location..'
                className='p-2 outline-none bg-transparent text-xs md:text-base' />
            </div>
            <div>
                <input type='date'
                className='text-xs md:text-base p-2 outline-none bg-transparent text-secondary-foreground/50'/>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default SearchInput