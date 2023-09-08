import Image from 'next/image'
import Step1 from './steps/page'
export default function Home() {
  return (
    <main className='p-4 bg-[#F5F5F5] min-h-screen' >
      <div>
        <Step1 />
      </div>
    </main>
  )
}
