import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa";
import {useState } from "react";
import useAuth from "../hooks/useAuth";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {signInUser, googleLogin, FBSignIn} = useAuth();
    const [showPass, setShowPass] = useState(false);

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        signInUser(email, password)
        .then((result) => {
        console.log(result.user);

       
      })
      .catch((error) => {
        toast("Check if Email and password is correct", { autoClose: 2000 });
        console.log("error", error.message);
      });
        
    };


    const handleGoogleSignIn = () => {
        googleLogin()
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.log("error", error.message);
          });
      };
    
      const handleFBignIn = () => {
        FBSignIn()
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.log("error", error.message);
          });
      };

    return (
        <div>
      <div>
        <h2 className="text-3xl my-10 text-center">Please Login</h2>
        <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
              <span onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaRegEyeSlash /> : <LuEye />}
              </span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-blue-500 from-10% via-yellow-500 via-30% to-emerald-500 text-white">Login</button>
          </div>
        </form>
        <div>
          <h3 className="text-center py-5 text-lg text-[#]">Or Login With</h3>
          <div className="flex justify-center pb-5 items-center gap-5">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center gap-1 btn bg-[#e9d5aa] text-lg"
            >
              <FcGoogle />
              Google
            </button>
            <button
              onClick={handleFBignIn}
              className="flex items-center gap-1 btn bg-[#e9d5aa] text-lg"
            >
              <SiFacebook />
              Facebook
            </button>
          </div>
        </div>
        <p className="text-center mt-4">
          Do not have an account{" "}
          <Link className="text-blue-600 font-bold" to="/signUp">
            Register
          </Link>
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    );
};

export default Login;