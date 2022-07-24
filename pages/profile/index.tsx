import React from "react";
import Link from "next/link";
import Sidebar from "../../pages/profile/Sidebar";

type Props = {};

const Profile = () => {
  return (
    <div className="container-base  ">
      <ul className="text-[#282828] flex  flex-wrap: wrap text-[14px] font-medium leading-[24px] py-[15px] text-left">
        <li className="hover:text-[#4d8a54] ">
          <Link href=""> Trang chủ / </Link>
        </li>
        <li className="text-[#4d8a54]">
          <Link href=""> Trang thông tin</Link>
        </li>
      </ul>
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
              Email :<span className="text-green-600">aaaa</span>!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
