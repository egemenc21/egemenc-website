'use client'
import NavigationProvider from './_context/navigation'

function Providers({ children }: { children: React.ReactNode }) {
  return <NavigationProvider>{children}</NavigationProvider>
}

export default Providers
