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
  {
    name: 'Settings',
    icons: <SettingIcon />,
    urlPath: '',
  },
]

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname()

  const trigger = useRef<any>(null)
  const sidebar = useRef<any>(null)

  let storedSidebarExpanded = 'true'

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== 'Escape') return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

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
      className={`absolute rounded-2xl left-0 top-0 z-[999999] flex h-[100vh] w-[237px] flex-col justify-center overflow-y-hidden bg-[#181818] duration-300 ease-linear lg:static lg:translate-x-0 m-2 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-[109%]'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className='flex items-center justify-between gap-2 py-6 px-8 w-full text-white'>
        <div className='space-y-3 text-center flex flex-col justify-center items-center'>
          <Avatar
            alt='Remy Sharp'
            src='/images/Profile Image.png'
            sx={{ width: 92, height: 92 }}
          />
          <h3 className='text-2xl font-semibold'>Indica Watson</h3>
          <p className='text-[#7F7F7F]'>Real Estate Builders</p>
        </div>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

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
                  className={`flex items-center px-4 py-4 gap-3 text-base font-medium rounded-lg relative whitespace-nowrap ${
                    pathname === item.urlPath
                      ? 'text-white bg-[#030303]'
                      : 'text-[#888490]'
                  }`}
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
    </aside>
  )
}

export default Sidebar
