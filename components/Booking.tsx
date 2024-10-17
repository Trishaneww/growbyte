"use client"
import React from 'react'
import { InlineWidget } from "react-calendly";
import { Button } from './ui/button';
import Link from 'next/link';

const Booking = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-center px-4 lg:px-16 mt-28 lg:mt-48 lg:mb-48">
        <div className="flex flex-col items-center lg:items-start gap-2 w-full lg:w-[65%] mt-12">
            <h1 className="text-3xl lg:text-6xl font-semibold bg-gradient-to-r from-indigo-700 via-indigo-950 to bg-slate-950 bg-clip-text text-transparent">Ready to grow your business</h1>
            <p className="w-[98%] text-lg md:text-center lg:text-left">Let’s take your marketing to the next level. Book a free, no-obligation call today, and we’ll show you how our tailored strategies can bring real results to your business. Get expert advice, and see how our strategies and client-first commitment can revolutionize the way you market your brand</p>
            <div className="flex justify-center items-center w-[182px] h-[52px] bg-gradient-to-l from-indigo-900 to-indigo-300 rounded-md mt-6">
              <Link href="/contact">
                <Button className="bg-white w-[180px] h-[50px] text-indigo-900 text-base rounded-md">Contact Us</Button>
              </Link>
            </div>
        </div>
        <div className="w-full mt-12">
            <InlineWidget url="https://calendly.com/growbyte/30min" styles={{height: '500px'}} />
        </div>


    </div>
  )
}


export default Booking