import Link from 'next/link'

const links = [
  { href: '/terms-and-conditions', label: 'Terms and conditions' },
  { href: '/privacy-policy', label: 'Our policy' },
]


export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full mt-12 mt-auto">
      <ul className="flex justify-end items-center p-8">
        <li className="space-x-4 mr-4 text-white">
          © 2020 Sprk, Inc.
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => {
            return (
              <li key={`${href}${label}`}>
                <Link href={href}>
                  <a href={href} className={`no-underline hover:text-sprk-blue cursor-pointer font-bold text-black'}`}>
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
