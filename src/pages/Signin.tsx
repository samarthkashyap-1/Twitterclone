import apple from "../assets/icons8-apple.svg";

import logo from "../assets/icons8-twitterblack.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

interface SigninpassProps {
  setshowModal: (value: boolean) => void;
  emailcheck: string;
}

const Signinpass: React.FC<SigninpassProps> = ({
  setshowModal,
  emailcheck,
}) => {
  const [dull, setdull] = useState(true);
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlepass: React.ChangeEventHandler<any> = (e) => {
    e.preventDefault();
    if (e.target.value != null) {
      setdull(false);
    }
    if (e.target.value == null) {
      setdull(true);
    }

    setpassword(e.target.value);
  };
  const handlepassword = () => {
    if (password) {
      navigate("/");
      alert("Please try Signin with Google ");
    } else {
      alert("enter pass");
    }
  };

  return (
    <div>
      <div>
        <Link to="/">
          <button
            className="btn btn-sm text-white btn-circle btn-ghost absolute left-2 top-2"
            onClick={() => setshowModal(false)}
          >
            ✕
          </button>
        </Link>
      </div>
      <div className="absolute top-1 left-[45%]">
        <img
          src={logo}
          className="invert scale-50 opacity-80 mb-4 top-1"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="flex justify-center mt-20">
          <h1 className="font-twitnor text-3xl text-white opacity-90 font-bold">
            Enter your password
          </h1>
        </div>

        <div className="flex justify-center">
          <div className=" bg-[#101214] h-14  w-3/4 p-2 rounded-md font-twitnor">
            <p className="text-gray-500 text-xs">Email</p>
            <p className="text-gray-500 text-base">{emailcheck}</p>
          </div>
        </div>
        <div className="flex justify-center font-twitnor">
          <div className="relative " data-te-input-wrapper-init>
            <input
              type="Password"
              className="peer block min-h-[auto] w-[444px] h-14 rounded outline-1 outline-gray-700 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:outline-blue-500"
              id="Forminput"
              placeholder="Example label"
              onChange={handlepass}
            />
            <label
              htmlFor="Forminput"
              id="lab"
              className="Label ml-3 absolute text-[13px] -top-[2px] text-gray-600"
            >
              Password
            </label>
            <span className="text-[#1A8CD8] ml-2 text-sm tracking-tight cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-36">
          <button
            className={
              dull
                ? "bg-white h-12 text-black text-lg font-semibold font-twitnor w-3/4 p-2 rounded-full opacity-70"
                : "bg-white h-12 text-black text-lg font-semibold font-twitnor w-3/4 p-2 rounded-full opacity-100"
            }
            onClick={handlepassword}
          >
            Log in
          </button>
        </div>
      </div>
      <div className="flex ml-20 mt-5">
        <p className="text-gray-500  text-sm">
          Don't have an account?{" "}
          <span className="text-[#1A8CD8] cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

const Signinemail:React.FC<any> = ({ handleemail, setshowModal, checkmail }) => {
  const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <Link to="/">
          <button
            className="btn btn-sm text-white btn-circle btn-ghost absolute sm:scale-125 sm:top-3 sm:left-3 left-2 top-2"
            onClick={() => setshowModal(false)}
          >
            ✕
          </button>
        </Link>
      </div>
      <div className="absolute top-1 left-[45%]">
        <img
          src={logo}
          className="invert scale-50 opacity-80 mb-4 top-1"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-6  ">
        <div className="flex justify-center mt-20">
          <h1 className="font-twitnor text-3xl text-white opacity-90 font-bold">
            Sign in to Twitter
          </h1>
        </div>
        <div className="flex justify-center">
          <GoogleOAuthProvider clientId={clientId}>
            <div className="w-[300px] hover:opacity-90">
              <GoogleLogin
                text="signin_with"
                logo_alignment="center"
                width="300px"
                shape="pill"
                onSuccess={(credentialResponse) => {
                  const decoded = jwt_decode(
                    credentialResponse.credential as string
                  );
                  const credential = credentialResponse.credential as string;
                  localStorage.setItem("token", credential);
                  localStorage.setItem("userdata", JSON.stringify(decoded));

                  navigate("/home");
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </GoogleOAuthProvider>
        </div>
        <div className="flex justify-center cursor-pointer">
          <div className="bg-white flex rounded-full w-[300px] h-10 justify-center hover:opacity-90">
            <img src={apple} alt="" className="w-5 mr-1" />
            <p className="font-bold text-black text-sm my-auto">
              Sign Up With Apple
            </p>
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
              className="peer block min-h-[auto] w-[300px] h-14 rounded outline-1 outline-gray-700 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-0 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:outline-blue-500"
              id="Forminput"
              placeholder="H"
              onChange={handleemail}
            />
            <label
              htmlFor="Forminput"
              id="lab"
              className="Label ml-3 absolute text-[13px] -top-[2px] text-gray-600"
            >
              Phone, email, or username
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={checkmail}
            className="modal-top font-bold text-md text-black bg-white text-center  my-auto font-twitnor mt-0 rounded-full w-[300px] h-10 m-auto outline  outline-1 outline-gray-500   hover:bg-opacity-90 "
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
    </>
  );
};

const Signin:React.FC<any>=({ setshowModal })=> {
  const [pass, setpass] = useState(false);
  const [email, setemail] = useState(true);

  const [emailcheck, setemailcheck] = useState("");
  const handleemail:React.ChangeEventHandler<any> = (e) => {
    e.preventDefault();
    setemailcheck(e.target.value);
  };

  const checkmail = () => {
    if (emailcheck) {
      setpass(true);
      setemail(false);
    }
  };

  return (
    <div className="h-screen absolute z-10 bg-[#242D34] w-screen bg-opacity-60">
      <div className="h-[640px] w-[580px] bg-black top-10 left-[30%] relative rounded-xl text-white sm:w-screen sm:h-screen sm:top-0 sm:rounded-none sm:left-0 ">
        {pass && (
          <Signinpass setshowModal={setshowModal} emailcheck={emailcheck} />
        )}
        {email && (
          <Signinemail
            setshowModal={setshowModal}
            handleemail={handleemail}
            checkmail={checkmail}
          />
        )}
      </div>
    </div>
  );
}

export default Signin;
