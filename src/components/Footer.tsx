import React from 'react'

export default function Footer(): JSX.Element {
  return (
    <div className='fixed  bottom-0 left-[30%] right-[30%] font-inter'>
      <p className='flex h-6 max-w-[1000px] justify-center rounded-tl-lg rounded-tr-lg bg-gray-500 px-8  pb-4 pt-2 text-xs font-medium text-[#333333]'>
        Copyright © 2023 Helsinski Insurance Limited. All Rights Reserved.
      </p>
    </div>
  )
}
