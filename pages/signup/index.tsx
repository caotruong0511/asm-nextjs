import React from "react";
import Image from "next/image";
type Props = {};

const SignupPage = (props: Props) => {
  return (
    <div className="container-base pt-[15px]">
      <div className="menu_top ">
        <span className="text-[#4d8a54]">
          <a href="" className="text-[#000000]">
            Trang chủ
          </a>{" "}
          / Đăng ký tài khoản
        </span>
      </div>
      <div className="row pt-[60px] text-center">
        <div className="page-login">
          <h1 className="text-2xl font-semibold">Đăng ký</h1>
          <div className="pt-[15px]">
            {" "}
            <span>
              Đã có tài khoản, đăng nhập
              <a href="" className="hover:text-[#4d8a54]">
                {" "}
                tại đây
              </a>
            </span>
          </div>
        </div>
        <div className="section">
          <form action="">
            <div className="form-signup">
              <input
                type="text"
                className="mt-[20px] outline-none border-solid border-2 border-[#e1e1e1] w-[100%] md:w-[30%] h-[40px]"
                placeholder="Họ"
              />
              <br />
              <input
                type="text"
                className="mt-[17px] outline-none border-solid border-2 border-[#e1e1e1] w-[100%] md:w-[30%] h-[40px]"
                placeholder="Tên"
              />
              <br />
              <input
                type="text"
                className="mt-[17px] outline-none border-solid border-2 border-[#e1e1e1] w-[100%] md:w-[30%] h-[40px]"
                placeholder="Email"
              />
              <br />
              <input
                type="text"
                className="mt-[17px] outline-none border-solid border-2 border-[#e1e1e1] w-[100%] md:w-[30%] h-[40px]"
                placeholder="Số điện thoại"
              />
              <br />
              <input
                type="text"
                className="mt-[17px] outline-nonemt-[17px] outline-none border-solid border-2 border-[#e1e1e1] w-[100%] md:w-[30%] h-[40px]"
                placeholder="Mật khẩu"
              />
            </div>
            <button className="bg-[#4d8a54] text-white mt-[17px] w-[100%] md:w-[30%] h-[40px] font-semibold">ĐĂNG KÝ</button>
          </form>
          <div className="login-fb pt-[50px] pb-[50px]">
            <p>Hoặc đăng nhập bằng</p>
            <div className="pt-[20px]">
              {" "}
              <a href="">
                <Image
                  src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                  className=""
                  alt=""
                  width={129}
                  height={36}
                />
              </a>
              <a href="">
                <Image
                  src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                  className=""
                  alt=""
                  width={129}
                  height={36}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
