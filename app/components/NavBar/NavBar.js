import { PrimaryButton } from '@/app/components/PrimaryButton.js';
import Link from 'next/link';
import React from 'react';

export const NavBar = () => {
  return (
    <div className="flex justify-between">
      <div>ABC</div>
      <div>
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/aboutus">About us</Link>
          </li>
          <li className="px-16 ">
            <Link href="/contactus">
              <PrimaryButton />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
