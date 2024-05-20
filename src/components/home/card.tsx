import Image from 'next/image'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

import Link from 'next/link'

export default function Card({ item }: any) {
  return (
    <>
      <Link href={`/house-details/${item.slug}`}>
        <div className='bg-white border border-[#F4F4F4] rounded-2xl p-3 drop-shadow-sm'>
          <div className='relative w-full lg:h-[160px] h-[200px] rounded-2xl overflow-hidden'>
            <Image
              src={item.images[0].imgPath}
              alt={item.name}
              fill
              placeholder='blur'
              blurDataURL={item.images[0].imgPath}
              objectFit='cover'
            />
          </div>
          <div className='space-y-2 mt-5'>
            <h2 className='font-bold text-[#181818] text-nowrap overflow-hidden text-ellipsis'>
              {item.name}
            </h2>
            <h5 className='text-[#10978C]   text-sm font-medium'>
              $ {item.sellprice}
            </h5>
            <div className='flex items-center gap-2 text-[#7F7F7F] '>
              <div>
                <FaLocationDot />
              </div>
              <p className='text-[#7F7F7F] text-nowrap overflow-hidden text-ellipsis text-[12px]'>
                {item.location}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
