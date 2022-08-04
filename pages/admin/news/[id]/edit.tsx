import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AdminLayout } from "../../../../layouts";
import { NextPageWithLayout } from "../../../../models/layout";
import { getCateNews } from "../../../../redux/cateNewsSlice";
import { getNew, updateNews } from "../../../../redux/newsSlice";
import { RootState } from "../../../../redux/store";
import { uploadImage } from "../../../../utils";

type Props = {};

type Inputs = {
  title: string;
  slug: string;
  thumbnail: {
    0: File;
  };
  desc: string;
  content: string;
  categoryId: string;
};

const UpdateNews: NextPageWithLayout = (props: Props) => {
  const [preview, setPreview] = useState<string>();
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const { id } = router.query;
  const cateNews = useSelector((state: RootState) => state.new.cateNews);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
    try {
      if (typeof values.thumbnail === "object") {
        const { data } = await uploadImage(values.thumbnail[0]);
        values.thumbnail = data.url;
      }
      await dispatch(updateNews(values)).unwrap();
      toast.success("Cập nhật bài viết thành công");
      router.push("/admin/news");
    } catch (error) {}
  };

  useEffect(() => {
    (async () => {
      try {
        const news = await dispatch(getNew(id)).unwrap();
        await dispatch(getCateNews()).unwrap();
        reset(news);
        setPreview(news.thumbnail);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, id, reset]);
  return (
    <>
      <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
            News
          </h5>
          <span>Thêm bài viết</span>
        </div>

        <div>
          <Link href="/admin/news">
            <button
              type="button"
              className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              DS bài viết
            </button>
          </Link>
        </div>
      </header>

      <div className="p-6 mt-24 overflow-hidden">
        <form action="" method="POST" id="form__add-cate" onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <span className="font-semibold mb-4 block text-xl">Thông tin chi tiết bài viết:</span>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="form__add-cate-title" className="block text-sm font-medium text-gray-700">
                    Tiêu đề bài viết
                  </label>
                  <input
                    type="text"
                    {...register("title", { required: "Vui lòng nhập đầy đủ" })}
                    id="form__add-cate-title"
                    className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Nhập tiêu đề bài viết"
                  />
                  <div className="error-image text-sm mt-0.5 text-red-500">{errors.title?.message}</div>
                </div>

                <div className="col-span-6 md:col-span-3">
                  <label htmlFor="form__add-user-role" className="block text-sm font-medium text-gray-700">
                    Danh mục
                  </label>
                  <select
                    id="form__add-user-role"
                    {...register("categoryId", { required: "Vui lòng chọn danh mục" })}
                    defaultValue={0}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">-- Chọn danh mục --</option>
                    {cateNews?.map((e, index) => (
                      <>
                        <option key={index} value={e._id}>
                          {e.name}
                        </option>
                      </>
                    ))}
                  </select>
                  <div className="text-sm mt-0.5 text-red-500">{errors.categoryId?.message}</div>
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">Ảnh bài viết</label>
                  <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="form__add-user-avatar"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            {...register("thumbnail")}
                            onChange={(e: any) => {
                              setPreview(URL.createObjectURL(e.target.files[0]));
                            }}
                            id="form__add-user-avatar"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                  <div className="text-sm mt-0.5 text-red-500">{errors.thumbnail?.message}</div>
                </div>

                <div className="col-span-6">
                  <label htmlFor="form__add-cate-title" className="block text-sm font-medium text-gray-700">
                    Mô tả
                  </label>
                  <textarea
                    id=""
                    {...register("desc", { required: "Vui lòng nhập đầy đủ" })}
                    cols={30}
                    rows={10}
                    placeholder="Nhập mô tả"
                    className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  ></textarea>
                  <div className="error-image text-sm mt-0.5 text-red-500">{errors.desc?.message}</div>
                </div>

                <div className="col-span-6">
                  <label htmlFor="form__add-cate-title" className="block text-sm font-medium text-gray-700">
                    Nội dung
                  </label>
                  <textarea
                    id=""
                    {...register("content", { required: "Vui lòng nhập đầy đủ" })}
                    cols={30}
                    rows={10}
                    placeholder="Nhập nội dung bài viết"
                    className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  ></textarea>
                  <div className="error-image text-sm mt-0.5 text-red-500">{errors.content?.message}</div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {" "}
                Cập nhật bài viết{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

UpdateNews.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default UpdateNews;
