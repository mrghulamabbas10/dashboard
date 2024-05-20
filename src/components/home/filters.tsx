// components/Filters.tsx
import React, { useState, ChangeEvent } from 'react'
import { CiSearch } from 'react-icons/ci'
import { PiCurrencyDollarBold } from 'react-icons/pi'
import { IoChevronDown } from 'react-icons/io5'
import FiltersIcon from '../assets/filtersIcon'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import FilterPopup from './filterPopup'
import { IoMdClose } from 'react-icons/io'

export interface FilterValues {
  searchTerm: string
  minPrice: string
  maxPrice: string
  propertyTypes: string[]
}

interface FiltersProps {
  onFilterChange: (filters: FilterValues) => void
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sellprice, setPrice] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [filters, setFilters] = useState('')
  const [open, setOpen] = React.useState(false)

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    onFilterChange({
      searchTerm: e.target.value,
      minPrice: sellprice,
      maxPrice: '',
      propertyTypes: propertyType ? [propertyType] : [],
    })
  }

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
    onFilterChange({
      searchTerm,
      minPrice: e.target.value,
      maxPrice: '',
      propertyTypes: propertyType ? [propertyType] : [],
    })
  }

  const handlePropertyTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPropertyType(e.target.value)
    onFilterChange({
      searchTerm,
      minPrice: sellprice,
      maxPrice: '',
      propertyTypes: e.target.value ? [e.target.value] : [],
    })
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handlePopupFilterChange = (filters: FilterValues) => {
    setSearchTerm(filters.searchTerm)
    setPrice(filters.minPrice)
    setPropertyType(filters.propertyTypes.join(', '))
    setFilters(filters as any)
    onFilterChange(filters)
  }

  return (
    <div className='flex mt-4'>
      <div className='w-full mx-auto flex gap-5 flex-wrap'>
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
            <IoChevronDown style={{ color: '#B7BFC5', fontSize: 20 }} />
          </span>
        </div>
        <div className='md:w-auto w-full'>
          <button
            onClick={handleClickOpen}
            className='md:w-[200px] w-full flex items-center justify-between border border-gray-300 text-[#B7BFC5] text-sm py-3 px-5 rounded-full'
          >
            Filters
            <FiltersIcon />
          </button>
        </div>
      </div>
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
          maxWidth='sm'
          fullWidth
          id='scroll_none'
        >
          <span
            className='absolute top-5 right-5 text-textPrimary text-2xl'
            onClick={handleClose}
          >
            <IoMdClose />
          </span>
          <DialogTitle id='alert-dialog-title'>
            <h3 className='text-[#181818] text-center font-bold'>Filters</h3>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <FilterPopup
                onFilterChange={handlePopupFilterChange}
                onClose={handleClose}
              />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </div>
  )
}

export default Filters
