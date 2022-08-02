import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../redux/authSlice";
import { toast } from "react-toastify";
import { RootState } from "../../redux/store";
import { User } from "../../models/users";

type Props = {};

const SidebarProfile = (props: Props) => {
  const router = useRouter();
  const dispacth = useDispatch();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser) as User;

  const handleLogout = () => {
    dispacth(signout());
    toast.success("Đăng xuất thành công");
  };

  return (
    <div>
      <p className="font-quicksand text-[19px] leading-[26px] pb-3">TRANG TÀI KHOẢN </p>
      <ul className="">
        <li className="font-bold text-[14px]">
          Xin chào,<span className="text-[#4d8a54]"> {currentUser.name}</span>!
        </li>

        <li className={`text-[14px] hover:text-[#4d8a54] my-5 ${router.pathname === "/profile" && "text-primary"}`}>
          <Link href="/profile">Thông tin tài khoản</Link>
        </li>
        <li
          className={`text-[14px] hover:text-[#4d8a54] my-5 ${
            router.pathname === "/profile/myorder" && "text-primary"
          }`}
        >
          <Link href="/profile/myorder">Đơn hàng của bạn</Link>
        </li>
        <li
          className={`text-[14px] hover:text-[#4d8a54] my-5 ${
            router.pathname === "/profile/changepass" && "text-primary"
          }`}
        >
          <Link href="/profile/changepass">Đổi mật khẩu</Link>
        </li>
        <li className="cursor-pointer text-[14px] hover:text-[#4d8a54] my-5" onClick={handleLogout}>
          Đăng xuất
        </li>
      </ul>
    </div>
  );
};

export default SidebarProfile;
