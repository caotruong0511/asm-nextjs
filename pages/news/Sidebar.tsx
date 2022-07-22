import Link from 'next/link'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div>
            <aside>

                <h2 className=' mt-0  leading-[42px] py-[15px] text-left ] text-[30px] font-barlow border-b-4 border-green-600 break-before-right  '    >
                    DANH MỤC TIN TỨC
                </h2>

                <hr />
                <nav className='pt-[30px] pb-[15px]'>
                    <ul >
                        <li className='flex items-center font-quicksand leading-[24px] px-[3px] py-[5px]  '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg> <Link href="#">Trang chủ</Link></li>
                        <li className='flex  items-center font-quicksand leading-[24px] px-[3px] py-[5px] '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg> Giới thiệu</li>


                        <li>
                            <button type="button" className="flex items-center justify-betweens font-quicksand leading-[24px] px-[3px] py-[5px]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg><span>Sản phẩm</span>
                                <svg sidebar-toggle-item className="w-4 h-4 float-right" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                            <ul id="dropdown-example" className="hidden px-4 py-2 space-y-2">
                                <li className="px-3">
                                    <Link href="ssss"
                                    > Cà phê </Link>
                                </li>


                                <li className="px-3">
                                    <Link href="sss"
                                    >Bánh ngọt</Link>
                                </li>
                                <li className="px-3">

                                    <Link href="ssss">Trà hoa quả</Link>
                                </li>
                            </ul>
                        </li>


                        <li className='flex items-center font-quicksand leading-[24px] px-[3px] py-[5px] '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg> Tin tức </li>
                        <li className='flex items-center font-quicksand leading-[24px] px-[3px] py-[5px] '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg> Thực đơn</li>
                        <li className='flex items-center font-quicksand leading-[24px] px-[3px] py-[5px] '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg> Liên hệ</li>
                    </ul>
                </nav>
            </aside>

            <aside>
                <h2 className=' mt-5 mb-7 leading-[42px] py-[15px] text-left ] text-[30px] font-barlow border-b-4 border-green-600 break-before-right  '    >
                    VỀ CHÚNG TÔI
                </h2>
                <img src=" https://bizweb.dktcdn.net/100/415/010/themes/844269/assets/banner_about.jpg?1646286260817" alt="" width="263px" height="168px" />
                <p className='my-3'>Tea House được sinh ra từ niềm đam mê bất tận với lá trà Việt Nam. Chúng tôi đã không ngừng mang đến những sản phẩm trà thơm ngon, sánh đượm trong không gian thoải mái và lịch sự với mức giá hợp lý.</p>
                <button className='mt-3 rounded-[30px] bg-green-700  px-[30px] py-[5px] font-quicksand text-white font-bold'  >Đọc tiếp</button>
            </aside>
            <aside>
                <h2 className=' mt-10 leading-[42px] py-[15px] text-left ] text-[28px] font-barlow border-b-4 border-green-600 break-before-right  '    >
                    HÌNH ẢNH TRÀ TEA HOUSE
                </h2>
                <div className=' grid grid-cols-3 gap-3 mt-7 mb-7'>
                    <img src=" https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/pictureblog_1.jpg?1646286260817" alt="" className='w-[78px] h-[78px] ' />
                    <img src=" https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/pictureblog_1.jpg?1646286260817" alt="" className='w-[78px] h-[78px] ' />
                    <img src=" https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/pictureblog_1.jpg?1646286260817" alt="" className='w-[78px] h-[78px] ' />
                    <img src=" https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/pictureblog_1.jpg?1646286260817" alt="" className='w-[78px] h-[78px] ' />
                    <img src=" https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/pictureblog_1.jpg?1646286260817" alt="" className='w-[78px] h-[78px] ' />
                    <img src=" https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/pictureblog_1.jpg?1646286260817" alt="" className='w-[78px] h-[78px] ' />


                </div>
            </aside>
            < script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js" ></script >
        </div>
    )
}

export default Sidebar



