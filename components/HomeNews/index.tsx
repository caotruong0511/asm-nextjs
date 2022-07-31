import Image from "next/image";
import Link from "next/link";
import React from "react";
import { News } from "../../models/news";

type HomeNewsProps = {
  newsList: News[];
};

const HomeNews = ({ newsList }: HomeNewsProps) => {
  return (
    <div className="container-base">
      <h2 className="uppercase font-bebas text-4xl text-normal text-center">Tin tức nổi bật</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-6">
        {newsList?.slice(0, 3)?.map((item, index) => (
          <div key={index}>
            <div className="relative pt-[100%]">
              <Image src={item.thumbnail} layout="fill" alt="" />
            </div>

            <div className="py-2">
              <h2 className="text-normal font-bebas uppercase limit-line-2 text-2xl hover:text-[#4d8a54]">
                <Link href="">{item.title}</Link>
              </h2>

              <p className="limit-line-5 leading-6 mt-2 text-justify">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeNews;
