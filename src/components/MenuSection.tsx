import React from 'react'
import Link from 'next/link'
import ForgetPassword from '@svg/forgot_password.svg'
import Updates from '@svg/updates.svg'
import Logout from '@svg/log-out.svg'
import Image, { StaticImageData } from 'next/image'

export default function MenuSection(): JSX.Element {
  return (
    <div className='MenuSection mx-auto flex max-w-fit flex-col gap-9 font-inter text-lg font-medium'>
      <MenuOption
        Icon={ForgetPassword}
        title='Forgot Password'
        link='/my_files_upload'
      />
      <MenuOption Icon={Updates} title='Updates & FAQ' link='/' />
      <MenuOption Icon={Logout} title='Log out' link='/' />
    </div>
  )
}

function MenuOption({
  Icon,
  title,
  link,
}: {
  Icon: StaticImageData
  title: string
  link: string
}) {
  return (
    <Link
      href={link}
      className='flex cursor-pointer items-center justify-start gap-6'
    >
      <Image alt='' src={Icon} />
      <p className='text-sec-200 font-inter font-medium'>{title}</p>
    </Link>
  )
}
