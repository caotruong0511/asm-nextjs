import React from 'react'

type Props = {}

const CheckoutPage = (props: Props) => {
    return (
        <div className="container-base pt-[15px]">
            <div className="menu_top ">
                <span className="text-[#4d8a54]">
                    <a href="" className="text-[#000000]">
                        Trang chủ
                    </a>{" "}
                    / Giỏ hàng
                </span>
            </div>
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
                        <a href="" className="false uppercase text-gray-400">ORDER COMPLETE</a>
                    </li>
                </ul>
            </div>
            <div className="form-checkout__page">
                <form action="" className="mx-auto px-3 mt-10 mb-9 grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-8 border-t-2 pt-3">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="uppercase text-gray-500 font-semibold text-lg">Thông tin thanh toán</h3>
                        </div>
                        <div className="grid grid-cols-12 gap-x-4">
                            <div className="col-span-6 mb-3">
                                <label htmlFor="" className="font-semibold mb-1 block">Họ và tên *</label>
                                <input type="text" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập đầy đủ họ tên" />
                            </div>
                            <div className="col-span-6 mb-3">
                                <label htmlFor="" className="font-semibold mb-1 block">Số điện thoại *</label>
                                <input type="text" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập số điện thoại (tuỳ chọn)" />
                            </div>
                            <div className="col-span-12 mb-3">
                                <label htmlFor="" className="font-semibold mb-1 block">Email *</label>
                                <input type="email" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Email" />
                            </div>
                            <div className="col-span-12 mb-3">
                                <label htmlFor="" className="font-semibold mb-1 block">Địa chỉ *</label>
                                <input type="text" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Địa chỉ" />
                            </div>
                        </div>
                        <h3 className="uppercase text-gray-500 font-semibold my-2 text-lg">Thông tin bổ sung</h3>
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 mb-3">
                                <label htmlFor="" className="font-semibold mb-1 block">Ghi chú đơn hàng</label>
                                <textarea name="" id="" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border p-2 text-sm outline-none" placeholder="Ghi chú (tuỳ chọn)"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 border-l p-4 border-2 border-[#4d8a54] min-h-40">
                        <h3 className="uppercase text-gray-500 font-semibold mb-3 text-lg">Đơn hàng của bạn</h3>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="uppercase text-gray-500 text-sm pb-1.5 border-b-2">Sản phẩm</th>
                                    <th className="uppercase text-gray-500 text-sm pb-1.5 border-b-2 text-right">Tổng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="text-sm leading-5 py-3 text-gray-500 pr-1">
                                        <p className="text-base">
                                            <span>Trà sữa khoai môn Macchiato</span>
                                            <strong> x1</strong>
                                        </p>
                                    </td>
                                    <td className="py-3 font-semibold text-right pl-1">25.000 VND</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="border-b">
                                    <td className="font-semibold text-sm py-2">Tạm tính</td>
                                    <td className="font-semibold text-right">25.000 VND</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="font-semibold text-sm py-2">Tổng</td>
                                    <td className="font-semibold text-right">25.000 VND</td>
                                </tr>
                            </tfoot>
                        </table>
                        <button className="mt-4 px-3 py-2 bg-[#4d8a54] font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Đặt hàng</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckoutPage