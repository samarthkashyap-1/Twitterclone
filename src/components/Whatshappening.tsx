import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function Whatshappening() {

  const list = [
    "About",
    "Help Center",
    "Terms of Service",
    "more..."
    
  ];
  return (
    <div>
      <div className="flex justify-center  flex-col rounded-2xl pt-3 gap-1 bg-[#202327] box-border">
        <div>
          <h1 className="text-xl ml-1 font-twitnor text-white px-3">
            What's Happening
          </h1>
        </div>

        <div className="flex justify-start hover:bg-[#2b2f34] px-3 cursor-pointer">
          <div className="flex justify-start w-1/2  flex-col my-3 gap-0.5">
            <p className="text-gray-400 text-xs">Trending in India</p>
            <h1 className="text-base ml-1 font-twitnor text-white">#EyeFlu</h1>
            <p className="text-gray-400 text-xs">100.6 K Tweets</p>
          </div>
          <div className="mt-1 w-1/2 flex justify-end">
            <MoreHorizIcon className="text-gray-400 hover:text-[#1A8CD8] rounded-full bg-[#1A8CD8] bg-opacity-0 hover:bg-opacity-20 cursor-pointer transition-all" />
          </div>
        </div>

        <div className="flex  hover:bg-[#2b2f34] px-3 cursor-pointer overflow-hidden">
          <div className="flex justify-start w-1/2  flex-col my-3 gap-0.5">
            <p className="text-gray-400 text-xs">Science - Trending</p>
            <h1 className="text-base ml-1 font-twitnor text-white">#UFO</h1>
            <p className="text-gray-400 text-xs">652.2 K Tweets</p>
          </div>
          <div className="mt-1 w-1/2 flex justify-end">
            <MoreHorizIcon className="text-gray-400 hover:text-[#1A8CD8] rounded-full bg-[#1A8CD8] bg-opacity-0 hover:bg-opacity-20 cursor-pointer transition-all" />
          </div>
        </div>

        <div className="flex  hover:bg-[#2b2f34] px-3 cursor-pointer">
          <div className="flex justify-start w-1/2  flex-col my-3 gap-0.5">
            <p className="text-gray-400 text-xs">Trending in Politics</p>
            <h1 className="text-base ml-1 font-twitnor text-white">
              Rahul Gandhi
            </h1>
            <p className="text-gray-400 text-xs">35.9 K Tweets</p>
          </div>
          <div className="mt-1 w-1/2 flex justify-end">
            <MoreHorizIcon className="text-gray-400 hover:text-[#1A8CD8] rounded-full bg-[#1A8CD8] bg-opacity-0 hover:bg-opacity-20 cursor-pointer transition-all" />
          </div>
        </div>

        <div className="flex  hover:bg-[#2b2f34] px-3 cursor-pointer ">
          <div className="flex justify-start w-1/2 flex-col my-3 gap-0.5">
            <p className="text-gray-400 text-xs">Politics - Trending</p>
            <h1 className="text-base ml-1 font-twitnor text-white">
              #MainpurVoilence
            </h1>
            <p className="text-gray-400 text-xs">120.6 K Tweets</p>
          </div>
          <div className="mt-1  w-1/2 flex justify-end">
            <MoreHorizIcon className="text-gray-400 hover:text-[#1A8CD8] rounded-full bg-[#1A8CD8] bg-opacity-0 hover:bg-opacity-20 cursor-pointer transition-all" />
          </div>
        </div>

        <div className="flex justify-start hover:bg-[#2b2f34] px-3 cursor-pointer rounded-b-2xl">
          <div className="flex justify-center flex-col my-3 gap-0.5">
            <p className="text-blue-500 text-base">Show More</p>
          </div>
        </div>
      </div>

      <div className="h-16">
        <ul className="flex justify-evenly">
          {list.map((myList) => (
            <li className="text-gray-500 text-xs mt-2 cursor-pointer hover:underline ">
              {myList}
            </li>
          ))}
          <li className="text-gray-500 text-xs mt-2 cursor-pointer hover:underline ">
            © 2023 X Corp.
          </li>
        </ul>
      </div>
    </div>
  );
}
