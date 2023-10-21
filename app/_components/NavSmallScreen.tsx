'use client'
import Link from 'next/link'
import NavbarLink from './NavbarLink'
import { NavigationContext } from '../_context/navigation'
import { useContext } from 'react'
import { usePathname } from 'next/navigation'

interface Link {
  title: string
  href: string
}

interface NavSmallScreenProps {
  navBarContent: {
    heading: Link
    navLinks: Link[]
  }
}

function NavSmallScreen({ navBarContent }: NavSmallScreenProps) {
  const { navState, changeNavState } = useContext(NavigationContext)
  const route = usePathname()

  if (!navState) return

  return (
    <>
      <div className="min-w-[70vw] p-10 h-[50%] fixed left-1/2 top-1/2 bg-quaternary opacity-90 -translate-x-1/2 -translate-y-2/3 backdrop-blur-md rounded-lg">
        <ul className="flex flex-col items-center justify-center gap-10 text-xl h-full">
          {navBarContent.navLinks?.map(({ title, href }) => (
            <NavbarLink
              route={route}
              onClick={changeNavState}
              href={href}
              title={title}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default NavSmallScreen
