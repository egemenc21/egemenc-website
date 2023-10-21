import Link from 'next/link'

interface NavbarLinkProps {
  href: string
  title: string
  onClick?: () => void
}

function NavbarLink({ href, title, onClick }: NavbarLinkProps) {
  return (
    <li key={href} onClick={onClick}>
      <Link href={`#${href}`}>{title}</Link>
    </li>
  )
}

export default NavbarLink
