import { faComment, faNewspaper, faShoppingCart, faSlidersH, faThList } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {};

const AdminMenu = (props: Props) => {
  return (
    <nav className="dashboard__sidebar fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition origin-left transform bg-gray-900 w-60 md:translate-x-0 -translate-x-full">
      <Link href="/">
        <span className="flex items-center p-4 text-white font-bold text-3xl cursor-pointer">Yotea</span>
      </Link>
      <nav className="text-sm font-medium text-gray-500" aria-label="Main Navigation">
        <Link href="/admin">
          <span className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <svg
              className="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentcolor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414.0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Dashboard</span>
          </span>
        </Link>

        <Link href="/admin/order">
          <span className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <span>Order</span>
          </span>
        </Link>

        <Link href="/admin/cateproduct">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faThList} />
              </div>
              <span>Categories Products</span>
            </div>
          </span>
        </Link>

        <Link href="/admin/product">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faProductHunt} />
              </div>
              <span>Products</span>
            </div>
          </span>
        </Link>

        <Link href="/admin/user">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faNewspaper} />
              </div>
              <span>Users</span>
            </div>
          </span>
        </Link>

        <Link href="/admin/category">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faThList} />
              </div>
              <span>Categories News</span>
            </div>
          </span>
        </Link>

        <Link href="/admin/news">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faNewspaper} />
              </div>
              <span>News</span>
            </div>
          </span>
        </Link>

        <Link href="/admin/slider">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faSlidersH} />
              </div>
              <span>Slider</span>
            </div>
          </span>
        </Link>

        <Link href="/admin/comment">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faThList} />
              </div>
              <span>Comment</span>
            </div>
          </span>
        </Link>

        {/* <Link href="">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faThList} />
              </div>
              <span>Size</span>
            </div>
          </span>
        </Link>

        <Link href="">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faThList} />
              </div>
              <span>Toppings</span>
            </div>
          </span>
        </Link>

        <Link href="">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <span>Voucher</span>
            </div>
          </span>
        </Link>

        <Link href="">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faStore} />
              </div>
              <span>Store</span>
            </div>
          </span>
        </Link> */}

        <Link href="/admin/contact">
          <span className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center">
              <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                <FontAwesomeIcon icon={faComment} />
              </div>
              <span>Contact</span>
            </div>
          </span>
        </Link>
      </nav>
    </nav>
  );
};

export default AdminMenu;
