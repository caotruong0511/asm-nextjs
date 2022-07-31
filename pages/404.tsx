import Link from "next/link";
import React, { ReactElement } from "react";
import { EmptyLayout } from "../layouts";
import { NextPageWithLayout } from "../models/layout";

type Props = {};

const NotfoundPage: NextPageWithLayout = (props: Props) => {
  return (
    <div className="font-quicksand fixed top-0 right-0 bottom-0 left-0 z-10 bg-white flex items-center justify-center flex-col">
      <div className="flex">
        <p className="text-indigo-500 font-bold text-7xl border-r pr-4">404</p>
        <div className="pl-4">
          <p className="text-5xl font-extrabold">Page not found</p>
          <p className="text-gray-500 mt-3 text-lg">Please check the URL in the address bar and try again.</p>
        </div>
      </div>
      <ul className="flex mt-6">
        <li className="">
          <Link href="/">
            <span className="block transition duration-300 ease-linear hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] px-4 text-white py-2 bg-indigo-500 rounded-md mx-2">
              <button className="font-medium">Go back home</button>
            </span>
          </Link>
        </li>
        <li className="">
          <a
            href=""
            className="block transition duration-300 ease-linear hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] px-4 text-indigo-500 py-2 bg-indigo-100 rounded-md mx-2"
          >
            <button className="font-medium">Contact support</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

NotfoundPage.getLayout = (page: ReactElement) => <EmptyLayout>{page}</EmptyLayout>;

export default NotfoundPage;
