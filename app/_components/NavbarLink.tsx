import Link from 'next/link'

interface NavbarLinkProps {
  href: string
  title: string
  onClick?: () => void
}

function NavbarLink({ href, title, onClick }: NavbarLinkProps) {
  const outsideLink = href.startsWith('https://') ? true : false
  return (
    <li
      key={href}
      onClick={onClick}
      className=" dark:hover:text-tertiary hover:text-quaternary transition-colors dark:text-secondary text-primary max-md:hover:text-tertiary max-md:text-secondary  pb-1 h-8 font-medium  "
    >
      <Link
        href={outsideLink ? href : `#${href}`}
        target={outsideLink ? '_blank' : '_self'}
        className=""
      >
        {title}
      </Link>
    </li>
  )
}

export default NavbarLink
