import Link from 'next/link'
import { Text } from '../../atoms'

export function NavbarBrand() {
  return (
    <Link href="/dashboard" className="hover:opacity-80 transition-opacity">
      <Text className="text-xl font-bold text-gray-900">Dashboard</Text>
    </Link>
  )
}