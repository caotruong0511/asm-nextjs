import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { CategoryNews } from "../../models/categoryNews";
import { RootState } from "../../redux/store";

type CateNewsProps = {
  cateNews: CategoryNews[];
};

const Sidebar = ({ cateNews }: CateNewsProps) => {
  // const cateNew = useSelector((state: RootState) => state.new.cateNews);
  return (
    <div className="">
      <aside className="w-full">
        <h2 className=" pt-0  mr-8  leading-[42px] py-[15px] text-left  text-[30px] font-barlow border-b-4 border-green-600 break-before-right  ">
          DANH MỤC TIN TỨC
        </h2>
        <hr />

        <nav className="pt-[30px] pb-[15px]">
          <ul>
            {cateNews?.map((item, index) => (
              <li className="flex items-center font-quicksand leading-[24px] px-[3px] py-[5px]" key={index}>
                <Link href={`/cateNews/${item._id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <aside>
        <h2 className=" mt-5 mb-7 leading-[42px] py-[15px] text-left ] text-[30px] font-barlow border-b-4 border-green-600 break-before-right  ">
          VỀ CHÚNG TÔI
        </h2>

        <div className="relative sm:w-full w-163px h-[168px]">
          <Image
            src="https://bizweb.dktcdn.net/100/415/010/themes/844269/assets/banner_about.jpg?1646286260817"
            alt=""
            layout="fill"
          />
        </div>

        <p className="my-3">
          Tea House được sinh ra từ niềm đam mê bất tận với lá trà Việt Nam. Chúng tôi đã không ngừng mang đến những sản
          phẩm trà thơm ngon, sánh đượm trong không gian thoải mái và lịch sự với mức giá hợp lý.
        </p>
        <button className="mt-3 rounded-[30px] bg-green-700  px-[30px] py-[5px] font-quicksand text-white font-bold">
          Đọc tiếp
        </button>
      </aside>

      <aside>
        <h2 className=" mt-10 leading-[42px] py-[15px] text-left ] text-[28px] font-barlow border-b-4 border-green-600 break-before-right  ">
          HÌNH ẢNH TRÀ TEA HOUSE
        </h2>
        <div className=" grid lg:pl-7  lg:grid-cols-3  md:grid-cols-3  md:pl-1  grid-cols-2 pl-4  py-4 gap-4">
          <div className="relative md:w-[78px] md:h-[78px]  w-[247px] h-[247px]">
            <Image
              src=" https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/pictureblog_1.jpg?1646286260817"
              layout="fill"
              alt=""
            />
          </div>
          <div className="relative md:w-[78px] md:h-[78px]  w-[247px] h-[247px]">
            <Image
              src=" https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/pictureblog_1.jpg?1646286260817"
              layout="fill"
              alt=""
            />
          </div>
          <div className="relative md:w-[78px] md:h-[78px]  w-[247px] h-[247px]">
            <Image
              src=" https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/pictureblog_1.jpg?1646286260817"
              layout="fill"
              alt=""
            />
          </div>
          <div className="relative md:w-[78px] md:h-[78px]  w-[247px] h-[247px]">
            <Image
              src=" https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/pictureblog_1.jpg?1646286260817"
              layout="fill"
              alt=""
            />
          </div>
          <div className="relative md:w-[78px] md:h-[78px]  w-[247px] h-[247px]">
            <Image
              src=" https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/pictureblog_1.jpg?1646286260817"
              layout="fill"
              alt=""
            />
          </div>
          <div className="relative md:w-[78px] md:h-[78px]  w-[247px] h-[247px]">
            <Image
              src=" https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/pictureblog_1.jpg?1646286260817"
              layout="fill"
              alt=""
            />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
