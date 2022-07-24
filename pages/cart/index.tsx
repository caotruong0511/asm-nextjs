import { faChevronRight, faLeftLong, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const CartList = (props: Props) => {
  return (
    <main>
      <section className="container max-w-6xl mx-auto px-3 mt-10">
        <ul className="flex justify-center items-center">
          <li className="text-2xl px-2">
            <Link className="text-black uppercase transition ease-linear duration-200 hover:text-black" href="/cart">
              SHOPPING CART
            </Link>
          </li>
          <li className="text-md text-gray-400 px-2 hidden md:block">
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
          <li className="text-2xl px-2">
            <a
              className="false uppercase text-gray-400 transition ease-linear duration-200 hover:text-black"
              href="/checkout"
            >
              Checkout details
            </a>
          </li>
          <li className="text-md text-gray-400 px-2 hidden md:block">
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
          <li className="text-2xl px-2">
            <span className="false uppercase text-gray-400">Order Complete</span>
          </li>
        </ul>
      </section>
      <section className="container max-w-6xl mx-auto px-3 mt-10 grid grid-cols-12 mb-9">
        <form action="" method="POST" id="cart__detail-form" className="col-span-12 lg:col-span-8 lg:pr-6">
          <table className="table-auto w-full text-left border-collapse" id="cart__detail">
            <thead>
              <tr className="uppercase border-b-2">
                <th className="pb-1 uppercase text-sm text-gray-500" colSpan={3}>
                  Sản phẩm
                </th>
                <th className="pb-1 uppercase text-sm text-gray-500">Giá</th>
                <th className="pb-1 uppercase text-sm text-gray-500">Số lượng</th>
                <th className="pb-1 uppercase text-sm text-gray-500 text-right">Tạm tính</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td>
                  <button
                    type="button"
                    className="p-2 text-gray-400 text-xl transition ease-linear duration-200 hover:text-black"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </td>
                <td className="p-2">
                  <a href="/san-pham/sua-tuoi-tran-chau-djuong-djen">
                    <div className="w-16 h-16 relative">
                      <Image
                        className="block w-16 object-cover absolute"
                        src="http://res.cloudinary.com/levantuan/image/upload/v1645174124/assignment-js/jhjaupfuamswq6v8vw9b.png"
                        alt=""
                        layout="fill"
                      />
                    </div>
                  </a>
                </td>
                <td className="p-2">
                  <a className="font-semibold" href="/san-pham/sua-tuoi-tran-chau-djuong-djen">
                    Sữa tươi trân châu đường đen
                  </a>
                </td>
                <td className="font-bold">28.000&nbsp;VND</td>
                <td className="p-2">
                  <div className="flex items-center h-9">
                    <button
                      type="button"
                      className="px-2 bg-gray-100 border-gray-200 h-full border-l border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="border border-gray-200 h-full w-10 text-center outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]"
                      value="1"
                    />
                    <button
                      type="button"
                      className="px-2 bg-gray-100 border-gray-200 h-full border-r border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="font-bold text-right">28.000&nbsp;VND</td>
              </tr>
            </tbody>
          </table>
          <ul className="flex mt-6 items-center">
            <li>
              <a href="/thuc-don">
                <button
                  type="button"
                  className="select-none uppercase h-8 text-primary font-semibold text-sm border-[#4d8a54] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white"
                >
                  <FontAwesomeIcon icon={faLeftLong} />
                  <span> Tiếp tục xem sản phẩm</span>
                </button>
              </a>
            </li>
          </ul>
        </form>
        <div className="mt-8 lg:mt-0 col-span-12 lg:col-span-4 lg:border-l lg:pl-6">
          <table className="table-fixed w-full text-left">
            <thead>
              <tr className="uppercase border-b-2">
                <th className="pb-1 text-sm text-gray-500" colSpan={2}>
                  Cộng giỏ hàng
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td>Tạm tính</td>
                <td className="py-2 text-right font-semibold">28.000&nbsp;VND</td>
              </tr>
              <tr className="border-b">
                <td>Tổng</td>
                <td className="py-2 text-right font-semibold">28.000&nbsp;VND</td>
              </tr>
            </tbody>
          </table>
          <a href="/checkout">
            <button className="mt-4 w-full px-3 py-2 bg-primary font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
              Tiến hành thanh toán
            </button>
          </a>
          {/* <form action="" className="mt-7">
            <div className="flex items-center pb-2 font-semibold border-b-2 text-gray-500">
              <div className="mr-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="tag"
                  className="svg-inline--fa fa-tag "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L418.7 226.7C443.7 251.7 443.7 292.3 418.7 317.3L285.3 450.7C260.3 475.7 219.7 475.7 194.7 450.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5V80C0 53.49 21.49 32 48 32L48 32zM112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176z"
                  ></path>
                </svg>
              </div>{" "}
              Mã giảm giá
            </div>
            <input
              type="text"
              placeholder="Mã giảm giá"
              className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] my-4 w-full border px-2 h-10 text-sm outline-none"
              value=""
            />
            <button className="w-full px-3 py-2 bg-gray-100 border border-gray-300 text-black text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
              Áp dụng
            </button>
          </form> */}
        </div>
      </section>
    </main>
  );
};

export default CartList;
