'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderLinks {
  title?: string
  href?: any
}

export function HeaderLinks(props: HeaderLinks) {
  const { title, href } = props
  const pathname = usePathname()

  return (
    <Link
      className={`text-lg px-3 py-1 border rounded-full md:text-2xl ${
        pathname === '/about'
          ? 'text-primary bg-secondary border-secondary'
          : 'border-secondary hover:text-primary hover:bg-secondary'
      }`}
      href={href}
    >
      {title}
    </Link>
  )
}
