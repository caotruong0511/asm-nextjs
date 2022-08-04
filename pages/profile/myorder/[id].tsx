import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Order } from "../../../models/order";
import { get, updateSttOrder } from "../../../api-client/orderApi";
import { NextPageWithLayout } from "../../../models/layout";
import { ClientLayout } from "../../../layouts";
import ProfileLayout from "../../../layouts/Pro5Layout";
import moment from "moment";
import { formatCurrency } from "../../../utils";
import Swal from "sweetalert2";
import Head from "next/head";
type Props = {};

const Detailorder: NextPageWithLayout = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    (async () => {
      const res = await get(id as string);
      setOrder(res);
    })();
  }, [id]);

  const handleCancelOrder = async () => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn hủy ĐH?",
      text: "Không thể hoàn tác sau khi hủy",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await updateSttOrder({ orderId: id as string, status: 4 });
        setOrder(res);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="md:col-span-3 col-span-1">
      <Head>
        <title>Chi tiết đơn hàng #{order?._id}</title>
      </Head>
      <div className="flex justify-between">
        <p className="font-quicksand md:text-[19px] text-[16px] leading-[26px] pb-3 font-{450}">
          CHI TIẾT ĐƠN HÀNG <span>#{order?._id}</span>
        </p>
        <p>
          Ngày tạo: <span>{moment(order?.createdAt).format("DD/MM/YYYY HH:mm:ss")}</span>
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 my-4">
        <div className="col-span-2">
          <p className="md:text-[19px] text-[16px]">ĐỊA CHỈ GIAO HÀNG</p>
          <div className="border-[1px] text-[14px] pl-2 mr-4 py-2">
            <p>
              Tên: <span>{order?.customerName}</span>
            </p>
            <p>
              Địa chỉ: <span>{order?.address}</span>
            </p>
            <p>
              Sđt: <span>{order?.phone}</span>
            </p>
            <p>
              Email: <span>{order?.email}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="md:text-[19px] text-[16px] uppercase">Ghi Chú</p>
          <div className="border-[1px] text-[14px] pl-2 flex-1 py-2">{order?.message || "Không có ghi chú"}</div>
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
            {order?.orderDetails?.map((item, index) => (
              <tr className="bg-white" key={index}>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  <div className="w-24 h-24 relative">
                    {item.product?.image && <Image src={item.product?.image} layout="fill" alt="" />}
                  </div>
                </th>
                <td className="">{item.product?.name}</td>
                <td className="py-4 px-6">{formatCurrency(item.productPrice)}</td>
                <td className="py-4 px-6">{item.quantity}</td>
                <td className="py-4 px-6 ">{formatCurrency(item.productPrice * item.quantity)}</td>
              </tr>
            ))}

            {/* sum */}
            <tr className="bg-white ">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"></th>
              <td className=""></td>
              <td className=""></td>
              <td className="py-4 px-6">Tổng tiền:</td>
              <td className="py-4 px-6 text-red-500 font-bold">{formatCurrency(order?.totalPrice!)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {![2, 3, 4].includes(order?.status!) && (
        <button
          onClick={handleCancelOrder}
          className="ml-auto block px-3 py-2 bg-primary font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
        >
          Hủy ĐH
        </button>
      )}
    </div>
  );
};

Detailorder.getLayout = (page: ReactElement) => (
  <ClientLayout>
    <ProfileLayout>{page}</ProfileLayout>
  </ClientLayout>
);

export default Detailorder;
