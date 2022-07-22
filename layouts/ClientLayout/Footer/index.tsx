import { faFacebookF, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";

type Props = {};

const ClientFooter = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className="container-base border-b border-b-[#474747] pb-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li>
            <Image
              src="https://bizweb.dktcdn.net/100/415/010/themes/844269/assets/logo.png?1646286260817"
              alt=""
              width={203}
              height={93}
            />

            <p>
              Chúng tôi mong muốn Tea House sẽ trở thành Nhà Trà, nơi mọi người xích lại gần nhau và tìm thấy niềm vui,
              sự sẻ chia thân tình bên những tách cà phê đượm hương, chất lượng.
            </p>

            <ul className="flex items-center mt-3">
              <li className="text-[#4d8a54] w-9 h-9 rounded-full hover:bg-white flex items-center justify-center">
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>

              <li className="text-[#4d8a54] w-9 h-9 rounded-full hover:bg-white flex items-center justify-center">
                <a href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>

              <li className="text-[#4d8a54] w-9 h-9 rounded-full hover:bg-white flex items-center justify-center">
                <a href="">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </li>

              <li className="text-[#4d8a54] w-9 h-9 rounded-full hover:bg-white flex items-center justify-center">
                <a href="">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-2xl mb-8 uppercase text-primary font-bold">Liên hệ với chúng tôi</h2>

            <ul>
              <li className="mb-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-primary" />
                <span className="ml-3">
                  Địa chỉ: Tâng 6 toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội, Vietnam
                </span>
              </li>

              <li className="mb-3">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-primary" />
                <span className="ml-3">
                  Hotline đặt bàn:{" "}
                  <a href="" className="hover:text-[#4d8a54]">
                    1900 6750
                  </a>
                </span>
              </li>
            </ul>
          </li>

          <li>
            <h2 className="text-2xl mb-8 uppercase text-primary font-bold">Đăng ký nhận khuyến mãi</h2>

            <p>Đừng bỏ lỡ những sản phẩm và chương trình khuyến mãi hấp dẫn</p>

            <form className="mt-5 h-14 rounded-full bg-white flex">
              <input
                type="text"
                placeholder="Email của bạn"
                className="h-full flex-1 pl-4 outline-none rounded-tl-full rounded-bl-full text-black"
              />
              <button className="uppercase bg-primary h-full px-4 rounded-full font-semibold">Đăng ký</button>
            </form>
          </li>
        </ul>
      </div>

      <div className="pt-6">
        <div className="container-base text-center">
          <p className="text-gray-100">© Bản quyền thuộc về Fpoly Team</p>
        </div>
      </div>
    </footer>
  );
};

export default ClientFooter;
