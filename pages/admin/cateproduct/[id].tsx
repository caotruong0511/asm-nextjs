import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AdminLayout } from "../../../layouts";
import { NextPageWithLayout } from "../../../models/layout";
import { toast } from "react-toastify";
import { uploadImage } from "../../../utils";
import Image from "next/image";
import { type } from "os";
import { addCateProduct, getone, updateCateProduct } from "../../../redux/cateProductSlice";
import { useRouter } from "next/router";

type Props = {};
type cateProduct = {
  name: string;
  image: {
    0: File;
  };
};
const EditCateProduct: NextPageWithLayout = (props: Props) => {
    const [preview, setPreview] = useState<string>();
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const { id } = router.query;
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<cateProduct>();

  const onSubmit: SubmitHandler<cateProduct> = async (values: cateProduct) => {
    try {
      if (typeof values.image === "object") {
      const { data } = await uploadImage(values.image[0]);
      values.image = data.url;
      }
      await dispatch(updateCateProduct(values)).unwrap();
      toast.success("Cập nhật thành công");
      router.push("/admin/cateproduct");
      reset();
      setPreview("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
  console.log(id);
     
        const {cateproduct}=  await dispatch(getone(id)).unwrap();
        console.log(cateproduct);
        
        reset(cateproduct);
        setPreview(cateproduct.image);
     
    })();
  }, [dispatch,id, reset]);
  return (
    <>
      <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
            Products
          </h5>
          <span>Add Product</span>
        </div>
        <Link href="/admin/cateproduct">
          <button
            type="button"
            className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            DS cateProduct
          </button>
        </Link>
      </header>

      <div className="p-6 mt-24 overflow-hidden">
        <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <span className="font-semibold mb-4 block text-xl">Thông tin chi tiết danh mục:</span>
              <div className="grid grid-cols-6 gap-3">
                <div className="col-span-6">
                  <label htmlFor="form__add-user-fullname" className="block text-sm font-medium text-gray-700">
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Vui lòng nhập tên sản phẩm" })}
                    id="form__add-user-fullname"
                    className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Nhập tên đầy đủ"
                  />
                  <div className="text-sm mt-0.5 text-red-500">{errors.name?.message}</div>
                </div>

                {/* <div className="col-span-6 md:col-span-3">
                <label htmlFor="form__add-user-role" className="block text-sm font-medium text-gray-700">
                  Vai trò
                </label>
                <select
                  id="form__add-user-role"
                  {...register("role", { required: "Vui lòng chọn vai trò" })}
                  defaultValue={0}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">-- Chọn vai trò --</option>
                  <option value={0}>Khách hàng</option>
                  <option value={1}>Admin</option>
                </select>
                <div className="text-sm mt-0.5 text-red-500">{errors.role?.message}</div>
              </div> */}

                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-700">Xem trước ảnh</label>
                  <div className="mt-1 w-40 h-40 relative">
                    <Image
                      src={
                        preview ||
                        "https://res.cloudinary.com/levantuan/image/upload/v1644302455/assignment-js/thumbnail-image-vector-graphic-vector-id1147544807_ochvyr.jpg"
                      }
                      alt="Preview Image"
                      className="h-40 w-40 rounded-full object-cover"
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">Ảnh danh mục</label>
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
                          htmlFor="form__add-user-image"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="form__add-user-image"
                            {...register("image")}
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
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {" "}
                Cập nhật{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
EditCateProduct.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default EditCateProduct;
