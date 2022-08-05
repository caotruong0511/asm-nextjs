import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import React, { ReactElement, useEffect } from "react";
import { AdminLayout } from "../../layouts";
import { NextPageWithLayout } from "../../models/layout";
import { getNews } from "../../redux/newsSlice";
import { getproduct } from "../../redux/productSlice";
import { RootState } from "../../redux/store";
import { getUsers } from "../../redux/userSlice";

type Props = {};

const Dashboard: NextPageWithLayout = (props: Props) => {
  const products = useSelector((state: RootState) => state.product.products);
  const news = useSelector((state: RootState) => state.news.news);
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getproduct()).unwrap();
        await dispatch(getNews()).unwrap();
        await dispatch(getUsers()).unwrap();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>

      <header className="fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <h5>Dashboard</h5>
        </div>
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {" "}
          Dashboard{" "}
        </button>
      </header>
      <div className="p-6 mt-24 overflow-hidden">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="flex bg-white">
            <div className="bg-red-500 flex items-center px-3 text-white rounded-l-md">BV</div>
            <div className="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
              <div>
                <span className="block font-semibold">Bài viết</span>
                <span className="block text-gray-500">{news?.length} Posts</span>
              </div>
              <div className="text-gray-500">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
          </div>
          <div className="flex bg-white">
            <div className="bg-indigo-500 flex items-center px-3 text-white rounded-l-md">TK</div>
            <div className="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
              <div>
                <span className="block font-semibold">Tài khoản</span>
                <span className="block text-gray-500">{users?.length} Members</span>
              </div>
              <div className="text-gray-500">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
          </div>
          <div className="flex bg-white">
            <div className="bg-yellow-500 flex items-center px-3 text-white rounded-l-md">SP</div>
            <div className="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
              <div>
                <span className="block font-semibold">Sản phẩm</span>
                <span className="block text-gray-500">{products?.length} Sản phẩm</span>
              </div>
              <div className="text-gray-500">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
          </div>
          <div className="flex bg-white">
            <div className="bg-green-500 flex items-center px-3 text-white rounded-l-md">DT</div>
            <div className="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
              <div>
                <span className="block font-semibold">Doanh thu</span>
                <span className="block text-gray-500">1.000.000 VND</span>
              </div>
              <div className="text-gray-500">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Dashboard.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default Dashboard;
