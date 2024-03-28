"use client";
import { PrimaryButton } from '@/app/components/PrimaryButton.js';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from "@/public/images/logo.png";
import Image from 'next/image';


export const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div style={{ marginBottom: '78px' }}>
      <nav className="w-full fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
              <Image width={150} src={logo} alt='logo'/>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M7 17L16.8995 7.10051" stroke="#114455" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 7.00001L16.8995 16.8995" stroke="#114455" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  ) : (
                    <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#114455" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 12L4 12" stroke="#114455" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17L4 17" stroke="#114455" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 rounded-lg md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block bg-slate-50 md:bg-white' : 'hidden'
              }`}
            >
              <div className="h-screen md:h-auto items-center justify-center md:flex ">
              <ul className='flex flex-col md:flex-row items-center '>
              <li className=" transition-all duration-500 ease-in-out  pb-3 text-xl font-semibold text-teal py-2 md:px-6 text-center border-b-2 md:border-b-0 border-teal md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/aboutus" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
              <li className=" mt-6 md:mt-0 text-xl font-semibold text-teal py-2 md:px-6    hover:bg-purple-900  border-teal md:hover:text-purple-600 md:hover:bg-transparent">
              <Link href="/contactus" onClick={() => setNavbar(!navbar)}>
            <PrimaryButton text="Let&lsquo;s Talk" background="" hover="teal" />
            </Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

/*
<div>
        <Image width={250} src={logo} alt='logo'/>
      </div>
      <div>
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/aboutus">About us</Link>
          </li>
          <li className="px-16 ">
            <Link href="/contactus">
            <PrimaryButton text="Let&lsquo;s Talk" background="white" hover="teal" />
            </Link>
          </li>
          <li className="px-16 ">
            <Link href="/contactus">
            <PrimaryButton text="Let&lsquo;s Talk" background="teal" hover="white" />
            </Link>
          </li> 
          </ul>
          </div>


          <li className="text-xl text-teal font-semibold">
                  <Link href="/aboutus" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
*/