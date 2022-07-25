import React from "react";
import Link from "next/link";
import Sidebar from "../../pages/profile/Sidebar";

type Props = {
  children: JSX.Element;
};

const ProfileLayout = ({ children }: Props) => {
  return (
    <div className="container-base  ">
      <div className="mt-5 grid md:grid-cols-4 grid-cols-1">
        <div className="">
          <Sidebar></Sidebar>
        </div>
        <div className="md:col-span-3">
          <p className="font-quicksand text-[19px] leading-[26px] pb-3">THÔNG TIN TÀI KHOẢN</p>
          <ul className="">
            <li className="font-bold text-[14px]">
              Họ và tên :<span className="text-green-600">aaaa</span>!
            </li>

            <li className="font-bold text-[14px]">
              Email :<span className="text-green-600">aaaa</span>!{children}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
