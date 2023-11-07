import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/_components/Navbar'
import cn from 'classnames'
import Providers from './providers'
import Footer from './_components/Footer'

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'Egemen Celik ',
  description: 'Full stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, 'bg-secondary dark:bg-primary text-primary dark:text-secondary')}>
        <Providers>
          <Navbar />          
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
