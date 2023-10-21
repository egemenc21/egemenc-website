'use client'
import Link from 'next/link'
import NavbarLink from './NavbarLink'
import { NavigationContext } from '../_context/navigation'
import { useContext } from 'react'

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
  const { title, href } = navBarContent.heading
  const { navState, changeNavState } = useContext(NavigationContext)

  if (!navState) return

  return (
    <>
    <div className='fixed left-0 top-0 bg-tertiary w-[80%] h-full' >
         <ul className="text-xl flex flex-col items-end justify-center my-[25%] gap-10 border-r-4 border-primary pr-4">
        {/* <li>
          <Link className="text-5xl" href={href}>
            {title}
          </Link>
        </li> */}
        {navBarContent.navLinks?.map(({ title, href }) => (
          <NavbarLink onClick={changeNavState} href={href} title={title} />
        ))}
      </ul>
    </div>
     
    </>
  )
}

export default NavSmallScreen
