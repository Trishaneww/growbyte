import Image from 'next/image'
import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import { Button } from './ui/button'

const ContactHero = () => {
  return (
    <div className="flex justify-center w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 -mt-6 w-full lg:w-4/5 p-8 z-20">
        <div className="flex flex-col w-full">
            <Image
                width={1000}
                height={1000}
                alt="contact image banner"
                src="/assets/contact.png"
                className="md:-ml-6 lg:-ml-14"
            />

            <p className="text-2xl md:text-5xl  font-bold mt-6">Grow your business's online presence</p>
            <p className="mt-4">Ready to bring your web concepts to life? Partner with our expert team and watch your vision become a stunning reality.</p>
            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex gap-4 items-center">
                <div className="w-[22px] h-[22px] flex justify-center items-center text-green-100 bg-green-500 rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p className="w-[85%]">Google Ads + SEO</p>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-[22px] h-[22px] flex justify-center items-center text-green-100 bg-green-500 rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p className="w-[85%]">Facebook Ads</p>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-[22px] h-[22px] flex justify-center items-center text-green-100 bg-green-500 rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p className="w-[85%]">Instagram Ads</p>
              </li>
            </ul>
        </div>

        

        <form className="max-w-[650px] w-full md:w-4/6 lg:w-4/6 h-[100%] md:h-[95%] shadow-lg bg-white rounded-lg flex flex-col items-center gap-4 mt-20">
          <div className="flex flex-col items-start w-5/6 mt-6 gap-2">
          <h2 className="text-4xl font-semibold">Contact our team</h2>
          <p>Got any questions about our services or platform? We’re here to help. Chat to our friendly team and get onboard!</p>
           
          </div>

          <div className="flex justify-center items-center w-5/6 gap-4">
            <div className="flex flex-col items-start w-2/4 gap-2">
                <p className="flex justify-start text-slate-900">First Name</p>
                <input 
                type="text" 
                name="email" 
                placeholder="john@gmail.com" 
                className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
            </div>

            <div className="flex flex-col items-start w-2/4 gap-2">
                <p className="flex justify-start text-slate-900">Last Name</p>
                <input 
                type="text" 
                name="company" 
                placeholder="YA Solutions Inc" 
                className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
            </div>
          </div>

          <div className="flex justify-center items-center w-5/6 gap-4">
            <div className="flex flex-col items-start w-2/4 gap-2">
                <p className="flex justify-start text-slate-900">Email</p>
                <input 
                type="text" 
                name="email" 
                placeholder="john@gmail.com" 
                className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
            </div>

            <div className="flex flex-col items-start w-2/4 gap-2">
                <p className="flex justify-start text-slate-900">Phone</p>
                <input 
                type="text" 
                name="company" 
                placeholder="YA Solutions Inc" 
                className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
            </div>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            <p className="flex justify-start text-slate-900">Company Name</p>
            <input 
              type="text" 
              name="company" 
              placeholder="YA Solutions Inc" 
              className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            <p className="flex justify-start text-slate-900">Company Website</p>
            <input 
              type="text" 
              name="company" 
              placeholder="YA Solutions Inc" 
              className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            <p className="flex justify-start text-slate-900">Notes</p>
            <textarea placeholder="Example notes" name="message" className="w-full border-[1px] h-[110px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>
            <Button type="submit" className="bg-gradient-to-l from-indigo-900 to-indigo-300 w-5/6 h-[50px] text-white text-base rounded-md mb-8">View our work</Button>
        </form>

        </div>

    </div>
  )
}

export default ContactHero