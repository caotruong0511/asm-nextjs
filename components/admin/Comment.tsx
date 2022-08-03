import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getNews, deleteNews } from "../../redux/newsSlice";
import Swal from "sweetalert2";
import Image from "next/image";
import { deleteCmt, getCmt } from "../../redux/cmtSlice";

type Props = {};

const CommentList = (props: Props) => {
  const cmt = useSelector((state: RootState) => state.comment.comments);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getCmt());
  }, [dispatch]);

  const handleRemove = (id: any) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa không?",
      text: "Không thể hoàn tác sau khi xóa",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteCmt(id)).unwrap();
        Swal.fire("Thành công!", "Xóa thành công.", "success");
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
            Id
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            nội dung
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ở sản phẩm
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            do user đánh giá
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Thumbnail
          </th>
          {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Description
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Content
          </th> */}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {cmt?.map((item, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{++index}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <Link href={`/danh-muc/`} className="hover:underline">
                {item._id}
              </Link>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.content}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.productId}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.userId}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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

export default CommentList;
