import React from 'react'

export default function OpenOrders() {
  return (
    <div className='bg-[#1C1C1C] shadow-2xl mt-5 px-7 py-6 rounded-[10px] flex flex-col gap-3'>
      <h3 className='text-[#CACACA] uppercase'>open orders</h3>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between items-center text-primary '>
          TBULL/USDT <span className='text-[#9EFF70]'>Limit Buy</span>
        </div>
        <div className='flex justify-between items-center'>
          <div className='text-primary'>
            Amount : <span className='text-white ml-1'>0/24</span>
          </div>
          <div className='text-primary'>
            Price : <span className='text-white ml-1'>0.6000</span>
          </div>
        </div>
        <div className='flex justify-between items-center text-primary '>
          2022-05-25 00:47:01 <span className='text-red-600 ml-1'>Cancel</span>
        </div>
        <hr className='text-primary border-t-2 border-primary mt-3 ' />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between items-center text-primary '>
          TBULL/USDT <span className='text-[#9EFF70]'>ADA/USDT</span>
        </div>
        <div className='flex justify-between items-center'>
          <div className='text-primary'>
            Amount : <span className='text-white ml-1'>0/24</span>
          </div>
          <div className='text-primary'>
            Price : <span className='text-white ml-1'>0.6000</span>
          </div>
        </div>
        <div className='flex justify-between items-center text-primary '>
          2022-05-25 00:47:01 <span className='text-red-600 ml-1'>Cancel</span>
        </div>
      </div>
    </div>
  )
}
