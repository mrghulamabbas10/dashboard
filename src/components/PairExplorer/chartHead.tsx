import Image from 'next/image'
import React from 'react'

import { RiArrowLeftDownFill } from 'react-icons/ri'
import Heart from '../assets/heart'
import Link from 'next/link'
import CopyIcon from '../assets/Copy'

export default function Chart() {
  return (
    <div>
      <div className='flex item-start gap-2 w-full'>
        <div className='flex items-start justify-between w-full flex-wrap gap-5'>
          <div className='flex gap-3'>
            <Image
              src='/images/logo.png'
              alt='logo'
              width={70}
              height={70}
            />
            <div>
              <div className='flex items-center justify-between'>
                <h5 className='text-gray text-base'>POFI/WETH</h5>
                <div className='flex items-center gap-3'>
                  <span className='p-2 bg-bgGray rounded-full text-[#5CFF9C]'>
                    AUDIT
                  </span>
                  <span className='py-2 px-4 bg-bgGray rounded-full text-[#D12AFB] font-medium'>
                    KYC
                  </span>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <h2 className='text-2xl'>$0.0005021</h2>
                <span className='flex items-center text-base'>
                  <RiArrowLeftDownFill className='text-red-700 text-lg' />{' '}
                  0.00004502
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center md:justify-end justify-start gap-3'>
              <span className='text-gray text-sm'>24 hours</span>
              <span className='flex items-center text-base'>
                <RiArrowLeftDownFill className='text-red-700 text-lg' />{' '}
                0.00004502
              </span>
              <span className='cursor-pointer'>
                <Heart />
              </span>
            </div>
            <div className='flex justify-between md:justify-start mt-2'>
              <Link
                href=''
                className='flex items-center gap-5'
              >
                Token: 0xe3a ...b1fd <CopyIcon />
              </Link>
              <Link
                href=''
                className='flex items-center gap-5'
              >
                Token: 0xe3a ...b1fd <CopyIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
