import Link from 'next/link'
import { useRouter } from 'next/router'
import Dropdown from './Dropdown'

const links = [
  // { href: '/our-story', label: 'Our story' },
  // { href: '/how-it-works', label: 'How it works' },
  { href: '/team', label: 'The Team' },
  { href: '/community', label: 'Community Guidelines' },
  { href: '/safety', label: 'Safety Tips' },
  // { href: '/reporting', label: 'Reporting guidelines' },
  { href: '/dictionary', label: 'Sprk\'s Dictionary' },
  { href: '/faq', label: 'FAQ' },
  // { href: '/terms-and-conditions', label: 'Terms and conditions' },
  // { href: '/privacy-policy', label: 'Our policy' },
]

const subLinks = [
  { href: '/our-story', label: 'Our Story' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/reporting', label: 'Reporting Guidelines' },
]


export default function Nav({navOpen, isSm}) {
  const router = useRouter()
  return (
    <nav className="nav" className={`nav ${navOpen ? 'nav--is-open' : ''} ${isSm ? 'is--small' : ''}`}>
      <div className="flex justify-end items-center md:p-8 flex flex-col md:flex-row">
        <div className="flex justify-center flex items-center mb-4 md:mb-0">
          <div className="mr-4 cursor-pointer">
            <Link href="/">
              <a href="/">
                <img src="/logo.png" className="sprk__logo"/>
              </a>
            </Link>
          </div>
          <div className="hidden md:block">
            <Dropdown links={subLinks} active={router.pathname}/>
          </div>
        </div>
        <ul className="flex justify-between flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0 mb-2 md:mb-0">
          <li className="block md:hidden">
            <Dropdown links={subLinks} active={router.pathname}/>
          </li>
          {links.map(({ href, label }) => {
            const isActive = router.pathname === href
            return (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a href={href} className={`no-underline hover:text-sprk-blue cursor-pointer font-bold ${isActive ? 'text-pink' : 'text-black'}`}>
                    {label}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
