'use client'

import React, { useEffect, useState } from 'react'

const CheckOut = ({ houseData }: any) => {
  const [localStorageData, setLocalStorageData] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Access localStorage here
      const data = localStorage.getItem('yourKey')
      setLocalStorageData(data as any)
    }
  }, [])

  return (
    <div>
      <h1>CheckOut</h1>
      <p>{houseData.name}</p>
      <p>{localStorageData}</p>
    </div>
  )
}

export default CheckOut
