"use client"
import React from 'react'
import { InlineWidget } from "react-calendly";
import { Button } from './ui/button';

const Booking = () => {
  return (
    <div className="flex justify-start items-center px-16 mt-48 mb-48">
        <div className="flex flex-col gap-2 w-[65%]">
            <h1 className="text-6xl font-semibold">Grow your business</h1>
            <p className="w-[90%] text-lg">Boost your business with expert digital marketing! Book now for SEO, social media, PPC, and more to grow your online presence</p>
            <div className="flex justify-center items-center w-[182px] h-[52px] bg-gradient-to-l from-indigo-900 to-indigo-300 rounded-md mt-6">
                <Button className="bg-white w-[180px] h-[50px] text-indigo-900 text-lg rounded-md">View our work</Button>
            </div>
        </div>
        <div className="w-full">
            <InlineWidget url="https://calendly.com/growbyte/30min" styles={{height: '500px'}} />
        </div>


    </div>
  )
}


export default Booking