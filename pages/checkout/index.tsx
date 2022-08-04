import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, addOrderDetail } from "../../api-client/orderApi";
import CartNav from "../../components/CartNav";
import { User } from "../../models/users";
import { finishOrder, selectCarts, selectTotalPrice } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";
import { formatCurrency } from "../../utils";

type Props = {};

type Inputs = {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  message: string;
};

const CheckoutPage = (props: Props) => {
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const currentUser = useSelector((state: RootState) => state.auth.currentUser) as User;
  const carts = useSelector(selectCarts);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
    try {
      // save cart
      const order = await add({ ...values, totalPrice, userId: isLogged ? currentUser._id : "" });

      // save order detail
      carts.forEach(async ({ productId, productPrice, quantity }) => {
        await addOrderDetail({
          orderId: order?._id!,
          productId,
          productPrice,
          quantity,
        });
      });

      dispatch(finishOrder());
      router.push("/thankyou");
      toast.success("Đặt hàng thành công");
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }
  };

  useEffect(() => {
    if (isLogged) {
      const { name, email, phone } = currentUser;
      reset({
        customerName: name,
        phone,
        email,
      });
    }
  }, [currentUser, isLogged, reset]);

  return (
    <div className="container-base pt-[15px]">
      <CartNav />

      <div className="form-checkout__page">
        <form action="" className="mx-auto px-3 mt-10 mb-9 grid grid-cols-12 gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-span-12 lg:col-span-8 border-t-2 pt-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="uppercase text-gray-500 font-semibold text-lg">Thông tin thanh toán</h3>
            </div>
            <div className="grid grid-cols-12 gap-x-4">
              <div className="col-span-6 mb-3">
                <label htmlFor="" className="font-semibold mb-1 block">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  {...register("customerName", { required: "Vui lòng nhập họ tên" })}
                  className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                  placeholder="Nhập đầy đủ họ tên"
                />
                <p className="text-red-500 text-sm">{errors.customerName?.message}</p>
              </div>
              <div className="col-span-6 mb-3">
                <label htmlFor="" className="font-semibold mb-1 block">
                  Số điện thoại *
                </label>
                <input
                  {...register("phone", {
                    required: "Vui lòng nhập số điện thoại",
                    pattern: {
                      value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                      message: "Số điện thoại không đúng định dạng",
                    },
                  })}
                  type="text"
                  className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                  placeholder="Nhập số điện thoại (tuỳ chọn)"
                />
                <p className="text-red-500 text-sm">{errors.phone?.message}</p>
              </div>
              <div className="col-span-12 mb-3">
                <label htmlFor="" className="font-semibold mb-1 block">
                  Email *
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Vui lòng nhập địa chỉ email",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Email không đúng định dạng, vui lòng nhập lại",
                    },
                  })}
                  className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                  placeholder="Email"
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              </div>
              <div className="col-span-12 mb-3">
                <label htmlFor="" className="font-semibold mb-1 block">
                  Địa chỉ *
                </label>
                <input
                  type="text"
                  {...register("address", { required: "Vui lòng nhập địa chỉ người nhận" })}
                  className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                  placeholder="Địa chỉ"
                />
                <p className="text-red-500 text-sm">{errors.address?.message}</p>
              </div>
            </div>
            <h3 className="uppercase text-gray-500 font-semibold my-2 text-lg">Thông tin bổ sung</h3>
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-3">
                <label htmlFor="" className="font-semibold mb-1 block">
                  Ghi chú đơn hàng
                </label>
                <textarea
                  {...register("message")}
                  id=""
                  className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border p-2 text-sm outline-none"
                  placeholder="Ghi chú (tuỳ chọn)"
                ></textarea>
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
                {carts?.map((item, index) => (
                  <tr className="border-b" key={index}>
                    <td className="text-sm leading-5 py-3 text-gray-500 pr-1">
                      <p className="text-base">
                        <span>{item.name}</span>
                        <strong> x {item.quantity}</strong>
                      </p>
                    </td>
                    <td className="py-3 font-semibold text-right pl-1">
                      {formatCurrency(item.productPrice + item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-b">
                  <td className="font-semibold text-sm py-2">Tạm tính</td>
                  <td className="font-semibold text-right">{formatCurrency(totalPrice)}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold text-sm py-2">Tổng</td>
                  <td className="font-semibold text-right">{formatCurrency(totalPrice)}</td>
                </tr>
              </tfoot>
            </table>
            <button className="mt-4 px-3 py-2 bg-[#4d8a54] font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
              Đặt hàng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
