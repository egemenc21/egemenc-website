import navBarContent from '@/app/_content/navbar.json'
import Link from 'next/link'
import NavbarLink from './NavbarLink'
import MenuClose from './MenuClose'
import NavSmallScreen from './NavSmallScreen'
import Theme from './Theme'

function Navbar() {
  return (
    <header className="fixed left-0 z-[105] top-0 w-full bg-secondary dark:bg-primary mx-auto py-8 font-semibold tracking-wider text-primary dark:text-secondary md:border-b border-b-secondary dark:border-b-quaternary">
      <nav className="flex justify-between items-center mx-auto w-[85%]">
        <h1 className="text-3xl">
          <Link href={navBarContent.heading.href}>
            {navBarContent.heading.title}
          </Link>
        </h1>

        <ul className="hidden md:flex items-center justify-center gap-12 text-lg">
          {navBarContent.navLinks?.map(({ title, href }) => (
            <NavbarLink href={href} key={href} title={title} />
          ))}
          <li>
            <Theme />
          </li>          
        </ul>
        <MenuClose />
        <NavSmallScreen navBarContent={navBarContent} />
      </nav>
    </header>
  )
}

export default Navbar
