import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SmallLoading from "../../Components/Common/SmallLoading/SmallLoading";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/image.png";
import logo2 from "../../assets/image2.png";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [seePasswprd, setSeePassword] = useState(false);

  return (
    <section>
      <div className="hidden max-w-screen-xl mx-auto my-20 md:grid lg:grid-cols-2 gap-5 p-1">
        <div className="md:px-20 lg:px-2 lg:w-2/3">
          <h1 className="text-blue-600 text-4xl font-serif font-thin">LOGO</h1>
          <p className="text-3xl font-poppins font-semibold mt-5 mb-2">
            Sign In To Your Account
          </p>
          <p className=" text-base  text-justify font-medium font-poppins mb-10">
            Welcome Back! By click the sign up button, you're agree to Zenitood
            Terms and Service and acknlowledge the{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Privacy and Policy
            </span>
          </p>

          <form onSubmit={handleSubmit()}>
            <div className="form-control  ">
              <label className="label">
                {" "}
                <span className="label-text text-secondary font-bold">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="@username"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="input border p-2 rounded-md mt-1 input-bordered w-full"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full mt-5">
              <label className="label">
                {" "}
                <span className="label-text text-secondary font-bold">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered border p-2 rounded-md mt-1 w-full"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="relative form-control w-full mt-5">
              <div className="absolute top-10 right-5 z-40">
                {seePasswprd ? (
                  <p className="cursor-pointer">
                    <FaEye onClick={() => setSeePassword(!seePasswprd)} />
                  </p>
                ) : (
                  <FaEyeSlash
                    className="cursor-pointer"
                    onClick={() => setSeePassword(!seePasswprd)}
                  />
                )}
              </div>
              <label className="label">
                {" "}
                <span className="label-text text-secondary font-bold">
                  Password
                </span>
              </label>
              <input
                type={seePasswprd ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                className="input border p-2 rounded-md mt-1 input-primary w-full"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="relative form-control w-full mt-5">
              <div className="absolute top-10 right-5 z-40">
                {seePasswprd ? (
                  <FaEye
                    className="cursor-pointer"
                    onClick={() => setSeePassword(!seePasswprd)}
                  />
                ) : (
                  <FaEyeSlash
                    className="cursor-pointer"
                    onClick={() => setSeePassword(!seePasswprd)}
                  />
                )}
              </div>
              <label className="label">
                {" "}
                <span className="label-text text-secondary font-bold">
                  Confirm Password
                </span>
              </label>
              <input
                 type={seePasswprd ? "text" : "password"}
                placeholder="Re-type password"
                {...register("C_password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                className="input border p-2 rounded-md mt-1 input-primary w-full"
              />
              {errors.C_password && (
                <p className="text-red-500">{errors.C_password.message}</p>
              )}
            </div>

            <div className="flex gap-3 mt-5">
              <input
                className="my-auto cursor-pointer"
                type="checkbox"
                name="checkbox"
                id=""
              />
              <p className="text-blue-600 my-auto cursor-pointer">
                Accept Terms of Service
              </p>
            </div>

            <div className="text-center my-5">
              <button className="btn bg-blue-600 py-3  text-white w-2/3 mx-auto rounded-xl mt-2 ">
                {"signup "}
                {/* {loading ? <SmallLoading></SmallLoading> : "Sign Up"}{" "} */}
              </button>

              <div>
                {/* {signUpError && <p className="text-red-600">{signUpError}</p>} */}
              </div>
            </div>

            <div className="w-2/3 mx-auto">
              <p className="text-center text-base font-poppins">
                Already Have an Account?{" "}
                <Link to="/login" className="text-blue-600 cursor-pointer">
                  Log in
                </Link>
              </p>
            </div>

            {/* <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-2' value="SignUp" type="submit" /> */}
          </form>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute top-[40%] left-[28%] w-[340px] h-36 flex justify-center items-center bg-gray-700 opacity-80 rounded-2xl">
            <p className="text-xl font-poppins text-center text-white">
              <span className="text-blue-400 font-bold">Create Account</span>{" "}
              <br />
              Fill in Your Information
            </p>
          </div>
          <img className="rounded-2xl" src={logo} alt="logo" />
        </div>
      </div>

      <div className="md:hidden">
        <div
          className="h-screen bg-cover bg-center flex flex-col items-center justify-start"
          style={{ backgroundImage: `url(${logo2})` }}
        >
          <h1 className="text-blue-600 text-4xl font-serif font-thin mt-16">
            LOGO
          </h1>
          <p className="text-3xl font-poppins font-semibold mt-5 mb-2">
            Sign In To Your Account
          </p>
          <p className="px-5 text-white text-base  text-justify font-medium font-poppins mb-10">
            Welcome Back! By click the sign up button, you're agree to Zenitood
            Terms and Service and acknlowledge the{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Privacy and Policy
            </span>
          </p>

          <form
            className="bg-white w-full h-full px-4 pt-20 rounded-t-3xl"
            onSubmit={handleSubmit()}
          >
            <p className="text-center text-3xl font-poppins font-semibold">
              Sign In
            </p>
            <div className="form-control  ">
              <label className="label">
                {" "}
                <span className="label-text text-secondary font-bold">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="@username"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="input border p-2 rounded-md mt-1 input-bordered w-full"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full mt-5">
              <label className="label">
                {" "}
                <span className="label-text text-secondary font-bold">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered border p-2 rounded-md mt-1 w-full"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="relative form-control w-full mt-5">
              <div className="absolute top-10 right-5 z-40">
                {seePasswprd ? (
                  <FaEye
                    className="cursor-pointer"
                    onClick={() => setSeePassword(!seePasswprd)}
                  />
                ) : (
                  <FaEyeSlash
                    className="cursor-pointer"
                    onClick={() => setSeePassword(!seePasswprd)}
                  />
                )}
              </div>
              <label className="label">
                {" "}
                <span className="label-text text-secondary font-bold">
                  Password
                </span>
              </label>
              <input
                 type={seePasswprd ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                className="input border p-2 rounded-md mt-1 input-primary w-full"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="relative form-control w-full mt-5">
              <div className="absolute top-10 right-5 z-40">
                {seePasswprd ? (
                  <FaEye
                    className="cursor-pointer"
                    onClick={() => setSeePassword(!seePasswprd)}
                  />
                ) : (
                  <FaEyeSlash
                    className="cursor-pointer"
                    onClick={() => setSeePassword(!seePasswprd)}
                  />
                )}
              </div>
              <label className="label">
                {" "}
                <span className="label-text text-secondary font-bold">
                  Confirm Password
                </span>
              </label>
              <input
                 type={seePasswprd ? "text" : "password"}
                placeholder="Re-type password"
                {...register("C_password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                className="input border p-2 rounded-md mt-1 input-primary w-full"
              />
              {errors.C_password && (
                <p className="text-red-500">{errors.C_password.message}</p>
              )}
            </div>

            <div className="flex gap-3 mt-5">
              <input
                className="my-auto cursor-pointer"
                type="checkbox"
                name="checkbox"
                id=""
              />
              <p className="text-blue-600 my-auto cursor-pointer">
                Accept Terms of Service
              </p>
            </div>

            <div className="text-center my-5">
              <button className="btn bg-blue-600 py-3  text-white w-2/3 mx-auto rounded-xl mt-2 ">
                {"signup "}
                {/* {loading ? <SmallLoading></SmallLoading> : "Sign Up"}{" "} */}
              </button>

              <div>
                {/* {signUpError && <p className="text-red-600">{signUpError}</p>} */}
              </div>
            </div>

            <div className="w-2/3 mx-auto">
              <p className="text-center text-base font-poppins">
                Already Have an Account?{" "}
                <Link to="/login" className="text-blue-600 cursor-pointer">
                  Log in
                </Link>
              </p>
            </div>

            {/* <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-2' value="SignUp" type="submit" /> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
