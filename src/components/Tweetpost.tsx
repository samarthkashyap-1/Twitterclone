import VerifiedIcon from "@mui/icons-material/Verified";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

 
const Tweetpost: React.FC<{ post: any}> = ({post}) =>{
    
  return (
    <div className="flex w-[38rem] border-b-[1px] border-gray-600 mt-2 cursor-pointer">
      <div className="w-16 h-16 ">
        <img
          className="scale-90 p-2 text-white rounded-full"
          src={post.logo}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <div className="flex mt-1 gap-1 justify-between h-6 w-[34rem]">
          <div className="flex">
            <p className="text-white text-base  font-medium ">{post.name}</p>
            {post.verify && (
              <VerifiedIcon className="text-[#1A8CD8] scale-75" />
            )}
          <div>
          <p className="text-gray-600 text-base font-medium">
            {post.userhandle} - 2m
          </p>

          </div>
          </div>

          <div className="mr-4">
        
              <MoreHorizIcon className="cursor-pointer  transition-all hover:text-[#1A8CD8] rounded-full bg-[#1A8CD8] bg-opacity-0 hover:bg-opacity-20 text-gray-600" />
            
          </div>
        </div>
        <div className="h-8">
          <h3 className="text-white">
            {post.caption}
            <span className="text-[#1A8CD8]"></span>
          </h3>
        </div>
        <div>
          <div>
            <p className="text-[#1A8CD8]">{post?.link}</p>
          </div>
          <div className=" mt-3">
            <img
              className="rounded-xl h-[30rem] w-[32rem]"
              src={post.img}
              alt=""
            />
          </div>
          <div className="flex justify-between my-2 scale-90 ">
            <div className="flex justify-center group cursor-pointer ">
              <div className="bg-[#1A8CD8] bg-opacity-0 group-hover:bg-opacity-20 rounded-full w-8 h-8 flex justify-center">
                <ChatBubbleOutlineOutlinedIcon className="text-gray-500 scale-90 group-hover:text-[#1A8CD8] mt-1" />
              </div>
              <span className="text-gray-500 ml-2 group-hover:text-[#1A8CD8] mt-1 ">
                {post.comment}
              </span>
            </div>

            <div className="flex justify-center group cursor-pointer">
              <div className="bg-[#01a66f] bg-opacity-0 group-hover:bg-opacity-20 rounded-full w-8 h-8 flex justify-center">
                <SyncOutlinedIcon className="text-gray-500 rotate-45 scale-90 group-hover:text-[#01a66f] mt-1" />
              </div>
              <span className="text-gray-500 ml-2 mt-1 group-hover:text-[#01a66f]">
                {post.retweet}
              </span>
            </div>
            <div className="flex justify-center group cursor-pointer">
              <div className="bg-[#F91880] bg-opacity-0 group-hover:bg-opacity-20 rounded-full w-8 h-8 flex justify-center">
                <FavoriteBorderOutlinedIcon className="text-gray-500 scale-90  group-hover:text-[#F91880] mt-1 " />
              </div>
              <span className="text-gray-500 ml-2 mt-1 group-hover:text-[#F91880] ">
                {post.likes}
              </span>
            </div>
            <div className="flex justify-center group cursor-pointer">
              <div className="bg-[#1A8CD8] bg-opacity-0 group-hover:bg-opacity-20 rounded-full w-8 h-8 flex justify-center">
                <InsertChartOutlinedIcon className="text-gray-500 scale-90 group-hover:text-[#1A8CD8] mt-1" />
              </div>
              <span className="text-gray-500 ml-2 mt-1 group-hover:text-[#1A8CD8]">
                {post.viewed}
              </span>
            </div>
            <div className="flex justify-center group cursor-pointer">
              <div className="bg-[#1A8CD8] bg-opacity-0 group-hover:bg-opacity-20 rounded-full w-8 h-8 flex justify-center">
                <FileUploadOutlinedIcon className="text-gray-500 scale-90 group-hover:text-[#1A8CD8] mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tweetpost;