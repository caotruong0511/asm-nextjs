import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { CateProduct } from "../../models/cateProduct";
import SliderArrow from "../SliderArrow";

type HomeCategoryProps = {
  listCategory: CateProduct[];
};

const HomeCategory = ({ listCategory }: HomeCategoryProps) => {
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
        {listCategory?.map((item, index) => (
          <li className="cursor-pointer my-8" key={index}>
            <Link href={`/cateproduct/${item._id}`}>
              <div className="text-center">
                <Image src={item.image} alt="" width={235} height={160} className="object-cover" />

                <h3 className="font-bold text-2xl text-normal py-2 hover:text-[#4d8a54] transition">{item.name}</h3>
              </div>
            </Link>
          </li>
        ))}
      </Slider>
    </section>
  );
};

export default HomeCategory;
