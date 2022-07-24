import React from 'react'
import Link from 'next/link'
import Sidebar from './Sidebar'
import News from './News'
type Props = {}

const index = (props: Props) => {
  return (
    <div className='container-base '>

      <ul className='text-[#282828] flex  flex-wrap: wrap text-[14px] font-medium leading-[24px] py-[15px] text-left'>
        <li className='hover:text-[#4d8a54] '> <Link href=''>   Trang chủ / </Link> </li>
        <li className='text-[#4d8a54]'><Link href='' > Tin tức</Link></li>
      </ul>
      <div className="grid md:grid-cols-3 md:gap-5 sm:gap-6 sm:grid-cols-2">
        <div className='md:col-span-2 sm:col-span-1'><News></News></div>
        <div className='col-span-1 '><Sidebar></Sidebar></div>

      </div>
    </div >
  )
}

export default index