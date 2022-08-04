import React, { ReactElement } from "react";
import Link from "next/link";
import { NextPageWithLayout } from "../../../models/layout";
import { ClientLayout } from "../../../layouts";
import ProfileLayout from "../../../layouts/Pro5Layout";
import Head from "next/head";
type Props = {};

const Myoder: NextPageWithLayout = (props: Props) => {
  return (
    <>
       <Head>
                <title>Myoder</title>
            </Head>
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
              <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-blue-500 hover:text-black">
                <Link href="#">#10002990028839200</Link>
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6 text-right"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

Myoder.getLayout = (page: ReactElement) => (
  <ClientLayout>
    <ProfileLayout>{page}</ProfileLayout>
  </ClientLayout>
);

export default Myoder;
