import React from 'react'
import Link from 'next/link'
import HomeIcon from '@png/HOME.png'
import InsightIcon from '@png/insight.png'
import CompaniesIcon from '@png/companies.png'
import DocumentsIcon from '@png/documents.png'
import Image, { StaticImageData } from 'next/image'
import { usePathname } from 'next/navigation'

export default function InsideMenu(): JSX.Element {
  const path = usePathname()
  const NavLinks: {
    title: string
    Icon: StaticImageData
    link: string
    state: 'Active' | 'InActive'
  }[] = [
    {
      title: 'home',
      Icon: HomeIcon,
      link: '/main_design',
      state: 'Active',
    },
    {
      title: 'Insight DLT Recorder',
      Icon: InsightIcon,
      link: '/my_files',
      state: 'Active',
    },
    {
      title: 'Companies Covered',
      Icon: CompaniesIcon,
      link: '/companies_covered',
      state: 'Active',
    },
    {
      title: 'Document Insights',
      Icon: DocumentsIcon,
      link: '/document_insight',
      state: 'Active',
    },
  ]

  return (
    <div className=' flex flex-col gap-8 rounded-2xl bg-gray-200 px-2 py-4 '>
      {NavLinks.map((nav, index) => (
        <Insider
          key={index}
          title={nav.title}
          Icon={nav.Icon}
          link={nav.link}
          state={path === nav.link ? 'Active' : 'Inactive'}
        />
      ))}
    </div>
  )
}

function Insider(props: {
  link: string
  state: 'Active' | 'Inactive'
  title: string
  Icon: StaticImageData
}) {
  const linkStyles = {
    Active: 'border-l-2 border-black bg-blue-300/20',
    Inactive: 'bg-white',
  }

  return (
    <Link
      href={props.link}
      className={`flex items-center justify-start gap-3 rounded-r-md px-4  py-3 hover:bg-blue-300/10 ${
        linkStyles[props.state]
      }`}
    >
      <Image
        alt={`icon for ${props.title}`}
        src={props.Icon}
        className=' h-auto w-8 '
      />
      <span className='whitespace-nowrap font-lato text-lg font-semibold capitalize '>
        {props.title}
      </span>
    </Link>
  )
}
