import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const CartNav = (props: Props) => {
  const router = useRouter();

  return (
    <section className="container max-w-6xl mx-auto px-3 mt-10">
      <ul className="flex justify-center items-center">
        <li className="text-2xl px-2">
          <Link href="/cart">
            <span
              className={`${
                router.pathname === "/cart" ? "text-black" : "text-gray-400"
              } cursor-pointer uppercase transition ease-linear duration-200 hover:text-black`}
            >
              SHOPPING CART
            </span>
          </Link>
        </li>
        <li className="text-md text-gray-400 px-2 hidden md:block">
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li className="text-2xl px-2">
          <Link href="/checkout">
            <span
              className={`${
                router.pathname === "/checkout" ? "text-black" : "text-gray-400"
              } cursor-pointer uppercase transition ease-linear duration-200 hover:text-black`}
            >
              Checkout details
            </span>
          </Link>
        </li>
        <li className="text-md text-gray-400 px-2 hidden md:block">
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li className="text-2xl px-2">
          <span
            className={`${
              router.pathname === "/thankyou" ? "text-black" : "text-gray-400"
            } cursor-pointer uppercase transition ease-linear duration-200 hover:text-black`}
          >
            Order Complete
          </span>
        </li>
      </ul>
    </section>
  );
};

export default CartNav;
