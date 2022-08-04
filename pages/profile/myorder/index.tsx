import React, { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { NextPageWithLayout } from "../../../models/layout";
import { ClientLayout } from "../../../layouts";
import ProfileLayout from "../../../layouts/Pro5Layout";
import { Order } from "../../../models/order";
import { getOrderByUser } from "../../../api-client/orderApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { User } from "../../../models/users";
import moment from "moment";
import { formatCurrency } from "../../../utils";
import Head from "next/head";
type Props = {};

const Myoder: NextPageWithLayout = (props: Props) => {
  const [orders, setOrders] = useState<Order[]>();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser) as User;

  useEffect(() => {
    (async () => {
      try {
        const res = await getOrderByUser(currentUser?._id!);
        console.log(res);
        setOrders(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [currentUser?._id]);

  return (
    <>
      <Head>
        <title>My Order</title>
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
                Khách hàng
              </th>
              <th scope="col" className="py-3 px-6 border-[1px]">
                Ngày
              </th>
              <th scope="col" className="py-3 px-6 border-[1px]">
                Giá trị đơn hàng
              </th>
              <th scope="col" className="py-3 px-6 border-[1px]">
                TT đơn hàng
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((item, index) => (
              <tr className="bg-white " key={index}>
                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-blue-500 hover:text-black">
                  <Link href={`/profile/myorder/${item._id}`}>
                    <span className="cursor-pointer">#{item._id?.substring(0, 5)}...</span>
                  </Link>
                </th>
                <td className="py-4 px-6">
                  <p>{item.customerName}</p>
                  <p>{item.phone}</p>
                </td>
                <td className="py-4 px-6">{moment(item.createdAt).format("DD/MM/YYYY HH:mm:ss")}</td>
                <td className="py-4 px-6">{formatCurrency(item.totalPrice)}</td>
                <td className="py-4 px-6 text-left">
                  {!item.status
                    ? "Đơn hàng mới"
                    : item.status === 1
                    ? "Đã xác nhận"
                    : item.status === 2
                    ? "Đang giao hàng"
                    : item.status === 3
                    ? "Đã giao hàng"
                    : "Đã hủy"}
                </td>
              </tr>
            ))}
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
