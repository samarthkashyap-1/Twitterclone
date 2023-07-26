// import React from "react";


function Sidebaroption ({Icon,text}){
    return (
      <div className="flex justify-start cursor-pointer  gap-6 w-fit  hover:bg-opacity-50 bg-gray-700 bg-opacity-0 h-12 rounded-full transition-all">
        <Icon className="scale-125 text-white mt-3  ml-4" />
        <h2 className="text-lg font-twitnor text-white font-thin mt-2.5 mr-5">
          {text}
        </h2>
      </div>
    );
}
export default Sidebaroption;