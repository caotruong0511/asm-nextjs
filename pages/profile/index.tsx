import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="container-base pt-[15px] pb-[60px]">
      <div className="menu_top ">
        <span className="text-[#4d8a54]">
          <a href="" className="text-[#000000]">
            Trang chủ
          </a>{" "}
          / Trang khách hàng
        </span>
      </div>
      <div className="row pt-[50px] grid grid-cols-2 md:grid-cols-2 gap-3">
        <div className="block-accout">
          <h5 className="font-semibold text-xl">TRANG TÀI KHOẢN</h5>
          <p className="font-semibold pt-[10px]">
            Xin chào, <strong className="text-[#4d8a54]">Nguyễn Khôi !</strong>
          </p>
          <ul>
            <li className="pt-[20px]">
              <a href="" className="text-[#4d8a54]">
                Thông tin tài khoản
              </a>
            </li>
            <li className="pt-[20px] hover:text-[#4d8a54]">
              <a href="">Đơn hàng của bạn</a>
            </li>
            <li className="pt-[20px] hover:text-[#4d8a54]">
              <a href="">Đổi mật khẩu</a>
            </li>
            <li className="pt-[20px] hover:text-[#4d8a54]">
              <a href="">Số địa chỉ (0)</a>
            </li>
          </ul>
        </div>
        <div className="form">
          <h1 className="font-semibold text-xl">THÔNG TIN TÀI KHOẢN</h1>
          <p className="pt-[10px]">
            <strong>Họ tên:</strong> Nguyễn Khôi
          </p>
          <p className="pt-[20px]">
            <strong>Email:</strong> khoi@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
