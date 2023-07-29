import React from "react";
import Getverified from "./Getverified";
import SearchbarWid from "./SearchbarWid";
import Whatshappening from "./Whatshappening";

const Widgets:React.FC<any> = ({whattoshow})=> {
  const list = [
    "About",
    "Help Center",
    "Terms of Service",
    "Cookie Policy",
    "Accessibility",
    "Ads info",
    "more...",
  ];
  return (
    <div className=" fixed border-l-[1px] border-gray-700 h-screen w-1/4">
      <div className="flex justify-center flex-col ml-7 gap-5">
        {whattoshow != "/explore" && <SearchbarWid />}
        <div className="mt-2">
          <Getverified />
        </div>
        {whattoshow != "/explore" && <Whatshappening />}
      </div>
      <div className="h-16 ml-6 mt-2 p-2">
        <ul className="flex justify-evenly flex-wrap gap-0.5">
          {list.map((myList) => (
            <li className="text-gray-500 text-sm cursor-pointer hover:underline ">
              {myList}
            </li>
          ))}
          <li className="text-gray-500 text-sm cursor-pointer hover:underline ">
            © 2023 X Corp.
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Widgets;
