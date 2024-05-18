import React from 'react'
import HouseDetails from '@/components/houseDetails'

import { data } from '@/components/home/config'

export async function generateStaticParams() {
  return data?.map((house) => ({
    slug: house.slug,
  }))
}

export default function Page({ params }: any) {
  const { slug } = params
  const houseData = data.find((item) => item.slug === slug)
  return <HouseDetails houseData={houseData} />
}
