'use client'
import { useTheme } from 'next-themes'
import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md'

function Theme() {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <div onClick={handleTheme}>
      {theme === 'dark' ? (
        <MdOutlineDarkMode size={25} />
      ) : (
        <MdLightMode size={25} />
      )}
    </div>
  )
}

export default Theme
