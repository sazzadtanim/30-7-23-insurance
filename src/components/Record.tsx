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
  return (
    <div title='DLT record'>
      <input type='checkbox' name='' id='' />
      <button type='button'>Validate</button>
      <div>
        <p>
          {props.date} {props.time} Find Similar
        </p>
        {/* Three dot icon  */}
        {/* <Image /> */}
      </div>
      <p>Text</p>
      <p>{props.text}</p>
      {props.datas.map((data, index) => (
        <p key={index}>
          {data.title} {data.percentage}%
        </p>
      ))}
      <button type='button'>Discard</button>
    </div>
  )
}
