import React from 'react'

import MenuSection from './MenuSection'
import Image from 'next/image'
import { FcSettings } from 'react-icons/fc'
import InsideMenu from './InsideMenu'
import OxilateLogo from '@png/oxilate_logo.png'

export default function Sidebar(): JSX.Element {
  return (
    <aside className='sticky bottom-0 left-0 top-0 flex h-screen max-w-xs flex-1 flex-col justify-around gap-6 rounded-r bg-gray-300 px-8 pt-10 text-center '>
      <div>
        <Image alt='logo' src={OxilateLogo} className='' />
        <div className='mt-11 space-y-2 text-start '>
          <span className='font-lato text-3xl '>My account</span>
          <p className='whitespace-nowrap font-lato text-lg font-semibold '>
            Welcome, Antonio Torrejon! 👋{' '}
          </p>
        </div>
      </div>

      <InsideMenu />

      <MenuSection />

      {/* <BigButton title={'Settings'} Icon={FcSettings} /> */}
    </aside>
  )
}
