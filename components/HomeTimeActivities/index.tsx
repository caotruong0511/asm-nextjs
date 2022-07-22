import Image from "next/image";
import React from "react";

type Props = {};

const TimeActivities = (props: Props) => {
  return (
    <div className="container-base mb-10">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-7 p-12 bg-[#4d8a54]">
          <h2 className="font-bebas uppercase text-white text-3xl">Thời gian mở cửa</h2>

          <p className="text-sm text-white mt-3">
            Cà phê nhé - Một lời hẹn rất riêng của người Việt. Một lời ngỏ mộc mạc để mình ngồi lại bên nhau và sẻ chia
            câu chuyện của riêng mình.
          </p>

          <ul className="font-bold text-lg mt-4 text-white">
            <li>T2 - T6: 8h30 - 21h30</li>
            <li>T7 - CN: 8h00 - 22h00</li>
          </ul>

          <button className="border border-[#4d8a54] hover:text-white hover:bg-transparent hover:border-white mt-8 px-5 h-11 rounded-full bg-white text-primary font-bold transition">
            Đặt bàn ngay
          </button>
        </div>

        <div className="col-span-5 py-2 hidden md:block">
          <div className="relative w-full h-full">
            <Image
              src="https://bizweb.dktcdn.net/100/415/010/themes/844269/assets/banner_time_open.jpg?1622460223509"
              layout="fill"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeActivities;
