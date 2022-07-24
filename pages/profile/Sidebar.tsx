import Link from "next/link";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      <p className="font-quicksand text-[19px] leading-[26px] pb-3">TRANG TÀI KHOẢN </p>
      <ul className="">
        <li className="font-bold text-[14px]">
          Xin Chào,<span className="text-green-600">aaaa</span>!
        </li>

        <li className="text-[14px]  my-5">
          <Link href="#">Thông Tin Tài Khoản</Link>
        </li>
        <li className="text-[14px]  my-5">
          <Link href="#">Đơn Hàng Của Bạn</Link>
        </li>
        <li className="text-[14px]  my-5">
          <Link href="#">Đổi Mật Khẩu</Link>
        </li>
        <li className="text-[14px]  my-5">
          <Link href="#">Sổ Địa Chỉ</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
