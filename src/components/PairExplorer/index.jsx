import React from 'react'
import Image from 'next/image'
// compo
import TopSlide from './topSlide'
import Tabs from './tabs'
import ChartHead from './chartHead'
import CandlestickChart from './chart'
import BuyOrSell from './buyOrSell'
import OpenOrders from './OpenOrders'
import UpcomingProjects from './UpcomingProjects'

export default function Index() {
  return (
    <div className='relative z-50'>
      <div className='relative -z-0 md:block hidden'>
        <Image
          src='/images/main-Ellipse.png'
          alt='sildebar-Ellipse'
          width={400}
          height={325}
          className='absolute right-0 top-0 w-[70%] h-[600px] translate-x-32  -translate-y-72  '
        />
      </div>
      <TopSlide />
      <div className='grid grid-cols-12 my-10 md:gap-10 gap-0 '>
        <div className='md:col-span-8 col-span-12'>
          <Tabs />
          <div className='mt-8'>
            <ChartHead />
            <CandlestickChart />
          </div>
        </div>
        <div className='md:col-span-4 col-span-12'>
          <BuyOrSell />
          <OpenOrders />
          <UpcomingProjects />
        </div>
      </div>
    </div>
  )
}
