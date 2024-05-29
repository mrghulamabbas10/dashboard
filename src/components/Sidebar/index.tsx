'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// icons
import DiscoverIcon from '../assets/discoverIcon'
import { Avatar } from '@mui/material'
import SettingIcon from '../assets/SettingIcon'
import { FaHouseUser } from 'react-icons/fa'
import { MdOutlineApartment } from 'react-icons/md'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLogoTelegram } from 'react-icons/bi'

import Image from 'next/image'

const SIDEBAR_DATA = [
  {
    name: 'Discover',
    icons: <DiscoverIcon />,
    urlPath: '/',
  },
  {
    name: 'Houses',
    icons: <FaHouseUser />,
    urlPath: '/houses',
  },
  {
    name: 'Apartments',
    icons: <MdOutlineApartment />,
    urlPath: '/apartment',
  },
  // {
  //   name: 'Settings',
  //   icons: <SettingIcon />,
  //   urlPath: '',
  // },
]

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname()

  const trigger = useRef<any>(null)
  const sidebar = useRef<any>(null)

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  // close on click outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (
        sidebar.current.contains(event.target) ||
        trigger.current.contains(event.target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [sidebarOpen, setSidebarOpen])

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false)
      }
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  }, [setSidebarOpen])

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString())
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded')
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  return (
    <aside
      ref={sidebar}
      className={`absolute rounded-2xl left-0 top-0 z-50 flex h-[100vh] w-[237px] flex-col gap-20 items-center py-10 overflow-y-hidden bg-[#181818] duration-300 ease-linear lg:static lg:translate-x-0 m-2 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-[109%]'
      }`}
    >
      <div className='mx-auto flex flex-col justify-center items-center'>
        <Link
          href='/'
          className='cursor-pointer'
        >
          <Image
            src='/images/logo.png'
            alt='lgog'
            width={100}
            height={100}
          />
        </Link>
        <div className='flex items-center gap-3'>
          <Link
            href=''
            className='bg-white rounded-full p-2 hover:bg-gray hover:text-white trasnsetion-all'
          >
            <FaXTwitter />
          </Link>
          <Link
            href=''
            className='bg-white rounded-full p-2 hover:bg-gray hover:text-white trasnsetion-all'
          >
            <BiLogoTelegram />
          </Link>
        </div>
      </div>

      <span
        className='md:hidden block absolute top-5 right-5 text-white text-xl cursor-pointer bg-slate-200 rounded-full bg-opacity-5'
        onClick={(e) => {
          setSidebarOpen(false)
        }}
      >
        <IoMdCloseCircleOutline />
      </span>

      <div
        className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear relative'
        id='scroll_none'
      >
        {/* <!-- Sidebar Menu --> */}
        <nav className='py-4 lg:mb-9'>
          <ul className='flex flex-col gap-0'>
            {SIDEBAR_DATA.map((item, index) => (
              <li
                key={index}
                className='md:mx-3 mx-0'
              >
                <Link
                  href={item.urlPath}
                  className={`flex items-center px-10 py-4 gap-3 text-base font-medium rounded-lg relative whitespace-nowrap ${
                    pathname === item.urlPath
                      ? 'text-white bg-[#030303]'
                      : 'text-[#888490]'
                  }`}
                  onClick={() => setSidebarOpen(false)} // Close sidebar when a link is clicked
                >
                  <span
                    className={`${
                      pathname === item.urlPath
                        ? 'text-white'
                        : 'text-[#888490]'
                    }`}
                  >
                    {item.icons}
                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
      {/* <div>
        <p className='text-[#7F7F7F] text-sm'>Don’t have an account? </p>
        <h3 className='text-white font-bold cursor-pointer'>Sign Up</h3>
      </div> */}
    </aside>
  )
}

export default Sidebar
