import React from 'react'

export default function CustomButton(props: {
  name: string
  state: 'light' | 'dark'
  icon?: React.ReactElement
  size: 'small' | 'medium' | 'large'
}) {
  return (
    <div className='relative'>
      <input
        type='file'
        name=''
        id=''
        className={`absolute inset-0 opacity-0`}
      />
      <p className='rounded-xl bg-blue-300 px-10 py-2 text-white'>
        {props.name}
      </p>
    </div>
  )
}
