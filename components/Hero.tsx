import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="md:h-[100vh] bg-slate-50">
    <div className="w-3/5 h-4/5 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-full absolute z-1 top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"></div>
    <div className="overflow-hidden flex flex-col lg:flex-row items-start justify-end gap-6  xl:pl-14 mt-12 lg:mt-28 p-2">
        {/* <div className="w-[84%] h-[93%] lg:h-[72%] bg-gradient-to-r from-indigo-200 to-indigo-300 rounded-full absolute z-1 top-[115%] md:top-[94%] lg:top-[55%] left-[88%] translate-x-[-50%] translate-y-[-50%] blur-[180px]"></div> */}
        <div className="flex flex-col justify-start items-center lg:items-start gap-6 z-30 w-full lg:w-4/5 xl:w-3/5 xl:mt-20">
            <div className="flex flex-col text-center lg:text-left gap-2">
                <h1 className="text-slate-950 text-3xl lg:text-5xl xl:text-[4.6rem] leading-[1] font-semibold">Connecting Leads and Driving <span className="bg-gradient-to-r from-indigo-600 via-indigo-800 to bg-slate-950 bg-clip-text text-transparent ml-2">Success</span></h1>
                {/* <h1 className="text-slate-950 text-3xl lg:text-5xl xl:text-[4.6rem] leading-[1] font-semibold">and Driving <span className="bg-gradient-to-r from-indigo-600 via-indigo-800 to bg-slate-950 bg-clip-text text-transparent ml-2">Success</span></h1> */}
                <p className="text-black w-full xl:w-[88%] mt-4">Expand your business by attracting more customers with a marketing strategy tailored to your needs and designed specifically for your organization. Our customized digital campaigns position your brand as a leader in your industry, driving more inquiries and conversions. We’ll boost your visibility and help you connect with potential customers seeking solutions that meet their needs.</p>
            </div>    

            <div className="flex gap-2 justify-center">
                <Link href="#booking">
                    <Button className="bg-gradient-to-l from-indigo-900 to-indigo-300 w-[170px] h-[50px] text-base">Book a meeting</Button>
                </Link>
                <Link href="#about">
                    <div className="flex justify-center items-center w-[172px] h-[52px] bg-gradient-to-l from-indigo-900 to-indigo-300 rounded-md">
                        <Button className="bg-white w-[170px] h-[50px] text-indigo-900 text-base rounded-md">Learn more</Button>
                    </div>
                </Link>
            </div>    
        </div>

            <Image
                width={800}
                height={800}
                src='/assets/hero.png'
                alt="google ad campaign image"
                className="rounded-3xl z-10 lg:w-2/4"
            />

    </div>
    </div>
  )
}

export default Hero