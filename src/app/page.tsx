'use client'
import CarsFilterOption from "@/components/HomePage/CarsFilterOption";
import HeroSection from "@/components/HomePage/Hero";
import SearchInput from "@/components/HomePage/SearchInput";
import { CarProps, getCardsList } from "../services";
import CarsList from "@/components/HomePage/CarsList";
import React, { Suspense, useEffect, useState } from "react";
import Fallback from "@/components/ui/Fallback";
import ToastMsg from "@/components/ui/ToastMsg";
import { BookingContext } from "@/providers/BookingContext";

export default function Home() {

  const [carBrands , setCarBrands] = React.useState<string[]>([])
  const [prices , setPrices] = React.useState<number[]>([])
  const [allCars,setAllCars] = React.useState<CarProps[]>([])
  const [filteredCars,setFilteredCars] = useState<CarProps[]>([])
  const [sortOrder , setSortOrder] = React.useState<string>("")
  const [showToastMsg,setShowToastMsg] = React.useState<boolean>(false)

  useEffect(()=> {
    getCarsList()
  },[])
// we get the list from api, then destruct brands(unique) and prices and save them to state
  const getCarsList = async () => {
    const carsData = await getCardsList();
    const brands = Array.from(new Set(carsData?.map((car) => car.carBrand)));
    const carPrices = carsData?.map((car) => car.price);
  
    setCarBrands(brands);
    setPrices(carPrices);
    setFilteredCars(carsData);
    setAllCars(carsData);
  };
  // i use this to filter the shown list by the brand user selects
  const filterCarList = (brand: string) => {
    if (brand === "ALL") {
      setFilteredCars(allCars);
    } else {
      const filteredList = allCars.filter((item) => item.carBrand.toLowerCase() === brand.toLowerCase());
      setFilteredCars(sortCars(filteredList, sortOrder));
    }
  };
// we sort the cars by their price here
  const sortCars = (carList: CarProps[], order: string) => {
    if (order === "ascending") {
      return [...carList].sort((a, b) => a.price - b.price);
    }
    if (order === "descending") {
      return [...carList].sort((a, b) => b.price - a.price);
    }
    return carList;
  };
  
// we use this to handle what user selects and operate on it
  const handleSortChange = (order: string) => {
    setSortOrder(order);
    setFilteredCars(sortCars(filteredCars, order));
  };
 useEffect(()=> {
  if(showToastMsg === true) {
    setTimeout(()=> setShowToastMsg(false), 4000)
  }
 },[showToastMsg])
  return (
   <div className='p-5 sm:px-10 md:px-20'>
    <BookingContext.Provider value={{showToastMsg,setShowToastMsg}}>
    <HeroSection />
    <SearchInput />
    <Suspense fallback={<Fallback />}>
    <CarsFilterOption
        setFilteredBrand={(value) => filterCarList(value)}
        brands={["All", ...carBrands]}
        prices={prices}
        setSortOrder={handleSortChange}
      />
      <CarsList carsList={filteredCars}/>
    </Suspense>
    {showToastMsg ? <ToastMsg message='✅ Successfully Created Your Booking ❤️' success/> : null}
    </BookingContext.Provider>
   
   </div> 
  );
}
