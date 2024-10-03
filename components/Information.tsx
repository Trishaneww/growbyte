import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Information = () => {
  return (
    <div className="flex flex-col items-center ">
        <h1 className="text-[5.5rem] leading-[1] text-center w-[70%]">Boost your dealership's sales with expert digital marketing</h1>
        <div className="flex flex-col justify-center items-center w-[55%] text-center text-xl font-light mt-10 gap-6">
            <p>Grow your business with a custom website that sets you apart in today's digital landscape. A professionally designed site tailored to your brand not only enhances your online presence but also drives traffic, engages customers, and boosts conversions.</p>
            <p>A professionally designed site tailored to your brand not only enhances your online presence but also drives traffic, engages customers, and boosts conversions.</p>
        </div>

        <section className="flex w-[60%] justify-between mt-12">
            <div className="flex flex-col items-center h-[400px] w-[300px] gap-4">
                <p className="text-7xl font-extrabold text-indigo-800">170%</p>
                <p className="text-lg">Increase in online sales generated</p>
                <Image
                    width={160}
                    height={160}
                    src="/assets/honda.png"  
                    alt="honda logo"
                    className="-mt-12"
                />
            </div>

            <div className="flex flex-col items-center h-[400px] w-[300px] gap-4">
                <p className="text-7xl font-extrabold text-indigo-800">90%</p>
                <p className="text-lg">Increase in form conversions</p>
                <Image
                    width={160}
                    height={160}
                    src="/assets/honda.png"  
                    alt="honda logo"
                    className="-mt-12"
                />
            </div>

            <div className="flex flex-col items-center h-[400px] w-[300px] gap-4">
                <p className="text-7xl font-extrabold text-indigo-800">28%</p>
                <p className="text-lg">Decrease in cost per lead</p>
                <Image
                    width={160}
                    height={160}
                    src="/assets/honda.png"  
                    alt="honda logo"
                    className="-mt-12"
                />
            </div>
        </section>
        <div className="flex justify-center items-center w-[182px] h-[52px] bg-gradient-to-l from-indigo-900 to-indigo-300 rounded-md -mt-32">
            <Button className="bg-white w-[180px] h-[50px] text-indigo-900 text-lg rounded-md">View our work</Button>
        </div>

      
    </div>
  )
}

export default Information