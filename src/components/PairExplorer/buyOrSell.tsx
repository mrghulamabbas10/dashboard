import Link from 'next/link'
import React from 'react'

import { LuChevronDown } from 'react-icons/lu'
import { LuPlus } from 'react-icons/lu'
import { FaRegWindowMinimize } from 'react-icons/fa6'

export default function BuyOrSell() {
  return (
    <div className='bg-[#1C1C1C] shadow-2xl px-7 py-4 rounded-[10px] flex flex-col gap-3'>
      <div className='flex items-center border-2 border-white border-opacity-5 rounded-[10px] py-1.5 px-3'>
        <Link
          href=''
          className='bg-[#7E7ED9] py-2 text-center rounded-[10px] cursor-pointer w-full'
        >
          Buy
        </Link>
        <Link
          href=''
          className='  py-2 text-center rounded-full w-full cursor-pointer'
        >
          Sell
        </Link>
      </div>
      <div className='relative outline-none bg-[#101010] rounded-[10px]'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <svg
            width='14'
            height='13'
            viewBox='0 0 14 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              opacity='0.4'
              d='M7 0C3.1325 0 0 2.90875 0 6.5C0 10.0912 3.1325 13 7 13C10.8675 13 14 10.0912 14 6.5C14 2.90875 10.8675 0 7 0ZM7.7 9.75H6.3V5.85H7.7V9.75ZM7.7 4.55H6.3V3.25H7.7V4.55Z'
              fill='white'
              fill-opacity='0.4'
            />
          </svg>
        </div>
        <input
          type='search'
          className='block bg-transparent placeholder:text-white  w-full p-4 pl-28 text-sm text-gray-900 rounded-[10px] outline-none '
          placeholder='Search'
        />
        <button
          type='submit'
          className='text-[#363636] absolute end-2.5 bottom-4 text-xl '
        >
          <LuChevronDown />
        </button>
      </div>
      <div className='relative outline-none bg-[#101010] rounded-[10px]'>
        <div className='absolute inset-y-0 -top-3 start-0 flex items-center ps-3 pointer-events-none'>
          <button
            type='submit'
            className='text-[#363636] text-xl '
          >
            <FaRegWindowMinimize />
          </button>
        </div>
        <input
          type='search'
          className='block bg-transparent placeholder:text-white  w-full p-4 pl-[120px] text-sm text-gray-900 rounded-[10px] outline-none '
          placeholder='0.60'
        />
        <button
          type='submit'
          className='text-[#363636] absolute end-2.5 bottom-4 text-xl '
        >
          <LuPlus />
        </button>
      </div>
      <div className='relative outline-none bg-[#101010] rounded-[10px]'>
        <div className='absolute inset-y-0 -top-3 start-0 flex items-center ps-3 pointer-events-none'>
          <button
            type='submit'
            className='text-[#363636] text-xl '
          >
            <FaRegWindowMinimize />
          </button>
        </div>
        <input
          type='search'
          className='block bg-transparent placeholder:text-[#707070] w-full p-4 pl-20 text-sm text-gray-900 rounded-[10px] outline-none '
          placeholder='Amount (COLLAR)'
        />
        <button
          type='submit'
          className='text-[#363636] absolute end-2.5 bottom-4 text-xl '
        >
          <LuPlus />
        </button>
      </div>

      <div className='grid grid-cols-4 gap-3 w-full'>
        <div className='flex flex-col gap-2 items-center'>
          <span className='bg-[#101010] rounded-[10px] p-2 w-full'></span>
          <p> 25%</p>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <span className='bg-[#101010] rounded-[10px] p-2  w-full'></span>
          <p> 50%</p>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <span className='bg-[#101010] rounded-[10px] p-2  w-full'></span>
          <p> 75%</p>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <span className='bg-[#101010] rounded-[10px] p-2  w-full'></span>
          <p> 100%</p>
        </div>
      </div>
      <button className='bg-[] rounded-[10px] py-3  w-full'>
        Total (USDT)
      </button>
    </div>
  )
}
