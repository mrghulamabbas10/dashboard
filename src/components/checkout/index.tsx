import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoChevronBackOutline } from 'react-icons/io5'

export default function Index({ houseData }: any) {
  const { images, name, sellprice, location } = houseData
  return (
    <div className='text-black bg-white md:p-8 px-4 py-8 rounded-3xl shadow-xl mt-10'>
      <Link
        href='/'
        className='flex items-center gap-1'
      >
        <IoChevronBackOutline />
        Back to listings
      </Link>
      <div className='mt-10'>
        <h2 className='font-semibold text-2xl text-[#181818] text-nowrap overflow-hidden text-ellipsis'>
          {name}
        </h2>
        <div className='flex items-center gap-2 text-[#7F7F7F] space-y-2 '>
          <div>
            <FaLocationDot />
          </div>
          <p className='text-[#7F7F7F] text-nowrap overflow-hidden text-ellipsis text-sm'>
            {location}
          </p>
        </div>
      </div>
      <div className='grid md:grid-cols-12 grid-cols-1 mt-5 gap-5'>
        <div className='md:col-span-7 col-span-full'>
          <div className='relative w-full h-[570px] rounded-2xl overflow-hidden'>
            <Image
              src={images[0].imgPath}
              alt={name}
              fill
              placeholder='blur'
              blurDataURL={images[0].imgPath}
              objectFit='cover'
            />
          </div>
        </div>
        <div className='md:col-span-5 col-span-full'>
          <h4 className='text-[21px] font-semibold'>Purchase Summary</h4>
          <div className='border border-[#D2D3D8] p-6 rounded-xl'>
            <div className='grid md:grid-cols-4 grid-cols-2'>
              <div className='space-y-5 flex flex-col'>
                <h3 className='texr-[11px] '>Square</h3>
                <p className='text-[15px] text-[#181818] font-semibold'>
                  56.4 m2
                </p>
              </div>
              <div className='space-y-5 flex flex-col'>
                <h3 className='texr-[11px] '>Section</h3>
                <p className='text-[15px] text-[#181818] font-semibold'>2</p>
              </div>
              <div className='space-y-5 flex flex-col'>
                <h3 className='texr-[11px] '>Deadline</h3>
                <p className='text-[15px] text-[#181818] font-semibold'>
                  IV, 2025
                </p>
              </div>
              <div className='space-y-3 flex flex-col'>
                <h3 className='texr-[11px] '>Flloor</h3>
                <div className='relative md:w-auto w-full'>
                  <select
                    id='countries'
                    className='relative md:w-auto w-full bg-gray-50 border border-[#E6E6E7] text-black text-sm pl-3 pr-8 py-2 rounded-sm outline-none'
                  >
                    <option selected>14/25</option>
                    <option value='US'>14/25</option>
                  </select>
                  <span className='absolute top-3 right-3'>
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 13.172L16.95 8.22198L18.364 9.63598L12 16L5.63601 9.63598L7.05001 8.22198L12 13.172Z'
                        fill='#B7BFC5'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-5'>
              <div>
                <h5 className='text-[#46485A] text-sm font-semibold'>
                  Payment method
                </h5>
                <div className='border border-[#E6E6E7] px-3 py-3 rounded-md mt-1'>
                  <span className='text-[#181818] font-semibold'>
                    100% payment
                  </span>
                  <p className='text-[12px]'>(included taxes)</p>
                </div>
              </div>
              <div>
                <h5 className='text-[#46485A] text-sm font-semibold'>
                  Finish options
                </h5>
                <div className='border border-[#E6E6E7] px-3 py-3 rounded-md mt-1'>
                  <span className='text-[#181818] font-semibold'>
                    Without finishing
                  </span>
                  <p className='text-[12px]'>Included in the price</p>
                </div>
              </div>
            </div>
          </div>
          <div className='border border-[#D2D3D8] p-6 rounded-xl mt-5'>
            <h5 className='text-[#46485A] text-sm font-semibold'>
              Payment Method (Cryptocurrency)
            </h5>
            <div className='relative mt-2 w-full'>
              <select
                id='countries'
                className='relative  w-full bg-gray-50 border border-gray-300 text-[#B7BFC5] text-sm  py-4 pl-6 pr-16 rounded-md outline-none'
              >
                <option selected>Bitcoin</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
              <span className='absolute top-3 right-4'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 13.172L16.95 8.22198L18.364 9.63598L12 16L5.63601 9.63598L7.05001 8.22198L12 13.172Z'
                    fill='#B7BFC5'
                  />
                </svg>
              </span>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 items-end justify-center gap-3 '>
              <div className='mt-5'>
                <span className='text-[#6A6C7C] font-medium'>Total value</span>
                <p className='text-[22px] font-semibold text-[#181818]'>
                  {sellprice}
                </p>
              </div>
              <div>
                <button className='bg-[#1DE3D3] py-3 w-full rounded font-semibold '>
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
          <button className='bg-[#1DE3D3] py-3 w-full rounded font-semibold mt-5 '>
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
