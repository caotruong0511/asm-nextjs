import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import SliderArrow from "../SliderArrow";

type Props = {};

const HomeBanner = (props: Props) => {
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
          <li>
            <a
              href={""}
              title={"title"}
              style={{
                backgroundImage: `url(https://bizweb.dktcdn.net/100/415/010/themes/844269/assets/slider_1.jpg?1646286260817)`,
              }}
              className="block pt-[35%] bg-center bg-cover bg-no-repeat"
              target="_blank"
              rel="noreferrer"
            />
          </li>

          <li>
            <a
              href={""}
              title={"title"}
              style={{
                backgroundImage: `url(https://res.cloudinary.com/levantuan/image/upload/v1644757540/assignment-js/bcrpldnvh7gqp8bsmpp4.jpg)`,
              }}
              className="block pt-[35%] bg-center bg-cover bg-no-repeat"
              target="_blank"
              rel="noreferrer"
            />
          </li>
        </Slider>
      </ul>
    </section>
  );
};

export default HomeBanner;
