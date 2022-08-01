import React, { ReactElement } from "react";
import { ClientLayout } from "../../../layouts";
import ProfileLayout from "../../../layouts/Pro5Layout";
import { NextPageWithLayout } from "../../../models/layout";

type Props = {};

const ChangePassword: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <p className="font-quicksand text-[19px] leading-[26px] pb-3">ĐỔI MẬT KHẨU</p>
      <p className="font-quicksand text-[14px] pb-3">
        {" "}
        Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí tự
      </p>
      <form action="">
        <ul className="px-10px">
          <li className=" text-[14px]">
            Mật Khẩu Cũ :<p></p>
            <input type="text" className=" md:w-[60%] h-[35px]  w-[100%]   border-[1px] rounded-sm" />
          </li>
          <li className=" text-[14px]">
            Mật Khẩu Mới :<p></p>
            <input type="text" className=" md:w-[60%] h-[35px]  w-[100%]   border-[1px] rounded-sm" />
          </li>
          <li className=" text-[14px]">
            Xác Nhận Lại Mật Khẩu :<p></p>
            <input type="text" className=" md:w-[60%] h-[35px]  w-[100%]   border-[1px] rounded-sm" />
          </li>
        </ul>
        <button className="mt-5 mb-8 rounded-[30px] bg-green-700  px-[30px] py-[5px] font-quicksand text-white font-bold hover:bg-slate-800">
          ĐỔI MẬT KHẨU
        </button>
      </form>
    </>
  );
};

ChangePassword.getLayout = (page: ReactElement) => (
  <ClientLayout>
    <ProfileLayout>{page}</ProfileLayout>
  </ClientLayout>
);
export default ChangePassword;
