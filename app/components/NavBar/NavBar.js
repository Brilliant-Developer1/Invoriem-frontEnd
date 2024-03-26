"use client";
import { PrimaryButton } from '@/app/components/PrimaryButton.js';
import Link from 'next/link';
import React from 'react';
import logo from "@/public/images/logo.png";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import Image from 'next/image';


export const NavBar = () => {
  
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
          <Image width={250} src={logo} alt='logo'/>
          </Navbar.Brand>
          
          
          <Navbar.Collapse className='text-teal' collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link href="/aboutus" linkName="About" />
            <Navbar.Link href="/contactus" linkName="Let&lsquo;s Talk" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex items-center gap-5 ">
        <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8  "
          >
            {/* <Navbar.Link href="/aboutus" className='' linkName="About" /> */}
            <li>
              <a href="/aboutus" className='keep-navlink cursor-pointer lg:py-6 relative block transition-all duration-300'>
                <span className='text-lg font-semibold text-teal hover:text-darkg transition-colors duration-300'>
                  About
                </span>
              </a>
            </li>
          </Navbar.Container>
        <Link className='hidden md:block' href="/contactus">
            <PrimaryButton text="Let&lsquo;s Talk" background="white" hover="teal" />
            </Link>
          <Navbar.Toggle className='text-teal' />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
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
            <PrimaryButton text="Click me" background="teal" hover="white" />
            </Link>
          </li> 
          </ul>
          </div>
*/