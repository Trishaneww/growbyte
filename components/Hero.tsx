import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <>
          <div className="w-3/5 h-4/5 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-full absolute z-1 top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
    <div className="bg-white d:h-[100vh] overflow-hidden flex items-start justify-end gap-6  pl-10 mt-28">
        {/* <div className="w-[84%] h-[93%] lg:h-[72%] bg-gradient-to-r from-indigo-200 to-indigo-300 rounded-full absolute z-1 top-[115%] md:top-[94%] lg:top-[55%] left-[88%] translate-x-[-50%] translate-y-[-50%] blur-[180px]"></div> */}
        <div className="flex flex-col justify-start items-start gap-6 z-30 w-3/5 mt-20">
            <div className="flex flex-col text-left gap-2">
                <h1 className="text-slate-950 text-[5.5rem] leading-[1]  font-bold">Connecting Leads</h1>
                <h1 className="text-slate-950 text-[5.5rem] leading-[1] font-bold">and Driving <span className="bg-gradient-to-r from-indigo-600 via-indigo-800 to bg-slate-950 bg-clip-text text-transparent ml-2">Success</span></h1>
                <p className="text-black w-3/5 mt-4">Grow your business with a custom website that sets you apart in today's digital landscape. A professionally designed site tailored to your brand not only enhances your online presence but also drives traffic, engages customers, and boosts conversions.</p>
            </div>    
            <div className="flex gap-2 justify-center">
                <Button className="bg-indigo-800 w-[150px] h-[50px]">Book a meeting</Button>
                <Button className="bg-white border-[1px] border-indigo-800 text-indigo-800 w-[150px] h-[50px]">View our work</Button>
            </div>    
        </div>


        <Image
            width={800}
            height={800}
            src='/assets/hero.png'
            alt="google ad campaign image"
            className="rounded-3xl z-10"
        />

    </div>
    </>
  )
}

export default Hero