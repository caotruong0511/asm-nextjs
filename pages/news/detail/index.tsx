import React from 'react'
import Link from 'next/link'
import Sidebar from '../Sidebar'
import Detail from './Detail'
import Relateto from './Relateto'

type Props = {}

const index = (props: Props) => {
    return (
        <div className='container-base'>
            <ul className='text-[#282828] flex  flex-wrap: wrap text-[14px] font-medium leading-[24px] py-[15px] text-left'>
                <li className='hover:text-[#4d8a54] '> <Link href=''>   Trang chủ / </Link> </li>
                <li className='text-gray-600]'><Link href='' > Tin tức /</Link></li>
                <li className='text-[#2b3d2d]'><Link href='' >.............................</Link></li>
            </ul>
            <div className="grid md:grid-cols-3 md:gap-5 gap-3 grid-cols-1">
                <div className='md:col-span-2 col-span-1'><Detail></Detail></div>
                <div className='col-span-1 '><Sidebar></Sidebar></div>

            </div>
            <div className='mt-[20px]'>
                <Relateto></Relateto>
            </div>
        </div >
    )
}

export default index