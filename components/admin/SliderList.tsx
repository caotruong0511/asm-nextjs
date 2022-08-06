import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { deleteSlide, getSlides } from "../../redux/slide";
import { RootState } from "../../redux/store";

type Props = {};

const SliderList = (props: Props) => {
  const news = useSelector((state: RootState) => state.slide.slides);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getSlides());
  }, [dispatch]);

  const handleRemove = (id: any) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa không ?",
      text: "Không thể hoàn tác sau khi xóa",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteSlide(id)).unwrap();
        Swal.fire("Thành công!", "Xoá thành công", "success");
      }
    });
  };

  return (
    <table className="min-w-full divide-y divide-gray-200" id="cate__list-table">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            STT
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {news?.map((item, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{++index}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.image}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div className="w-[70px] h-[50px] relative">
                <Image src={item.image} alt="" layout="fill" />
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <Link
                href={`/admin/slider/${item._id}`}
                className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Edit
              </Link>
              <button
                onClick={() => handleRemove(item._id)}
                className="cate__list-btn-delete h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SliderList;
