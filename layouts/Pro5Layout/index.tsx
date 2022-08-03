import React from "react";
import Link from "next/link";
import Sidebar from "../../components/SidebarProfile/Sidebar";
import PrivateRoute from "../../components/PrivateRoute";

type Props = {
  children: JSX.Element;
};

const ProfileLayout = ({ children }: Props) => {
  return (
    <PrivateRoute roleAccept={0}>
      <div className="container-base">
        <ul className="text-[#282828] flex flex-wrap: wrap text-[14px] font-medium leading-[24px] py-[15px] text-left">
          <li className={`hover:text-[#4d8a54]`}>
            <Link href=""> Trang chủ / </Link>
          </li>
          <li className="text-[#4d8a54]">
            <Link href=""> Trang thông tin</Link>
          </li>
        </ul>
        <div className="mt-5 grid md:grid-cols-4 grid-cols-1 mb-10">
          <div className="">
            <Sidebar></Sidebar>
          </div>
          <div className="md:col-span-3">{children}</div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default ProfileLayout;
