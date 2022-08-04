import React, { useEffect } from "react";
import Image from "next/image";
import { Product } from "../../models/product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addCmt, deleteCmt, getCommentsByProduct } from "../../redux/cmtSlice";
import moment from "moment";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../models/users";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

type CommentProps = {
  product: Product;
};

type Inputs = {
  content: string;
};

const Comment = ({ product }: CommentProps) => {
  const comments = useSelector((state: RootState) => state.comment.comments);
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  const currentUser = useSelector((state: RootState) => state.auth.currentUser) as User;
  const dispatch = useDispatch<any>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  useEffect(() => {
    if (product._id) {
      (async () => {
        await dispatch(getCommentsByProduct(product.slug)).unwrap();
      })();
    }
  }, [dispatch, product._id, product.slug]);

  const formatDate = (date: Date) => {
    const day = moment(date).format("DD");
    const month = moment(date).format("MM");
    const year = moment(date).format("YYYY");

    return `${day} Tháng ${month}, ${year}`;
  };

  const onSubmit: SubmitHandler<Inputs> = async ({ content }: Inputs) => {
    try {
      await dispatch(
        addCmt({
          productId: product._id!,
          userId: currentUser._id!,
          content,
          slug: product.slug,
        }),
      ).unwrap();

      toast.success("Bình luận thành công");
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveCmt = (id?: string) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa bình luận này?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteCmt(id!)).unwrap();
        Swal.fire("Thành công!", "Đã xóa bình luận", "success");
      }
    });
  };

  return (
    <section>
      <div>
        <ul className="flex pb-2">
          <li className="text-2xl font-semibold text-center uppercase">Nhận xét</li>
        </ul>
        <hr />
      </div>
      <section>
        {isLogged && (
          <form action="" className="px-3 py-2 border-2 border-[#4d8a54] mt-3" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="font-semibold text-xl">Nhận xét về {product.name}</h2>
            <div className="mt-2">
              <label htmlFor="" className="">
                Nhận xét của bạn
              </label>
              <textarea
                {...register("content", { required: "Vui lòng nhập nội dung bình luận" })}
                className="mt-5 w-full outline-none border  px-3 py-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]"
                id=""
                cols={30}
                rows={10}
                placeholder="Nhập nội dung bình luận"
              ></textarea>
              <div className="text-sm mt-0.5 text-red-500">{errors.content?.message}</div>
            </div>
            <button className="my-3 px-4 py-2 bg-[#4d8a54] font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
              Gửi đi
            </button>
          </form>
        )}
        <div>
          <ul className="mt-4 grid grid-cols-1 divide-y divide-dashed">
            {comments?.map((item, index) => (
              <li className="flex py-4" key={index}>
                <div className="w-16 h-16 object-cover rounded-full relative">
                  {item.user?.avatar && (
                    <Image
                      layout="fill"
                      alt=""
                      src={item.user?.avatar}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                </div>
                <div className="ml-2">
                  <span className="font-bold">{item.user?.name}</span>
                  <span className="pl-3 text-gray-500">({formatDate(item.createdAt!)})</span>
                  <p className="text-gray-900">{item.content}</p>
                  <ul className="text-gray-500 flex text-sm mt-1">
                    {isLogged && (currentUser.role || currentUser._id === item.userId) && (
                      <li
                        onClick={() => handleRemoveCmt(item._id)}
                        className="btn-remove transition hover:text-black cursor-pointer"
                      >
                        Xóa
                      </li>
                    )}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Comment;
