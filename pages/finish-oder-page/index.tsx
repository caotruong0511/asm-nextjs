import Head from 'next/head'
import React from 'react'

type Props = {}

const FinishPage = (props: Props) => {
    return (
        <div className="container-base pt-[15px]">
            <Head>
      <title>Finish Oder Page</title>
    </Head>
            <div className="mb-32">
                <div className="content mx-auto mt-10">
                    <ul className="flex justify-center items-center">
                        <li className="text-2xl px-2">
                            <a href="" className="false uppercase text-gray-400 transition ease-linear duration-200 hover:text-black">SHOPPING CART</a>
                        </li>
                        <li className="text-md text-gray-400 px-2 hidden md:block">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                        </li>
                        <li className="text-2xl px-2">
                            <a href="" className="text-black uppercase text-gray-400 transition ease-linear duration-200 hover:text-black">CHECKOUT DETAILS</a>
                        </li>
                        <li className="text-md text-gray-400 px-2 hidden md:block">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
                        </li>
                        <li className="text-2xl px-2">
                            <a href="" className="text-black uppercase text-gray-400">ORDER COMPLETE</a>
                        </li>
                    </ul>
                </div>
                <div className="content mx-auto">
                    <h1 className="text-center mt-4 font-semibold text-2xl uppercase">Đặt hàng thành công</h1>
                    <p className="text-center mt-2">
                        Cảm ơn bạn đã đặt hàng của Tea House. Nhân viên sẽ gọi điện từ số điện thoại bạn đã cung cấp để Confirm (Xác nhận) lại với bạn trong thời gian sớm nhất để xác nhận đơn hàng.
                    </p>
                    <div className="flex items-center justify-center mt-2">
                        <a href="">
                            <button className="uppercase h-8 text-[#4d8a54] font-semibold text-sm border-[#4d8a54] border-2 px-3 transition ease-linear duration-300 hover:bg-[#4d8a54] hover:text-white">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="left-long" className="svg-inline--fa fa-left-long " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z"></path></svg>
                                <span>Tiếp tục mua hàng</span>
                            </button>
                        </a>
                        <a href="" className="ml-2">
                            <button className="uppercase h-8 text-[#4d8a54] font-semibold text-sm border-[#4d8a54] border-2 px-3 transition ease-linear duration-300 hover:bg-[#4d8a54] hover:text-white">
                                <span>Kiểm tra đơn hàng</span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="right-long" className="svg-inline--fa fa-right-long " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z"></path></svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishPage