import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { addContact } from "../../redux/contactSlice";
import { Contact } from "../../models/contact";
import Head from "next/head";
import { useDispatch } from "react-redux";
type Props = {};

const Contact = (props: Props) => {
  const dispatch = useDispatch<any>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>();
  const onSubmit: SubmitHandler<Contact> = async (values: Contact) => {
    try {
      await dispatch(addContact(values)).unwrap();
      toast.success("Gửi phản hồi thành công");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-base">
      <Head>
        <title>Contact</title>
      </Head>
      <ul className="flex py-5">
        <li>
          <Link href="/">Trang chủ</Link>
        </li>{" "}
        <span className="px-3 ">/</span>
        <li>
          <Link href="/">Liên hệ</Link>
        </li>
      </ul>

      <div className="grid lg:grid-cols-2  md:grid-cols-1 py-[40px]  ">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904611732553!2d105.81388241542348!3d21.03650239288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gY8O0bmcgbmdo4buHIFNBUE8!5e0!3m2!1svi!2s!4v1555900531747!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
          ></iframe>
        </div>
        <div className="px-[30px]">
          <h2 className="text-[40px] font-bebas">GỬI THÔNG TIN CHO CHÚNG TÔI</h2>
          <p>Hãy liên hệ ngay với chúng tôi để nhận được nhiều ưu đãi hấp dẫn dành cho bạn!</p>
          <p></p>
          <div className="flex items-center my-2">
            <svg
              className="h-4 w-4 text-green-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /> <circle cx="12" cy="10" r="3" />
            </svg>
            Địa chỉ : Tâng 6 toà nhà Ladeco, 266 Đội Cấn, Hà Nội
          </div>
          <div className="flex items-center my-2">
            <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email:{" "}
            <Link href="/" className="hover:text-green-600">
              hellocafein@gmail.com
            </Link>
          </div>{" "}
          <div className="flex items-center my-2">
            <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Hotline: 1900 6750
          </div>
          <div className="text-center  flex">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="text"
                  {...register("name", { required: "Vui lòng nhập họ tên" })}
                  className=" bg-white border border-gray-200 text-black h-[50px] mx-[10px] my-[5px] font-quicksand placeholder:text-gray-300 placeholder:italic placeholder:uppercase w-96 px-5 py-2 rounded-full outline-none "
                  placeholder="Họ và tên "
                />
              </div>

              <div>
                <input
                  type="text"
                  {...register("email", { required: "Vui lòng nhập email" })}
                  className=" bg-white border border-gray-200 text-black h-[50px] mx-[10px] my-[5px] font-quicksand placeholder:text-gray-300 placeholder:italic placeholder:uppercase w-96 px-5 py-2 rounded-full outline-none "
                  placeholder="Email "
                />
              </div>

              <div>
                <input
                  type="number"
                  {...register("phone", { required: "Vui lòng nhập sđt" })}
                  className=" bg-white border border-gray-200 text-black h-[50px] mx-[10px] my-[5px] font-quicksand placeholder:text-gray-300 placeholder:italic placeholder:uppercase w-96 px-5 py-2 rounded-full outline-none "
                  placeholder="Điện thoại"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  rows={4}
                  cols={4}
                  {...register("message", { required: "Vui lòng nhập message" })}
                  className=" bg-white border border-gray-200 text-black mx-[10px] my-[5px] font-quicksand  placeholder:text-gray-300 placeholder:italic placeholder:uppercase w-96 px-5 py-2 rounded-3xl outline-none  h-[100px]"
                  placeholder="Nội dung"
                ></textarea>
              </div>
              <p></p>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Gửi thông tin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
