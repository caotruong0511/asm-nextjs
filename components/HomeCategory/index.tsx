import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import SliderArrow from "../SliderArrow";

type Props = {};

const HomeCategory = (props: Props) => {
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SliderArrow direction="right" onClick={() => {}} />,
    prevArrow: <SliderArrow onClick={() => {}} />,
  };

  return (
    <section className="container-base pt-10">
      <h2 className="uppercase font-bebas text-4xl text-normal text-center">Danh mục sản phẩm</h2>

      <Slider {...settings} className="group">
        <li className="cursor-pointer my-8">
          <Link href="/hehe">
            <div className="text-center">
              <Image
                src="https://bizweb.dktcdn.net/100/415/010/themes/844269/assets/sec_category_1.jpg?1646286260817"
                alt=""
                width={235}
                height={160}
                className="object-cover"
              />

              <h3 className="font-bold text-2xl text-normal py-2 hover:text-[#4d8a54] transition">Trà nóng</h3>
            </div>
          </Link>
        </li>

        <li className="cursor-pointer my-8">
          <Link href="/hehe">
            <div className="text-center">
              <Image
                src="https://bizweb.dktcdn.net/100/415/010/themes/844269/assets/sec_category_1.jpg?1646286260817"
                alt=""
                width={235}
                height={160}
                className="object-cover"
              />

              <h3 className="font-bold text-2xl text-normal py-2 hover:text-[#4d8a54] transition">Trà nóng</h3>
            </div>
          </Link>
        </li>

        <li className="cursor-pointer my-8">
          <Link href="/hehe">
            <div className="text-center">
              <Image
                src="https://bizweb.dktcdn.net/100/415/010/themes/844269/assets/sec_category_1.jpg?1646286260817"
                alt=""
                width={235}
                height={160}
                className="object-cover"
              />

              <h3 className="font-bold text-2xl text-normal py-2 hover:text-[#4d8a54] transition">Trà nóng</h3>
            </div>
          </Link>
        </li>

        <li className="cursor-pointer my-8">
          <Link href="/hehe">
            <div className="text-center">
              <Image
                src="https://bizweb.dktcdn.net/100/415/010/themes/844269/assets/sec_category_1.jpg?1646286260817"
                alt=""
                width={235}
                height={160}
                className="object-cover"
              />

              <h3 className="font-bold text-2xl text-normal py-2 hover:text-[#4d8a54] transition">Trà nóng</h3>
            </div>
          </Link>
        </li>

        <li className="cursor-pointer my-8">
          <Link href="/hehe">
            <div className="text-center">
              <Image
                src="https://bizweb.dktcdn.net/100/415/010/themes/844269/assets/sec_category_1.jpg?1646286260817"
                alt=""
                width={235}
                height={160}
                className="object-cover"
              />

              <h3 className="font-bold text-2xl text-normal py-2 hover:text-[#4d8a54] transition">Trà nóng</h3>
            </div>
          </Link>
        </li>
      </Slider>
    </section>
  );
};

export default HomeCategory;
