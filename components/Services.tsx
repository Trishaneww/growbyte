import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";

const Services = () => {
  return (
    <div className="flex flex-col px-2 lg:px-14 mt-10">
        {/* <h1 className="font-semibold text-3xl lg:text-6xl w-full text-center">Unlock your brand's potential</h1> */}
        <section className="flex flex-col md:flex-row flex-wrap justify-center items-center mt-12 lg:mt-24 w-full gap-6 lg:gap-8">
            <div className="flex flex-col items-start justify-start gap-2 hover:-translate-y-2 transition delay-150 duration-300 ease-in-out w-[320px] md:w-[390px] h-[250px] border-[1px] border-gray-300 p-6 rounded-lg">
                <div className="flex items-end gap-4 h-[50px]">
                    <FaInstagram size={35}/>
                    <p className="font-semibold text-xl md:text-2xl lg:text-3xl">Instagram Ads</p>
                </div>
                <div>
                    <p className="font-semibold lg:text-xl">Engage Your Audience with Visual Ads</p>
                    <p className="text-slate-500 text-sm">We create attention-grabbing Instagram ads that connect with your target audience and
                    drive real engagement, leading to increased brand visibility.</p>
                </div>
            </div>


            <div className="flex flex-col items-start justify-start gap-2 hover:-translate-y-2 transition delay-150 duration-300 ease-in-out w-[320px] md:w-[390px] h-[250px] border-[1px] border-gray-300 p-6 rounded-lg">
                <div className="flex items-end gap-4 h-[50px]">
                    <FaSquareFacebook size={35}/>
                    <p className="font-semibold text-xl md:text-2xl lg:text-3xl">Facebook Ads</p>
                </div>
                <div>
                    <p className="font-semibold lg:text-xl">Maximize Your Reach and Conversions</p>
                    <p className="text-slate-500 text-sm">Our data-driven Facebook ads are tailored to your business, targeting the right customers
                    at the right time to increase traffic, leads, and sales.</p>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 hover:-translate-y-2 transition delay-150 duration-300 ease-in-out w-[320px] md:w-[390px] h-[250px] border-[1px] border-gray-300 p-6 rounded-lg">
                <div className="flex items-end gap-4 h-[50px]">
                    <FaGoogle size={35}/>
                     <p className="font-semibold text-xl md:text-2xl lg:text-3xl">Google Ads + SEO</p>
                </div>
                <div>
                    <p className="font-semibold lg:text-xl">Get Found, Drive Results</p>
                    <p className="text-slate-500 text-sm">With targeted Google Ads and SEO strategies, we help your business rank higher in
                    search results and attract high-quality leads</p>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-2 hover:-translate-y-2 transition delay-150 duration-300 ease-in-out w-[320px] md:w-[390px] h-[250px] border-[1px] border-gray-300 p-6 rounded-lg">
                <div className="flex items-end gap-4 h-[50px]">
                    <LuPencilLine size={35}/>
                    <p className="font-semibold text-xl md:text-2xl lg:text-3xl">Copywriting</p>
                </div>
                <div>
                    <p className="font-semibold lg:text-xl">Compelling Copy that Drives Action</p>
                    <p className="text-slate-500 text-sm">We deliver persuasive, impactful copy which engages your audience, effectively
                    communicates your brand’s message, and converts potential customers into loyal clients.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services