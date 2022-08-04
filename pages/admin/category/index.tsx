import Head from "next/head";
import Link from "next/link";
import React, { ReactElement } from "react";
import CateNewsList from "../../../components/admin/cateNewsList";
import { AdminLayout } from "../../../layouts";
import { NextPageWithLayout } from "../../../models/layout";

type Props = {};

const CategoryManager: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Category</title>
      </Head>
      <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
            Category
          </h5>
          <span>DS danh mục</span>
        </div>
        <Link href="/admin/category/add">
          <button
            type="button"
            className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Thêm danh mục
          </button>
        </Link>
      </header>

      <div className="p-6 mt-24 overflow-hidden">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
              <CateNewsList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CategoryManager.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default CategoryManager;
