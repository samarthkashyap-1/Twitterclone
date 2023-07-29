import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Trendingdata: React.FC<any> = ({Trend,Topic,Tweetamt}) =>{
  return (
    <div className="flex justify-start  hover:bg-[#2b2d30] px-3 cursor-pointer">
      <div className="flex justify-start w-1/2  flex-col my-3 gap-0.5">
        <p className="text-gray-400 text-xs">{Trend}</p>
        <h1 className="text-base font-twitnor text-white">#{Topic}</h1>
        <p className="text-gray-400 text-xs">{Tweetamt} {" "}Tweet</p>
      </div>
      <div className="mt-1 w-1/2 flex justify-end transition-all">
        <MoreHorizIcon className="text-gray-500 hover:text-[#1A8CD8] rounded-full bg-[#1A8CD8] bg-opacity-0 hover:bg-opacity-10 cursor-pointer " />
      </div>
    </div>
  );
}
export default Trendingdata;