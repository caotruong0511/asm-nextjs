import React, { ReactElement, useEffect } from "react";
import { ClientLayout } from "../../../layouts";
import ProfileLayout from "../../../layouts/Pro5Layout";
import { NextPageWithLayout } from "../../../models/layout";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

import { changePass } from "../../../api-client/userApi";
import { current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { User } from "../../../models/users";

type Props = {};

type Inputs = {
  _id: string;
  oldPassword: string;
  newPassword: string;
  createdAt?: Date;
};
const ChangePassword: NextPageWithLayout = (props: Props) => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser) as User;
  console.log(currentUser._id);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
    try {
      await changePass(values);
      toast.success("Đăng ký thành công, vui lòng đăng nhập");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }
  };
  return (
    <>
      <p className="font-quicksand text-[19px] leading-[26px] pb-3">ĐỔI MẬT KHẨU</p>
      <p className="font-quicksand text-[14px] pb-3">
        {" "}
        Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí tự
      </p>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <ul className="px-10px">
          <input type="text" {...register("_id")} className="hidden" value={currentUser._id} />
          <li className=" text-[14px]">
            Mật Khẩu Cũ :<p></p>
            <input
              type="text"
              {...register("oldPassword", { required: "Vui lòng" })}
              className=" md:w-[60%] h-[35px]  w-[100%]   border-[1px] rounded-sm"
            />
            <p className="text-red-400">{errors.oldPassword?.message}</p>
          </li>
          <li className=" text-[14px]">
            Mật Khẩu Mới :<p></p>
            <input
              type="text"
              {...register("newPassword", { required: "Vui lòng nhập họ tên" })}
              className=" md:w-[60%] h-[35px]  w-[100%]   border-[1px] rounded-sm"
            />
            <p className="text-red-400">{errors.newPassword?.message}</p>
          </li>
          {/* <li className=" text-[14px]">
            Xác Nhận Lại Mật Khẩu :<p></p>
            <input
              type="text"
              {...register("newPassword", { required: "Vui lòng nhập họ tên" })}
              className=" md:w-[60%] h-[35px]  w-[100%]   border-[1px] rounded-sm"
            />
            <p className="text-red-400">{errors.newPassword?.message}</p>
          </li> */}
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
