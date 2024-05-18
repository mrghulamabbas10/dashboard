// components/Filters.tsx
import React, { useState, ChangeEvent } from 'react'
import { CiSearch } from 'react-icons/ci'
import { PiCurrencyDollarBold } from 'react-icons/pi'
import { IoChevronDown } from 'react-icons/io5'
import FiltersIcon from '../assets/filtersIcon'

export interface FilterValues {
  searchTerm: string
  sellprice: string
  propertyType: string
  filters: string
}

interface FiltersProps {
  onFilterChange: (filters: FilterValues) => void
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sellprice, setPrice] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [filters, setFilters] = useState('')

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    onFilterChange({
      searchTerm: e.target.value,
      sellprice,
      propertyType,
      filters,
    })
  }

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
    onFilterChange({
      searchTerm,
      sellprice: e.target.value,
      propertyType,
      filters,
    })
  }

  const handlePropertyTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPropertyType(e.target.value)
    onFilterChange({
      searchTerm,
      sellprice,
      propertyType: e.target.value,
      filters,
    })
  }

  const handleFiltersChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters(e.target.value)
    onFilterChange({
      searchTerm,
      sellprice,
      propertyType,
      filters: e.target.value,
    })
  }

  return (
    <div className='flex mt-4'>
      <form className='w-full mx-auto flex gap-5 flex-wrap'>
        <div className='md:w-auto w-full'>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Search
          </label>
          <div className='relative'>
            <input
              className='block w-full py-3 px-6 outline-none text-sm text-[#B7BFC5] border border-[#B7BFC5] rounded-full'
              placeholder='Search Here....'
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
              type='submit'
              className='text-white absolute right-5 top-2.5'
            >
              <CiSearch style={{ color: '#1DE3D3', fontSize: 24 }} />
            </button>
          </div>
        </div>
        <div className='md:w-auto w-full'>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Price
          </label>
          <div className='relative'>
            <input
              className='block w-full py-3 px-6 outline-none text-sm text-[#B7BFC5] border border-[#B7BFC5] rounded-full'
              placeholder='Price'
              value={sellprice}
              onChange={handlePriceChange}
            />
            <button
              type='submit'
              className='text-white absolute right-5 top-3'
            >
              <PiCurrencyDollarBold
                style={{ color: '#1DE3D3', fontSize: 24 }}
              />
            </button>
          </div>
        </div>
        <div className='relative md:w-auto w-full'>
          <select
            id='property-type'
            className='relative md:w-auto w-full bg-gray-50 border border-gray-300 text-[#B7BFC5] text-sm py-3 pl-6 pr-16 rounded-full outline-none'
            value={propertyType}
            onChange={handlePropertyTypeChange}
          >
            <option value=''>Property Type</option>
            <option value='House'>House</option>
            <option value='Apartment'>Apartment</option>
          </select>
          <span className='absolute top-3 right-4'>
            <IoChevronDown style={{ color: '#B7BFC5', fontSize: 24 }} />
          </span>
        </div>
        <div className='md:w-auto w-full'>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Filters
          </label>
          <div className='relative'>
            <input
              className='block w-full py-3 px-6 outline-none text-sm text-[#B7BFC5] border border-[#B7BFC5] rounded-full'
              placeholder='Filters'
            />
            <button
              type='submit'
              className='text-white absolute right-5 top-2.5'
            >
              <FiltersIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Filters
