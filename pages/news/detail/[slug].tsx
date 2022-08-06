import React from "react";
import Link from "next/link";
import Sidebar from "../Sidebar";
import Relateto from "./Relateto";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { getAll, getBySlug } from "../../../api-client/NewsApi";
import { getAll as getAllCateNews } from "../../../api-client/cateNewsApi";
import { News } from "../../../models/news";
import moment from "moment";
import { CategoryNews } from "../../../models/categoryNews";
import Image from "next/image";
import Head from "next/head";

type PostsDetailProps = {
  newDetail: News;
  categoryNews: CategoryNews[];
};

const Detail = ({ newDetail, categoryNews }: PostsDetailProps) => {
  console.log(newDetail);
  return (
    <div className="container-base">
      <Head>
        <title>{newDetail.title}</title>
      </Head>
      <ul className="text-[#282828] flex  flex-wrap: wrap text-[14px] font-medium leading-[24px] py-[15px] text-left">
        <li className="hover:text-[#4d8a54] ">
          {" "}
          <Link href=""> Trang chủ / </Link>{" "}
        </li>
        <li className="text-gray-600]">
          <Link href=""> Tin tức /</Link>
        </li>
        <li className="text-[#2b3d2d]">
          <Link href="">{newDetail.title}</Link>
        </li>
      </ul>
      <div className="grid md:grid-cols-3 md:gap-5 gap-3 grid-cols-1">
        <div className="md:col-span-2 col-span-1">
          <div className="w-[100%]">
            <div className="w-full h-96 relative">
              <Image src={newDetail.thumbnail} alt="" layout="fill" className=" object-cover" />
            </div>

            <div>
              <div className="flex  mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{moment(newDetail.createdAt).format("DD/MM/YYYY")}</span>
              </div>
              <span>
                <h2 className=" mt-0 pr-8 leading-[42px] py-[15px] text-left ] text-[30px] font-barlow ">
                  {newDetail.title}
                </h2>

                <hr className="my-3" />
              </span>
              <span className="my-[20px] mr-5">{newDetail.content}</span>
              <hr className="my-6" />
              <div className="flex justify-between text-[14px]  font-quicksand text-gray-700">
                <span>Tag:cafe</span>
                <samp className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <span> Chia sẻ bài viết :</span>
                  <Link href="">
                    <svg
                      className="h-4 w-4 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                  <Link href="">
                    <svg
                      className="h-4 w-4 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </Link>
                  <Link href="">
                    <svg
                      className="h-4 w-4 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" /> <path d="M17.788 5.108A9 9 0 1021 12h-8" />
                    </svg>
                  </Link>
                </samp>
              </div>

              <hr className="my-6" />
              <div>
                <span className="my-5"> BÌNH LUẬN CỦA BẠN</span>
                <form action="">
                  <div className="flex mt-[10px] pb-[20px]">
                    <input
                      type="text"
                      className="  mr-[20px] md:w-[430px] w-[50%]  h-[40px] text-sm text-gray-900 bg-white rounded-sm border border-gray-300"
                      placeholder=" Họ và tên"
                    />
                    <input
                      type="text"
                      className="  md:w-[430px] w-[50%] h-[40px] text-sm text-gray-900 bg-white rounded-sm border border-gray-300"
                      placeholder=" Email"
                    />
                  </div>
                  <textarea
                    id="message"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white  rounded-lg border border-gray-300 "
                    placeholder="Your message..."
                  ></textarea>
                  <button className="mt-3 rounded-[30px] bg-green-700  px-[30px] py-[5px] font-quicksand text-white font-bold">
                    GỬI THÔNG TIN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 ">
          <Sidebar cateNews={categoryNews}></Sidebar>
        </div>
      </div>
      <div className="mt-[20px]">
        <Relateto></Relateto>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAll();
  const paths = data?.map((news) => ({ params: { slug: news.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostsDetailProps> = async (context: GetStaticPropsContext) => {
  const newDetail = await getBySlug(context.params?.slug);
  const categoryNews = await getAllCateNews();

  return {
    props: { newDetail, categoryNews },
  };
};

export default Detail;
