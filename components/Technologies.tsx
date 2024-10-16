import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Technologies = () => {
  return (
    <div className="flex flex-col items-center mt-32 lg:mt-0">
         <div className="flex justify-center items-center w-[172px] h-[42px] bg-gradient-to-l from-indigo-900 to-indigo-300 rounded-full mb-4">
            <Button className="bg-white w-[170px] h-[40px] text-indigo-900 text-base rounded-full">Our System</Button>
        </div>
        <h1 className="font-semibold text-3xl lg:text-6xl w-full text-center">The Tech We Use</h1>
        <p className="w-[96%] md-w-[80%] lg:w-[66%] text-center lg:text-lg mt-6">What we use to ensure your campaigns run smoothly</p>

        <section className="flex flex-col md:flex-row flex-wrap justify-center items-center mt-6 lg:mt-16 w-full gap-12 lg:gap-24">
            <Image 
                height={150}
                width={150}
                src="/assets/callrail.png"
                alt="google tag logo"
            />
             <Image 
                height={170}
                width={170}
                src="/assets/googleanalytics.png"
                alt="google tag logo"
            />
             <Image 
                height={150}
                width={150}
                src="/assets/hotjar.png"
                alt="google tag logo"
            />
             <Image 
                height={120}
                width={120}
                src="/assets/googletag.png"
                alt="google tag logo"
            />
             <Image 
                height={150}
                width={150}
                src="/assets/swydo.png"
                alt="google tag logo"
            />
              {/* <Image 
                height={30}
                width={300}
                src="/assets/meta.png"
                alt="google tag logo"
                className="xl:-ml-20"
            /> */}
        </section>
    </div>
  )
}

export default Technologies