import React from "react";
import Link from "next/link";
import Sidebar from "../Sidebar";

type Props = {};

const ChangePassword = (props: Props) => {
  return (
    <div className="container-base  ">
      <ul className="text-[#282828] flex  flex-wrap: wrap text-[14px] font-medium leading-[24px] py-[15px] text-left">
        <li className="hover:text-[#4d8a54] ">
          <Link href=""> Trang chủ / </Link>
        </li>
        <li className="text-[#4d8a54]">
          <Link href="">Trang thông tin</Link>
        </li>
      </ul>
      <div className="mt-5 grid md:grid-cols-4 grid-cols-1">
        <div className="">
          <Sidebar></Sidebar>
        </div>
        <div className="md:col-span-3">
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
        </div>
      </div>
    </div>
  );
};
// ChangePassword.getLayout2 = ChangePassword;
export default ChangePassword;
