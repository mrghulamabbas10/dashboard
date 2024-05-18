import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import DefaultLayout from '@/components/Layouts/DefaultLayout'

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={quicksand.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}
