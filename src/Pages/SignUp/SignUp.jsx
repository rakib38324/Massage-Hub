import React, { useContext, useState } from "react";
import SmallLoading from "../../Components/Common/SmallLoading/SmallLoading";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/image.png";
import logo2 from "../../assets/image2.png";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpError, setSignUPError] = useState("");
  const [condition, setCondition] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { createUser, updateUser, signUpWitGoogle, loading, setLoading } =
    useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(email, password);

    const toastId = toast.loading(`Processing...`);
    setLoading(true);

    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password are not matched.", {
        id: toastId,
        duration: 6000,
      });
      setSignUPError("Password and Confirm Password are not matched.");
      return;
    }

    setSignUPError("");
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            // saveUser(data.name,data.email);
            //Upload image and save database imgibb
            if (user.accessToken) {
              localStorage.setItem("accessToken", user.accessToken);
              setToken(user.accessToken);
            }
            toast.success("SignUp Successfully.", {
              id: toastId,
              duration: 3000,
            });
            setLoading(false);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        toast.error("Oops! Something want wrong. Try again leater.", {
          id: toastId,
          duration: 6000,
        });
        console.log(error);
        setLoading(false);
        setSignUPError(error?.message);
      });
  };

  const InputForm = () => {
    return (
      <div className="w-full h-full bg-white p-2 ">
        <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-secondary font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="@username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input border p-2 rounded-md mt-1 input-bordered w-full"
            />
          </div>
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
                Confirm Password
              </span>
            </label>
            <input
              type={seePassword ? "text" : "password"}
              placeholder="Re-type password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input border p-2 rounded-md mt-1 input-primary w-full"
            />
          </div>
          <div className="flex gap-3 mt-5">
            <input
              className="my-auto cursor-pointer"
              type="checkbox"
              onChange={() => setCondition(!condition)}
              name="checkbox"
            />
            <p className="text-blue-600 my-auto cursor-pointer">
              Accept Terms of Service
            </p>
          </div>
          {signUpError && <p className="text-red-600">{signUpError}</p>}
          <div className="text-center my-5">
            {condition ? (
              <button
                type="submit"
                className="flex justify-center items-center bg-blue-600 py-3 text-white w-2/3 mx-auto rounded-xl mt-2"
              >
                {loading ? <SmallLoading /> : "Sign Up"}
              </button>
            ) : (
              <p className="cursor-not-allowed flex justify-center items-center bg-blue-600 py-3 text-white w-2/3 mx-auto rounded-xl mt-2">
                {loading ? <SmallLoading /> : "Sign Up"}
              </p>
            )}
          </div>
          <div className="w-2/3 mx-auto">
            <p className="text-center text-base font-poppins">
              Already Have an Account?{" "}
              <Link to="/login" className="text-blue-600 cursor-pointer">
                Log in
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
          <h1 className="text-blue-600 text-4xl font-serif font-thin mt-20">
            LOGO
          </h1>
          <p className="text-xl text-center text-white font-poppins font-semibold my-10 mb-2">
            Create Account  <br /> Fill in Your Information
          </p>
          {/* <p className="px-5 text-white text-base  text-justify font-medium font-poppins mb-10">
            Welcome Back! By click the sign up button, you're agree to Zenitood
            Terms and Service and acknlowledge the{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Privacy and Policy
            </span>
          </p> */}

          <div className="w-full mt-8 pt-5 bg-white rounded-t-2xl">
            <p className="text-3xl text-center font-poppins font-semibold">Sign In</p>
          </div>

          {InputForm()}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
