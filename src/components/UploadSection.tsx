import React from 'react'
import CustomButton from './CustomButton'
import { MdCloudUpload } from 'react-icons/md'

export default function UploadSection() {
  return (
    <div className='flex max-w-xl flex-col items-center justify-center space-y-4 rounded border-[1px] border-dashed border-black px-40 py-40'>
      <MdCloudUpload className='h-32 w-24 fill-blue-400' />
      <p className='max-w-md text-center font-inter text-xl'>
        Drag and drop files to upload
      </p>
      <p className='font-inter text-xl'>OR</p>
      <CustomButton name='Browse' state='dark' size='large' />
    </div>
  )
}
