import {
  faBars,
  faCartShopping,
  faPhoneAlt,
  faSearch,
  faShoppingCart,
  faSortDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { searchProduct } from "../../../api-client/productApi";
import { Product } from "../../../models/product";
import { User } from "../../../models/users";
import { selectCarts } from "../../../redux/cartSlice";
import { getcateProduct } from "../../../redux/cateProductSlice";
import { RootState } from "../../../redux/store";
import { formatCurrency } from "../../../utils";

type Props = {};

const ClientHeader = (props: Props) => {
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const curentUser = useSelector((state: RootState) => state.auth.currentUser) as User;
  const router = useRouter();
  const cateProduct = useSelector((state: RootState) => state.cateproduct.cateProducts);
  const dispatch = useDispatch<any>();
  const carts = useSelector(selectCarts);
  const [search, setSearch] = useState("");
  const [productsSearch, setProductsSearch] = useState<Product[]>();

  const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const searchStr = e.target.value;
    setSearch(searchStr);

    const products = await searchProduct(searchStr);
    setProductsSearch(products);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) {
      toast.info("Vui lòng nhập tên SP");
      return;
    }

    router.push(`/search/${search}`);
  };

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getcateProduct()).unwrap();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <header className="border-b">
      <div className="bg-[#4d8a54] hidden md:block">
        <div className="container-base h-11 text-white flex items-center text-sm">
          <ul className="flex items-center">
            <FontAwesomeIcon icon={faPhoneAlt} />

            <div className="flex ml-1">
              <span>Hotline:</span>
              <a href="" className="ml-1 hover:text-[#282828]">
                0347247247
              </a>
            </div>
          </ul>

          <ul className="flex items-center ml-auto">
            <li className="relative group flex items-center ml-3 cursor-pointer">
              <FontAwesomeIcon icon={faSearch} className="text-base" />
              <span className="ml-1 group-hover:text-[#282828]">Tìm kiếm</span>

              <div className="hidden min-w-[280px] z-20 group-hover:block absolute top-full -right-[100px] bg-white shadow p-3 opacity-100">
                <form action="" className="flex" onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    onChange={handleSearchChange}
                    className="text-black shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] flex-1 border px-2 h-8 text-sm outline-none"
                    placeholder="Nhập tên sản phẩm"
                  />
                  <button className="px-3 bg-red-500 transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>

                <ul className="mt-3 grid grid-cols-1 divide-y max-h-[70vh] overflow-y-auto">
                  {search && !productsSearch?.length && <p className="text-black">Không tìm thấy SP!</p>}

                  {productsSearch?.map((item, index) => (
                    <li key={index}>
                      <Link href={`/product/${item.slug}`}>
                        <div className="flex py-2 transition duration-200 hover:bg-gray-50 hover:text-[#D9A953] text-black items-center px-2">
                          <div className="w-10 h-10 object-cover rounded-full relative">
                            {item.image && (
                              <Image
                                src={item.image}
                                className="w-10 h-10 object-cover rounded-full bg-[#f7f7f7]"
                                alt=""
                                layout="fill"
                              />
                            )}
                          </div>
                          <p className="pl-1 pr-2 normal-case font-normal">{item.name}</p>
                          <p className="font-medium ml-auto">{formatCurrency(item.price)}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {isLogged ? (
              <li className="relative flex items-center ml-3 cursor-pointer before:absolute before:content-[''] before:top-full before:left-0 before:h-2 before:right-0">
                <FontAwesomeIcon icon={faUser} className="text-base" />
                <span className="ml-1 hover:text-[#282828]">
                  <Link href={curentUser.role ? "/admin" : "/profile"}>{curentUser.name}</Link>
                </span>
              </li>
            ) : (
              <li className="relative group flex items-center ml-3 cursor-pointer before:absolute before:content-[''] before:top-full before:left-0 before:h-2 before:right-0">
                <FontAwesomeIcon icon={faUser} className="text-base" />
                <span className="ml-1 group-hover:text-[#282828]">Tài khoản</span>

                <ul className="bg-white hidden group-hover:block absolute top-[calc(100%+8px)] left-0 shadow px-2 py-1 z-[50] divide-y min-w-[150px]">
                  <li className="text-[#282828] text-sm py-1.5 font-semibold hover:text-[#4d8a54]">
                    <Link href="/signin">Đăng nhập</Link>
                  </li>
                  <li className="text-[#282828] text-sm py-1.5 font-semibold hover:text-[#4d8a54]">
                    <Link href="/signup">Đăng ký</Link>
                  </li>
                </ul>
              </li>
            )}

            <li className="ml-3 cursor-pointer relative">
              <Link href="/cart">
                <div className="flex items-center">
                  <label className="absolute text-xs w-5 h-5 font-semibold flex justify-center items-center border-2 border-[#4d8a54] rounded-full left-[10px] -top-[10px] bg-white text-primary">
                    {carts.length}
                  </label>
                  <FontAwesomeIcon icon={faCartShopping} className="text-base" />
                  <span className="ml-3 hover:text-[#282828]">Giỏ hàng</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-base flex items-center h-32">
        {/* icon bar on mobile */}
        <div className="block md:hidden flex-1 text-[#333] cursor-pointer text-xl">
          <FontAwesomeIcon icon={faBars} />
        </div>

        <ul className="flex-1 items-center hidden md:flex">
          <li
            className={`font-bold hover:text-[#4d8a54] text-[#282828] mr-3 ${
              router.pathname === "/" ? "text-primary" : ""
            }`}
          >
            <Link href="/">Trang chủ</Link>
          </li>
          <li
            className={`font-bold hover:text-[#4d8a54] text-[#282828] mx-3 ${
              router.pathname === "/about" ? "text-primary" : ""
            }`}
          >
            <Link href="/about">Giới thiệu</Link>
          </li>
          <li
            className={`z-[50] group relative font-bold hover:text-[#4d8a54] cursor-pointer text-[#282828] mx-3 ${
              router.pathname === "/product" && "text-primary"
            }`}
          >
            <Link href="">
              <div className="flex">
                <Link href="/product">Sản phẩm</Link>
                <FontAwesomeIcon icon={faSortDown} />
              </div>
            </Link>

            <ul className="bg-white hidden group-hover:block absolute top-full left-0 shadow px-2 py-1 z-[50] divide-y min-w-[150px]">
              {cateProduct?.map((item, index) => (
                <li key={index} className="text-[#282828] text-sm py-1.5 font-semibold hover:text-[#4d8a54]">
                  <Link href={`/cateproduct/${item._id}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <Image
          src="https://bizweb.dktcdn.net/100/415/010/themes/844269/assets/logo.png?1646286260817"
          alt=""
          width={203}
          height={93}
        />

        <ul className="flex-1 items-center justify-end hidden md:flex">
          <li
            className={`font-bold hover:text-[#4d8a54] text-[#282828] ${router.pathname === "/news" && "text-primary"}`}
          >
            <Link href="/news">Tin tức</Link>
          </li>
          <li
            className={`font-bold hover:text-[#4d8a54] text-[#282828] ml-6 ${
              router.pathname === "/menu" && "text-primary"
            }`}
          >
            <Link href="/menu">Thực đơn</Link>
          </li>
          <li
            className={`font-bold hover:text-[#4d8a54] text-[#282828] ml-6 ${
              router.pathname === "/contact" && "text-primary"
            }`}
          >
            <Link href="/contact">Liên hệ</Link>
          </li>
        </ul>

        <div className="text-[#333] md:hidden flex-1 flex justify-end cursor-pointer text-xl">
          <Link href="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ClientHeader;
