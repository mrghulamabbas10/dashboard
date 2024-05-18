import React from 'react'
import Button from '@mui/material/Button'

import { IoChevronBackOutline } from 'react-icons/io5'
import { RiShareForwardLine } from 'react-icons/ri'
import { FaHeart } from 'react-icons/fa'

import Link from 'next/link'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

import { data } from '../home/config'
import Image from 'next/image'
import { FaLocationDot } from 'react-icons/fa6'
import BathroomIcon from '../assets/bathroom'
import BathsIcon from '../assets/bathsIcon'
import SqftIcon from '../assets/sqftIcon'

export default function Index({ houseData }: any) {
  const {
    images,
    name,
    sellprice,
    location,
    bedroom,
    baths,
    sqft,
    price,
    PriceSqft,
    type,
    status,
    plot,
    bedroomtext2,
    bath,
    Reference,
    slug,
  } = houseData

  return (
    <div className='text-black bg-white md:p-8 px-4 py-8 rounded-3xl shadow-xl mt-10'>
      <div className='flex flex-wrap gap-5 md:justify-between items-center'>
        <div>
          <Link
            href='/'
            className='flex items-center gap-1'
          >
            <IoChevronBackOutline />
            Back to listings
          </Link>
        </div>
        <div className='flex items-center gap-4 md:w-auto w-full'>
          <Link
            href={`/checkout/${slug}`}
            className='md:w-auto text-white bg-[#EE7953] w-full justify-center px-8 py-3 rounded-lg flex gap-2 items-center font-medium text-base '
          >
            Add To Cart
          </Link>
        </div>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-2 mt-10'>
        <div className=''>
          <div className='relative w-full h-[421px] rounded-xl overflow-hidden'>
            <Image
              src={images[0].imgPath}
              alt=''
              fill
              placeholder='blur'
              blurDataURL={images[0].imgPath}
              objectFit='cover'
            />
          </div>
        </div>
        <div className=''>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
            <div className='relative w-full h-[206px] rounded-xl overflow-hidden'>
              <Image
                src={images[1].imgPath}
                alt=''
                fill
                placeholder='blur'
                blurDataURL={images[1].imgPath}
                objectFit='cover'
              />
            </div>
            <div className='relative w-full h-[206px] rounded-xl overflow-hidden'>
              <Image
                src={images[2].imgPath}
                alt=''
                fill
                placeholder='blur'
                blurDataURL={images[2].imgPath}
                objectFit='cover'
              />
            </div>
            <div className='relative w-full h-[206px] rounded-xl overflow-hidden'>
              <Image
                src={images[3].imgPath}
                alt=''
                fill
                placeholder='blur'
                blurDataURL={images[3].imgPath}
                objectFit='cover'
              />
            </div>
            <div className='relative w-full h-[206px] rounded-xl overflow-hidden'>
              <Image
                src={images[4].imgPath}
                alt=''
                fill
                placeholder='blur'
                blurDataURL={images[4].imgPath}
                objectFit='cover'
              />
            </div>
          </div>
        </div>
      </div>
      {/* title  */}
      <div className='grid md:grid-cols-12 grid-cols-1 gap-5 mt-7 '>
        <div className='md:col-span-8 col-span-full'>
          <div className='space-y-3'>
            <h2 className='font-semibold text-3xl text-[#181818] text-nowrap overflow-hidden text-ellipsis'>
              {name}
            </h2>
            <h5 className='text-[#181818] text-3xl  font-bold'>
              $ {sellprice}
            </h5>
            <div className='flex items-center gap-2 text-[#7F7F7F] '>
              <div>
                <FaLocationDot />
              </div>
              <p className='text-[#7F7F7F] text-nowrap overflow-hidden text-ellipsis text-lg'>
                {location}
              </p>
            </div>
            <div className='flex md:flex-nowrap flex-wrap items-center gap-5'>
              <div className='flex gap-2 items-center text-[#505163] text-lg px-5 py-3 rounded-md bg-[#F6F6F4]'>
                <BathroomIcon />
                {bedroom}
              </div>
              <div className='flex gap-2 items-center text-[#505163] text-lg px-5 py-3 rounded-md bg-[#F6F6F4]'>
                <BathsIcon />
                {baths}
              </div>
              <div className='flex gap-2 items-center text-[#505163] text-lg px-5 py-3 rounded-md bg-[#F6F6F4]'>
                <SqftIcon />
                {sqft}
              </div>
            </div>
          </div>
          {/* overview  */}
          <div className='mt-10'>
            <h2 className='font-semibold text-3xl text-[#181818] text-nowrap overflow-hidden text-ellipsis'>
              Overview
            </h2>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-5'>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <h5 className='text-[#181818] font-medium'>Price</h5>
                  <span className='text-[#46485A]'>{price}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <h5 className='text-[#181818] font-medium'>Price/ sqft</h5>
                  <span className='text-[#46485A]'>{PriceSqft}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <h5 className='text-[#181818] font-medium'>Type</h5>
                  <span className='text-[#46485A]'>{type}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <h5 className='text-[#181818] font-medium'>Status</h5>
                  <span className='text-[#46485A]'>{status}</span>
                </div>
              </div>
              <div className='space-y-4'>
                <div className='flex items-center justify-between '>
                  <h5 className='text-[#181818] font-medium'>Plot</h5>
                  <span className='text-[#46485A]'>{plot}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <h5 className='text-[#181818] font-medium'>Bedroom(s)</h5>
                  <span className='text-[#46485A]'>{bedroomtext2}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <h5 className='text-[#181818] font-medium'>Bath(s)</h5>
                  <span className='text-[#46485A]'>{bath}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <h5 className='text-[#181818] font-medium'>Reference#</h5>
                  <span className='text-[#46485A]'>{Reference}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:col-span-4 col-span-full'>
          <div className='bg-[#181818] rounded-2xl p-5 text-white'>
            <h2 className='font-semibold text-2xl text-nowrap overflow-hidden text-ellipsis'>
              Go Tour this Home
            </h2>
            <div className='flex md:flex-nowrap flex-wrap gap-2 mt-2'>
              <div className='bg-[#EE7953] px-3 py-3 rounded-full text-[12px]'>
                Tour in person
              </div>
              <div className='border border-[#FFFFFF66] tetx-[#FFFFFF66] px-3 py-3 rounded-full text-[12px]'>
                Tour via video chat
              </div>
            </div>
            <div className='flex md:flex-nowrap flex-wrap gap-2 mt-5'>
              <div className=' bg-[#53FFF1] text-[#181818] text-lg px-3.5 py-3 rounded-xl  text-center flex flex-col justify-center items-center gap-2'>
                <p className='font-medium text-[#181818] '>Friday</p>
                <b className='text-[58px] text-[#181818]'>8</b>
                <p className='font-medium text-[#181818]'>Feb</p>
              </div>
              <div className=' border border-[#FFFFFF]   text-lg px-3 py-3 rounded-xl   flex flex-col justify-end items-center gap-2'>
                <b className='text-[58px] text-gray my-2'>17</b>
                <p className='font-medium '>Feb</p>
              </div>
              <div className='border border-[#FFFFFF]  text-lg px-3 py-3 rounded-xl   flex flex-col justify-end items-center gap-2'>
                <b className='text-[58px] text-gray my-2'>27</b>
                <p className='font-medium '>Feb</p>
              </div>
            </div>
            <div className='mt-6 space-y-2'>
              <button className='bg-white w-full justify-center py-3 px-5 rounded-full flex gap-2 items-center text-black font-medium'>
                <HiOutlineArrowSmRight />
                Schedule Tour
              </button>
              <button className='text-sm text-[#FFFFFF]'>
                It’s free, with no obligation - cancel anytime.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
