import image from "./assets/twitter sign up.png";
import apple from "./assets/icons8-apple.svg";
import google from "./assets/icons8-google.svg";
import logo from "./assets/icons8-twitterblack.svg";

function Signup() {
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

  return (
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
              <img src={logo} alt="" className="invert scale-90 opacity-80 " />
            </div>
            <div className="mt-1">
              <h1 className="text-7xl font-bold text-white font-twit tracking-tight opacity-90 ">
                Happening now
              </h1>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white font-twit tracking-tight opacity-90 ">
                Join Twitter today.
              </h1>
            </div>
          </div>

          <div className="flex flex-col mt-8 ml-9 gap-4">
            <a href="" className="cursor-crosshair">
              <div className="bg-white flex rounded-full w-[300px] h-10 justify-center hover:opacity-90">
                <img src={google} alt="" className="w-5 mr-1" />
                <p className="font-bold text-sm my-auto">Sign Up With Google</p>
              </div>
            </a>
            <a href="" className="cursor-crosshair">
              <div className="bg-white flex rounded-full w-[300px] h-10 justify-center hover:opacity-90">
                <img src={apple} alt="" className="w-5 mr-1" />
                <p className="font-bold text-sm my-auto">Sign Up With Apple</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center w-72  h-5 mt-2 ml-9 ">
            <hr className="bg-white w-36 my-auto opacity-20" />
            <p className="text-white my-auto mx-2 mb-1">or</p>
            <hr className="bg-white w-36 my-auto opacity-20" />
          </div>
          <div className="mt-2 ml-9">
            <a href="">
              <div className="bg-[#1A8CD8] flex rounded-full w-[300px] h-10 justify-center hover:opacity-90  ">
                <p className="font-bold text-md text-white my-auto font-twit">
                  Create Account
                </p>
              </div>
            </a>
            <p className="text-gray-500 text-xs mt-2 tracking-tight leading-3 font-twit">
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
            <p className="text-white text-lg font-semibold font-twit">
              Already have an account?
            </p>

            <a href="" className="">
              <div className=" flex  rounded-full w-[300px] h-10 justify-center outline  outline-1 outline-gray-500  mt-4 bg-[#1A8CD8] bg-opacity-0 hover:bg-opacity-10 ">
                <p className="font-bold text-md text-[#1A8CD8]   my-auto font-twit">
                  Sign in
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <footer className="mt-2">
        <div className="h-16 ">
          <ul className="flex justify-evenly mx-12">
            {list.map((myList) => (
              <li className="text-gray-500 text-[13px] mt-2 tracking-normal leading-3 font-twit cursor-pointer font-normal hover:underline ">
                {myList}
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-2">
            <p className=" text-gray-500 text-[13px] mt-1 tracking-normal leading-3 font-normal font-twit">
              © 2023 X Corp.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Signup;
