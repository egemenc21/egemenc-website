'use client'
import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavbarLinkProps {
  route: string
  href: string
  title: string
  onClick?: () => void
}

function NavbarLink({ route, href, title, onClick }: NavbarLinkProps) {
  return (
    <li
      key={href}
      onClick={onClick}
      className={cn(
        { 'border-b border-b-secondary': route === href },
        'hover:border-b hover:border-b-secondary pb-1 h-8'
      )}
    >
      <Link href={href}>{title}</Link>
    </li>
  )
}

export default NavbarLink
