import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import SliderArrow from "../SliderArrow";
import { Slider as TypeSlider } from "../../models/slider";

type HomeBannerProps = {
  sliders: TypeSlider[];
};

const HomeBanner = ({ sliders }: HomeBannerProps) => {
  const settings = {
    autoplay: true,
    infinite: true,
    nextArrow: <SliderArrow direction="right" onClick={() => {}} />,
    prevArrow: <SliderArrow onClick={() => {}} />,
  };

  return (
    <section>
      <ul id="banner" className="relative group">
        <Slider {...settings}>
          {sliders?.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                title={item.title}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className="block pt-[35%] bg-center bg-cover bg-no-repeat"
                target="_blank"
                rel="noreferrer"
              />
            </li>
          ))}
        </Slider>
      </ul>
    </section>
  );
};

export default HomeBanner;
