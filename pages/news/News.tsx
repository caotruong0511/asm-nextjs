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
            <span className="text-[21px] font-bebas hover:text-green-600 leading-[30px] limit-line-2">
              <Link href="">{item.title}</Link>
            </span>
            <p className="text-[14px] mt-2 font-quicksand limit-line-3">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
