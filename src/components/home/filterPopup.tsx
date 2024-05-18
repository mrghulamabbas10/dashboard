import React from 'react'

import { RiSearchLine } from 'react-icons/ri'

export default function FilterPopup() {
  return (
    <div className='FilterPopup'>
      <div className='flex items-center border border-[#B2B2B2] rounded-md px-3'>
        <span className='text-[#181818]'>
          <RiSearchLine />
        </span>
        <input
          type='search'
          placeholder='Dubai'
          className='outline-none py-3 w-full pl-3 placeholder:text-[#181818]'
        />
      </div>
      <div className='border-b border-[#F0F0F0]'>
        <button className='py-3 border-b-2 border-[#E4022B]'>
          Residential Property
        </button>
      </div>
    </div>
  )
}
