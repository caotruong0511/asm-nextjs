import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";

import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { get } from "../../api-client/cateProductApi";
import { getAll, getS } from "../../api-client/productApi";
import Comment from "../../components/Comment";
import { PrdCate } from "../../models/cateProduct";
import { Product } from "../../models/product";
import { addCart } from "../../redux/cartSlice";
import { formatCurrency } from "../../utils";

type Props = {
  product: Product;
  catePrd: PrdCate;
};

const ProductDetail = ({ product, catePrd }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleChangeQnt = (e: ChangeEvent<HTMLInputElement>) => {
    const qnt = +e.target.value;

    if (isNaN(qnt)) {
      toast.info("Vui lòng nhập số");
      return;
    }
    setQuantity(qnt);
  };

  const increaseQnt = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQnt = () => {
    if (quantity <= 1) {
      setQuantity(1);
      return;
    }

    setQuantity((prev) => prev - 1);
  };

  const handleAddCart = () => {
    if (quantity < 1) {
      toast.info("Vui lòng chọn ít nhất 1 sản phẩm");
      return;
    }

    dispatch(
      addCart({
        quantity,
        productId: product._id,
        productPrice: product.price,
        image: product.image,
        slug: product.slug,
        name: product.name,
      }),
    );
    toast.success(`Đã thêm ${product.name} vào giỏ hàng`);
    setQuantity(1);
  };

  return (
    <div className="container-base">
      <Head>
        <title>{product.name}</title>
      </Head>
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
            <h2 className="text-2xl text-normal font-semibold pt-50">{product.name}</h2>
            <p className="italic pt-3">{product.desc}</p>
            <p className="text-lg">
              Giá: <span className="text-primary text-2xl font-bold">{formatCurrency(product.price)}</span>{" "}
            </p>
            <span>Số lượng:</span>
            <button className="border px-2 ml-5 my-5" onClick={decreaseQnt}>
              -
            </button>
            <input
              className="outline-none border text-center w-10"
              type=""
              value={quantity}
              onChange={handleChangeQnt}
            />
            <button className="border px-2" onClick={increaseQnt}>
              +
            </button>
          </div>

          <div>
            <button
              type="button"
              onClick={handleAddCart}
              className=" border border-green-600 rounded-full bg-green-50 p-2.5 w-56  font-bold text-primary"
            >
              <FontAwesomeIcon className="px-2" icon={faCartPlus} />
              Thêm vào giỏ hàng
            </button>
            <button
              type="submit"
              className="border border-green-600 ml-4 mb-7 rounded-full bg-primary p-2 w-52 text-lg font-bold text-white"
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

      <Comment product={product} />

      <section>
        <h1 className="text-3xl font-semibold pt-50 text-center">CÓ THỂ BẠN THÍCH</h1>
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
