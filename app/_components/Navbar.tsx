// interface NavbarProps {}
import navBarContent from '@/app/_content/navbar.json'
import Link from 'next/link'
import NavbarLink from './NavbarLink'
import MenuClose from './MenuClose'
import NavSmallScreen from './NavSmallScreen'

function Navbar() {
  return (
    <header className="w-[85%] mx-auto py-8 text-[#F5E8B7] ">
      <nav className="flex justify-between items-center  ">
        <h1 className="text-5xl">
          <Link href={navBarContent.heading.href}>
            {navBarContent.heading.title}
          </Link>
        </h1>

        <ul className="hidden lg:flex gap-12 mr-[50px] ">
          {navBarContent.navLinks?.map(({ title, href }) => (
            <NavbarLink href={href} title={title} />
          ))}
        </ul>
        <MenuClose/>        
        <NavSmallScreen navBarContent={navBarContent}/>
      </nav>
    </header>
  )
}

export default Navbar
