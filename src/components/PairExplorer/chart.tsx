import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { LuChevronsUpDown } from 'react-icons/lu'
import { PiArrowUpRightFill } from 'react-icons/pi'
import { PiArrowDownLeftFill } from 'react-icons/pi'

export default function Chart() {
  return (
    <div>
      <div className='relative'>
        <iframe
          style={{ marginBottom: '0px', marginTop: '30px', border: ' none' }}
          width='100%'
          height='400'
          src='https://dexscreener.com/solana/879f697iudjgmevrkrcnw21fcxiaeljk1ffsw2atebce?embed=1&theme=dark'
        ></iframe>
        <div className='relative w-full h-10 -translate-y-9  '>
          <Image
            src='/images/tracked-by-solscreener.png'
            alt='logo main'
            fill
            objectFit='cover'
          />
        </div>
      </div>
      <div className='mt-10'>
        <div className='flex justify-between'>
          <h3 className='text-[#B1AFCD]'>TRANSACTIONS </h3>
          <Link
            href=''
            className='text-[#555555]'
          >
            See All
          </Link>
        </div>
      </div>
      <div
        className='h-[380px] overflow-x-scroll mt-5 md:block hidden'
        id='scroll_none'
      >
        <div className='grid grid-cols-12 '>
          <div className='md:col-span-1'></div>
          <Link
            href=''
            className='flex items-center text-[#A8A8A8] text-[6px] md:text-[9px]  col-span-3 '
          >
            DATE & TIME <LuChevronsUpDown />
          </Link>
          <Link
            href=''
            className='flex items-center text-[#A8A8A8] text-[6px] md:text-[9px]  col-span-3 '
          >
            PRICE USD & BNB
            <LuChevronsUpDown />
          </Link>
          <Link
            href=''
            className='flex items-center text-[#A8A8A8] text-[6px] md:text-[9px]  col-span-2 '
          >
            AMOUNT TBULL
            <LuChevronsUpDown />
          </Link>
          <Link
            href=''
            className='flex items-center text-[#A8A8A8] text-[6px] md:text-[9px]  col-span-2 '
          >
            TOTAL BNB
            <LuChevronsUpDown />
          </Link>
          <Link
            href=''
            className='flex items-center text-[#A8A8A8] text-[6px] md:text-[9px]  col-span-1 '
          >
            TX
            <LuChevronsUpDown />
          </Link>
        </div>
        <div className='grid grid-cols-12 mt-5 py-6 px-4 rounded-[10px] overflow-hidden'>
          <div className='md:col-span-1 text-[#9EFF70] flex items-center gap-1'>
            <PiArrowUpRightFill className='text-[9px]' />
            Buy
          </div>
          <div className='flex items-center text-[#454545] text-[6px] md:text-[15px] col-span-3 '>
            22-05-23 17:34:22
          </div>
          <div className='flex items-center text-[#454545] text-[6px] md:text-[15px] col-span-3 '>
            $0.0004266 <span className='text-[6px] ml-2'>0.0₅1286</span>
          </div>
          <div className='flex items-center text-[#454545] text-[6px] md:text-[15px] col-span-2 '>
            777,127
          </div>
          <div className='flex items-center text-[#454545] text-[6px] md:text-[15px] col-span-2 '>
            1.00
          </div>
          <div className='flex items-center text-[#454545] text-[6px] md:text-[15px] col-span-1 '>
            0x68...57c6
          </div>
        </div>
        <div className='grid grid-cols-12 py-6 px-4 rounded-[10px] overflow-hidden '>
          <div className='md:col-span-1 text-[rgb(158,255,112)] flex items-center gap-1'>
            <PiArrowUpRightFill className='text-[9px]' />
            Buy
          </div>
          <div className='flex items-center text-[#454545] text-[15px] md:col-span-3 '>
            22-05-23 17:34:22
          </div>
          <div className='flex items-center text-[#454545] text-[15px] md:col-span-3 '>
            $0.0004266 <span className='text-[6px] ml-2'>0.0₅1286</span>
          </div>
          <div className='flex items-center text-[#454545] text-[15px] md:col-span-2 '>
            777,127
          </div>
          <div className='flex items-center text-[#454545] text-[15px] md:col-span-2 '>
            1.00
          </div>
          <div className='flex items-center text-[#454545] text-[15px] md:col-span-1 '>
            0x68...57c6
          </div>
        </div>
        <div className='grid grid-cols-12 py-6 px-4 rounded-[10px] overflow-hidden bg_table'>
          <div className='md:col-span-1 text-black flex items-center gap-1'>
            <PiArrowDownLeftFill className='text-[9px]' />
            Sell
          </div>
          <div className='flex items-center text-white text-[15px] md:col-span-3 '>
            22-05-23 17:34:22
          </div>
          <div className='flex items-center text-white text-[15px] md:col-span-3 '>
            $0.0004266 <span className='text-[6px] ml-2'>0.0₅1286</span>
          </div>
          <div className='flex items-center text-white text-[15px] md:col-span-2 '>
            777,127
          </div>
          <div className='flex items-center text-white text-[15px] md:col-span-2 '>
            1.00
          </div>
          <div className='flex items-center text-white text-[15px] md:col-span-1 '>
            0x68...57c6
          </div>
        </div>
        <div className='grid grid-cols-12 mt-5 py-6 px-4 rounded-[10px] overflow-hidden'>
          <div className='md:col-span-1 text-[#9EFF70] flex items-center gap-1'>
            <PiArrowUpRightFill className='text-[9px]' />
            Buy
          </div>
          <div className='flex items-center text-[#454545] text-[6px] md:text-[15px] col-span-3 '>
            22-05-23 17:34:22
          </div>
          <div className='flex items-center text-[#454545] text-[6px] md:text-[15px] col-span-3 '>
            $0.0004266 <span className='text-[6px] ml-2'>0.0₅1286</span>
          </div>
          <div className='flex items-center text-[#454545] text-[6px] md:text-[15px] col-span-2 '>
            777,127
          </div>
          <div className='flex items-center text-[#454545] text-[6px] md:text-[15px] col-span-2 '>
            1.00
          </div>
          <div className='flex items-center text-[#454545] text-[6px] md:text-[15px] col-span-1 '>
            0x68...57c6
          </div>
        </div>
      </div>
    </div>
  )
}
