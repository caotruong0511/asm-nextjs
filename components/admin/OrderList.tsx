import moment from "moment";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteOrder, getOrders } from "../../redux/orderSlice";
import { RootState } from "../../redux/store";
import { formatCurrency } from "../../utils";

type Props = {};

const OrderList = (props: Props) => {
  const orders = useSelector((state: RootState) => state.order.orders);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getOrders()).unwrap();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  const handleRemove = (id: any) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa không?",
      text: "Không thể hoàn tác sau khi xóa",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteOrder(id)).unwrap();
        Swal.fire("Thành công!", "Xóa thành công.", "success");
      }
    });
  };

  return (
    <table className="min-w-full divide-y divide-gray-200" id="cate__list-table">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            STT
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Customer
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Tổng tiền
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Trạng thái
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Thời gian đặt
          </th>
          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200" id="cart__list">
        {orders?.map((item, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{++index}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <div className="text-sm font-medium text-gray-900">{item.customerName}</div>
              <div className="text-sm text-gray-500">{item.phone}</div>
              <div className="text-sm text-gray-500">{item.email}</div>
              <div className="text-sm text-gray-500">{item.address}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(item.totalPrice)}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`${
                  item.status !== 4 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                } px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
              >
                {!item.status
                  ? "Đơn hàng mới"
                  : item.status === 1
                  ? "Đã xác nhận"
                  : item.status === 2
                  ? "Đang giao hàng"
                  : item.status === 3
                  ? "Đã giao hàng"
                  : "Đã hủy"}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
              {moment(item.createdAt).format("DD/MM/YYYY HH:mm:ss")}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <Link href={`/admin/order/${item._id}`}>
                <span className="cursor-pointer h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Detail
                </span>
              </Link>

              <button
                onClick={() => handleRemove(item._id)}
                className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
