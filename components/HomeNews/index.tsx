import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const HomeNews = (props: Props) => {
  return (
    <div className="container-base">
      <h2 className="uppercase font-bebas text-4xl text-normal text-center">Tin tức nổi bật</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-6">
        <div>
          <div className="relative pt-[100%]">
            <Image
              src="https://bizweb.dktcdn.net/100/415/010/articles/untitled-1.jpg?v=1608884901087"
              layout="fill"
              alt=""
            />
          </div>

          <div className="py-2">
            <h2 className="text-normal font-bebas uppercase limit-line-2 text-2xl hover:text-[#4d8a54]">
              <Link href="">Nhâm nhi cà phê bao lâu nhưng bạn tận mắt nhìn kỹ xem hạt cà phê chưa?</Link>
            </h2>

            <p className="limit-line-5 leading-6 mt-2 text-justify">
              Cốc cafe vị đăng đắng, lẫn thêm chút ngọt bùi của sữa đặc sao mà gây nghiện đến thế. Không chỉ cuốn hút ở
              mùi vị, một cốc cafe sáng còn giúp ngày mới tràn đầy năng lượng với người trẻ, sẵn sàng ch...
            </p>
          </div>
        </div>

        <div>
          <div className="relative pt-[100%]">
            <Image
              src="https://bizweb.dktcdn.net/100/415/010/articles/untitled-1.jpg?v=1608884901087"
              layout="fill"
              alt=""
            />
          </div>

          <div className="py-2">
            <h2 className="text-normal font-bebas uppercase limit-line-2 text-2xl hover:text-[#4d8a54]">
              <Link href="">Nhâm nhi cà phê bao lâu nhưng bạn tận mắt nhìn kỹ xem hạt cà phê chưa?</Link>
            </h2>

            <p className="limit-line-5 leading-6 mt-2 text-justify">
              Cốc cafe vị đăng đắng, lẫn thêm chút ngọt bùi của sữa đặc sao mà gây nghiện đến thế. Không chỉ cuốn hút ở
              mùi vị, một cốc cafe sáng còn giúp ngày mới tràn đầy năng lượng với người trẻ, sẵn sàng ch...
            </p>
          </div>
        </div>

        <div>
          <div className="relative pt-[100%]">
            <Image
              src="https://bizweb.dktcdn.net/100/415/010/articles/untitled-1.jpg?v=1608884901087"
              layout="fill"
              alt=""
            />
          </div>

          <div className="py-2">
            <h2 className="text-normal font-bebas uppercase limit-line-2 text-2xl hover:text-[#4d8a54]">
              <Link href="">Nhâm nhi cà phê bao lâu nhưng bạn tận mắt nhìn kỹ xem hạt cà phê chưa?</Link>
            </h2>

            <p className="limit-line-5 leading-6 mt-2 text-justify">
              Cốc cafe vị đăng đắng, lẫn thêm chút ngọt bùi của sữa đặc sao mà gây nghiện đến thế. Không chỉ cuốn hút ở
              mùi vị, một cốc cafe sáng còn giúp ngày mới tràn đầy năng lượng với người trẻ, sẵn sàng ch...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
