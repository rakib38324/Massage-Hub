import React, { useContext, useState } from "react";
import SmallLoading from "../../Components/Common/SmallLoading/SmallLoading";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/image.png";
import logo2 from "../../assets/image2.png";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { signIn, signUpWitGoogle, loading, setLoading } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const toastId = toast.loading(`Processing...`);
    setLoading(true);

    setLoginError("");
    signIn(email, password)
      .then((result) => {
        const user = result.user;

        if (user.accessToken) {
          localStorage.setItem("accessToken", user.accessToken);
        }
        toast.success("Login Successfully.", {
          id: toastId,
          duration: 3000,
        });
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Oops! Something want wrong. Try again leater.", {
          id: toastId,
          duration: 6000,
        });
        console.log(error);
        setLoading(false);
        setLoginError(error?.message);
      });
  };

  const handleSignUpnWithGoogle = () => {
    const toastId = toast.loading("Login with google...");
    setLoading(true);

    signUpWitGoogle()
      .then((result) => {
        const user = result.user;
        // console.log(user.email)

        //check the user is alive in our database,
        //if user email found we can call for token,
        //else at first create user then send database and then cal for token
        if (user.accessToken) {
          localStorage.setItem("accessToken", user.accessToken);
        }
        toast.success("Login Successfully.", {
          id: toastId,
          duration: 3000,
        });
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Oops! Something want wrong. Try again leater.", {
          id: toastId,
          duration: 6000,
        });
        console.log(error);
        setLoading(false);
        setLoginError(error?.message);
      });
  };

  const InputForm = () => {
    return (
      <div className={`w-full h-full bg-white p-2`}>
        <form onSubmit={handleLogin}>
          <div className="form-control w-full mt-5">
            <label className="label">
              <span className="label-text text-secondary font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered border p-2 rounded-md mt-1 w-full"
            />
          </div>

          <div className="relative form-control w-full mt-5">
            <div className="absolute top-10 right-5 z-40">
              {seePassword ? (
                <div
                  onClick={() => setSeePassword(!seePassword)}
                  className="cursor-pointer"
                >
                  <FaEye className="text-xl" />
                </div>
              ) : (
                <div
                  onClick={() => setSeePassword(!seePassword)}
                  className="cursor-pointer"
                >
                  <FaEyeSlash className="text-xl" />
                </div>
              )}
            </div>
            <label className="label">
              <span className="label-text text-secondary font-bold">
                Password
              </span>
            </label>
            <input
              type={seePassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input border p-2 rounded-md mt-1 input-primary w-full"
            />
          </div>

          {loginError && <p className="text-red-600">{loginError}</p>}
          <div className="text-center my-5">
            <button
              type="submit"
              className="flex justify-center items-center bg-blue-600 py-3 text-white w-2/3 mx-auto rounded-xl mt-2"
            >
              {loading ? <SmallLoading /> : "Sign In"}
            </button>
          </div>
          <div className="w-2/3 mx-auto">
            <p className="text-center text-base font-poppins">
              Don't Have Account?{" "}
              <Link to="/signup" className="text-blue-600 cursor-pointer">
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  };

  return (
    <section>
      {/*===========================> Big schreen view <===========================*/}
      <div className="hidden max-w-screen-xl mx-auto my-20 md:grid lg:grid-cols-2 gap-5 p-1">
        <div className="md:px-20 lg:px-2 lg:w-2/3">
          <h1 className="text-blue-600 text-4xl font-serif font-thin">LOGO</h1>
          <p className="text-3xl  font-poppins font-semibold mt-5 mb-2">
            Log In To Your Account
          </p>
          <p className=" text-base  font-medium font-poppins mb-10">
            Welcome Back! Select a method to log in:
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div
              onClick={() => handleSignUpnWithGoogle()}
              className="flex justify-center items-center  gap-2 bg-gradient-to-r from-slate-200 to-slate-50 shadow-lg rounded-lg p-3 cursor-pointer"
            >
              <FcGoogle className="my-auto text-2xl" />
              <p className="text-lg">Google</p>
            </div>
            <div className="flex justify-center items-center gap-2 bg-blue-600 shadow-lg rounded-lg p-3 cursor-pointer">
              <GrFacebookOption className="my-auto text-2xl text-white" />
              <p className="text-lg text-white">Facebook</p>
            </div>
          </div>

          {InputForm()}
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

      {/*===========================> Mobile schreen view <===========================*/}
      <div className="md:hidden">
        <div
          className="h-screen bg-cover bg-center flex flex-col items-center justify-start"
          style={{ backgroundImage: `url(${logo2})` }}
        >
          <h1 className="text-blue-600 text-center text-4xl font-serif font-thin mt-20">
            LOGO
          </h1>
          <p className="w-1/2 mx-auto text-xl font-semibold  text-white text-center font-poppins my-10">
            Sign In to view all the massage therapists
          </p>
          <div className="w-full bg-white pt-10 rounded-t-2xl">
            <div className="px-5">
              <p className="text-3xl text-center  font-poppins font-semibold mt-5 mb-2">
                Log In To Your Account
              </p>
              <p className=" text-base text-center  font-medium font-poppins mb-10">
                Welcome Back! Select a method to log in:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => handleSignUpnWithGoogle()}
                  className="flex justify-center items-center  gap-2 bg-gradient-to-r from-slate-200 to-slate-50 shadow-lg rounded-lg p-3 cursor-pointer"
                >
                  <FcGoogle className="my-auto text-2xl" />
                  <p className="text-lg">Google</p>
                </div>
                <div className="flex justify-center items-center gap-2 bg-blue-600 shadow-lg rounded-lg p-3 cursor-pointer">
                  <GrFacebookOption className="my-auto text-2xl text-white" />
                  <p className="text-lg text-white">Facebook</p>
                </div>
              </div>
            </div>
          </div>
          {InputForm()}
        </div>
      </div>
    </section>
  );
};

export default Login;
