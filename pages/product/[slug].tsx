import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";

import Image from "next/image";
import Link from "next/link";

import React from "react";
import { get } from "../../api-client/cateProductApi";
import { getAll, getS } from "../../api-client/productApi";
import { PrdCate } from "../../models/cateProduct";
import { Product } from "../../models/product";
import { formatCurrency } from "../../utils";

type Props = {
  product: Product;
  catePrd: PrdCate;
};

const ProductDetail = ({ product, catePrd }: Props) => {
  return (
    <div className="container-base">
      <div>
        <ul className="flex pt-5">
          <li>
            <Link href="/">Trang chủ</Link>
          </li>{" "}
          <span className="px-3 ">/</span>
          <li>
            <Link href="/">Tất cả sản phẩm</Link>
          </li>
        </ul>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 my-10 gap-8">
        <div className="border h-full w-full text-center">
          {" "}
          {product.image && <Image src={product.image} className="" alt="" width={450} height={450} />}
        </div>
        <section>
          <div>
            <h2 className="text-2xl font-sans text-normal font-semibold pt-50">{product.name}</h2>
            <p className="italic pt-3">{product.desc}</p>
            <p className="text-lg">
              Giá: <span className="text-primary text-2xl font-bold">{formatCurrency(product.price)}</span>{" "}
            </p>
            <span>Số lượng:</span>
            <button className="border px-2 ml-5 my-5">-</button>
            <input className=" border px-4 w-10" type="" value={"1"} />
            <button className="border px-2">+</button>
          </div>

          <div>
            <button
              type="submit"
              className=" border border-green-600 rounded-full bg-green-50 p-2.5 w-56  font-sans font-bold text-primary"
            >
              <FontAwesomeIcon className="px-2" icon={faCartPlus} />
              Thêm vào giỏ hàng
            </button>
            <button
              type="submit"
              className="border border-green-600 ml-4 mb-7 rounded-full bg-primary p-2 w-52 text-lg font-sans font-bold text-white"
            >
              Mua ngay
            </button>
          </div>
          <hr />
          <div className="py-3">
            <p>
              <span className="font-semibold pb-3">Giao hàng miễn phí:</span> Áp dụng đơn hàng {">"} 200.000đ
            </p>
            <p>
              <span className="font-semibold">Thanh toán tại nhà:</span> Nhanh chóng và an toàn
            </p>
          </div>
        </section>
      </section>
      <section>
        <div>
          <ul className="flex pb-2">
            <li className="text-2xl font-sans font-semibold text-center uppercase">Nhận xét</li>
          </ul>
          <hr />
        </div>
        <section>
          <form action="" className="px-3 py-2 border-2 border-[#4d8a54] mt-3">
            <h2 className="font-semibold text-xl">Nhận xét về {product.name}</h2>
            <div className="mt-2">
              <label htmlFor="" className="">
                Nhận xét của bạn
              </label>
              <textarea
                name="content"
                className="mt-5 w-full outline-none border  px-3 py-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]"
                id=""
                cols={30}
                rows={10}
                placeholder="Nhập nội dung bình luận"
              ></textarea>
              <div className="text-sm mt-0.5 text-red-500"></div>
            </div>
            <button className="my-3 px-4 py-2 bg-[#4d8a54] font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
              Gửi đi
            </button>
          </form>
          <div>
            <ul className="mt-4 grid grid-cols-1 divide-y divide-dashed">
              <li className="flex py-4">
                <Image
                  width={70}
                  height={70}
                  alt=""
                  src={
                    "https://res.cloudinary.com/levantuan/image/upload/v1649570754/asm-react-ts/uw9vo9gkfpl62xpsnyr1.png"
                  }
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-2">
                  <span className="font-bold">Trường</span>
                  <span className="pl-3 text-gray-500">(10 Tháng 4, 2022)</span>
                  <p className="text-gray-900">Trường đẹp trai nhất vũ trụ</p>
                  <ul className="text-gray-500 flex text-sm mt-1">
                    <li className="btn-remove transition hover:text-black cursor-pointer">Xóa</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section>
        <h1 className="text-3xl font-sans font-semibold pt-50 text-center">CÓ THỂ BẠN THÍCH</h1>
      </section>
      <section className="col-span-12 lg:col-span-9 pb-10">
        <div className="grid grid-cols-2 md:grid-clos-3 lg:grid-cols-4 gap-4">
          {catePrd.cateproduct.products?.slice(0, 4).map((item, index) => (
            <div className="group" key={index}>
              <div className="relative bg-[#f7f7f7] overflow-hidden border mt-10 pt-[100%]">
                {product.image && <Image src={product.image} alt="" layout="fill" />}
                <button className="absolute w-full bottom-0 h-9 bg-primary text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                  Xem nhanh
                </button>
              </div>
              <div className="text-center py-3">
                <Link href={`/product/${item.slug}`}>
                  <span className=" cursor-pointer block font-semibold text-xl">{item.name}</span>
                </Link>
                <span className="font-semibold text-xl">
                  <span className="font-semibold text-lg">Giá</span>: {formatCurrency(product.price)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAll();
  const paths = data.map((product) => ({ params: { slug: product.slug } }));
  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug as string;
  const product = await getS(slug);
  const catePrd = await get(product.catygoryId);

  return {
    props: { product, catePrd },
    revalidate: 6,
  };
};
export default ProductDetail;
