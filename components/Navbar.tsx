import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className="flex bg-white justify-between px-12 py-6">
        <div className="flex justify-between items-center w-[30%]">
            <Image
                height={180}
                width={180}
                src="/assets/logo.png"
                alt="growbyte logo"
            />
                <Link href="/">Recent Work</Link>
                <Link href="/">Our Team</Link>
                <Link href="/">About Us</Link>
        </div>

        <Button className="bg-indigo-900 w-[150px] hover:bg-white hover:text-orange-400  h-[50px]">Book Now</Button>
    </div>
  )
}

export default Navbar