import Link from 'next/link'

const links = [
  { href: '/terms-and-conditions', label: 'Terms and conditions' },
  { href: '/privacy-policy', label: 'Our policy' },
]


export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full mt-auto">
      <ul className="flex flex-col md:flex-row text-right md:justify-end md:items-center p-8">
        <li className="md:space-x-4 mr-4 text-white order-2 md:order-1">
          © 2020 Sprk, Inc.
        </li>
        <ul className="flex md:justify-between items-center ml-auto space-x-4 order-1 md:order-2">
          {links.map(({ href, label }) => {
            return (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a href={href} className={`no-underline text-sm md:text-lg hover:text-sprk-blue cursor-pointer text-black'}`}>
                    {label}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </ul>
    </footer>
  )
}
