const HomeHeader:React.FC<any>=({userdata})=>{
    return (
      <div className="border-y-[1px] w-[38rem] sm:w-screen border-gray-700 bg-transparent">
        <div className="text-white">
          <div className="h-12 p-3  sm:flex sm:p-2  ml-1">
            <img
              src={userdata.picture}
              className="w-8 h-8  sm:block hidden item-start rounded-full"
              alt=""
            />
            <h1 className="text-white text-xl opacity-90 font-twitnor sm:ml-[34%] font-semibold">
              Home
            </h1>
          </div>
          <div className="flex h-14 sm:justify-center">
            <div className="w-[19rem] flex justify-center hover:bg-gray-900 transition-all cursor-pointer">
              <button className="font-bold border-b-4 bor border-[#1A8CD8]">
                For you
              </button>
            </div>
            <div className="w-[19rem] flex justify-center hover:bg-gray-900 transition-all cursor-not-allowed">
              <button className="font-bold cursor-not-allowed">
                Following
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default HomeHeader;