import React from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import { CateProduct } from "../../models/cateProduct";
import { formatCurrency } from "../../utils";
import Head from "next/head";
import Link from "next/link";
type Props = {
  cateproduct: CateProduct[];
};

const MenuPage = ({ cateproduct }: Props) => {
  return (
    <div className="container-base pt-[15px]">
      <Head>
        <title>Menu</title>
      </Head>
      <div className="menu_top ">
        <span className="text-[#4d8a54]">
          <a href="" className="text-[#000000]">
            Trang chủ
          </a>{" "}
          / Thực đơn
        </span>
      </div>
      <div className="content-1">
        {cateproduct?.map((item, index) => {
          return (
            <div key={index}>
              <div className="menu-content text-center pt-[50px]">
                <h1 className="text-3xl font-bold">
                  <Link href={`/cateproduct/${item._id}`}>{item.name}</Link>
                </h1>
                <p className="pt-[10px] text-lg">
                  Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Tea House sẽ giúp bạn gợi <br />{" "}
                  mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.
                </p>
              </div>
              <div className="content-product__menu grid grid-cols-2 md:grid-cols-4 gap-3 mt-20">
                {item.products.slice(0, 4).map((e, index) => {
                  return (
                    <div key={index}>
                      <div className="group">
                        <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
                          <div className="content-img">
                            {e.image && <Image src={e.image} className="" alt="" width={261} height={261} />}
                          </div>
                          <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                            <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
                          </div>
                        </div>
                        <div className="text-center pt-[15px]">
                          <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                            <Link href={`/product/${e.slug}`}>{e.name}</Link>
                          </h3>
                          <div className="price-box text-lg">
                            <span className="font-medium">Giá:</span> {formatCurrency(e.price)}
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  );
                })}
                {/*  */}
              </div>
            </div>
          );
        })}
      </div>
      {/* END CONTENT-1 */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:8080/api/cateproduct");
  const cateproduct = await res.json();

  return {
    props: {
      cateproduct,
    },
    revalidate: 60,
  };
};

export default MenuPage;
