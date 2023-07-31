'use client'

import Footer from '@/components/Footer'
import Record, { RecordInterface } from '@/components/Record'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'

const records: RecordInterface[] = [
  {
    date: '2023-06-06​',
    datas: [
      {
        percentage: 26539,
        status: 'inactive',
        title: 'Rehusado  por dis...',
      },
    ],
    text: `Nuestro seguro, al salir del estacionamiento en reversa, golpea al vehículo contrario, provocándole daños
 
  en la puerta lateral trasera derecha.`,
    time: '14.39',
  },
  {
    date: '2023-06-06​',
    datas: [
      {
        percentage: 26.539,
        status: 'inactive',
        title: 'Rehusado  por dis...',
      },
      {
        percentage: 2.091,
        status: 'inactive',
        title: 'No cobertura',
      },
      {
        percentage: 23.973,
        status: 'inactive',
        title: 'No cubierto',
      },
      {
        percentage: 47.399,
        status: 'inactive',
        title: 'Cubierto',
      },
    ],
    text: `Nuestro seguro, al salir del estacionamiento en reversa, golpea al vehículo contrario, provocándole daños
 
  en la puerta lateral trasera derecha.`,
    time: '14.39',
  },
]

export default function DocumentInsights() {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='mx-auto flex flex-1 flex-col px-5 drop-shadow-sm'>
        <div className='px-6 py-5'>
          <TopBar username='sazzad' array={['Insights DLT Recorder']} />

          <div className='flex w-full flex-col justify-around gap-5 rounded bg-white px-10 pb-14 pt-5'>
            {records.map((record, index) => (
              <Record
                key={index}
                datas={record.datas}
                date={record.date}
                text={record.text}
                time={record.time}
              />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
