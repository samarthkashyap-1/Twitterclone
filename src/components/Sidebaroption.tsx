// import React from "react";


const Sidebaroption:React.FC<any> =({Icon,text})=>{
    return (
      <button >

      <div className="flex justify-start cursor-pointer  gap-6 w-fit  hover:bg-opacity-50 bg-gray-700 bg-opacity-0 h-12 rounded-full transition-all">
        <Icon className="scale-125 text-white mt-3  ml-4" />
        <h2 className="text-lg font-semibold text-white mt-2.5 mr-5">
          {text}
        </h2>
      </div>
      </button>
    );
}
export default Sidebaroption;