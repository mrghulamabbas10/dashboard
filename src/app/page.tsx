import Card from '@/components/home/card'
import React from 'react'
import LayoutForFillter from '@/components/layoutForFillter'
import { data } from '@/components/home/config'

export default function Home() {
  return <LayoutForFillter initialData={data} />
}
