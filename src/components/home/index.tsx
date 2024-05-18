'use client'
import React, { useState } from 'react'
import Filters from './filters'
import Card from './card'
import Map from './map'

import { data } from './config'

export default function Index() {
  const [activeTab, setActiveTab] = useState('Recommended')

  const tabs = ['Recommended', 'Popular', 'Nearest']

  // console.log(data, 'data')

  return (
    <div className='bg-white rounded-2xl p-6 text-black md:mt-0 mt-10'>
      <div className='flex justify-between items-center text-black'>
        <h3 className='text-2xl font-bold'>249 Results</h3>
        <div>
          <label className='inline-flex items-center gap-2 cursor-pointer'>
            <span className='ms-3 text-sm font-medium text-[#181818]'>
              Toggle me
            </span>
            <input
              type='checkbox'
              value=''
              className='sr-only peer'
            />
            <div className="relative w-11 h-6 bg-[#EEEEEE] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
      <Filters />
      <div className='flex gap-5 mt-6'>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={` font-bold ${
              activeTab === tab
                ? 'text-[#10978C]'
                : 'text-[#181818] font-normal'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='grid md:grid-cols-12 col-span-1 mt-5 gap-3'>
        <div className='md:col-span-9 col-span-full'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
            {data?.map((item: any, idx: any) => (
              <Card item={item} />
            ))}
          </div>
        </div>
        <div className='md:col-span-3 col-span-full'>
          <Map />
        </div>
      </div>
    </div>
  )
}
