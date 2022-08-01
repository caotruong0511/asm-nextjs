import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { ClientLayout } from "../../layouts";
import ProfileLayout from "../../layouts/Pro5Layout";
import { NextPageWithLayout } from "../../models/layout";
import { User } from "../../models/users";
import { RootState } from "../../redux/store";

const Profile: NextPageWithLayout = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser) as User;

  return (
    <>
      <p className="font-quicksand text-[19px] leading-[26px] pb-3">THÔNG TIN TÀI KHOẢN</p>
      <ul className="">
        <li className="text-[14px] py-2">
          <span className="font-semibold">Họ và tên:</span> {currentUser.name}
        </li>

        <li className="text-[14px] py-2">
          <span className="font-semibold">Email:</span> {currentUser.email}
        </li>

        <li className="text-[14px] py-2">
          <span className="font-semibold">Điện thoại:</span> {currentUser.phone}
        </li>
      </ul>
    </>
  );
};

Profile.getLayout = (page: ReactElement) => (
  <ClientLayout>
    <ProfileLayout>{page}</ProfileLayout>
  </ClientLayout>
);

export default Profile;
