import React from 'react'
import Link from 'next/link'
import Sidebar from './Sidebar'
import News from './News'
type Props = {}

const index = (props: Props) => {
  return (
    <div className='container-base'>
      <ul className='text-[#282828] flex  flex-wrap: wrap text-[14px] font-medium leading-[24px] py-[15px] text-left'>
        <li className='hover:text-[#4d8a54] '> <Link href=''>   Trang chủ / </Link> </li>
        <li className='text-[#4d8a54]'><Link href='' > Tin tức</Link></li>
      </ul>
      <div className="min-h-screen flex">


        <main className="flex-1 min-w-0 overflow-auto ...">
          <News></News>
        </main>
        <nav className="w-[263px] flex-none ...">
          <Sidebar></Sidebar>
        </nav>
      </div>
    </div >
  )
}

export default index