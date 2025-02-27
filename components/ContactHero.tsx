"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { GiCheckMark } from 'react-icons/gi';
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/hooks/use-toast"


const ContactHero = () => {
    const { toast } = useToast()
    const sendEmail = (e:any) => {
      e.preventDefault();
      console.log(e.target)
      console.log("email sent")
      emailjs.sendForm('service_mxpzvca', 'template_8qmpbtc' , e.target , 'eYY7tOX0Qwfs0Bwrs');
      e.target.reset()
  
      toast({
        title: "Email Sent",
        description: "We will get back to you shortly",
      })
    }
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
            {/* <p className="mt-4">Ready to bring your web concepts to life? Partner with our expert team and watch your vision become a stunning reality.</p> */}
            <ul className="flex flex-col gap-4 mt-4">
              <li className="flex gap-4 items-center">
                <div className="w-[22px] h-[22px] flex justify-center items-center text-green-100 bg-indigo-500 rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p className="w-[85%]">Search Engine Optimization</p>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-[22px] h-[22px] flex justify-center items-center text-green-100 bg-indigo-500 rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p className="w-[85%]">Social Media Marketing</p>
              </li>

              <li className="flex gap-4 items-center">
                <div className="w-[22px] h-[22px] flex justify-center items-center text-green-100 bg-indigo-500 rounded-full">
                  <GiCheckMark size={16}/>
                </div>
                <p className="w-[85%]">Google, Facebook, and Instagram Ads</p>
              </li>
            </ul>
        </div>


        <form className="max-w-[650px] w-full md:w-4/6 lg:w-4/6 h-[100%] md:h-[95%] shadow-lg bg-white rounded-lg flex flex-col items-center gap-8 mt-20" onSubmit={sendEmail}>
          <div className="flex flex-col items-start w-5/6 mt-6 gap-2">
          <h2 className="text-4xl font-semibold mt-8">Contact our team</h2>
          <p>Got any questions about our services or platform? We’re here to help. Chat to our friendly team and get onboard!</p>
           
          </div>

          <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center w-5/6 gap-4">
            <div className="flex flex-col items-start w-full md:w-2/4 gap-2">
                <input 
                type="text" 
                name="first_name" 
                placeholder="First name*" 
                className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
            </div>

            <div className="flex flex-col items-start w-full md:w-2/4 gap-2">
                <input 
                type="text" 
                name="last_name" 
                placeholder="Last name*" 
                className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center w-5/6 gap-4">
            <div className="flex flex-col items-start w-full md:w-2/4 gap-2">
                <input 
                type="text" 
                name="email" 
                placeholder="Email*" 
                className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
            </div>

            <div className="flex flex-col items-start w-full md:w-2/4 gap-2">
                <input 
                type="text" 
                name="phone" 
                placeholder="Phone*" 
                className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
            </div>
          </div>

          {/* <div className="flex flex-col items-start w-5/6 gap-2">
            <p className="flex justify-start text-slate-900">Company Name</p>
            <input 
              type="text" 
              name="company" 
              placeholder="Company name" 
              className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
          </div> */}

          <div className="flex flex-col items-start w-5/6 gap-2">
            <input 
              type="text" 
              name="company" 
              placeholder="Company website" 
              className="w-full border-[1px] h-[45px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>

          <div className="flex flex-col items-start w-5/6 gap-2">
            <textarea placeholder="Tell us more about your goals" name="message" className="w-full border-[1px] h-[110px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>
            <Button type="submit" className="bg-gradient-to-l from-indigo-900 to-indigo-300 w-5/6 h-[50px] text-white text-base rounded-md mb-4 lg:mb-1">View our work</Button>
        </form>

        </div>

    </div>
  )
}

export default ContactHero