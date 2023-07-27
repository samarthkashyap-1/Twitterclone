function HomeHeader(){
    return (
      <div className="border-y-[1px] w-[38rem] border-gray-700 bg-transparent">
        <div className="text-white">
          <div className="h-12 p-3 ml-1">
            <h1 className="text-white text-xl opacity-90 font-twitnor font-semibold">
              Home
            </h1>
          </div>
          <div className="flex h-14 ">
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