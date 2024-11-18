import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-12 border-t border-smite-gold bg-smite-dark-blue text-smite-light-gold uppercase text-xl">
      <ul className="flex justify-center h-full *:px-4 *:md:px-16 *:h-full *:flex *:items-center">
        <li className="hover:bg-smite-blue">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:bg-smite-blue">
          <Link href={"/players"}>Players</Link>
        </li>
        <li className="hover:bg-smite-blue">
          <Link href={"/matches"}>Matches</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar