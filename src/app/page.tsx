import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='grid'>
        <Link href={'/document_insight'}>document_insight</Link>
        <Link href={'/insight_dlt_recorder'}>insight_dlt_recorder</Link>
      </div>
    </main>
  )
}
