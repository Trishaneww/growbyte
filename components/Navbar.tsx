import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className="flex justify-between px-12 py-6 bg-slate-50">
        <div className="flex justify-between items-center w-[30%] text-lg">
            <Image
                height={190}
                width={190}
                src="/assets/logo.png"
                alt="growbyte logo"
            />
                <Link href="/">Recent Work</Link>
                <Link href="/">Our Team</Link>
                <Link href="/">About Us</Link>
        </div>

        <Button className="bg-indigo-800 w-[170px] h-[50px] text-lg">Book a meeting</Button>
    </div>
  )
}

export default Navbar