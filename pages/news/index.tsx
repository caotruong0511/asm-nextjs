import React from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import News from "./News";
import { GetStaticProps } from "next";
import { News as TypeNews } from "../../models/news";
import { CategoryNews } from "../../models/categoryNews";
import Head from "next/head";
type Props = {
  posts: TypeNews[];
  catePost: CategoryNews[];
};

const index = ({ posts, catePost }: Props) => {
  return (
    <div className="container-base ">
      <Head>
        <title>News</title>
      </Head>
      <ul className="text-[#282828] flex  flex-wrap: wrap text-[14px] font-medium leading-[24px] py-[15px] text-left">
        <li className="hover:text-[#4d8a54] ">
          {" "}
          <Link href=""> Trang chủ / </Link>{" "}
        </li>
        <li className="text-[#4d8a54]">
          <Link href=""> Tin tức</Link>
        </li>
      </ul>
      <div className="grid md:grid-cols-3 md:gap-5 sm:gap-6 sm:grid-cols-2">
        <div className="md:col-span-2 sm:col-span-1">
          <News postsNews={posts}></News>
        </div>
        <div className="col-span-1 ">
          <Sidebar cateNews={catePost}></Sidebar>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:8080/api/news");
  const posts = await res.json();

  const req = await fetch("http://localhost:8080/api/categoryNews");
  const catePost = await req.json();

  return {
    props: {
      posts,
      catePost, //dòng này là cái props
    },
    revalidate: 60,
  };
};

export default index;
