'use client'

import { useHomepage, useSettings } from '@/sanity/loader/useQuery'

import NavbarLayout from './NavbarLayout'

type Props = {
  initial: Parameters<typeof useSettings>[0]
  title: any
  logo: any
}

export default function NavbarPreview(props: Props) {
  const { data } = useSettings(props.initial)

  return <NavbarLayout data={data!} title={props?.title} logo={props?.logo} />
}
