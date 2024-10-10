import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Information = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-52">
        <h1 className="text-3xl mt-36 lg:mt-0 lg:text-6xl font-semibold text-center w-full lg:w-[75%] p-2">Boost your dealership's sales with expert digital marketing</h1>
        <div className="flex flex-col justify-center items-center w-full lg:w-[55%] text-center lg:text-lg font-light mt-10 gap-6 p-2">
            <p>Grow your business with a custom website that sets you apart in today's digital landscape. A professionally designed site tailored to your brand not only enhances your online presence but also drives traffic, engages customers, and boosts conversions.</p>
            <p>A professionally designed site tailored to your brand not only enhances your online presence but also drives traffic, engages customers, and boosts conversions.</p>
        </div>

        {/* <section className="flex flex-row flex-wrap w-full justify-center gap-1 mt-12">
            <div className="flex flex-col items-center h-[200px] w-[350px] gap-4">
                <p className="text-3xl lg:text-7xl font-extrabold text-indigo-800">170%</p>
                <p className="text-lg text-center">Increase in online sales generated</p>
                <Image
                    width={120}
                    height={160}
                    src="/assets/honda.png"  
                    alt="honda logo"
                    className="-mt-12"
                />
            </div>

            <div className="flex flex-col items-center h-[200px] w-[350px] gap-4">
                <p className="text-3xl lg:text-7xl font-extrabold text-indigo-800">90%</p>
                <p className="text-lg text-center">Increase in form conversions</p>
                <Image
                    width={120}
                    height={160}
                    src="/assets/honda.png"  
                    alt="honda logo"
                    className="-mt-12"
                />
            </div>

            <div className="flex flex-col items-center h-[200px] w-[350px] gap-4">
                <p className="text-3xl lg:text-7xl font-extrabold text-indigo-800">28%</p>
                <p className="text-lg text-center">Decrease in cost per lead</p>
                <Image
                    width={120}
                    height={160}
                    src="/assets/honda.png"  
                    alt="honda logo"
                    className="-mt-12"
                />
            </div>
        </section> */}
        {/* <div className="flex justify-center items-center w-[182px] h-[52px] bg-gradient-to-l from-indigo-900 to-indigo-300 rounded-md lg:-mt-2">
            <Button className="bg-white w-[180px] h-[50px] text-indigo-900 text-base rounded-md">View our work</Button>
        </div> */}

      
    </div>
  )
}

export default Information