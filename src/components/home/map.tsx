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
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52943468.08143988!2d-161.94000782076728!3d35.9123934915405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1715997923325!5m2!1sen!2s'
          style={{ border: 0 }}
          className='w-full md:h-[500px] h-[300px] object-cover rounded-3xl overflow-hidden'
          loading='lazy'
        ></iframe>
      </div>
    </div>
  )
}
