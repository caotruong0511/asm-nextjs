import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { AdminLayout } from "../../../layouts";
import { NextPageWithLayout } from "../../../models/layout";
import { Order } from "../../../models/order";
import { getOrder, updateStt } from "../../../redux/orderSlice";
import { RootState } from "../../../redux/store";
import { formatCurrency } from "../../../utils";

type Props = {};

const OrderDetail: NextPageWithLayout = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch<any>();
  const order = useSelector((state: RootState) => state.order.order) as Order;

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await dispatch(getOrder(id)).unwrap();
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [dispatch, id]);

  const handleUpdateStt = (stt: number) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn cập nhật trạng thái?",
      text: "Không thể hoàn tác sau khi xóa",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(updateStt({ orderId: order._id!, status: stt })).unwrap();
        Swal.fire("Thành công!", "Cập nhật thành công.", "success");
      }
    });
  };

  const formatDate = (dateStr: Date) => {
    return moment(dateStr).format("DD/MM/YYYY HH:mm:ss");
  };

  return (
    <>
      <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
            Order
          </h5>
          <span>DS đơn hàng</span>
        </div>

        <div>
          {order.status === 0 ? (
            <button
              type="button"
              onClick={() => handleUpdateStt(1)}
              className="mr-2 inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Xác nhận ĐH
            </button>
          ) : order.status === 1 ? (
            <button
              type="button"
              onClick={() => handleUpdateStt(2)}
              className="mr-2 btn-update-stt btn-update-stt-process inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Đang giao hàng
            </button>
          ) : order.status === 2 ? (
            <button
              type="button"
              onClick={() => handleUpdateStt(3)}
              className="mr-2 btn-update-stt btn-update-stt-success inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Đã giao hàng
            </button>
          ) : (
            ""
          )}

          {order.status !== 4 && order.status !== 3 ? (
            <button
              type="button"
              onClick={() => handleUpdateStt(4)}
              className="mr-2 inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Hủy ĐH
            </button>
          ) : (
            ""
          )}
          <Link href="/admin/order">
            <button
              type="button"
              className="mr-2 inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              DS đơn hàng
            </button>
          </Link>
        </div>
      </header>

      <div className="p-6 mt-24 overflow-hidden">
        <div className="shadow sm:rounded-md bg-white p-5">
          <div>
            {" "}
            Đơn hàng #<mark>{order._id}</mark> đặt lúc <mark>{formatDate(order.createdAt)}</mark> hiện tại{" "}
            <mark>
              {order.status === 0
                ? "Đang chờ xác nhận"
                : order.status === 1
                ? `Đã xác nhận lúc ${formatDate(order.updatedAt || "")}`
                : order.status === 2
                ? `Đang giao hàng lúc ${formatDate(order.updatedAt || "")}`
                : order.status === 3
                ? `Đã giao thành công lúc ${formatDate(order.updatedAt || "")}`
                : order.status === 4
                ? `Đã bị hủy lúc ${formatDate(order.updatedAt || "")}`
                : ""}
            </mark>
          </div>
          <section>
            <h2 className="font-semibold text-gray-600 text-2xl">Chi tiết đơn hàng</h2>
            <table className="mt-3 text-gray-600 w-full text-left">
              <thead>
                <tr>
                  <th className="pb-1 border-b-2 uppercase text-sm">STT</th>
                  <th className="pb-1 border-b-2 uppercase text-sm">Sản phẩm</th>
                  <th className="pb-1 border-b-2 uppercase text-sm">Đơn giá</th>
                  <th className="pb-1 border-b-2 uppercase text-sm">Số lượng</th>
                  <th className="pb-1 border-b-2 uppercase text-sm text-right">Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {order.orderDetails?.map((item, index) => (
                  <tr className="border-b" key={index}>
                    <td>{++index}</td>
                    <td className="py-2 flex items-center">
                      <div className="w-10 h-10 object-cover relative">
                        {item.product?.image && <Image src={item.product?.image} alt="" layout="fill" />}
                      </div>

                      <div className="pl-3">
                        <Link href={`/product/${item.product?.slug}`} className="text-blue-500">
                          {item.product?.name}
                        </Link>
                      </div>
                    </td>
                    <td className="py-2">{formatCurrency(item.productPrice)}</td>
                    <td className="py-2">{item.quantity}</td>
                    <td className="py-2 text-right text-black font-medium">
                      {formatCurrency(item.productPrice * item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section className="mt-4">
            <h2 className="font-semibold text-gray-600 text-2xl">Tổng thanh toán</h2>
            <table className="mt-1 text-gray-600 w-full text-left">
              <tbody>
                <tr className="border-b">
                  <td className="py-1.5 font-medium">Tiền tạm tính:</td>
                  <td className="py-1.5 text-right">{formatCurrency(order?.totalPrice || 0)}</td>
                </tr>
                <tr>
                  <td className="py-1.5 font-medium">Tổng tiền:</td>
                  <td className="py-1.5 text-right">{formatCurrency(order.totalPrice)}</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="mt-4">
            <h2 className="font-semibold text-gray-600 text-2xl">Thông tin vận chuyển</h2>
            <table className="mt-1 text-gray-600 w-full text-left">
              <tbody>
                <tr className="border-b">
                  <td className="py-1.5 font-medium">Họ và tên:</td>
                  <td className="py-1.5 text-right">{order?.customerName}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1.5 font-medium">Địa chỉ:</td>
                  <td className="py-1.5 text-right">{order?.address}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1.5 font-medium">Số điện thoại:</td>
                  <td className="py-1.5 text-right">{order?.phone}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1.5 font-medium">Email:</td>
                  <td className="py-1.5 text-right">{order?.email}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1.5 font-medium">Thời gian đặt:</td>
                  <td className="py-1.5 text-right">{formatDate(order?.createdAt || "")}</td>
                </tr>
                <tr>
                  <td className="py-1.5 font-medium">Ghi chú:</td>
                  <td className="py-1.5 text-right">{order?.message || "Không có"}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  );
};

OrderDetail.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default OrderDetail;
