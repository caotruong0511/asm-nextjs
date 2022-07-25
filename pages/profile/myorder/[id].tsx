import React from "react";
import Link from "next/link";
import Sidebar from "../Sidebar";
import { isContext } from "vm";
type Props = {};

const Detailorder = (props: Props) => {
  return (
    <div className="container-base  ">
      <ul className="text-[#282828] flex  flex-wrap: wrap text-[14px] font-medium leading-[24px] py-[15px] text-left">
        <li className="hover:text-[#4d8a54] ">
          <Link href=""> Trang chủ / </Link>
        </li>
        <li className="text-[#4d8a54]">
          <Link href="">Trang thông tin</Link>
        </li>
      </ul>
      <div className="mt-5 grid md:grid-cols-4 grid-cols-1">
        <div className="">
          <Sidebar></Sidebar>
        </div>
        <div className="md:col-span-3 ">
          <div className="flex justify-between">
            <p className="font-quicksand md:text-[19px] text-[16px] leading-[26px] pb-3 font-{450}">
              CHI TIẾT ĐƠN HÀNG <span>1</span>
            </p>
            <p>
              Ngày Tạo: <span>11/11/1111</span>
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 my-4">
            <div className="col-span-2 :">
              <p className="md:text-[19px] text-[16px]">ĐỊA CHỈ GIAO HÀNG</p>
              <div className="border-[1px] text-[14px] pl-2 mr-4 h-[90px]">
                <p>
                  Tên: <span></span>
                </p>
                <p>
                  Địa chỉ: <span></span>
                </p>
                <p>
                  Sđt: <span></span>
                </p>
                <p>
                  Email: <span></span>
                </p>
              </div>
            </div>
            <div>
              <p className="md:text-[19px] text-[16px]">Ghi Chú</p>
              <div className="border-[1px] text-[14px] pl-2 mr-4">ádasdas </div>
            </div>
          </div>

          <div className="overflow-x-auto relative shadow-md  my-5">
            <table className="w-full text-sm text-left">
              <thead className="md:text-[13px] text-[11px]  text-black  md:h-[40px] h-[30px]  border-t-[1px]">
                <tr>
                  <th scope="col" className="py-3 px-6 ">
                    Sản phẩm
                  </th>
                  <th scope="col" className="py-3 px-6 "></th>
                  <th scope="col" className="py-3 px-6 ">
                    Đơn giá
                  </th>
                  <th scope="col" className="py-3 px-6 ">
                    Số lượng
                  </th>
                  <th scope="col" className="py-3 px-6 ">
                    Tổng
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white ">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    <img src="ấdasdsa" className="w-[55px] h-[70px]" />
                  </th>
                  <td className="">SliverSliverSliverSliverSliver</td>
                  <td className="py-4 px-6">300</td>
                  <td className="py-4 px-6">4</td>
                  <td className="py-4 px-6 ">1200</td>
                </tr>

                <tr className="bg-white ">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    <img src="ấdasdsa" className="w-[55px] h-[70px]" />
                  </th>
                  <td className="">SliverSliverSliverSliverSliver</td>
                  <td className="py-4 px-6">300</td>
                  <td className="py-4 px-6">4</td>
                  <td className="py-4 px-6">1200</td>
                </tr>
                {/* sum */}
                <tr className="bg-white ">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"></th>
                  <td className=""></td>
                  <td className=""></td>
                  <td className="py-4 px-6">Tổng tiền:</td>
                  <td className="py-4 px-6 text-red-500 font-bold">2400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailorder;
