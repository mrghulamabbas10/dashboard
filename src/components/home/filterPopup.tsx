// components/FilterPopup.tsx
import React, { useState } from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'
import { IoChevronDown } from 'react-icons/io5'
import { RiSearchLine } from 'react-icons/ri'

interface FilterPopupProps {
  onFilterChange: (filters: FilterValues) => void
  onClose: () => void
}

export interface FilterValues {
  searchTerm: string
  minPrice: string
  maxPrice: string
  propertyTypes: string[]
}

const FilterPopup: React.FC<FilterPopupProps> = ({
  onFilterChange,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [propertyTypes, setPropertyTypes] = useState<string[]>([])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMinPrice(e.target.value)
  }

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMaxPrice(e.target.value)
  }

  const handlePropertyTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name
    setPropertyTypes((prevTypes) =>
      prevTypes.includes(value)
        ? prevTypes.filter((type) => type !== value)
        : [...prevTypes, value]
    )
  }

  const handleReset = () => {
    setSearchTerm('')
    setMinPrice('')
    setMaxPrice('')
    setPropertyTypes([])
    onFilterChange({
      searchTerm: '',
      minPrice: '',
      maxPrice: '',
      propertyTypes: [],
    })
  }

  const handleSearch = () => {
    onFilterChange({
      searchTerm,
      minPrice,
      maxPrice,
      propertyTypes,
    })
    onClose()
  }

  return (
    <div className='FilterPopup relative p-5'>
      <div className='flex items-center border border-[#B2B2B2] rounded-md px-3'>
        <span className='text-[#181818]'>
          <RiSearchLine />
        </span>
        <input
          type='search'
          placeholder='Dubai'
          className='outline-none py-3 w-full pl-3 placeholder:text-[#181818]'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className='border-b border-[#F0F0F0] my-5'>
        <button className='py-3 px-10 border-b-2 border-[#E4022B]'>
          Residential Property
        </button>
      </div>
      <h3 className='font-bold text-textPrimary'>Property Type</h3>
      <div className='grid grid-cols-2 border-b border-[#F0F0F0] pb-5'>
        <FormControlLabel
          control={
            <Checkbox
              checked={propertyTypes.includes('All types')}
              name='All types'
              onChange={handlePropertyTypeChange}
            />
          }
          label='All types'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={propertyTypes.includes('House')}
              name='House'
              onChange={handlePropertyTypeChange}
            />
          }
          label='House'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={propertyTypes.includes('Apartment')}
              name='Apartment'
              onChange={handlePropertyTypeChange}
            />
          }
          label='Apartment'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={propertyTypes.includes('New Residential Development')}
              name='New Residential Development'
              onChange={handlePropertyTypeChange}
            />
          }
          label='New Residential Development'
        />
      </div>
      <h3 className='font-bold text-textPrimary mt-5'>Price</h3>
      <div className='grid md:grid-cols-2 grid-cols-1 pb-5 gap-3 mt-3'>
        <div className='space-y-1'>
          <label
            htmlFor='min-price'
            className='text-textPrimary font-medium'
          >
            Min
          </label>
          <div className='relative md:w-auto w-full'>
            <select
              id='min-price'
              className='relative w-full bg-gray-50 border border-gray-300 text-textPrimary text-sm py-3 px-5 rounded-lg outline-none'
              value={minPrice}
              onChange={handleMinPriceChange}
            >
              <option value=''>Any</option>
              <option value='100000'>100,000</option>
              <option value='200000'>200,000</option>
              <option value='300000'>300,000</option>
              <option value='1000000'>1,000,000</option>
              <option value='2000000'>2,000,000</option>
            </select>
            <span className='absolute top-3 right-4'>
              <IoChevronDown style={{ color: '#B7BFC5', fontSize: 24 }} />
            </span>
          </div>
        </div>
        <div className='space-y-1'>
          <label
            htmlFor='max-price'
            className='text-textPrimary font-medium'
          >
            Max
          </label>
          <div className='relative md:w-auto w-full'>
            <select
              id='max-price'
              className='relative w-full bg-gray-50 border border-gray-300 text-textPrimary text-sm py-3 px-5 rounded-lg outline-none'
              value={maxPrice}
              onChange={handleMaxPriceChange}
            >
              <option value=''>Any</option>
              <option value='1000000'>1,000,000</option>
              <option value='2000000'>2,000,000</option>
              <option value='3000000'>3,000,000</option>
              <option value='4000000'>4,000,000</option>
              <option value='5000000'>5,000,000</option>
            </select>
            <span className='absolute top-3 right-4'>
              <IoChevronDown style={{ color: '#B7BFC5', fontSize: 24 }} />
            </span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <button
          onClick={handleReset}
          className='font-bold text-textPrimary'
        >
          Reset
        </button>
        <button
          onClick={handleSearch}
          className='bg-[#1DE3D3] py-3 px-5 text-white rounded-full'
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default FilterPopup
