import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const About = () => {
  return (
    <div className="flex flex-col items-center gap-12 mt-60">

        <div className="flex justify-center items-center w-[172px] h-[42px] bg-gradient-to-l from-indigo-900 to-indigo-300 rounded-full -mb-8">
            <Button className="bg-white w-[170px] h-[40px] text-indigo-900 text-base rounded-full">Our Team</Button>
        </div>
        <h1 className="font-semibold text-3xl lg:text-6xl w-full text-center">Our experts are like no other</h1>

        <section className="flex justify-center flex-wrap gap-2 items-center">
        <Image
            height={280}
            width={280}
            src="/assets/about2.png"
            alt="about us section"
            className="rounded-xl max-w-40 md:max-w-80 lg:max-w-full"
        />

        <Image
            height={280}
            width={280}
            src="/assets/about3.png"
            alt="about us section"
            className="xl:mt-32 rounded-xl max-w-40 md:max-w-80 lg:max-w-full"
        />

        <Image
            height={280}
            width={280}
            src="/assets/about1.png"
            alt="about us section"
            className="rounded-xl max-w-40 md:max-w-80 lg:max-w-full"
        />

        <Image
            height={280}
            width={280}
            src="/assets/about4.png"
            alt="about us section"
            className="xl:mt-32 rounded-xl max-w-40 md:max-w-80 lg:max-w-full"
        />

        <Image
            height={280}
            width={280}
            src="/assets/about5.png"
            alt="about us section"
            className="rounded-xl max-w-40 md:max-w-80 lg:max-w-full"
        />
        </section>
    </div>
  )
}

export default About