import Image from "next/image";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { NextPageWithLayout } from "../../../../models/layout";
import { AdminLayout } from "../../../../layouts";
import { uploadImage } from "../../../../utils";

import { addSlide } from "../../../../redux/slide";
import Head from "next/head";

type Props = {};

type Inputs = {
  image: { 0: File };
  url: string;
  title: string;
};
const Add: NextPageWithLayout = (props: Props) => {
  const [preview, setPreview] = useState<string>();
  const dispatch = useDispatch<any>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
    try {
      const { data } = await uploadImage(values.image[0]);
      values.image = data.url;

      await dispatch(addSlide(values)).unwrap();
      toast.success("Thêm User thành công");
      reset();
      setPreview("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-[150px] mx-3">
      <Head>
        <title>Add Slider</title>
      </Head>
      <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
            Slider
          </h5>
          <span>Add Slider</span>
        </div>
        <Link href="/admin/slider">
          <button
            type="button"
            className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            DS Slider
          </button>
        </Link>
      </header>
      <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-span-6 md:col-span-3">
          <label htmlFor="form__add-sldier-title" className="block text-sm font-medium text-gray-700">
            title
          </label>
          <input
            type="text"
            {...register("title", { required: "Vui lòng nhập số title" })}
            id="form__add-sldier-title"
            className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Nhập Title"
          />
          <div className="text-sm mt-0.5 text-red-500">{errors.title?.message}</div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <label htmlFor="form__add-user-phone" className="block text-sm font-medium text-gray-700">
            Link
          </label>
          <input
            type="text"
            {...register("url", { required: "Vui lòng nhập Linki" })}
            id="form__add-user-phone"
            className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="Nhập Linki"
          />
          <div className="text-sm mt-0.5 text-red-500">{errors.url?.message}</div>
        </div>
        <div className="col-span-3">
          <label className="block text-sm font-medium text-gray-700">Xem trước ảnh</label>
          <div className="mt-1 w-40 h-40 relative">
            <Image
              src={
                preview ||
                "https://res.cloudinary.com/levantuan/image/upload/v1644302455/assignment-js/thumbnail-image-vector-graphic-vector-id1147544807_ochvyr.jpg"
              }
              alt="Preview Image"
              className="h-40 w-40 "
              layout="fill"
            />
          </div>
        </div>
        <div className="col-span-6">
          <label className="block text-sm font-medium text-gray-700">Ảnh </label>
          <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="form__add-img"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="form__add-img"
                    {...register("image", { required: "Vui lòng chọn ảnh" })}
                    onChange={(e: any) => {
                      setPreview(URL.createObjectURL(e.target.files[0]));
                    }}
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          <div className="text-sm mt-0.5 text-red-500">{errors.image?.message}</div>
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Thêm img
        </button>
      </form>
    </div>
  );
};
Add.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default Add;
