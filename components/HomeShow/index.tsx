import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import SliderArrow from "../SliderArrow";

type Props = {};

const HomeShow = (props: Props) => {
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    nextArrow: <SliderArrow direction="right" onClick={() => {}} />,
    prevArrow: <SliderArrow onClick={() => {}} />,
  };

  return (
    <section>
      <ul className="mt-12 group -mb-2">
        <Slider {...settings}>
          <li className="relative pt-[100%]">
            <Image
              src="https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/picture_1.jpg?1646286260817"
              layout="fill"
              alt=""
            />
          </li>
          <li className="relative pt-[100%]">
            <Image
              src="https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/picture_2.jpg?1646286260817"
              layout="fill"
              alt=""
            />
          </li>
          <li className="relative pt-[100%]">
            <Image
              src="https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/picture_3.jpg?1646286260817"
              layout="fill"
              alt=""
            />
          </li>
          <li className="relative pt-[100%]">
            <Image
              src="https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/picture_3.jpg?1646286260817"
              layout="fill"
              alt=""
            />
          </li>
          <li className="relative pt-[100%]">
            <Image
              src="https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/picture_4.jpg?1646286260817"
              layout="fill"
              alt=""
            />
          </li>
          <li className="relative pt-[100%]">
            <Image
              src="https://bizweb.dktcdn.net/thumb/large/100/415/010/themes/844269/assets/picture_5.jpg?1646286260817"
              layout="fill"
              alt=""
            />
          </li>
        </Slider>
      </ul>
    </section>
  );
};

export default HomeShow;
