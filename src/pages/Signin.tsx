
import apple from "../assets/icons8-apple.svg";
import google from "../assets/icons8-google.svg";
import logo from "../assets/icons8-twitterblack.svg";
import { Outlet, Link } from "react-router-dom";


function Signin() {

  return (
    <dialog id="mymodal3" className="modal bg-[#242D34] bg-opacity-60">
      <form
        method="dialog"
        className="modal-box bg-black  max-h-[700px] max-w-[600px]"
      >
        <button className="btn btn-sm text-white btn-circle btn-ghost absolute left-2 top-2">
          ✕
        </button>
        <div className="absolute top-1 left-[45%]">
          <img
            src={logo}
            className="invert scale-50 opacity-80 mb-4 top-1"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6 mt-16">
          <div className="flex justify-center">
            <h1 className="font-twitnor text-3xl text-white opacity-90 font-bold">
              Sign in to Twitter
            </h1>
          </div>
          <div className="flex justify-center cursor-pointer">
            <div className="bg-white flex rounded-full w-[300px] h-10 justify-center hover:opacity-90">
              <img src={google} alt="" className="w-5 mr-1" />
              <p className="font-bold text-sm my-auto">Sign Up With Google</p>
            </div>
          </div>
          <div className="flex justify-center cursor-pointer">
            <div className="bg-white flex rounded-full w-[300px] h-10 justify-center hover:opacity-90">
              <img src={apple} alt="" className="w-5 mr-1" />
              <p className="font-bold text-sm my-auto">Sign Up With Apple</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex justify-center w-72  h-3 mt-0">
              <hr className="bg-white w-36 my-auto opacity-20" />
              <p className="text-white mx-2 ">or</p>
              <hr className="bg-white w-36 my-auto opacity-20" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative " data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-[300px] h-14 rounded outline-1 outline-gray-500 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:outline-blue-500"
                id="exampleFormControlInput1"
                placeholder="Example label"
              />
              <label
                for="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lg transition-all duration-200 ease-out peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-500 dark:peer-focus:text-[#1A8CD8]"
              >
                Phone, email, or username
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => window.mymodal3.showModal()}
              className="font-bold text-md text-black bg-white text-center  my-auto font-twitnor mt-0 rounded-full w-[300px] h-10 m-auto outline  outline-1 outline-gray-500   hover:bg-opacity-90 "
            >
              Next
            </button>
          </div>
          <div className="flex justify-center">
            <button className="font-bold text-md text-white bg-black text-center  my-auto font-twitnor mt-0 rounded-full w-[300px] h-10 m-auto outline  outline-1 outline-gray-500   hover:bg-opacity-10 ">
              Forgot Password?
            </button>
          </div>
          <div className="flex justify-center my-8">
            <p className="text-gray-500 font-semibold font-twitnor text-sm">
              Don't have an account?{" "}
              <span className="text-[#1A8CD8] cursor-pointer hover:underline">
                Sign up
              </span>
            </p>
          </div>
        </div>
      </form>
    </dialog>
  );
}

export default Signin;
