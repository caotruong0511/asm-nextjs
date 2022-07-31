import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "../../models/product";
import { formatCurrency } from "../../utils";

import styles from "./HomeProduct.module.scss";

const cx = classNames.bind(styles);

type HomeProductsProps = {
  products: Product[];
};

const HomeProducts = ({ products }: HomeProductsProps) => {
  return (
    <section className="container-base">
      <div className="py-16">
        <h2 className="uppercase font-bebas text-4xl text-normal text-center">Menu hôm nay</h2>

        {/* tab */}
        {/* <div className="flex justify-center flex-wrap">
          <button
            className={`${cx(
              "btn-tab-active",
            )} mt-6 h-12 px-4 mx-2 rounded-full text-normal font-bold border border-[#ebebeb] hover:bg-[#4d8a54] hover:text-white hover:border-[#4d8a54]`}
          >
            Trà nóng
          </button>
          <button className="mt-6 h-12 px-4 mx-2 rounded-full text-normal font-bold border border-[#ebebeb] hover:bg-[#4d8a54] hover:text-white hover:border-[#4d8a54]">
            Trà hoa quả
          </button>
          <button className="mt-6 h-12 px-4 mx-2 rounded-full text-normal font-bold border border-[#ebebeb] hover:bg-[#4d8a54] hover:text-white hover:border-[#4d8a54]">
            Smoothies
          </button>
          <button className="mt-6 h-12 px-4 mx-2 rounded-full text-normal font-bold border border-[#ebebeb] hover:bg-[#4d8a54] hover:text-white hover:border-[#4d8a54]">
            Bánh ngọt
          </button>
          <button className="mt-6 h-12 px-4 mx-2 rounded-full text-normal font-bold border border-[#ebebeb] hover:bg-[#4d8a54] hover:text-white hover:border-[#4d8a54]">
            Trà nóng
          </button>
        </div> */}

        {/* product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-5">
          {products.slice(0, 8).map((item, index) => (
            <div key={index}>
              <div className="border border-[#ebebeb] relative pt-[100%] cursor-pointer group overflow-hidden">
                <Link href="">{item.image && <Image src={item.image} layout="fill" alt="" />}</Link>

                <button className="absolute bottom-0 w-full h-10 bg-primary text-white font-bold translate-y-full group-hover:translate-y-0 transition-all duration-300 opacity-90 hover:opacity-100">
                  Thêm vào giỏ hàng
                </button>
              </div>

              <div className="text-center text-lg font-bold py-3">
                <h3 className="hover:text-[#4d8a54]">
                  <Link href="">{item.name}</Link>
                </h3>
                <p>
                  <span className="font-normal">Giá</span>: {formatCurrency(item.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
