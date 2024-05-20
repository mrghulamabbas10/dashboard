import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'

export default function Map() {
  return (
    <div className='text-[#181818] border border-[#F4F4F4] rounded-2xl p-3'>
      <div className='flex items-center justify-between'>
        <h3 className='font-bold'>Map View</h3>
        <HiDotsVertical style={{ color: '#7F7F7F' }} />
      </div>
      <div className='mt-5'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68283503666!2d54.8978108940377!3d25.076280444425517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1716200435775!5m2!1sen!2s'
          style={{ border: 0 }}
          loading='lazy'
          className='w-full md:h-[500px] h-[300px] object-cover rounded-3xl overflow-hidden'
        ></iframe>
      </div>
    </div>
  )
}
