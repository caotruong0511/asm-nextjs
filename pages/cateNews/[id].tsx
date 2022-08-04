import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import Link from "next/link";
import { get, getAll } from "../../api-client/cateNewsApi";
import { CategoryNews } from "../../models/categoryNews";
import Sidebar from "../news/Sidebar";
import News from "../news/News";

type Props = {
  cateNews: CategoryNews;
  catePost: CategoryNews[];
};

const CateNews = ({ cateNews, catePost }: Props) => {
  const news = cateNews.news;
  return (
    <div className="container-base ">
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
          <News postsNews={news}></News>
        </div>
        <div className="col-span-1 ">
          <Sidebar cateNews={catePost}></Sidebar>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAll();
  const pathsnews = data.map((cateNews) => ({ params: { id: cateNews._id } }));
  return {
    paths: pathsnews,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id as string;
  const cateNews = await get(id);

  const req = await fetch("http://localhost:8080/api/categoryNews");
  const catePost = await req.json();

  return {
    props: {
      cateNews,
      catePost,
    },
    revalidate: 60,
  };
};

export default CateNews;
