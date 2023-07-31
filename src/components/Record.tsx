import Image from 'next/image'
import React from 'react'

interface RecordInterface {
  date: string
  time: string
  button_name: string
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
      <div>
        <p>{props.date}</p>
        <p>{props.time}</p>
        <p>Find Similar</p>
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
