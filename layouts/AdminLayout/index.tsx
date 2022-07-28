import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PrivateRoute from "../../components/PrivateRoute";
import { User } from "../../models/users";
import { signout } from "../../redux/authSlice";
import { RootState } from "../../redux/store";
import AdminMenu from "./Menu";

type AdminLayoutProps = {
  children: JSX.Element;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser) as User;
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(signout());
    toast.success("Đăng xuất thành công");
  };

  return (
    <PrivateRoute>
      <div>
        <section className="min-h-[calc(100vh-98px)] bg-gray-50 dashboard">
          <AdminMenu />

          <div className="ml-0 transition md:ml-60">
            <header className="z-20 left-0 md:left-60 fixed right-0 top-0 bg-white border-b h-14 px-4 flex justify-between items-center">
              <button
                id="btn-bars"
                className="md:hidden px-3 py-1 bg-gray-50 rounded-md text-gray-500 hover:bg-gray-200 hover:text-gray-600 transition ease-linear duration-200"
              >
                <i className="fas fa-bars" />
              </button>
              <form className="hidden md:flex items-center border-2 border-indigo-500 rounded-full px-2.5">
                <div className="text-gray-400">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <input type="text" placeholder="Search" className="px-2 py-1 outline-none rounded-full" />
              </form>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-5 w-5"
                    x-description="Heroicon name: outline/bell"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <div className="ml-3 relative group">
                  <div>
                    <button
                      type="button"
                      className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu-button"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      {currentUser.avatar && (
                        <Image
                          src={currentUser.avatar}
                          width={32}
                          height={32}
                          alt=""
                          className="object-cover rounded-full"
                        />
                      )}
                    </button>
                  </div>
                  <div className="hidden group-hover:block absolute right-0 top-[calc(100%+10px)] w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none before:content-[''] before:absolute before:top-[-10px] before:right-0 before:left-0 before:h-4">
                    <Link href="">
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</span>
                    </Link>
                    <button
                      onClick={handleSignout}
                      className="cursor-pointer w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Đăng xuất
                    </button>
                  </div>
                </div>
              </div>
            </header>

            <main>{children}</main>
          </div>
          <div className="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 hidden dashboard__overlay" />
        </section>
      </div>
    </PrivateRoute>
  );
};

export default AdminLayout;
