// components/LayoutForFillter.tsx
'use client'
import React, { useState, useEffect } from 'react'
import Filters, { FilterValues } from '@/components/home/filters'
import Card from './home/card'
import Map from './home/map'

interface LayoutForFilterProps {
  initialData: any[]
}

const LayoutForFillter: React.FC<LayoutForFilterProps> = ({ initialData }) => {
  const [activeTab, setActiveTab] = useState('Recommended')
  const [filterValues, setFilterValues] = useState<FilterValues>({
    searchTerm: '',
    sellprice: '',
    propertyType: '',
    filters: '',
  })
  const [filteredData, setFilteredData] = useState(initialData)
  const [priceError, setPriceError] = useState<string | null>(null)

  const tabs = ['Recommended', 'Popular', 'Nearest']

  useEffect(() => {
    const parsePrice = (price: string): number => {
      // Remove any currency symbols and commas, then parse as float
      return parseFloat(price.replace(/[^0-9.-]+/g, ''))
    }

    const filteredResults = initialData.filter((item) => {
      const itemPrice = parsePrice(item.price)

      if (filterValues.sellprice && isNaN(parsePrice(filterValues.sellprice))) {
        setPriceError('Invalid price')
        return false
      } else {
        setPriceError(null)
      }

      return (
        (filterValues.searchTerm
          ? item.name
              .toLowerCase()
              .includes(filterValues.searchTerm.toLowerCase())
          : true) &&
        (filterValues.sellprice
          ? itemPrice <= parsePrice(filterValues.sellprice)
          : true) &&
        (filterValues.propertyType
          ? item.type === filterValues.propertyType
          : true) &&
        (filterValues.filters
          ? item.filters.includes(filterValues.filters)
          : true)
      )
    })

    setFilteredData(filteredResults)
  }, [filterValues, initialData])

  const numberOfResults = filteredData.length

  return (
    <div className='bg-white rounded-2xl p-6 text-black md:mt-0 mt-10'>
      <div className='flex justify-between items-center text-black'>
        <h3 className='text-2xl font-bold'>Results {numberOfResults}</h3>
        <div>
          <label className='inline-flex items-center gap-2 cursor-pointer'>
            <span className='ms-3 text-sm font-medium text-[#181818]'>
              Map View
            </span>
            <input
              type='checkbox'
              value=''
              className='sr-only peer'
            />
            <div className="relative w-11 h-6 bg-[#EEEEEE] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
      <Filters onFilterChange={setFilterValues} />
      <div className='flex gap-5 mt-6'>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`font-bold ${
              activeTab === tab
                ? 'text-[#10978C]'
                : 'text-[#181818] font-normal'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='grid md:grid-cols-12 col-span-1 mt-5 gap-3'>
        <div className='md:col-span-9 col-span-full'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
            {filteredData.map((item, idx) => (
              <Card
                key={idx}
                item={item}
              />
            ))}
          </div>
        </div>
        <div className='md:col-span-3 col-span-full'>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default LayoutForFillter
