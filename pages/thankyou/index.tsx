import Link from "next/link";
import React from "react";
import CartNav from "../../components/CartNav";

type Props = {};

const FinishPage = (props: Props) => {
  return (
    <div className="container-base pt-[15px]">
      <div className="mb-32">
        <CartNav />

        <div className="content mx-auto">
          <h1 className="text-center mt-4 font-semibold text-2xl uppercase">Đặt hàng thành công</h1>
          <p className="text-center mt-2">
            Cảm ơn bạn đã đặt hàng của Tea House. Nhân viên sẽ gọi điện từ số điện thoại bạn đã cung cấp để Confirm (Xác
            nhận) lại với bạn trong thời gian sớm nhất để xác nhận đơn hàng.
          </p>
          <div className="flex items-center justify-center mt-2">
            <Link href="/product">
              <button className="uppercase h-8 text-[#4d8a54] font-semibold text-sm border-[#4d8a54] border-2 px-3 transition ease-linear duration-300 hover:bg-[#4d8a54] hover:text-white">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="left-long"
                  className="svg-inline--fa fa-left-long "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z"
                  ></path>
                </svg>
                <span>Tiếp tục mua hàng</span>
              </button>
            </Link>

            <div className="ml-2">
              <Link href="/profile/myorder">
                <button className="uppercase h-8 text-[#4d8a54] font-semibold text-sm border-[#4d8a54] border-2 px-3 transition ease-linear duration-300 hover:bg-[#4d8a54] hover:text-white">
                  <span>Kiểm tra đơn hàng</span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="right-long"
                    className="svg-inline--fa fa-right-long "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
