// app/page.tsx
import React from 'react'
import LayoutForFillter from '@/components/layoutForFillter'
import { data } from '@/components/home/config'

const Page: React.FC = () => {
  // Filter data
  const houses = data.filter((property: any) => property.type === 'House')

  return <LayoutForFillter initialData={houses} />
}

export default Page
