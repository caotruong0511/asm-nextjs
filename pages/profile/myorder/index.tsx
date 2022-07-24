import React from "react";
import Link from "next/link";
import Sidebar from "../Sidebar";
type Props = {};

const Myoder = (props: Props) => {
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
        <div className="md:col-span-3">
          <p className="font-quicksand text-[19px] leading-[26px] pb-3">ĐƠN HÀNG CỦA BẠN</p>
          <div className="overflow-x-auto relative shadow-md ">
            <table className="w-full text-sm text-left">
              <thead className="md:text-[13px] text-[10px]  text-white uppercase bg-[#2c8a31fd] md:h-[40px] h-[30px] ">
                <tr>
                  <th scope="col" className="py-3 px-6 border-[1px] ">
                    Đơn hàng
                  </th>
                  <th scope="col" className="py-3 px-6 border-[1px]">
                    Ngày
                  </th>
                  <th scope="col" className="py-3 px-6 border-[1px]">
                    Địa chỉ
                  </th>
                  <th scope="col" className="py-3 px-6 border-[1px]">
                    Giá trị đơn hàng
                  </th>
                  <th scope="col" className="py-3 px-6 border-[1px]">
                    TT thanh toán
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white ">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    <Link href="#">Apple "</Link>
                  </th>
                  <td className="py-4 px-6">Sliver</td>
                  <td className="py-4 px-6">Laptop</td>
                  <td className="py-4 px-6">$2999</td>
                  <td className="py-4 px-6 text-right"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myoder;
