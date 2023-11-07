import Link from 'next/link'

interface NavbarLinkProps {
  href: string
  title: string
  onClick?: () => void
}

function NavbarLink({ href, title, onClick }: NavbarLinkProps) {
  return (
    <li
      key={href}
      onClick={onClick}
      className=" dark:hover:text-tertiary dark:text-secondary text-primary hover:text-quaternary pb-1 h-8 font-medium  "
    >
      <Link href={`#${href}`} className="">
        {title}
      </Link>
    </li>
  )
}

export default NavbarLink
