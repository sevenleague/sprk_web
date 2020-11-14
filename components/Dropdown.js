
import {useState} from 'react'
import Link from 'next/link'
export default function Dropdown({links, active}) {
  const anyActive = links.reduce((prev, current) => {
    return prev || current.href === active
  }, false)

  const [open, setOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button type="button" onClick={() => setOpen(!open)}className={` ${anyActive ? 'text-pink' : 'text-black'} inline-flex justify-center w-full rounded-md font-bold px-4 py-2 hover:text-sprk-blue bg-transparent focus:outline-none focus:border-none active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150`} id="options-menu" aria-haspopup="true" aria-expanded="true">
            The App
            <svg className="-mr-1 mt-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </span>
      </div>
      {open &&
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
          <div className="rounded-md bg-white shadow-xs">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {links.map(link => {
                const isActive = active === link.href
                return (
                  <Link href={link.href}>
                    <a href={link.href} className={`block px-4 py-2 no-underline cursor-pointer font-bold hover:text-sprk-blue ${isActive ? 'text-pink' : 'text-black'}`}>
                      {link.label}
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      }
    </div>
  )
}