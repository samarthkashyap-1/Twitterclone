import SearchbarWid from "./SearchbarWid"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function ExploreHeader(){
    return (
      <div className="border-y-[1px] w-[38rem] border-gray-700 bg-transparent">
        <div className="flex h-12 justify-between">
          <div className="w-full ml-5 mr-10">
            <SearchbarWid />
          </div>
          <div className="rounded-full transition-all justify-center flex h-10 w-12 bg-gray-700 bg-opacity-0 hover:bg-opacity-30 mt-2 mr-2">
            <SettingsOutlinedIcon className="text-white mt-2 scale-90 " />
          </div>
        </div>

        <div className="mt-2">
          <div className="flex h-14 justify-around">
            <div className=" text-sm  w-full flex justify-center hover:bg-gray-900 transition-all cursor-pointer">
              <button className="font-bold border-b-4 text-white border-[#1A8CD8]">
                For you
              </button>
            </div>
            <div className=" text-sm w-full flex justify-center hover:bg-gray-900 transition-all cursor-not-allowed">
              <button className=" font-bold text-gray-500 cursor-not-allowed">
                Trending
              </button>
            </div>
            <div className=" text-sm w-full flex justify-center hover:bg-gray-900 transition-all cursor-not-allowed">
              <button className="font-bold text-gray-500 cursor-not-allowed">
                News
              </button>
            </div>
            <div className=" text-sm w-full flex justify-center hover:bg-gray-900 transition-all cursor-not-allowed">
              <button className="font-bold text-gray-500  cursor-not-allowed">
                Sport
              </button>
            </div>
            <div className=" text-sm w-full flex justify-center hover:bg-gray-900 transition-all cursor-not-allowed">
              <button className="font-bold text-gray-500  cursor-not-allowed">
                Entertainment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}