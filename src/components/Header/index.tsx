'use client'

import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import { FaBarsStaggered } from 'react-icons/fa6'
import { Avatar } from '@mui/material'
import Link from 'next/link'

const Header = (props: {
  sidebarOpen: string | boolean | undefined
  setSidebarOpen: (arg0: boolean) => void
}) => {
  return (
    <header className='md:bg-transparent bg-white  relative top-0 z-40 flex justify-between px-4  gap-5 w-full drop-shadow-1 md:px-10 py-5 '>
      <Link
        href='/'
        className={`pb-2 text-2xl font-bold border-b-2 border-[#FF5B19] text-[#FF5B19]`}
      >
        Buy
      </Link>

      <div className='flex items-center gap-3'>
        <Avatar
          alt='Remy Sharp'
          src='/images/Profile Image.png'
          sx={{ width: 50, height: 50 }}
        />
        <div>
          <h3 className='text-lg font-semibold'>Indica Watson</h3>
          <p className='text-[#7F7F7F] text-[12px]'>Real Estate Builders</p>
        </div>
        <div className='lg:hidden'>
          <IconButton
            aria-controls='sidebar'
            className='z-99999 block rounded-sm border border-stroke bg-transparent p-1.5 shadow-sm lg:hidden'
            onClick={(e) => {
              e.stopPropagation()
              props.setSidebarOpen(!props.sidebarOpen)
            }}
          >
            <FaBarsStaggered />
          </IconButton>
        </div>
      </div>
    </header>
  )
}

export default Header
