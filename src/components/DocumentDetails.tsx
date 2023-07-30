import { BsFiletypePdf } from 'react-icons/bs'
import PdfBlue from '@svg/PdfBlue.svg'
import PdfWhite from '@svg/PdfWhite.svg'
import Image from 'next/image'

export interface DocumentHistoryProps {
  title: string
  description: string
  usedAs: 'header' | 'inactiveHistory' | 'activeHistory'
}

//* tailwindcss recommended way https://tailwindcss.com/docs/content-configuration

const divStyles = {
  base: 'group flex max-w-xl gap-4 rounded-lg py-8 px-36 shadow-sm justify-center items-center',
  header: 'max-w-full rounded-none shadow-none',
  inactiveHistory: 'bg-[#F5F5F5] hover:bg-blue-400',
  activeHistory: 'hover:bg-purple-700 bg-blue-500 hover:bg-blue-400',
}

const titleStyles = {
  base: 'font-bold leading-4',
  header: 'text-lg font-medium text-white',
  inactiveHistory: 'text-xs text-black group-hover:text-white',
  activeHistory: 'text-xs text-white',
}

const descriptionStyles = {
  header: 'text-sm leading-4 text-gray-200',
  inactiveHistory: 'text-[10px] leading-3 text-black/60 group-hover:text-white',
  activeHistory: 'text-[10px] leading-3 text-gray-200 ',
}

export default function DocumentDetails(props: DocumentHistoryProps) {
  return (
    <div className={`${divStyles['base']} ${divStyles[props.usedAs]}`}>
      {props.usedAs === 'header' || props.usedAs === 'activeHistory' ? (
        <Image alt='pdf icon' src={PdfBlue} />
      ) : (
        <Image alt='pdf icon' src={PdfWhite} />
      )}

      <div className='flex max-w-[382px] flex-col gap-2'>
        <p className={`${titleStyles['base']} ${titleStyles[props.usedAs]}`}>
          {props.title}
        </p>
        <p className={`${descriptionStyles[props.usedAs]}`}>
          {props.description}
        </p>
      </div>
    </div>
  )
}
