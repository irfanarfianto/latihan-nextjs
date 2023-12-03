import NavbarComponent from '@/components/elements/fragments/layouts/navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <p>
        <span className='text-2xl font-bold'>Hello World!</span>
      </p>
    </div>
  )
}

