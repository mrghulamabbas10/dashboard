import Card from '@/components/home/card'
import { data } from '@/components/home/config'
import LayoutForFillter from '@/components/layoutForFillter'
import React from 'react'

export default function page() {
  // filter data
  const apartment = data.filter(
    (property: any) => property.type === 'Apartment'
  )

  return <LayoutForFillter initialData={apartment} />
}
