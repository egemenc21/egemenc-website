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
    <div onClick={handleTheme} className='cursor-pointer max-md:hover:text-tertiary max-md:text-secondary  dark:hover:text-tertiary transition-colors'>
      {theme === 'dark' ? (
        <MdLightMode size={25} />
      ) : (
        <MdOutlineDarkMode size={25} />
      )}
    </div>
  )
}

export default Theme
