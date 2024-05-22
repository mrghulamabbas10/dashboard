import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import theme from '@/components/theme'

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dreamz Dashbard',
  description: 'Dreamz Dashbard',
  icons: { icon: 'favicon.ico' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
      </head>
      <body className={quicksand.className}>
        <ThemeProvider theme={theme}>
          <DefaultLayout>{children}</DefaultLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
