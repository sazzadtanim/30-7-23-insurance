import Image from 'next/image'
import React from 'react'

export interface RecordInterface {
  date: string
  time: string
  text: string
  datas: Data[]
}

interface Data {
  title: string
  percentage: number
  status: 'active' | 'inactive'
}

export default function Record(props: RecordInterface) {
  const maindivStyle = {
    base: 'rounded-lg bg-gray-300 p-10 font-lato',
  }

  const dataStyle = {
    base: 'rounded-10 bg-blue-100 px-12 py-2 text-white flex gap-4',
  }

  const textStyle = {
    base: 'mb-2 mt-3 max-w-2xl text-base font-medium tracking-[.02em]',
  }

  return (
    <div title='DLT record' className={`${maindivStyle['base']}`}>
      <input type='checkbox' name='' id='' />
      <button type='button'>Validate</button>
      <div className='flex justify-end'>
        <p className='flex gap-4'>
          <span>{props.date}</span>
          <span>{props.time}</span>
          <span> Find Similar</span>
        </p>
        {/* Three dot icon  */}
        {/* <Image /> */}
      </div>
      <p className='text-xl font-bold'>Text:</p>
      <p className={`${textStyle['base']}`}>{props.text}</p>
      <div className='my-10 flex max-w-lg gap-4 whitespace-nowrap'>
        {props.datas.map((data, index) => (
          <p key={index} className={`${dataStyle['base']}`}>
            <span> {data.title}</span> <span>{data.percentage}%</span>
          </p>
        ))}
      </div>
      <button
        type='button'
        className='my-2 rounded-10 bg-blue-400 px-8 py-2 text-sm font-semibold'
      >
        Discard
      </button>
    </div>
  )
}
