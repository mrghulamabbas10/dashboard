import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import BNBIcon from '../assets/BNB'
import { FaTelegramPlane } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { TfiWorld } from 'react-icons/tfi'

import Link from 'next/link'
import BNB2Icon from '../assets/BNB2'

export default function UpcomingProjects() {
  return (
    <div className='bg-[#1C1C1C] shadow-2xl mt-5 px-7 py-6 rounded-[10px] flex flex-col gap-3'>
      <div className='flex items-center justify-between'>
        <h3 className='text-[#CACACA] uppercase'>upcoming projects</h3>
        <button className='border border-[#333333] text-primary rounded-full justify-center p-2 flex items-center gap-1'>
          <svg
            width='11'
            height='11'
            viewBox='0 0 11 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.74084 9.13294V10.368L5.48119 11L4.25916 10.368V9.13294L5.48119 9.76498L6.74084 9.13294ZM0 4.86567L1.22202 5.49822V7.61554L3.33339 8.69052V9.92299L0 8.24758V4.86567ZM10.963 4.86567V8.24758L7.59255 9.92299V8.69052L9.70332 7.61554V5.49822L10.963 4.86567ZM7.59255 3.19077L8.8516 3.82281V5.05579L6.74084 6.13025V8.27816L5.51822 8.9102L4.29619 8.27816V6.13025L2.11136 5.05579V3.82281L3.37042 3.19077L5.48119 4.26523L7.59255 3.19077ZM2.11136 5.94064L3.33339 6.57268V7.80515L2.11136 7.17312V5.94064ZM8.8516 5.94064V7.17312L7.62958 7.80515V6.57268L8.8516 5.94064ZM1.22202 2.11784L2.48347 2.74834L1.22382 3.38038V4.61285L0.00179175 3.98082V2.74834L1.22202 2.11784ZM9.74035 2.11784L11 2.74987V3.98235L9.74035 4.61438V3.38038L8.51594 2.74834L9.74035 2.11784ZM5.48119 2.11784L6.74084 2.74987L5.48119 3.38191L4.25916 2.74987L5.48119 2.11784ZM5.48119 0L8.8516 1.67541L7.62958 2.30745L5.51822 1.23094L3.36803 2.30592L2.14601 1.67388L5.48119 0Z'
              fill='#F1AB00'
            />
          </svg>
          BNB Chain
          <MdKeyboardArrowDown />
        </button>
      </div>
      <div className='bg-[#101010] rounded-[10px] px-3 py-2 flex justify-between'>
        <div className='flex  items-center text-primary gap-2.5'>
          <BNBIcon />
          <p>BNB (314)</p>
        </div>
        <div className='flex items-center gap-1'>
          <Link
            href=''
            className='bg-[#1F1F1F] w-[17px] h-[17px] rounded-full flex items-center justify-center '
          >
            <FaTelegramPlane className='text-[#FFFFFF80] text-[6px] -ml-0.5' />
          </Link>
          <Link
            href=''
            className='bg-[#1F1F1F] w-[17px] h-[17px] rounded-full flex items-center justify-center '
          >
            <IoLogoTwitter className='text-[#FFFFFF80] text-[6px] -ml-0.5' />
          </Link>
          <Link
            href=''
            className='bg-[#1F1F1F] w-[17px] h-[17px] rounded-full flex items-center justify-center '
          >
            <TfiWorld className='text-[#FFFFFF80] text-[6px] -ml-0.5' />
          </Link>
        </div>
      </div>
      <div className='bg-[#101010] rounded-[10px] px-3 py-2 flex justify-between'>
        <div className='flex  items-center text-primary gap-2.5'>
          <BNB2Icon />
          <p>BNB (314)</p>
        </div>
        <div className='flex items-center gap-1'>
          <Link
            href=''
            className='bg-[#1F1F1F] w-[17px] h-[17px] rounded-full flex items-center justify-center '
          >
            <FaTelegramPlane className='text-[#FFFFFF80] text-[6px] -ml-0.5' />
          </Link>
          <Link
            href=''
            className='bg-[#1F1F1F] w-[17px] h-[17px] rounded-full flex items-center justify-center '
          >
            <IoLogoTwitter className='text-[#FFFFFF80] text-[6px] -ml-0.5' />
          </Link>
          <Link
            href=''
            className='bg-[#1F1F1F] w-[17px] h-[17px] rounded-full flex items-center justify-center '
          >
            <TfiWorld className='text-[#FFFFFF80] text-[6px] -ml-0.5' />
          </Link>
        </div>
      </div>
      <div className='bg-[#101010] rounded-[10px] px-3 py-2 flex justify-between'>
        <div className='flex  items-center text-primary gap-2.5'>
          <BNBIcon />
          <p>BNB (314)</p>
        </div>
        <div className='flex items-center gap-1'>
          <Link
            href=''
            className='bg-[#1F1F1F] w-[17px] h-[17px] rounded-full flex items-center justify-center '
          >
            <FaTelegramPlane className='text-[#FFFFFF80] text-[6px] -ml-0.5' />
          </Link>
          <Link
            href=''
            className='bg-[#1F1F1F] w-[17px] h-[17px] rounded-full flex items-center justify-center '
          >
            <IoLogoTwitter className='text-[#FFFFFF80] text-[6px] -ml-0.5' />
          </Link>
          <Link
            href=''
            className='bg-[#1F1F1F] w-[17px] h-[17px] rounded-full flex items-center justify-center '
          >
            <TfiWorld className='text-[#FFFFFF80] text-[6px] -ml-0.5' />
          </Link>
        </div>
      </div>
      <div className='bg-[#101010] rounded-[10px] px-3 py-2 flex justify-between'>
        <div className='flex  items-center text-primary gap-2.5'>
          <BNB2Icon />
          <p>BNB (314)</p>
        </div>
        <div className='flex items-center gap-1'>
          <Link
            href=''
            className='bg-[#1F1F1F] w-[17px] h-[17px] rounded-full flex items-center justify-center '
          >
            <FaTelegramPlane className='text-[#FFFFFF80] text-[6px] -ml-0.5' />
          </Link>
          <Link
            href=''
            className='bg-[#1F1F1F] w-[17px] h-[17px] rounded-full flex items-center justify-center '
          >
            <IoLogoTwitter className='text-[#FFFFFF80] text-[6px] -ml-0.5' />
          </Link>
          <Link
            href=''
            className='bg-[#1F1F1F] w-[17px] h-[17px] rounded-full flex items-center justify-center '
          >
            <TfiWorld className='text-[#FFFFFF80] text-[6px] -ml-0.5' />
          </Link>
        </div>
      </div>
    </div>
  )
}
