import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";

const Services = () => {
  return (
    <div className="flex flex-col px-14 mt-40">
        <h1 className="font-semibold text-6xl w-2/4">Unlock your brand's potential</h1>
        <section className="flex justify-between mt-24">
            <div className="flex gap-2">
                <div className="flex justify-center items-center border-[1px] border-slate-300 w-[50px] h-[50px] rounded-lg">
                    <FaInstagram size={35}/>
                </div>
                <div>
                    <p className="font-semibold text-xl">Instagram Ads</p>
                    <p className="text-slate-500 text-sm">Engaging, targeted ads that drive real results.</p>
                </div>
            </div>

            <div className="flex gap-2">
                <div className="flex justify-center items-center border-[1px] border-slate-300 w-[50px] h-[50px] rounded-lg">
                    <FaInstagram size={35}/>
                </div>
                <div>
                    <p className="font-semibold text-xl">Instagram Ads</p>
                    <p className="text-slate-500 text-sm">Engaging, targeted ads that drive real results.</p>
                </div>
            </div>

            <div className="flex gap-2">
                <div className="flex justify-center items-center border-[1px] border-slate-300 w-[50px] h-[50px] rounded-lg">
                    <FaInstagram size={35}/>
                </div>
                <div>
                    <p className="font-semibold text-xl">Instagram Ads</p>
                    <p className="text-slate-500 text-sm">Engaging, targeted ads that drive real results.</p>
                </div>
            </div>

            <div className="flex gap-2">
                <div className="flex justify-center items-center border-[1px] border-slate-300 w-[50px] h-[50px] rounded-lg">
                    <FaInstagram size={35}/>
                </div>
                <div>
                    <p className="font-semibold text-xl">Instagram Ads</p>
                    <p className="text-slate-500 text-sm">Engaging, targeted ads that drive real results.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services