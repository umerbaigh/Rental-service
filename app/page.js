import Image from 'next/image'
import Steps from './steps/page'
export default function Home() {
  return (
    <main className='p-4 bg-[#F5F5F5] min-h-screen' >
      <div>
        <Steps />
      </div>
    </main>
  )
}
