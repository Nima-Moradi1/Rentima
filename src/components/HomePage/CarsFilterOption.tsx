'use client'
import React from 'react'

const CarsFilterOption = ({brands , setFilteredBrand, setSortOrder}:{brands:string[],prices:number[] , setFilteredBrand : (brand: string) => void, setSortOrder : (value : string) => void}) => {

  const [selectedSort, setSelectedSort] = React.useState("Prices"); 


  //since we may have repeated values of brands, we only want the unique values for the dropdown
  const uniqueBrands = [...new Set(brands)]

  return (
    <div className='mt-10 flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center '>
        <div>
            <h2 className='text-3xl font-bold'
            >Cars Catalog</h2>
        </div>
        {/* this is the first dropdown to filter products */}
        <div className='flex justify-between items-center gap-5'>
        <select value={selectedSort}
      onChange={(e) => {
        setSelectedSort(e.target.value);
        setSortOrder(e.target.value);
      }}
        className="select bg-white select-bordered w-full max-w-xs">
          <option disabled>Prices</option>
            <option value='ascending'>Lowest to Highest</option>
             <option value='descending'>Highest to Lowest</option>
        </select>
        {/* this is the second dropdown to choose between models */}
        <select onChange={(e)=> setFilteredBrand(e.target.value)}
        className="select bg-white select-bordered w-full max-w-xs">
            {uniqueBrands?.map((brand:string)=> {
              return (
                <option key={brand}>{(brand.toLocaleUpperCase())}</option>
              )
            })}
        </select>
        </div>
    </div>
  )
}

export default CarsFilterOption