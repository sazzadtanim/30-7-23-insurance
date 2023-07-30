'use client'

import DocumentList from '@/components/DocumentList'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import UploadSection from '@/components/UploadSection'

export default function DocumentInsights() {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='mx-auto flex flex-1 flex-col px-5 drop-shadow-sm'>
        <div className='px-6 py-5'>
          <TopBar username='sazzad' array={['Document Insights']} />

          <div className='flex w-full rounded bg-white px-10 pb-14 pt-5 justify-around'>
            <UploadSection />
            <DocumentList />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
