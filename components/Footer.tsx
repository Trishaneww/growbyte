import Link from 'next/link'
import React from 'react'
import '../styles/global.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex flex-col gap-40 p-10  w-full  bg-slate-50 mt-20 footer">
        <section className="flex flex-col gap-4 justify-start -mb-20 xl:mb-0 footer-header">
            <Image 
                width={200}
                height={200}
                src="/assets/logo2.png"
                alt="growbyte secondary logo"
            />
            <p className="text-slate-900 mb-9 xl:mb-0 text-lg">@2024 Growbyte. All rights reserved</p>
        </section>

        <section className="flex gap-12 items-start flex-wrap">
            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold text-lg">Booking</p>
                <p className="text-slate-700 text-lg">Google Meeting</p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold text-lg">Our Partner</p>
                <p className="text-slate-700 text-lg">Honda Oakville</p>
                <p className="text-slate-700 text-lg">Toyota Milton</p>
                <p className="text-slate-700 text-lg">Mitsubishi Oakville</p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold text-lg">Services</p>
                <p className="text-slate-700 text-lg">Google Ads</p>
                <p className="text-slate-700 text-lg">Instagram Ads</p>
                <p className="text-slate-700 text-lg">Facebook Ads</p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold text-lg">Contact</p>
                <a href="mailto:contact.figmentstudios@gmail.com" className="text-lg" target="_blank">contact.growbyte@gmail.com</a>
                <a href="https://www.instagram.com/figmentstudioss" className="text-lg" target="_blank">@growbyte</a>
                <p className="text-lg">(647)-767-8909</p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-slate-900 font-semibold text-lg">Legal</p>
                <p className="text-slate-700 text-lg">Terms & Conditions</p>
                <p className="text-slate-700 text-lg">Privacy Policy</p>
            </div>
        </section>

    </div>
  )
}

export default Footer