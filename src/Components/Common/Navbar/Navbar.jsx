import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import profile from "../../../assets/profile.png";
import { FaAlignRight, FaRegBell } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
  }
  console.log(user);
  return (
    <div className="bg-white px-5 border-l">
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
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
          <div onClick={() => handleLogOut()} className="hidden md:flex gap-3 cursor-pointer">
            <p className="text-xl my-auto text-red-600">Log Out</p>
            <p className=" hover:bg-red-300 bg-red-200 p-2 rounded-full">
              <CiLogin className="my-auto text-red-600 text-3xl rounded-full " />
            </p>
          </div>
          <p className="md:hidden my-auto cursor-pointer">
            <FaAlignRight className="text-xl" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
