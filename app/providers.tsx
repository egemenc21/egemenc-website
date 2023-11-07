'use client'
import NavigationProvider from './_context/navigation'
import { ThemeProvider } from 'next-themes'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <ThemeProvider attribute='class'>{children}</ThemeProvider>
    </NavigationProvider>
  )
}

export default Providers
