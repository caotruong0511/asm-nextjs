import React from "react";
import { News } from "../../models/news";
import Image from "next/image";
import Link from "next/link";

type NewsProps = {
  postsNews: News[];
};

const News = ({ postsNews }: NewsProps) => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
      {postsNews?.map((item, index) => (
        <div className="flex" key={index}>
          <div className="w-[160px] h-[140px] relative">
            <Image src={item.thumbnail} layout="fill" alt="" className=" object-cover" />
          </div>
          <div className="pl-2 flex-1">
            <Link href={`/news/detail/${item.slug}`}>
              <span className="limit-line-2 text-[21px] font-barlow  hover:text-green-600 cursor-pointer  leading-[30px] ">
                {item.title}
              </span>
            </Link>

            <p className="text-[14px] mt-2 font-quicksand limit-line-3">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
