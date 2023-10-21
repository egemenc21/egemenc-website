import navBarContent from '@/app/_content/navbar.json'
import Link from 'next/link'
import NavbarLink from './NavbarLink'
import MenuClose from './MenuClose'
import NavSmallScreen from './NavSmallScreen'

function Navbar() {
  return (
    <header className="w-[85%] mx-auto py-8 text-[#F6F1EE] md:border-b border-b-[#6C5F5B]">
      <nav className="flex justify-between items-center mx-4">
        <h1 className="text-3xl">
          <Link href={navBarContent.heading.href}>
            {navBarContent.heading.title}
          </Link>
        </h1>

        <ul className="hidden md:flex gap-12">
          {navBarContent.navLinks?.map(({ title, href }) => (
            <NavbarLink href={href} key={href} title={title} />
          ))}
        </ul>
        <MenuClose/>        
        <NavSmallScreen navBarContent={navBarContent}/>
      </nav>
    </header>
  )
}

export default Navbar
