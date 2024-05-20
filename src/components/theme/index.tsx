'use client'
import { Quicksand } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const quicksand = Quicksand({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  typography: {
    fontFamily: quicksand.style.fontFamily,
  },
})

export default theme
