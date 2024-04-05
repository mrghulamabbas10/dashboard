'use client'

import React from 'react'
import MarketCap from '../assets/MarketCap'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Holders from '../assets/Holders'
import Volume from '../assets/Volume'
import Liquidity from '../assets/Liquidity'

const Data = [
  {
    icon: <MarketCap />,
    price: '$565,989',
    title: 'Market Cap',
    linkPath: '/',
    class: 'bg_tab_active',
  },
  {
    icon: <Holders />,
    price: '100,000',
    title: 'Holders',
    linkPath: '',
    class: 'bg_tab',
  },
  {
    icon: <Volume />,
    price: '100,000',
    title: 'Volume',
    linkPath: '',
    class: 'bg_tab',
  },
  {
    icon: <Liquidity />,
    price: '100,000',
    title: 'Liquidity',
    linkPath: '',
    class: 'bg_tab',
  },
]

export default function Tabs() {
  const pathname = useParams()

  return (
    <div>
      <h3 className='text-gray'>PROJECT STATS</h3>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-5 mt-6'>
        {Data.map((item, index) => (
          <Link
            href={item.linkPath}
            key={index}
          >
            <div
              className={` rounded-xl px-6 py-4 flex items-center justify-center gap-6 ${item.class}`}
            >
              <span className='text-3xl'>{item.icon}</span>
              <div>
                <h4 className='text-white text-lg font-medium'>{item.price}</h4>
                <p className='text-white'>{item.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
