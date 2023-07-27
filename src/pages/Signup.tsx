import image from "../assets/twitter sign up.png";
import apple from "../assets/icons8-apple.svg";
import logo from "../assets/icons8-twitterblack.svg";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Outlet, Link } from "react-router-dom";
import Signin from "./Signin";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
  GoogleOAuthProvider,
  GoogleLogin,
} from "@react-oauth/google";
import jwt_decode from "jwt-decode";



function Signup() {
  const [showModal, setshowModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/login") {
      setshowModal(true);
    } else {
      setshowModal(false);
    }
  }, [location]);
  // Rest of your component code...
  // You can use "showModal" state here to conditionally render your modal or do other actions.

  const list = [
    "About",
    "Help Center",
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
    "Ads info",
    "Blog",
    "Status",
    "Careers",
    "Brand Resources",
    "Advertising",
    "Marketing",
    "Twitter for Business",
    "Developers",
    "Directory",
    "Settings",
  ];


  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;
  
  
  
  
  


  showModal ? disableBodyScroll(<Signup />) : enableBodyScroll(<Signup />);

  
  return (
    <div className="">
      {showModal && <Signin setshowModal={setshowModal} />}

      <div>
        <div className=" bg-[#000000]">
          <div className="flex">
            <div className="w-[54.5%] overflow-hidden">
              <img
                src={image}
                alt=""
                className=" h-screen scale-125 relative left-16"
              />
              <img
                src={logo}
                alt=""
                className="absolute w-56 top-60 left-80 invert scale-150"
              />
            </div>
            <div className="mb-12">
              <div className="flex flex-col gap-14 mt-8 ml-9 ">
                <div className="">
                  <img
                    src={logo}
                    alt=""
                    className="invert scale-90 opacity-80 "
                  />
                </div>
                <div className="mt-1">
                  <h1 className="text-6xl font-bold text-white font-twit tracking-tight opacity-90 ">
                    Happening now
                  </h1>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white font-twit tracking-tight opacity-90 ">
                    Join Twitter today.
                  </h1>
                </div>
              </div>

              <div className="flex flex-col mt-8 ml-9 gap-4">
                <GoogleOAuthProvider clientId={clientId}>
                  <div className="bg-white cursor-crosshair flex rounded-full w-[300px] h-10 justify-center hover:opacity-90">
                    <GoogleLogin
                      text="signup_with"
                      logo_alignment ="center"
                      width="300px"
                      shape="pill"
                      onSuccess={(credentialResponse) => {
                        const decoded = jwt_decode(
                          credentialResponse.credential
                        );
                        localStorage.setItem(
                          "token",
                          credentialResponse.credential
                        );
                        localStorage.setItem(
                          "userdata",
                          JSON.stringify(decoded)
                        );

                        navigate("/home");
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </div>
                </GoogleOAuthProvider>

                <div className="bg-white cursor-not-allowed flex rounded-full w-[300px] h-10 justify-center hover:opacity-90">
                  <img src={apple} alt="" className="w-5 mr-1" />
                  <p className="font-bold text-sm my-auto">
                    Sign Up With Apple
                  </p>
                </div>
              </div>
              <div className="flex justify-center w-72  h-5 mt-2 ml-9 ">
                <hr className="bg-white w-36 my-auto opacity-20" />
                <p className="text-white my-auto mx-2 mb-1">or</p>
                <hr className="bg-white w-36 my-auto opacity-20" />
              </div>
              <div className="mt-2 ml-9">
                <div className="bg-[#1A8CD8] cursor-not-allowed flex rounded-full w-[300px] h-10 justify-center hover:opacity-90  ">
                  <p className="font-bold text-md text-white my-auto font-twitnor">
                    Create Account
                  </p>
                </div>

                <p className="text-gray-500 text-xs mt-2 tracking-tight leading-3 font-twitnor">
                  By signing up, you agree to the{" "}
                  <span className="text-[#1A8CD8] opacity-100 cursor-pointer hover:underline">
                    Terms of Service{" "}
                  </span>{" "}
                  and{" "}
                  <span className="text-[#1A8CD8] opacity-100 cursor-pointer hover:underline">
                    Privacy <br /> Policy
                  </span>
                  , including{" "}
                  <span className="text-[#1A8CD8] opacity-100 cursor-pointer hover:underline">
                    Cookie Use
                  </span>
                  .
                </p>
              </div>
              <div className="ml-9 mt-16">
                <p className="text-white text-lg font-semibold font-twitnor">
                  Already have an account?
                </p>
                <Link to="/login">
                  <button
                    className="font-bold text-md text-[#1A8CD8] text-center  my-auto font-twitnor mt-4 rounded-full w-[300px] h-10 m-auto outline  outline-1 outline-gray-500   bg-[#1A8CD8] bg-opacity-0 hover:bg-opacity-10 "
                    onClick={() => {
                      setshowModal(true);
                      goToTop();
                    }}
                  >
                    Sign in
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <footer className="mt-2">
            <div className="h-16 ">
              <ul className="flex justify-evenly mx-12">
                {list.map((myList) => (
                  <li className="text-gray-500 text-[13px] mt-2 tracking-normal leading-3 font-twitnor cursor-pointer font-normal hover:underline ">
                    {myList}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-2">
                <p className=" text-gray-500 text-[13px] mt-1 tracking-normal leading-3 font-normal font-twitnor">
                  © 2023 X Corp.
                </p>
              </div>
            </div>
          </footer>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Signup;
