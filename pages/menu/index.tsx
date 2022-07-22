import React from "react";
import Image from "next/image";
type Props = {};

const MenuPage = (props: Props) => {
  return (
    <div className="container-base pt-[15px]">
      <div className="menu_top ">
        <span className="text-[#4d8a54]">
          <a href="" className="text-[#000000]">
            Trang chủ
          </a>{" "}
          / Thực đơn
        </span>
      </div>
      <div className="content-1">
        <div className="menu-content text-center pt-[50px]">
          <h1 className="text-3xl font-bold">
            <a href="">TRÀ HOA QUẢ</a>
          </h1>
          <p className="pt-[10px] text-lg">
            Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Tea House sẽ giúp bạn gợi <br /> mở vị
            giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.
          </p>
        </div>
        <div className="content-product__menu grid gap-x-8 gap-y-4 grid-cols-4 mt-[50px]">
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/12.jpg?v=1608878605447"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">TRÀ VẢI</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 40.000đ
              </div>
            </div>
          </div>
          {/*  */}
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/7.jpg?v=1608872409047"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">TRÀ DÂU TÂY</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 40.000đ
              </div>
            </div>
          </div>
          {/*  */}
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/11-31738fc1-8b94-4d06-824d-63222f59e4e0.jpg?v=1608871602993"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">TRÀ CAM ĐÀO</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 40.000đ
              </div>
            </div>
          </div>
          {/*  */}
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/8.jpg?v=1608871359567"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">TRÀ XOÀI</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 40.000đ
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END CONTENT-1 */}
      <div className="content-2 mt-[50px]">
        <div className="menu-content text-center pt-[50px]">
          <h1 className="text-3xl font-bold">
            <a href="">CÀ PHÊ</a>
          </h1>
          <p className="pt-[10px] text-lg">
            Với những nghệ nhân rang tâm huyết và đội ngũ Barista tài năng cùng những câu chuyện cà phê <br /> đầy cảm
            hứng, ngôi nhà Tea House là không gian dành cho những ai trót yêu say đắm hương vị của <br /> những hạt cà
            phê tuyệt hảo.
          </p>
        </div>
        <div className="content-product__menu grid gap-x-8 gap-y-4 grid-cols-4 mt-[50px]">
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/16.jpg?v=1608879290037"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">LATTE</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 55.000đ
              </div>
            </div>
          </div>
          {/*  */}
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/14.jpg?v=1608879192287"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">ESPRESSO</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 55.000đ
              </div>
            </div>
          </div>
          {/*  */}
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/15.jpg?v=1608879124267"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">CAPPUCCINO</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 55.000đ
              </div>
            </div>
          </div>
          {/*  */}
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/13.jpg?v=1608878981920"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">CARAMEL MACCHIATO</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 40.000đ
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END CONTENT-2 */}
      <div className="content-3 mt-[50px]">
        <div className="menu-content text-center pt-[50px]">
          <h1 className="text-3xl font-bold">
            <a href="">SMOOTHIES</a>
          </h1>
          <p className="pt-[10px] text-lg">
            Với những nghệ nhân rang tâm huyết và đội ngũ Barista tài năng cùng những câu chuyện cà phê <br /> đầy cảm
            hứng, ngôi nhà Tea House là không gian dành cho những ai trót yêu say đắm hương vị của <br /> những hạt cà
            phê tuyệt hảo.
          </p>
        </div>
        <div className="content-product__menu grid gap-x-8 gap-y-4 grid-cols-4 mt-[50px]">
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/4.jpg?v=1608879593660"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">SMOOTHIES CHUỐI</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 55.000đ
              </div>
            </div>
          </div>
          {/*  */}
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/3.jpg?v=1608879476030"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">SMOOTHIES DÂU VIỆT</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 55.000đ
              </div>
            </div>
          </div>
          {/*  */}
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/2.jpg?v=1608879444317"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">SMOOTHIES DÂU</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 55.000đ
              </div>
            </div>
          </div>
          {/*  */}
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/1.jpg?v=1608879356303"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">SMOOTHIES DÂU CHUỐI</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 40.000đ
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END CONTENT-3 */}
      <div className="content-4 mt-[50px] pb-[80px]">
        <div className="menu-content text-center pt-[50px]">
          <h1 className="text-3xl font-bold">
            <a href="">BÁNH NGỌT</a>
          </h1>
          <p className="pt-[10px] text-lg">
            Với những nghệ nhân rang tâm huyết và đội ngũ Barista tài năng cùng những câu chuyện cà phê <br /> đầy cảm
            hứng, ngôi nhà Tea House là không gian dành cho những ai trót yêu say đắm hương vị của <br /> những hạt cà
            phê tuyệt hảo.
          </p>
        </div>
        <div className="content-product__menu grid gap-x-8 gap-y-4 grid-cols-4 mt-[50px]">
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/20.jpg?v=1608880067000"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">BÁNH CÀ PHÊ PHOMAI</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá: 25.000đ</span>
                <del className="pl-[15px]">30.000đ</del>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/19.jpg?v=1608880031067"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">TIRAMISU</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 25.000đ
              </div>
            </div>
          </div>
          {/*  */}
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/18.jpg?v=1608879997587"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">CARAMEL PHOMAI</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 25.000đ
              </div>
            </div>
          </div>
          {/*  */}
          <div className="group">
            <div className="relative overflow-hidden border-solid border-[1px] border-[#ebebeb]">
              <div className="content-img">
                <Image
                  src="https://bizweb.dktcdn.net/thumb/large/100/415/010/products/17.jpg?v=1608879652617"
                  className=""
                  alt=""
                  width={261}
                  height={261}
                />
              </div>
              <div className="absolute w-full bottom-0 h-10 bg-[#4d8a54] text-center text-gray-50 opacity-95 uppercase transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">
                <button className="text-lg mt-[5px]">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="text-center pt-[15px]">
              <h3 className="text-xl font-semibold hover:text-[#4d8a54]">
                <a href="">BÔNG LAN CUỘN TRÀ...</a>
              </h3>
              <div className="price-box text-lg">
                <span className="font-medium">Giá:</span> 25.000đ
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END CONTENT-4 */}
    </div>
  );
};

export default MenuPage;
