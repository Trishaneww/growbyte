import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className="flex justify-between items-center lg:px-12 py-6 bg-slate-50 w-full">
        <div className="flex justify-between items-center text-base">
          <Link href="/">
            <Image
                height={230}
                width={230}
                src="/assets/logo.png"
                alt="growbyte logo"
            />
          </Link>
          <div className="hidden md:flex justify-between items-center w-[60%] lg:w-[80%]">
            <Link href="/#services">Our Services</Link>
            <Link href="/#about">Our Team</Link>
            <Link href="/#booking">Book a meeting</Link>
          </div>
        </div>

        <Link href='/contact' className="hidden md:flex">
          <Button className="bg-gradient-to-l from-indigo-900 to-indigo-300 w-[170px] h-[50px] text-base">Contact Us</Button>
        </Link>

        <nav className="md:hidden z-50">
          <input type="checkbox" id="sidebar-active" />
          <label htmlFor="sidebar-active" className="open-sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </label>
          <label id="overlay" htmlFor="sidebar-active"></label>
          <div className="links-container">
            <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56">
              <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </label>

            <Link href="/#services">Our Services</Link>
            <Link href="/#about">Our Team</Link>
            <Link href="/#booking">Book a meeting</Link>
            <Link href="/contact">
            <Button className="bg-gradient-to-l from-indigo-900 to-indigo-300 w-[170px] h-[50px] text-base">Contact Us</Button>
            </Link>
          </div>
        </nav>

    </div>
  )
}

export default Navbar