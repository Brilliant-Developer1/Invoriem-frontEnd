'use client';
import { PrimaryButton } from '@/app/components/PrimaryButton.js';
import Link from 'next/link';
import { useContext, useState } from 'react';
import logo from '@/public/images/logo.png';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

export const NavBar = () => {
  const { changeTheme,theme } = useContext(ThemeContext);

  
  const [navbar, setNavbar] = useState(false);
  

  return (
    <nav className={`w-full sticky top-0 z-50 ${theme === 'light' ? 'bg-white' : 'bg-teal-700'}`}>
      <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          {/* LOGO */}
          <Link href="/">
            <Image
              width={150}
              src={logo}
              alt="logo"
              onClick={() => setNavbar(false)}
            />
          </Link>
          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none "
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  width="36px"
                  height="36px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <rect width="24" height="24" fill="white"></rect>{' '}
                    <path
                      d="M7 17L16.8995 7.10051"
                      stroke="#114455"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{' '}
                    <path
                      d="M7 7.00001L16.8995 16.8995"
                      stroke="#114455"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{' '}
                  </g>
                </svg>
              ) : (
                <svg
                  width="36px"
                  height="36px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.288"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      d="M20 7L4 7"
                      stroke="#114455"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>{' '}
                    <path
                      d="M20 12L4 12"
                      stroke="#114455"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>{' '}
                    <path
                      d="M20 17L4 17"
                      stroke="#114455"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>{' '}
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center md:block  ${
              navbar ? 'p-12 md:p-0 block bg-slate-50 md:bg-white  ' : 'hidden '
            }`}
          >
            <div className="h-auto items-center justify-center md:flex ">
              <ul className="flex gap-5 flex-col md:flex-row items-center ">
                <li
                  className={`
              text-xl font-semibold text-teal py-2  text-center md:hover:text-purple-600
              ${navbar ? ' border-b-2 md:border-b-0 border-teal' : ''}
              `}
                >
                  <Link href="/aboutus" onClick={() => setNavbar(false)}>
                    About
                  </Link>
                </li>
                <li
                  className={`
              text-xl font-semibold text-teal py-2  text-center md:hover:text-purple-600
              ${navbar ? ' border-b-2 md:border-b-0 border-teal' : ''}
              `}
                >
                  <Link href="/gallery" onClick={() => setNavbar(false)}>
                    Gallery
                  </Link>
                </li>
                <li>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn m-1">Theme</div>
                  <ul tabIndex={0} className="bg-gray-200 text-black dropdown-content z-[1] menu p-2 shadow rounded-box w-auto">
                    <li ><a className='hover:bg-white' onClick={() => changeTheme("light")} >Light</a></li>
                    <li><a className='hover:bg-white' onClick={() => changeTheme("dark")} >Dark</a></li>
                  </ul>
                </div>
                </li>
                <li className=" mt-6 md:mt-0 ">
                  <Link href="/contactus" onClick={() => setNavbar(false)}>
                    <PrimaryButton text="Let&lsquo;s Talk" background="white" />
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
