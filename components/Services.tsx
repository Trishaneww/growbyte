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
            <div className="flex gap-2 hover:-translate-y-2 transition delay-150 duration-300 ease-in-out w-[380px] ">
                <div className="flex justify-center items-center border-[1px] border-slate-300 w-[50px] h-[50px] rounded-lg">
                    <FaInstagram size={35}/>
                </div>
                <div>
                    <p className="font-semibold text-xl">Instagram Ads</p>
                    <p className="text-slate-500 text-sm">Engaging, targeted ads that drive real results.</p>
                </div>
            </div>

            <div className="flex gap-2 hover:-translate-y-2 transition delay-150 duration-300 ease-in-out w-[380px] ">
                <div className="flex justify-center items-center border-[1px] border-slate-300 w-[50px] h-[50px] rounded-lg">
                    <FaSquareFacebook size={35}/>
                </div>
                <div>
                    <p className="font-semibold text-xl">Facebook Ads</p>
                    <p className="text-slate-500 text-sm">Engaging, targeted ads that drive real results.</p>
                </div>
            </div>



            <div className="flex flex-col gap-2 hover:-translate-y-2 transition delay-150 duration-300 ease-in-out w-[380px]">
                <div className="flex items-end gap-4">
                    <FaGoogle size={35}/>
                     <p className="font-semibold text-3xl">Google Ads + SEO</p>
                </div>
                <div>
                    <p className="font-semibold text-xl">Get Found, Drive Results</p>
                    <p className="text-slate-500 text-sm">With targeted Google Ads and SEO strategies, we help your business rank higher in
                    search results and attract high-quality leads</p>
                </div>
            </div>



            <div className="flex flex-col gap-2 hover:-translate-y-2 transition delay-150 duration-300 ease-in-out w-[380px]">
                <div className="flex items-end gap-4">
                    <LuPencilLine size={35}/>
                    <p className="font-semibold text-3xl">Copywriting</p>
                </div>
                <div>
                    <p className="font-semibold text-xl">Compelling Copy that Drives Action</p>
                    <p className="text-slate-500 text-sm">We deliver persuasive, impactful copy which engages your audience, effectively
                    communicates your brand’s message, and converts potential customers into loyal clients.</p>
                </div>
            </div>

            <div className="flex gap-2 hover:-translate-y-2 transition delay-150 duration-300 ease-in-out w-[380px]">
                <div className="flex justify-center items-center border-[1px] border-slate-300 w-[50px] h-[50px] rounded-lg">
                    <LuPencilLine size={35}/>
                </div>
                <div>
                    <p className="font-semibold text-xl">Copywriting</p>
                    <p className="text-slate-500 text-sm">Engaging, targeted ads that drive real results.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services