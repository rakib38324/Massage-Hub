import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import profile from "../../../assets/profile.png";
import { FaAlignRight, FaRegBell } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { routers } from "../../../Pages/Home/Home";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const handleLogOut = () => {
    logOut();
  };
  console.log(user);
  return (
    <div className="relative bg-white px-5 border-l">
      <div className="flex justify-between items-center md:py-5">
        <p className="md:hidden text-blue-600 text-center text-2xl font-serif font-thin my-5">
          LOGO
        </p>
        <div className="hidden md:flex gap-4">
          <div>
            <img
              className="size-12 rounded-full"
              src={user?.photoURL ? user?.photoURL : profile}
              alt="Profile Picture"
            />
          </div>

          <div>
            <div className="flex justify-between">
              <p>{user?.displayName ? user?.displayName : "Sagor Soni"}</p>
              <div className="my-auto cursor-pointer">
                <svg
                  width="13"
                  height="7"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0.841064L6.5 6.15883L1 0.841064"
                    stroke="#152A16"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <p>{user?.email ? user?.email : "sagar@gmail.com"}</p>
          </div>
        </div>

        <div className="flex gap-3 justify-between ">
          <div className="my-auto border p-3 rounded-full cursor-pointer">
            <FaRegBell className="text-xl my-auto" />
          </div>
          <span className="border hidden md:block"></span>
          <div
            onClick={() => handleLogOut()}
            className="hidden lg:flex gap-3 cursor-pointer"
          >
            <p className="text-xl my-auto text-red-600">Log Out</p>
            <p className=" hover:bg-red-300 bg-red-200 p-2 rounded-full">
              <CiLogin className="my-auto text-red-600 text-3xl rounded-full " />
            </p>
          </div>
          <p className="lg:hidden my-auto cursor-pointer">
            <FaAlignRight
              onClick={() => setMobileNavbar(!mobileNavbar)}
              className="text-xl"
            />
          </p>
        </div>
      </div>

      {mobileNavbar && (
        <div className="lg:hidden">
          <div className="absolute top-0 left-0 w-full h-screen bg-gray-200 z-40 opacity-50"></div>
          <div className="w-2/3 min-h-screen bg-white absolute top-0 right-0 z-50">
            <div className="bg-blue-600 lg:flex gap-4 pr-5 pb-5">
              <p className="lg:hidden my-auto cursor-pointer pt-5 pl-6">
                <FaAlignRight
                  onClick={() => setMobileNavbar(!mobileNavbar)}
                  className="text-xl text-white rotate-180"
                />
              </p>

              <div className="flex justify-end mt-10">
                <img
                  className="size-24 rounded-full"
                  src={user?.photoURL ? user?.photoURL : profile}
                  alt="Profile Picture"
                />
              </div>

              <p className="text-end text-xl text-white font-bold font-poppins">
                {user?.displayName ? user?.displayName : "Sagor Soni"}
              </p>

              <p className="text-end">
                {user?.email ? user?.email : "sagar@gmail.com"}
              </p>
            </div>

            <div className="mt-5 mr-2">
              {routers?.map((router) => (
                <div key={router?.index}>
                  {router?.index === 6 && <hr className="mx-4" />}
                  <div
                    className={`${
                      pageNumber === router?.index &&
                      "bg-blue-200 border-l-4 border-l-blue-600"
                    } py-4 pl-6 cursor-pointer hover:bg-blue-200`}
                  >
                    {router.name}
                  </div>
                </div>
              ))}

              <div
                onClick={() => handleLogOut()}
                className="ml-5 flex gap-3 cursor-pointer"
              >
                <p className=" hover:bg-red-300 bg-red-200 p-2 rounded-full">
                  <CiLogin className="my-auto text-red-600 text-xl rounded-full " />
                </p>
                <p className="text-lg font-bold my-auto text-red-600">Log Out</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
