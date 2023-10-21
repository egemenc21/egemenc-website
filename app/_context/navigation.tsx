import { createContext, useState } from 'react'

export const NavigationContext = createContext<{
  navState: boolean
  changeNavState: () => void
  customizeNavState: (newNavState: boolean) => void
}>({
  navState: false,
  changeNavState: () => {},
  customizeNavState: () => {},
})

function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [navState, setNavState] = useState(false)

  const changeNavState = () => {
    setNavState(!navState)
  }

  const customizeNavState = (newNavState: boolean) => {
    setNavState(newNavState)
  }

  return (
    <NavigationContext.Provider
      value={{ navState, customizeNavState, changeNavState }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationProvider
