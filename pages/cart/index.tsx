import { faLeftLong, faLongArrowAltLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartNav from "../../components/CartNav";
import { decreaseQnt, increaseQnt, selectCarts, selectTotalPrice } from "../../redux/cartSlice";
import { formatCurrency } from "../../utils";

type Props = {};

const CartList = (props: Props) => {
  const carts = useSelector(selectCarts);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleIncreaseQnt = (productId: string) => {
    dispatch(increaseQnt(productId));
  };

  const handleDecreaseQnt = (productId: string) => {
    dispatch(decreaseQnt(productId));
  };

  return (
    <main>
      <Head>
        <title>Cart</title>
      </Head>
      <CartNav />

      <section className="container max-w-6xl mx-auto px-3 mt-10 grid grid-cols-12 mb-9">
        {carts.length >= 1 && (
          <>
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
                  {carts?.map((item, index) => (
                    <tr className="border-b" key={index}>
                      <td>
                        <button
                          type="button"
                          className="p-2 text-gray-400 text-xl transition ease-linear duration-200 hover:text-black"
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </td>
                      <td className="p-2">
                        <Link href={`/product/${item.slug}`}>
                          <div className="w-16 h-16 relative">
                            <Image className="block w-16 object-cover absolute" src={item.image} alt="" layout="fill" />
                          </div>
                        </Link>
                      </td>
                      <td className="p-2">
                        <a className="font-semibold" href={`/product/${item.slug}`}>
                          {item.name}
                        </a>
                      </td>
                      <td className="font-bold">{formatCurrency(item.productPrice)}</td>
                      <td className="p-2">
                        <div className="flex items-center h-9">
                          <button
                            type="button"
                            onClick={() => handleDecreaseQnt(item.productId)}
                            className="px-2 bg-gray-100 border-gray-200 h-full border-l border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            readOnly
                            onChange={() => {}}
                            className="border border-gray-200 h-full w-10 text-center outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]"
                            value={item.quantity}
                          />
                          <button
                            type="button"
                            onClick={() => handleIncreaseQnt(item.productId)}
                            className="px-2 bg-gray-100 border-gray-200 h-full border-r border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="font-bold text-right">{formatCurrency(item.productPrice * item.quantity)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul className="flex mt-6 items-center">
                <li>
                  <Link href="/product">
                    <button
                      type="button"
                      className="select-none uppercase h-8 text-primary font-semibold text-sm border-[#4d8a54] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white"
                    >
                      <FontAwesomeIcon icon={faLeftLong} />
                      <span> Tiếp tục xem sản phẩm</span>
                    </button>
                  </Link>
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
                    <td className="py-2 text-right font-semibold">{formatCurrency(totalPrice)}</td>
                  </tr>
                  <tr className="border-b">
                    <td>Tổng</td>
                    <td className="py-2 text-right font-semibold">{formatCurrency(totalPrice)}</td>
                  </tr>
                </tbody>
              </table>
              <Link href="/checkout">
                <button className="mt-4 w-full px-3 py-2 bg-primary font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
                  Tiến hành thanh toán
                </button>
              </Link>
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
          </>
        )}

        {!carts.length && (
          <section className="text-center col-span-12 py-12">
            <p>Chưa có sản phẩm nào trong giỏ hàng</p>
            <Link href="/product">
              <div className="block mt-4">
                <button className="uppercase h-8 text-[#4d8a54] font-semibold text-sm border-[#4d8a54] border-2 px-3 transition ease-linear duration-300 hover:bg-[#4d8a54] hover:text-white">
                  <FontAwesomeIcon icon={faLongArrowAltLeft} />
                  <span> Tiếp tục mua hàng</span>
                </button>
              </div>
            </Link>
          </section>
        )}
      </section>
    </main>
  );
};

export default CartList;
