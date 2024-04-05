import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DefaultLayout from '@/components/Layouts/DefaultLayout'

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Opex',
  description: 'Opex',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}
