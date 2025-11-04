'use client'
import { NavbarBrand } from '../../molecules/NavbarBrand'
import { UserMenu } from '../../molecules/UserMenu'

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <NavbarBrand />
        <UserMenu />
      </div>
    </nav>
  )
}