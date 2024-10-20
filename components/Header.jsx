'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
    <>
        <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6">
          <div className="hidden lg:flex space-x-8 text-white ml-4">
            <Link href="/" className=" hover:underline">Home</Link>
            <Link href="/about-us" className=" hover:underline">About Us</Link>
            <Link href="/our-services" className=" hover:underline">Our Services</Link>
            <Link href="/contact-us" className=" hover:underline">Contact Us</Link>
            <Link href="/request" className=" hover:underline">Request Quote</Link>
          </div>
          <img src="images/logo-2.webp" alt="logo" className='lg:-ml-96'/>

          <div className="flex space-x-4 items-center text-white mr-4">
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

            </button>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

            </button>
            <button className='hidden lg:flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
</svg>

            </button>

            <button className="lg:hidden text-white text-3xl" onClick={toggleMenu}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="mt-20 lg:hidden flex flex-col items-center space-y-4 py-4 bg-black shadow-md">
            <Link href="/" className="text-white hover:text-blue-600">Home</Link>
            <Link href="/about-us" className="text-white hover:text-blue-600">About Us</Link>
            <Link href="/our-services" className="text-white hover:text-blue-600">Our Services</Link>
            <Link href="/contact-us" className="text-white hover:text-blue-600">Contact Us</Link>
            <Link href="/request" className="text-white hover:text-blue-600">Request Quote</Link>
          </div>
        )}
    </>
  )
}

export default Header