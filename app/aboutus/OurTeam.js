import getAllCases from '@/lib/getAllCases';
import React from 'react'
import { Slides } from './Slides';
import { team } from '@/public/Data/TeamData'

export default async function OurTeam() {
  return (
    <section className='text-black my-10 md:my-24'>
        <h1 className='text-4xl md:text-5xl px-5 lg:text-6xl font-extrabold'>Meet our team</h1>

        <div>
        <Slides team={team}></Slides>
        </div>
    </section>
  )
}
