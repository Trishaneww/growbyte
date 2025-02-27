import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { FaDog } from "react-icons/fa6";
import { FaCat } from "react-icons/fa";
import { PiRabbitFill } from "react-icons/pi";
import { FaFish } from "react-icons/fa";
import { GiTurtleShell } from "react-icons/gi";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-12 mt-24 lg:mt-52" >
        {/* <FaDog size={50} className="text-[#5E2D00]"/>
        <FaCat  size={50} className="text-[#5E2D00]"/>
        <PiRabbitFill  size={50} className="text-[#5E2D00]"/>
        <FaFish  size={50} className="text-[#5E2D00]"/> */}

        <div className="flex justify-center items-center w-[172px] h-[42px] bg-gradient-to-l from-indigo-900 to-indigo-300 rounded-full -mb-8">
            <Button className="bg-white w-[170px] h-[40px] text-indigo-900 text-base rounded-full">Our Team</Button>
        </div>
        <h1 className="font-semibold text-3xl lg:text-6xl w-full text-center bg-gradient-to-r from-indigo-600 via-indigo-800 to bg-slate-950 bg-clip-text text-transparent">Our experts are like no other</h1>
        <p className="w-[96%] md-w-[80%] lg:w-[66%] lg:text-lg text-center -mt-6">With years of experience in digital marketing across various industries, our team is committed to understanding the unique needs of businesses and providing tailored marketing solutions that deliver measurable results. With our combined expertise, we’re here to help your business attract more customers and thrive in the digital landscape.</p>

        <section className="flex justify-center flex-wrap gap-2 items-center" id="services">
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
            className=" rounded-xl max-w-40 md:max-w-80 lg:max-w-full"
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
            className=" rounded-xl max-w-40 md:max-w-80 lg:max-w-full"
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